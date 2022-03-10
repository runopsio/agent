(ns agent.clients
  (:require [logger.timbre :as log]
            [mount.core :refer [defstate]]
            [buddy.core.codecs.base64 :as b64]
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

(defn decode-base64 [str]
  (String. (b64/decode str)))

; gRPC client
(def grpc-client-atom (atom {}))

(defn grpc-client []
  (@grpc-client-atom :grpc))

(defn- grpc-client! [grpc-client]
  (swap! grpc-client-atom assoc :grpc grpc-client))


(defn- connect
  "Try to connect to gRPC server within 3 seconds.
  If successful, will bind to the stateful grpc-client the client itself
  Other will bind nil"
  []
  (try
    (deref (grpc.http2/connect {:uri grpc-url
                                :ssl grpc-ssl
                                :metadata ["Authorization" (str "Bearer " token)]
                                :idle-timeout -1}) 3000 nil)
    (catch Exception e
      (log/warn (format "Could not start gRPC client with error: %s" e)))))

(defn grpc-client-alive?
  "Whether or not there a stateful client and it is NOT_CLOSED"
  []
  (and (agent.clients/grpc-client)
       (not (.isClosed (:session (.context (agent.clients/grpc-client)))))))

(defn- start-grpc []
  (if-let [grpc-client (connect)]
    (grpc-client! grpc-client)
    (grpc-client! nil))
  (when (grpc-client-alive?)
    (log/info "Connected to gRPC server...")))

(defmulti add-delay (fn [data] (not (nil? (:delay data)))))

(defmethod add-delay true [data]
  (log/info (format "Waiting %s milliseconds..." (:delay data)))
  (Thread/sleep (:delay data)))

(defmethod add-delay false [_])

(defn disconnect-grpc []
  (when-let [c (grpc-client)]
    (try (.disconnect c)
         (catch Exception _)))
  (reset! grpc-client-atom {}))

(defn connect-grpc [data]
  (log/info "Trying to connect to gRPC server...")
  (disconnect-grpc)
  (add-delay data)
  (start-grpc))

(def grpc-webhhok-conn-atom (atom nil))

(defn grpc-webhhok-conn
  "Run until it finds a gRPC connection.
   It will backoff for 5s on new attempts"
  ([] (grpc-webhhok-conn 1))
  ([attempt]
   (let [conn (if (nil? @grpc-webhhok-conn-atom)
                (reset! grpc-webhhok-conn-atom (connect))
                @grpc-webhhok-conn-atom)]
     (if (true? (not (.isClosed (:session (.context conn))))) conn
         (do
           (log/warn {:attempt attempt} "Couldn't find a webhook gRPC client alive, (re)connecting.")
           (reset! grpc-webhhok-conn-atom nil)
           (Thread/sleep (backoff/sec->ms 5))
           (grpc-webhhok-conn (inc attempt)))))))

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
