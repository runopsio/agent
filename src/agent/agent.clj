(ns agent.agent
  (:require [cambium.core :as log]
            [agent.errors :as err]
            [clojure.java.shell :as shell]
            [agent.clients :as clients]
            [agent.secrets :as secrets]
            [io.grpc.Agent.client :as grpc-client]
            [clj-http.client :as http-client]
            [clojure.data.json :as json]
            [clojure.walk :refer [keywordize-keys]]
            [clostache.parser :as parser]
            [tracer.honeycomb :refer [with-tracing
                                      with-tracing-end]])
  (:import java.io.File
           io.sentry.Sentry))

(def sh-bash
  (fn [task] (let [args (clojure.string/split (:script task) #" ")]
               (apply shell/sh args))))

(def sh-hashicorp-vault
  (fn [task] (let [script-items (clojure.string/split (:script task) #" ")
                   envs {"VAULT_TOKEN" (:VAULT_TOKEN (:secrets task))}
                   envs (if (:VAULT_NAMESPACE (:secrets task))
                          (assoc envs "VAULT_NAMESPACE" (:VAULT_NAMESPACE (:secrets task)))
                          envs)
                   command-items (apply conj ["vault"] script-items)
                   command-items (conj command-items (format "-address=%s:%s"
                                                             (:VAULT_ADDR (:secrets task))
                                                             (str (or (:VAULT_PORT (:secrets task)) "8200"))))
                   command-items (apply conj command-items [:env envs])
                   sh (apply shell/sh command-items)]
               sh)))

(def sh-k8s
  (fn [task] (let [kube-file (File/createTempFile "task" (str (:id task)))
                   _ (spit kube-file (clients/decode-base64 (:KUBE_CONFIG_DATA (:secrets task))))
                   script-items (clojure.string/split (:script task) #" ")
                   command-items (apply conj ["kubectl" "--kubeconfig" (.getAbsolutePath kube-file)]
                                        script-items)
                   sh (apply shell/sh command-items)]
               (.delete kube-file)
               sh)))

(def sh-k8s-apply
  (fn [task] (let [kube-file (File/createTempFile "task" (str (:id task)))
                   apply-file (File/createTempFile "apply" (str (:id task)))
                   _ (spit kube-file (clients/decode-base64 (:KUBE_CONFIG_DATA (:secrets task))))
                   _ (spit apply-file (:script task))
                   command-items ["kubectl" "--kubeconfig" (.getAbsolutePath kube-file)
                                  "apply" "-f" (.getAbsolutePath apply-file)]
                   sh (apply shell/sh command-items)]
               (.delete kube-file)
               (.delete apply-file)
               sh)))

(def sh-k8s-exec
  (fn [task] (let [kube-file (File/createTempFile "task" (str (:id task)))
                   _ (spit kube-file (clients/decode-base64 (:KUBE_CONFIG_DATA (:secrets task))))
                   script-items (clojure.string/split (:script task) #" ")
                   command-items ["kubectl" "--kubeconfig" (.getAbsolutePath kube-file)
                                  "exec" (first script-items) "--"]
                   command-items (apply conj command-items (rest script-items))
                   sh (apply shell/sh command-items)]
               (.delete kube-file)
               sh)))

(def sh-mongo
  (fn [task] (shell/sh "mongo" (:MONGO_CONNECTION_URI (:secrets task))
                       "--eval" (:script task))))

(def sh-mysql
  (fn [task] (shell/sh "mysql"
                       "-h" (:MYSQL_HOST (:secrets task))
                       "-D" (:MYSQL_DB (:secrets task))
                       "-u" (:MYSQL_USER (:secrets task))
                       "-e" (:script task)
                       "-P" (str (or (:MYSQL_PORT (:secrets task)) "3306"))
                       :env {"MYSQL_PWD" (:MYSQL_PASS (:secrets task))})))

(def sh-mysql-csv
  (fn [task] (let [outcome (sh-mysql task)]
               (if (= 0 (:exit outcome))
                 (shell/sh "sed"
                           (format "s/\\t/%s/g" (or (:FIELD_SEPARATOR (:secrets task)) ","))
                           :in (:out outcome))
                 outcome))))

(def sh-postgres
  (fn [task] (shell/sh "/usr/bin/psql"
                       "-A"
                       (format "-F%s" (or (:FIELD_SEPARATOR (:secrets task)) "\t"))
                       "-h" (:PG_HOST (:secrets task))
                       "-U" (:PG_USER (:secrets task))
                       "-d" (:PG_DB (:secrets task))
                       "-p" (str (or (:PG_PORT (:secrets task)) "5432"))
                       "-v" "ON_ERROR_STOP=1"
                       :env {"PGPASSWORD" (:PG_PASS (:secrets task))}
                       :in (:script task))))

(def sh-postgres-csv
  (fn [task] (shell/sh "/usr/bin/psql"
                       "-A"
                       (format "-F%s" (or (:FIELD_SEPARATOR (:secrets task)) ","))
                       "-h" (:PG_HOST (:secrets task))
                       "-U" (:PG_USER (:secrets task))
                       "-d" (:PG_DB (:secrets task))
                       "-p" (str (or (:PG_PORT (:secrets task)) "5432"))
                       "-v" "ON_ERROR_STOP=1"
                       :env {"PGPASSWORD" (:PG_PASS (:secrets task))}
                       :in (:script task))))

(def sh-python
  (fn [task] (shell/sh "python3"
                       :in (:script task))))

(def sh-rails
  (fn [task] (shell/sh "rails" (:script task))))

(def sh-rails-console
  (fn [task] (shell/sh "rails" "runner" (:script task))))

(def sh-rails-console-k8s
  (fn [task] (let [kube-file (File/createTempFile "task" (str (:id task)))
                   _ (spit kube-file (clients/decode-base64 (:KUBE_CONFIG_DATA (:secrets task))))
                   command-items ["kubectl"
                                  "--kubeconfig" (.getAbsolutePath kube-file)
                                  "exec" "-n" (:NAMESPACE (:secrets task))
                                  (format "deploy/%s" (:DEPLOYMENT (:secrets task)))
                                  "--" "bundle" "exec" "rails" "runner" (:script task)]
                   sh (apply shell/sh command-items)]
               (.delete kube-file)
               sh)))


(def commands
  {:bash              sh-bash
   :hashicorp-vault   sh-hashicorp-vault
   :k8s               sh-k8s
   :k8s-apply         sh-k8s-apply
   :k8s-exec          sh-k8s-exec
   :mongodb           sh-mongo
   :mysql             sh-mysql
   :mysql-csv         sh-mysql-csv
   :postgres          sh-postgres
   :postgres-csv      sh-postgres-csv
   :python            sh-python
   :rails             sh-rails
   :rails-console     sh-rails-console
   :rails-console-k8s sh-rails-console-k8s})

(defmulti webhook (fn [task] (:mode task)))
(defmethod webhook :grpc [task]
  (log/info (format "Starting task webhook via gRPC for task id [%s] with status [%s]" (:id task) (:status task)))
  (try
    @(grpc-client/Webhook (clients/grpc-client) (dissoc task :mode))
    (log/info (format "End of task execution for id [%s]" (:id task)))
    [nil task]
    (catch Exception e
      (log/error (format "Failed to run webhook for task id [%s] with error: %s" (:id task) e))
      [nil "webhook failed"])))

(defmethod webhook :poll [task]
  (log/info (format "Starting task webhook for task id [%s] with status [%s]" (:id task) (:status task)))
  (try
    (http-client/post (format "%s/v1/webhooks" clients/api-url) {:headers {"Content-Type" "application/json"
                                                                           "Authorization" (str "Bearer " clients/token)}
                                                                 :body (json/write-str (dissoc task :mode))})
    (log/info (format "End of task execution for id [%s]" (:id task)))
    [nil task]
    (catch Exception e
      (log/error (format "Failed to perform webhook for task id [%s] with error: %s" (:id task) e))
      (Sentry/captureException e (format "Failed to perform webhook for task id [%s]" (:id task)))
      [nil "webhook failed"])))

(defn succeed-task-with-message [task message]
  (webhook {:id (:id task) :status "success" :logs message :mode (:mode task)}))

(defn fail-task-with-message [task message]
  (webhook {:id (:id task) :status "failure" :logs message :mode (:mode task)}))

(declare run-task
         parse-command
         lock-task
         get-secrets
         add-secrets-from-mapping
         validate-secrets
         render-script
         run-command)

(defn run-task [task]
  (err/err->> task
              (with-tracing parse-command [:run-agent-task])
              (with-tracing lock-task [:run-agent-task :lock-task])
              (with-tracing get-secrets [:run-agent-task :get-secrets])
              (with-tracing add-secrets-from-mapping [:run-agent-task :add-secrets-from-mapping])
              (with-tracing validate-secrets [:run-agent-task :validate-secrets])
              (with-tracing render-script [:run-agent-task :render-script])
              (with-tracing-end)
              run-command))

(defn parse-command [task]
  (if-let [command ((keyword (:type task)) commands)]
    [(assoc task :command command) nil]
    (do (log/warn (format "invalid task type [%s]" (:type task)))
        (Sentry/captureMessage (format "invalid task type [%s]" (:type task)))
        (fail-task-with-message task (format "invalid task type [%s]" (:type task))))))

(defmulti lock-task (fn [task] (:mode task)))
(defmethod lock-task :grpc [task]
  [task nil])

(defmethod lock-task :poll [task]
  (log/info (format "Locking task id [%s]" (:id task)))
  (try
    (let [response (http-client/post (format "%s/v1/tasks/%s/lock" clients/api-url (:id task))
                                     {:headers {"Authorization" (str "Bearer " clients/token)}
                                      :throw-exceptions false})]
      (if (http-client/success? response)
        [task nil]
        [nil "task not found"]))
    (catch Exception e
      (log/error (format "failed to lock task id [%s] with error: %s" (:id task) e))
      (Sentry/captureException e (format "failed to lock task id [%s]" (:id task)))
      [nil "failed to lock task"])))

(defn get-secrets [task]
  (let [result (secrets/fetch task)
        with-secrets-task (first result)]
    (if with-secrets-task
      [with-secrets-task nil]
      (fail-task-with-message task (second result)))))

(defn- add-secrets-from-mapping [task]
  (try
    (let [secrets (:secrets task)
          secret-mapping (keywordize-keys (json/read-str
                                           (or (:secret-mapping task) "{}")))]
      [(assoc task :secrets
              (into secrets
                    (map (fn [[k v]]
                           (when-let  [secret-val (get secrets (keyword v))]
                             {k secret-val}))
                         secret-mapping))) nil])
    (catch Exception e
      (let [msg-err (format "failed reading secret-mapping config. task=%s, mapping=%s, err=%s"
                            (:id task) (:secret-mapping task) (.getMessage e))]
        (log/warn msg-err)
        (Sentry/captureMessage msg-err)
        (fail-task-with-message task msg-err)))))

(defmulti validate-secrets (fn [task] (:type task)))
(declare k8s-validation
         mongodb-validation
         mysql-validation
         postgres-validation
         vault-validation
         rails-console-k8s-validation)

(defmethod validate-secrets :default [task]
  [task nil])

(defmethod validate-secrets "k8s" [task]
  (k8s-validation task))

(defmethod validate-secrets "k8s-exec" [task]
  (k8s-validation task))

(defmethod validate-secrets "k8s-apply" [task]
  (k8s-validation task))

(defmethod validate-secrets "mongodb" [task]
  (mongodb-validation task))

(defmethod validate-secrets "mysql" [task]
  (mysql-validation task))

(defmethod validate-secrets "mysql-csv" [task]
  (mysql-validation task))

(defmethod validate-secrets "postgres" [task]
  (postgres-validation task))

(defmethod validate-secrets "postgres-csv" [task]
  (postgres-validation task))

(defmethod validate-secrets "hashicorp-vault" [task]
  (vault-validation task))

(defmethod validate-secrets "rails-console-k8s" [task]
  (rails-console-k8s-validation task))

(defn render-script [task]
  [(assoc task :script (parser/render (:script task) (:secrets task))) nil])

(defn run-command [task]
  (try
    (log/info (format "Start running command for task id: %s" (:id task)))
    (let [outcome ((:command task) task)
          outcome-msg (if-not (empty? (:out outcome)) (:out outcome) "")]
      (if (= 0 (:exit outcome))
        (succeed-task-with-message task outcome-msg)
        (fail-task-with-message task (if-not (empty? (:err outcome)) (:err outcome) outcome-msg))))
    (catch Exception e
      (log/error (format "shell command failed for task id %s with error: %s" (:id task) e))
      (Sentry/captureException e (format "shell command failed for task id %s" (:id task)))
      (fail-task-with-message task "server error"))))


;; secrets validations
(defn k8s-validation [task]
  (let [secrets (:secrets task)]
    (if (empty? (:KUBE_CONFIG_DATA secrets))
      (do (log/warn "K8s type requires KUBE_CONFIG_DATA secret")
          (Sentry/captureMessage "K8s type requires KUBE_CONFIG_DATA secret")
          (fail-task-with-message task "K8s type requires KUBE_CONFIG_DATA secret"))
      [task nil])))

(defn mongodb-validation [task]
  (let [secrets (:secrets task)]
    (if (empty? (:MONGO_CONNECTION_URI secrets))
      (do (log/warn "Mongodb type requires all the following secrets: :MONGO_CONNECTION_URI < protocol :// user:pass  @ host:port / database ? parameters >")
          (Sentry/captureMessage "Mongodb type requires all the following secrets: :MONGO_CONNECTION_URI < protocol :// user:pass  @ host:port / database ? parameters >")
          (fail-task-with-message task "Mongodb type requires all the following secrets: :MONGO_CONNECTION_URI < protocol :// user:pass  @ host:port / database ? parameters >"))
      [task nil])))

(defn mysql-validation [task]
  (let [secrets (:secrets task)]
    (if (or (empty? (:MYSQL_HOST secrets))
            (empty? (:MYSQL_USER secrets))
            (empty? (:MYSQL_PASS secrets))
            (empty? (:MYSQL_DB secrets)))
      (do (log/warn "Mysql type requires all the following secrets: MYSQL_HOST, MYSQL_USER, MYSQL_PASS and MYSQL_DB")
          (Sentry/captureMessage "Mysql type requires all the following secrets: MYSQL_HOST, MYSQL_USER, MYSQL_PASS and MYSQL_DB")
          (fail-task-with-message task "Mysql type requires all the following secrets: MYSQL_HOST, MYSQL_USER, MYSQL_PASS and MYSQL_DB"))
      [task nil])))

(defn postgres-validation [task]
  (let [secrets (:secrets task)]
    (if (or (empty? (:PG_HOST secrets))
            (empty? (:PG_USER secrets))
            (empty? (:PG_PASS secrets))
            (empty? (:PG_DB secrets)))
      (do (log/warn "Postgres type requires all the following secrets: PG_HOST, PG_USER, PG_PASS and PG_DB")
          (Sentry/captureMessage "Postgres type requires all the following secrets: PG_HOST, PG_USER, PG_PASS and PG_DB")
          (fail-task-with-message task "Postgres type requires all the following secrets: PG_HOST, PG_USER, PG_PASS and PG_DB"))
      [task nil])))

(defn rails-console-k8s-validation [task]
  (let [secrets (:secrets task)]
    (if (or (empty? (:KUBE_CONFIG_DATA secrets))
            (empty? (:NAMESPACE secrets))
            (empty? (:DEPLOYMENT secrets)))
      (do (log/warn "Rails-console-k8s type requires KUBE_CONFIG_DATA, NAMESPACE and DEPLOYMENT secret")
          (Sentry/captureMessage "Rails-console-k8s type requires KUBE_CONFIG_DATA, NAMESPACE and DEPLOYMENT secret")
          (fail-task-with-message task "Rails-console-k8s type requires KUBE_CONFIG_DATA, NAMESPACE and DEPLOYMENT secret"))
      [task nil])))

(defn vault-validation [task]
  (let [secrets (:secrets task)]
    (if (or (empty? (:VAULT_ADDR secrets))
            (empty? (:VAULT_TOKEN secrets)))
      (do (log/warn "Vault type requires all the following secrets: VAULT_ADDR and VAULT_TOKEN")
          (Sentry/captureMessage "Vault type requires all the following secrets: VAULT_ADDR and VAULT_TOKEN")
          (fail-task-with-message task "Vault type requires all the following secrets: VAULT_ADDR and VAULT_TOKEN"))
      [task nil])))
