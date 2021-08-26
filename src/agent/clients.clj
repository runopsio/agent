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
      (log/warn "Could not start gRPC client"))))

(mount/defstate grpc-client
                :start (grpc-client)
                :stop nil)


; aws secret manager client
(mount/defstate aws-client
                :start (SecretsManagerClient/create)
                :stop (.close aws-client))


(defn mount-clients []
  (let [mount-clients []
        mount-clients (if (nil? grpc-client)
                        mount-clients
                        (conj mount-clients #'grpc-client))
        mount-clients (if (empty? (System/getenv "AWS_ACCESS_KEY_ID"))
                        mount-clients
                        (conj mount-clients #'aws-client))]
    (apply mount/start mount-clients)
    (println (format "clients: grpc: %s, aws: %s" grpc-client aws-client))))
