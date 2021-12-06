(ns agent.agent
  (:require [cambium.core :as log]
            [sentry.logger :refer [sentry-task-logger]]
            [agent.errors :as err]
            [clojure.java.shell :as shell]
            [clojure.java.io :refer [delete-file]]
            [agent.clients :as clients]
            [agent.secrets :as secrets]
            [io.grpc.Agent.client :as grpc-client]
            [cognitect.aws.client.api :as aws]
            [cognitect.aws.credentials :as credentials]
            [clj-http.client :as http-client]
            [clojure.data.json :as json]
            [crypto.sign :as crypto]
            [backoff.time :as backoff]
            [clojure.walk :refer [keywordize-keys]]
            [clostache.parser :as parser]
            [tracer.honeycomb :refer [with-tracing
                                      with-tracing-end]])
  (:import java.io.File))

(defn- filter-optional-shell-args
  "Returns a vector of arguments filtering for non empty values.
  Bare arguments are accepted passing values as true, e.g.:

  (filter-optional-shell-args {-H 127.0.0.1 -W true})
  >>> [-H 127.0.0.1 -W]"
  [map-args]
  (remove true?
          (into [] (apply concat
                          (filter
                           #(not (clojure.string/blank?
                                  (str (second %))))
                           map-args)))))

(def sh-bash
  (fn [task] (shell/sh "gosu" "runops" "bash"
                       :in (:script task)
                       :env (assoc (clojure.walk/stringify-keys (:secrets task))
                                   :PATH (System/getenv "PATH")))))

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
                       "--default-character-set=utf8"
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
  (fn [task] (shell/sh "psql"
                       "-A"
                       (format "-F%s" (or (:FIELD_SEPARATOR (:secrets task)) "\t"))
                       "-h" (:PG_HOST (:secrets task))
                       "-U" (:PG_USER (:secrets task))
                       "-d" (:PG_DB (:secrets task))
                       "-p" (str (or (:PG_PORT (:secrets task)) "5432"))
                       "-v" "ON_ERROR_STOP=1"
                       :env {"PGPASSWORD" (:PG_PASS (:secrets task))
                             "PATH" (System/getenv "PATH")}
                       :in (:script task))))

(def sh-postgres-csv
  (fn [task] (shell/sh "psql"
                       "-A"
                       (format "-F%s" (or (:FIELD_SEPARATOR (:secrets task)) ","))
                       "-h" (:PG_HOST (:secrets task))
                       "-U" (:PG_USER (:secrets task))
                       "-d" (:PG_DB (:secrets task))
                       "-p" (str (or (:PG_PORT (:secrets task)) "5432"))
                       "-v" "ON_ERROR_STOP=1"
                       :env {"PGPASSWORD" (:PG_PASS (:secrets task))
                             "PATH" (System/getenv "PATH")}
                       :in (:script task))))

(defn sh-mssql [task]
  (let [secrets (:secrets task)
        field-separator (:FIELD_SEPARATOR secrets)
        field-separator? (not (clojure.string/blank? field-separator))]
    (apply shell/sh (into ["sqlcmd" "-b"
                           "-S" (:MSSQL_CONNECTION_URI secrets)
                           "-U" (:MSSQL_USER secrets)
                           "-P" (:MSSQL_PASS secrets)
                           "-d" (:MSSQL_DB secrets)
                           "-Q" (:script task)]
                          (filter-optional-shell-args
                           {"-s" field-separator
                            "-h" (when field-separator? "-1")
                            "-W" (when field-separator? true)})))))

(def sh-python
  (fn [task] (shell/sh "python3"
                       :in (:script task)
                       :env (assoc (clojure.walk/stringify-keys (:secrets task))
                                   :PATH (System/getenv "PATH")))))

(defn sh-node [task]
  (shell/sh "node"
            :in (:script task)
            :env (assoc (clojure.walk/stringify-keys (:secrets task))
                        :PATH (System/getenv "PATH")
                        :NODE_PATH "/usr/local/lib/node_modules/")))

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

(defn- aws-ecs-exec
  "Execute commands in an ECS container, to use this function
  the AWS command line and AWS Session Manager Plugin must be installed.
  See: https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html"
  [command task]
  (let [secrets (:secrets task)]
    ;; https://github.com/aws/amazon-ssm-agent/issues/354#issuecomment-817274498
    ;; Non silent debug output will be show along with the stdout:
    ;; https://github.com/aws/amazon-ssm-agent/issues/358
    (shell/sh "unbuffer" "aws" "ecs" "execute-command" "--interactive"
              "--cluster" (:ECS_CLUSTER secrets)
              "--task" (get-in task [:runtime-args :ecs-task-arn])
              "--container" (:ECS_CONTAINER secrets)
              "--command" command
              :env {"PATH" (System/getenv "PATH")
                    "HOME" (System/getenv "HOME") ;; required by unbuffer
                    "AWS_ACCESS_KEY_ID" (:ECS_AWS_ACCESS_KEY_ID secrets)
                    "AWS_SECRET_ACCESS_KEY" (:ECS_AWS_SECRET_ACCESS_KEY secrets)
                    "AWS_REGION" (:ECS_AWS_REGION secrets)})))

(defn- sh-rails-console-ecs [task]
  (let [base64-script (-> (java.util.Base64/getEncoder)
                          (.encodeToString (.getBytes (str (:script task)))))
        ;; pass the script as base64 and decode inside the container
        ;; which will prevent character escaping issues. Rails was used to no rely
        ;; on local dependencies tools like base64.
        ecs-command (format
                     (str "/bin/sh -c \""
                          (when (get-in task [:secrets :ECS_DEBUG]) "set -x; ")
                          "DISABLE_SPRING=1 rails runner 'require \"'\"base64\"'\";"
                          "File.write(\"'\"/tmp/runops-script\"'\", Base64.decode64(\"'\"%s\"'\"))'"
                          "&& DISABLE_SPRING=1 rails runner /tmp/runops-script"
                          "\"")
                     base64-script)]
    (aws-ecs-exec ecs-command task)))

(def custom-command-tmpl
  "
if [ -z \"$1\" ]; then
    exec {{{COMMAND}}}
else
    exec {{{COMMAND}}} < $1
fi")

(defn- rm-tmp-file [tmp-file]
  (try (delete-file tmp-file)
       (catch Exception _ nil)))

(defn- sh-custom-command [task]
  (let [custom-command (parser/render (str "{{=[[ ]]=}}" (:custom-command task))
                                      (merge {:SCRIPT (:script task)} (:secrets task)))
        custom-command-script (parser/render custom-command-tmpl {:COMMAND custom-command})
        custom-command-file (format "/tmp/task-script-%s.sh" (:id task))
        custom-command-stdin-file (format "/tmp/task-script-%s.stdin" (:id task))
        _ (when (:stdin-input task)
            (spit custom-command-stdin-file (:script task)))
        _ (spit custom-command-file custom-command-script)
        outcome (if (true? (:stdin-input task))
                  (shell/sh "gosu" "runops" "bash" custom-command-file custom-command-stdin-file
                            :env (merge {"PATH" (System/getenv "PATH")}
                                        (:secrets task)))
                  (shell/sh "gosu" "runops" "bash" custom-command-file
                            :env (merge {"PATH" (System/getenv "PATH")}
                                        (:secrets task))))]
    (doall (map rm-tmp-file [custom-command-file custom-command-stdin-file]))
    outcome))

(def commands
  {:bash              sh-bash
   :hashicorp-vault   sh-hashicorp-vault
   :k8s               sh-k8s
   :k8s-apply         sh-k8s-apply
   :k8s-exec          sh-k8s-exec
   :mongodb           sh-mongo
   :mysql             sh-mysql
   :mysql-csv         sh-mysql-csv
   :node              sh-node
   :postgres          sh-postgres
   :postgres-csv      sh-postgres-csv
   :sql-server        sh-mssql
   :python            sh-python
   :rails             sh-rails
   :rails-console     sh-rails-console
   :rails-console-k8s sh-rails-console-k8s
   :rails-console-ecs sh-rails-console-ecs})

(defmulti webhook (fn [task] (:mode task)))
(defmethod webhook :grpc [task]
  (log/info (format "Starting task webhook via gRPC for task id [%s] with status [%s]" (:id task) (:status task)))
  (try
    (let [res (deref (grpc-client/Webhook (clients/grpc-client) (dissoc task :mode))
                     (backoff/sec->ms 10) nil)]
      (log/info {:task-id (:id task) :webhook-timeout (empty? res)} "End of webhook call via gRPC."))
    [nil task]
    (catch Exception e
      (log/error (format "Failed to run webhook for task id [%s] with error: %s" (:id task) e))
      (sentry-task-logger e task "failed to perform webhook")
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
      (sentry-task-logger e task "failed to perform webhook")
      [nil "webhook failed"])))

(defn succeed-task-with-message [task message]
  (webhook {:id (:id task) :status "success" :logs message :mode (:mode task)}))

(defn fail-task-with-message [task message]
  (webhook {:id (:id task) :status "failure" :logs message :mode (:mode task)}))

(declare run-task
         validate-user-token
         parse-command
         lock-task
         get-secrets
         add-secrets-from-mapping
         validate-secrets
         parse-custom-command
         render-script
         fetch-runtime-args
         run-command)

(defn run-task [task]
  (err/err->> task
              (with-tracing validate-user-token [:run-agent-task])
              (with-tracing parse-command [:run-agent-task :parse-command])
              (with-tracing parse-custom-command [:run-agent-task :parse-custom-command]
                {:custom-command (not (clojure.string/blank? (:custom-command task)))})
              (with-tracing lock-task [:run-agent-task :lock-task])
              (with-tracing get-secrets [:run-agent-task :get-secrets])
              (with-tracing add-secrets-from-mapping [:run-agent-task :add-secrets-from-mapping])
              (with-tracing validate-secrets [:run-agent-task :validate-secrets])
              (with-tracing render-script [:run-agent-task :render-script])
              (with-tracing fetch-runtime-args [:run-agent-task :fetch-runtime-args])
              (with-tracing run-command [:run-agent-task (keyword (:type task))])
              (with-tracing-end)))

(defn validate-user-token [task]
  (if-not
   (:jwk-verify task) [task nil]
   (try
     (log/info (crypto/verify-sig (get task :token "") (:well-known-jwks task))
               "user validated with success!")
     [task nil]
     (catch Exception e
       (let [jwk-kids (->> (get-in task [:well-known-jwks :keys])
                           (map :kid)
                           (clojure.string/join ","))]
         (log/warn {:task-id (:id task) :jwk-kids jwk-kids} e
                   "failed to validate user jwt token, slack tasks are disabled for this agent.")
         (sentry-task-logger e task (format "Failed to validate token with jwk kid(s) [%s], local-timestamp [%s]. Slack tasks are disabled for this agent."
                                            jwk-kids
                                            (quot (System/currentTimeMillis) 1000)))
         (fail-task-with-message task "slack tasks are disabled, try to run it again in the webapp/cli or contact the support."))))))

(defn parse-command [task]
  (if-let [command ((keyword (:type task)) commands)]
    [(assoc task :command command) nil]
    (do (log/warn (format "invalid task type [%s]" (:type task)))
        (sentry-task-logger task "invalid task type")
        (fail-task-with-message task (format "invalid task type [%s]" (:type task))))))

(defn- parse-custom-command [task]
  [(assoc task
          :stdin-input (some #(= (keyword (:type task)) %) [:bash :python
                                                            :postgres :postgres-csv
                                                            :mysql :mysql-csv])
          :command (or (when-not (clojure.string/blank? (:custom-command task))
                         sh-custom-command) (:command task))) nil])

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
      (sentry-task-logger e task "failed to lock task")
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
          secret-mapping (:secret-mapping task)
          secret-mapping (keywordize-keys
                          (json/read-str
                           (if (clojure.string/blank? secret-mapping)
                             "{}" secret-mapping)))]
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
        (sentry-task-logger e task "failed reading secret-mapping config")
        (fail-task-with-message task msg-err)))))

(defmulti validate-secrets (fn [task] (:type task)))
(declare k8s-validation
         mongodb-validation
         mysql-validation
         postgres-validation
         mssql-validation
         vault-validation
         rails-console-k8s-validation
         rails-console-ecs-validation)

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

(defmethod validate-secrets "sql-server" [task]
  (mssql-validation task))

(defmethod validate-secrets "hashicorp-vault" [task]
  (vault-validation task))

(defmethod validate-secrets "rails-console-k8s" [task]
  (rails-console-k8s-validation task))

(defmethod validate-secrets "rails-console-ecs" [task]
  (rails-console-ecs-validation task))

(defn render-script [task]
  [(assoc task :script (parser/render (:script task) (:secrets task))) nil])

(defn fetch-runtime-args [task]
  (case (:type task)
    "rails-console-ecs"
    (let [secrets (:secrets task)
          _ (log/info "fetching ECS Task ID")
          ecs-client (aws/client {:api :ecs
                                  :region (:ECS_AWS_REGION secrets)
                                  :credentials-provider
                                  (credentials/basic-credentials-provider
                                   {:access-key-id (:ECS_AWS_ACCESS_KEY_ID secrets)
                                    :secret-access-key (:ECS_AWS_SECRET_ACCESS_KEY secrets)})})
          _ (aws/validate-requests ecs-client true) ; validate wrong arguments
          ecs-response (aws/invoke ecs-client {:op :ListTasks
                                               :request {:serviceName (:ECS_SERVICE_NAME secrets)
                                                         :cluster (:ECS_CLUSTER secrets)
                                                         :maxResults 1}})
          ecs-task-arn (first (:taskArns ecs-response))
          non-valid-ecs-task (or (contains? ecs-response :cognitect.anomalies/category)
                                 (empty? ecs-task-arn))]
      (if non-valid-ecs-task
        (let [msg-err (if (contains? ecs-response :cognitect.anomalies/category)
                        (format "failed to obtain ECS Task ID, type=%s, message=%s, anomaly=%s"
                                (:__type ecs-response)
                                (:message ecs-response)
                                (name (:cognitect.anomalies/category ecs-response)))
                        (format "failed to obtain ECS Task ID for service=%s, cluster=%s, region=%s"
                                (:ECS_SERVICE_NAME secrets)
                                (:ECS_CLUSTER secrets)
                                (:ECS_AWS_REGION secrets)))]
          (log/warn msg-err)
          (fail-task-with-message task msg-err))
        [(assoc task :runtime-args {:ecs-task-arn ecs-task-arn}) nil]))
    [task nil]))

(defn run-command [task]
  (try
    (log/info {:custom-command (= (:command task) sh-custom-command)}
              (format "Start running command for task id: %s" (:id task)))
    (let [outcome ((:command task) task)
          outcome-msg (if-not (empty? (:out outcome)) (:out outcome) "")]
      (if (= 0 (:exit outcome))
        (succeed-task-with-message task outcome-msg)
        (fail-task-with-message task (if-not (empty? (:err outcome)) (:err outcome) outcome-msg))))
    (catch Exception e
      (log/error (format "shell command failed for task id %s with error: %s" (:id task) e))
      (sentry-task-logger e task "shell command failed")
      (fail-task-with-message task "agent failed to run command"))))


;; secrets validations
(defn k8s-validation [task]
  (let [secrets (:secrets task)]
    (if (empty? (:KUBE_CONFIG_DATA secrets))
      (do (log/warn "K8s type requires KUBE_CONFIG_DATA secret")
          (sentry-task-logger nil task "K8s type requires KUBE_CONFIG_DATA secret")
          (fail-task-with-message task "K8s type requires KUBE_CONFIG_DATA secret"))
      [task nil])))

(defn mongodb-validation [task]
  (let [secrets (:secrets task)]
    (if (empty? (:MONGO_CONNECTION_URI secrets))
      (let [msg-err "Mongodb type requires all the following secrets: :MONGO_CONNECTION_URI < protocol :// user:pass  @ host:port / database ? parameters >"]
        (log/warn msg-err)
        (sentry-task-logger task msg-err)
        (fail-task-with-message task msg-err))
      [task nil])))

(defn mysql-validation [task]
  (let [secrets (:secrets task)]
    (if (or (empty? (:MYSQL_HOST secrets))
            (empty? (:MYSQL_USER secrets))
            (empty? (:MYSQL_PASS secrets))
            (empty? (:MYSQL_DB secrets)))
      (let [msg-err "Mysql type requires all the following secrets: MYSQL_HOST, MYSQL_USER, MYSQL_PASS and MYSQL_DB"]
        (log/warn msg-err)
        (sentry-task-logger task msg-err)
        (fail-task-with-message task msg-err))
      [task nil])))

(defn postgres-validation [task]
  (let [secrets (:secrets task)]
    (if (or (empty? (:PG_HOST secrets))
            (empty? (:PG_USER secrets))
            (empty? (:PG_PASS secrets))
            (empty? (:PG_DB secrets)))
      (let [msg-err "Postgres type requires all the following secrets: PG_HOST, PG_USER, PG_PASS and PG_DB"]
        (log/warn msg-err)
        (sentry-task-logger task msg-err)
        (fail-task-with-message task msg-err))
      [task nil])))

(defn mssql-validation [task]
  (let [secrets (:secrets task)]
    (if (or (empty? (:MSSQL_CONNECTION_URI secrets))
            (empty? (:MSSQL_USER secrets))
            (empty? (:MSSQL_PASS secrets))
            (empty? (:MSSQL_DB secrets)))
      (let [msg-err "sql-server type requires all the following secrets: MSSQL_CONNECTION_URI, MSSQL_USER, MSSQL_PASS and MSSQL_DB"]
        (log/warn msg-err)
        (sentry-task-logger task msg-err)
        (fail-task-with-message task msg-err))
      [task nil])))

(defn rails-console-k8s-validation [task]
  (let [secrets (:secrets task)]
    (if (or (empty? (:KUBE_CONFIG_DATA secrets))
            (empty? (:NAMESPACE secrets))
            (empty? (:DEPLOYMENT secrets)))
      (let [msg-err "Rails-console-k8s type requires KUBE_CONFIG_DATA, NAMESPACE and DEPLOYMENT secret"]
        (log/warn msg-err)
        (sentry-task-logger task msg-err)
        (fail-task-with-message task msg-err))
      [task nil])))

(defn rails-console-ecs-validation [task]
  (let [secrets (:secrets task)]
    (if (or (empty? (:ECS_CLUSTER secrets))
            (empty? (:ECS_SERVICE_NAME secrets))
            (empty? (:ECS_CONTAINER secrets))
            (empty? (:ECS_AWS_ACCESS_KEY_ID secrets))
            (empty? (:ECS_AWS_SECRET_ACCESS_KEY secrets))
            (empty? (:ECS_AWS_REGION secrets)))
      (let [msg-err "Rails-console-k8s type requires ECS_CLUSTER, ECS_SERVICE_NAME, ECS_CONTAINER, ECS_AWS_ACCESS_KEY_ID, ECS_AWS_SECRET_ACCESS_KEY and ECS_AWS_REGION secret"]
        (log/warn msg-err)
        (sentry-task-logger task msg-err)
        (fail-task-with-message task msg-err))
      [task nil])))

(defn vault-validation [task]
  (let [secrets (:secrets task)]
    (if (or (empty? (:VAULT_ADDR secrets))
            (empty? (:VAULT_TOKEN secrets)))
      (let [msg-err "Vault type requires all the following secrets: VAULT_ADDR and VAULT_TOKEN"]
        (log/warn msg-err)
        (sentry-task-logger task msg-err)
        (fail-task-with-message task msg-err))
      [task nil])))
