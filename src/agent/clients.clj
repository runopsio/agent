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
(def grpc-url (or (System/getenv "GRPC_URL") "https://api.runops.io:9090"))


; gRPC client
(defn grpc-client []
  (try
    @(grpc.http2/connect {:uri grpc-url
                          :idle-timeout -1})
    (catch Exception e
      (log/warn (format "Could not start gRPC client with error: %s" e)))))

(mount/defstate grpc-client
                :start (grpc-client)
                :stop nil)


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


; mount
(defn mount-clients []
  (let [mount-clients [#'aws-client #'grpc-client]]
    (apply mount/start mount-clients)
    (println (format "clients: grpc: %s, aws: %s" grpc-client aws-client))))
