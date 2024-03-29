(ns agent.secrets
  (:require [logger.timbre :as log]
            [logger.sentry :refer [sentry-task-logger sentry-logger]]
            [environ.core :refer [env]]
            [clojure.data.json :as json]
            [clj-http.client :as client]
            [agent.clients :as clients]
            [agent.errors :as err])
  (:import software.amazon.awssdk.services.secretsmanager.model.GetSecretValueRequest))

(defn json->map [str]
  (try
    (let [parsed (-> str
                     json/read-str
                     clojure.walk/keywordize-keys)]
      (if (not (map? parsed))
        [nil "invalid secret 'config': Must be a valid JSON object"]
        [parsed nil]))
    (catch Exception e
      (log/warn (format "invalid secret 'config': Must be a valid JSON object. Error: %s" e))
      (sentry-logger {:message "invalid secret 'config': Must be a valid JSON object"
                      :throwable e})
      [nil "invalid secret 'config': Must be a valid JSON object"])))

(defn parse-task-config
  "This method parses the :config definition from the task
  and associate with the task.
  If :config is null, then an empty map is provided."
  [task]
  (let [config (:config task)
        config (if (empty? config) "{}" config)]
    (err/err->> config
                json->map
                (fn [secrets] [(assoc task :secrets secrets) nil]))))

(defn validate-secret-path [task]
  (if (not (empty? (:secret-path task)))
    [task nil]
    (do (log/warn "missing 'secret_path' config at target")
        [nil "missing 'secret_path' config at target"])))


(defmulti fetch (fn [task] (:secret-provider task)))

;; default
(defmethod fetch :default [task]
  "This method does not use any provider, and expects that the :config key is present in the
  task definition. If not, an empty :secrets will be returned. If the command require any secrets,
  then execution will fail miserably..."
  (log/info (format "Fetching secrets from task config for task id: %s" (:id task)))
  (err/err->> task
              parse-task-config))


;; env-var
(declare get-env-secrets)
(defmethod fetch "env-var" [task]
  (log/info (format "Fetching secrets from env-var for task id: %s" (:id task)))
  (err/err->> task
              validate-secret-path
              get-env-secrets))

(defn get-env-secrets [task]
  (let [secret-path (-> (:secret-path task)
                        clojure.string/lower-case
                        (clojure.string/replace "_" "-")
                        keyword)
        secret-json (env secret-path)]
    (if secret-json
      (err/err->> secret-json
                  json->map
                  (fn [secrets] [(assoc task :secrets secrets) nil]))
      (do (log/error (format "failed to get env-var '%s'" secret-path))
          [nil (format "Secret '%s' not found" secret-path)]))))


;; filesystem
(declare get-filesystem-secret)

(def default-filesystem-location
  "secrets.json")

(defn persist-secret [secret]
  (log/info "Persisting filesystem secrets")
  (try
    (spit default-filesystem-location secret)
    [secret nil]
    (catch Exception e
      (log/error (format "Failed to persist filesystem secrets with error: %s" e))
      [nil "failed to persist filesystem secrets"])))

(defmethod fetch "filesystem" [task]
  (log/info (format "Fetching secrets from filesystem for task id: %s" (:id task)))
  (err/err->> task
              validate-secret-path
              get-filesystem-secret
              (fn[result] [(assoc result :secrets ((keyword (:secret-path task)) (:secrets result)))])))

(defn get-filesystem-secret [task]
  (try
    (if-let [content (slurp default-filesystem-location)]
      (err/err->> content
                  json->map
                  (fn [secrets] [(assoc task :secrets secrets) nil]))
      (do (log/error (format "failed to get filesystem '%s'" (:secret-path task)))
          [nil (format "Failed to read filesystem secret '%s'" (:secret-path task))]))
    (catch Exception e
      (log/error (format "failed to get filesystem '%s' with error %s" (:secret-path task) e))
      (sentry-task-logger e task "Failed to fetch filesystem secrets")
      [nil (format "Failed to read filesystem secret '%s'" (:secret-path task))])))


;; aws
(declare aws-secret-request)

(defmethod fetch "aws" [task]
  (log/info (format "Fetching secrets from AWS for task id: %s" (:id task)))
  (err/err->> task
              validate-secret-path
              aws-secret-request))

(defn aws-secret-request [task]
  (try
    (let [secret-request (-> (GetSecretValueRequest/builder)
                             (.secretId (:secret-path task))
                             .build)
          secret-response (.getSecretValue clients/aws-client secret-request)
          secret-json (.secretString secret-response)]
      (err/err->> secret-json
                  json->map
                  (fn [secrets] [(assoc task :secrets secrets) nil])))
    (catch Exception e
      (log/error (format "Failed to fetch secrets from aws with error: %s" e))
      (sentry-task-logger e task "Failed to fetch aws secrets")
      [nil "failed to fetch aws secrets"])))


;; hashicorp
(def vault-auth-method (System/getenv "VAULT_AUTH_METHOD"))
(def vault-address (System/getenv "VAULT_ADDR"))
(def vault-role (System/getenv "VAULT_ROLE"))
(def vault-auth-path (or (System/getenv "VAULT_AUTH_PATH") "/v1/auth/kubernetes/login"))

(declare get-vault-secrets)

(defmethod fetch "hashicorp/db" [task]
  (log/info (format "Fetching secrets from vault/db for task id: %s" (:id task)))
  (get-vault-secrets task "db"))

(defmethod fetch "hashicorp/kv" [task]
  (log/info (format "Fetching secrets from vault/kv for task id: %s" (:id task)))
  (get-vault-secrets task "kv"))


(declare vault-client-token
         vault-generic-secrets
         format-secrets)

(defn get-vault-secrets [task secret-engine]
  (err/err->> (assoc task :secret-engine secret-engine)
              validate-secret-path
              vault-client-token
              vault-generic-secrets
              format-secrets))


; vault client token
(declare vault-k8s-auth-client-token)

(defn vault-client-token [task]
  (case vault-auth-method
    "kubernetes-account-service" (vault-k8s-auth-client-token task)
    (do (log/error "Invalid VAULT_AUTH_METHOD. Please configure one as environment variable to use vault")
        [nil "invalid VAULT_AUTH_METHOD"])))

(defn vault-k8s-auth-client-token [task]
  (try
    (let [k8s-account-service-jwt (slurp "/var/run/secrets/kubernetes.io/serviceaccount/token")
          vault-auth-response (client/post (format "%s%s" vault-address vault-auth-path)
                                           {:body (json/write-str {:jwt k8s-account-service-jwt
                                                                   :role vault-role})})
          json-response (:body vault-auth-response)]
      (err/err->> json-response
                  json->map
                  (fn [result] [(assoc task :client-token (get-in result [:auth :client_token])) nil])))
    (catch Exception e
      (log/error (format "failed to get Vault client_token (kubernetes account service) with error: %s" e))
      (sentry-task-logger e task "failed to get Vault client token")
      [nil "failed to get Vault client token"])))


; vault-generic-secrets
(defn vault-generic-secrets [task]
  (try
    (let [vault-response (client/get (format "%s/v1/%s" vault-address (:secret-path task))
                                     {:headers {:x-vault-token (:client-token task)}})
          json-response (:body vault-response)]
      (err/err->> json-response
                  json->map
                  (fn [secrets] [(assoc task :vault-secrets (:data secrets)) nil])))
    (catch Exception e
      (log/error (format "failed to get Vault generic secrets with error: %s" e))
      [nil "failed to get Vault generic secrets"])))


; format vault secret
(defmulti format-secrets (fn [task] (:secret-engine task)))

(defmethod format-secrets :default [_]
  (log/warn "invalid vault secret engine")
  [nil "invalid vault secret engine"])

(defmethod format-secrets "kv" [task]
  [(assoc task :secrets (get-in task [:vault-secrets :data])) nil])

(declare format-by-db)
(defmethod format-secrets "db" [task]
  (let [username (get-in task [:vault-secrets :username])
        password (get-in task [:vault-secrets :password])]
    (err/err->> (assoc task :username username
                       :password password)
                parse-task-config
                format-by-db)))

(defmulti format-by-db (fn [task] (:type task)))

(defmethod format-by-db :default [task]
  (do (log/warn (format "not mapped vault db type '%s'" (:type task)))
      (sentry-task-logger task "A customer tried to get vault secrets for a not mapped db type")
      [nil (format "not mapped vault db type '%s'" (:type task))]))

(defn merge-user-pass [task keys]
  [(assoc task :secrets (merge (:secrets task) keys)) nil])

(defmethod format-by-db "postgres" [task]
  (merge-user-pass task {:PG_USER (:username task) :PG_PASS (:password task)}))

(defmethod format-by-db "mysql" [task]
  (merge-user-pass task {:MYSQL_USER (:username task) :MYSQL_PASS (:password task)}))

(defmethod format-by-db "mysql-csv" [task]
  (merge-user-pass task {:MYSQL_USER (:username task) :MYSQL_PASS (:password task)}))
