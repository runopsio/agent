(ns agent.clients
  (:require [cambium.core :as log]
            [mount.core :as mount]
            [buddy.core.codecs.base64 :as b64]
            [protojure.grpc.client.providers.http2 :as grpc.http2])
  (:import software.amazon.awssdk.services.secretsmanager.SecretsManagerClient))


(defn decode-base64 [str]
  (String. (b64/decode str)))

(defn decoded-token [token]
  (let [decoded (decode-base64 token)
        decoded-token (clojure.string/split decoded #":")]
    decoded-token))

(defn extract-org [token]
  (first (decoded-token token)))

(defn extract-token [token]
  (second (decoded-token token)))

(def b64-token (System/getenv "TOKEN"))
(def tags (System/getenv "TAGS"))
(def org (extract-org b64-token))
(def token (extract-token b64-token))
(def api-url (or (System/getenv "API_URL") "https://api.runops.io"))
(def grpc-url (or (System/getenv "GRPC_URL") "https://api.runops.io:8443"))
(def grpc-ssl (Boolean/valueOf (or (System/getenv "GRPC_SSL") "true")))


; gRPC client
(def grpc-client (atom {}))

(defn get-grpc-client []
  (@grpc-client :grpc))

(defn grpc-client! [client]
  (swap! grpc-client assoc :grpc client))


(defn connect []
  (try
    (deref (grpc.http2/connect {:uri grpc-url
                                :ssl grpc-ssl
                                :metadata ["Authorization" (str "Bearer " token)]
                                :idle-timeout -1}) 3000 nil)
    (catch Exception e
      (log/warn (format "Could not start gRPC client with error: %s" e)))))

(defn maybe-start-grpc []
  (when-let [grpc-client (connect)]
    (grpc-client! grpc-client)))

(defn reconnect-grpc []
  (log/info "Trying to connect to gRPC server in 2 secs...")
  (Thread/sleep 2000)
  (maybe-start-grpc)
  (and (not (nil? (agent.clients/get-grpc-client)))
       (not (.isClosed (:session (.context (agent.clients/get-grpc-client)))))))


; aws secret manager client
(declare aws-client-start aws-client-stop)

(mount/defstate aws-client
                :start (aws-client-start)
                :stop (aws-client-stop))

(defn aws-client-start []
  (try
    (SecretsManagerClient/create)
    (catch Exception e
      (log/warn (format "Could not start AWS client with error: %s" e)))))

(defn aws-client-stop []
  (try
    (.close aws-client)
    (catch Exception e
      (log/warn (format "Could not close AWS client with error: %s" e)))))
