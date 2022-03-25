(ns agent.clients
  (:require [logger.timbre :as log]
            [mount.core :refer [defstate]]
            [environ.core :refer [env]]
            [protojure.grpc.client.providers.http2 :as grpc.http2]
            [backoff.time :as backoff])
  (:import software.amazon.awssdk.services.secretsmanager.SecretsManagerClient))


(def tags (env :tags))
(def token (env :token))
(def api-url (or (System/getenv "API_URL") "https://api.runops.io"))
(def grpc-url (or (System/getenv "GRPC_URL") "https://api.runops.io:8443"))
(def disable-aws-secret-manager (= (System/getenv "AWS_SECRET_MANAGER") "false"))
(def grpc-ssl (Boolean/valueOf (or (System/getenv "GRPC_SSL") "true")))

; gRPC client
(def grpc-client-atom (atom nil))
(defn- grpc-client
  "Returns an active gRPC connection from the atom or
   return nil if the atom is empty or the connection is closed."
  []
  (when-some [conn @grpc-client-atom]
    (if (.isClosed (:session (.context conn)))
      nil
      conn)))
(defn- grpc-client! [c] (reset! grpc-client-atom c))

(defn grpc-conn
  ([] (grpc-conn 1))
  ([attempt]
   (try
     (let [conn (grpc-client)
           conn (if-not conn
                  (deref (grpc.http2/connect
                          {:uri grpc-url
                           :ssl grpc-ssl
                           :metadata ["Authorization" (str "Bearer " token)]
                           :idle-timeout -1}) (backoff/sec->ms 5) nil)
                  conn)
           _ (when (nil? conn) (throw (Exception. "timeout getting client connection")))]
       (grpc-client! conn))
     (catch Exception _
       (log/error {:attempt attempt} (format "failed obtaining a gRPC client at [%s]" grpc-url))
       (Thread/sleep (backoff/sec->ms 5))
       (grpc-conn (inc attempt))))))

; aws secret manager client
(declare aws-client-start aws-client-stop)

(defstate aws-client
  :start (aws-client-start)
  :stop (aws-client-stop))

(defn aws-client-start []
  (try
    (when-not disable-aws-secret-manager
      (log/info "Initializing AWS Secret Manager ...")
      (SecretsManagerClient/create))
    (catch Throwable e
      (log/warn (format "Could not start AWS client with error: %s" e)))))

(defn aws-client-stop []
  (try
    (when-not disable-aws-secret-manager (.close aws-client))
    (catch Throwable e
      (log/warn (format "Could not close AWS client with error: %s" e)))))
