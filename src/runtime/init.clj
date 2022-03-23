(ns runtime.init
  (:require [logger.timbre :as log]
            [agent.clients :as clients]
            [io.grpc.Agent.client :as agent-client]
            [backoff.time :as backoff]
            [clojure.data.json :as json]
            [clj-http.client :as client]
            [logger.sentry :refer [sentry-logger]]
            [clojure.walk :refer [keywordize-keys]]
            [runtime.data :refer [runtime-data jwk-url]]))

(def ^:private send-event-timeout-ms (backoff/sec->ms 15))
(def ^:private backoff-max-attempts-ms (backoff/min->ms 5))

(defn- send-event [client data]
  (try
    (deref (agent-client/Event client {:runtime-data data})
           send-event-timeout-ms
           nil)
    (catch Exception e
      (log/error e (format "Failed to fetch runtime config, backing off for [%s] second(s)"
                           (backoff/ms->sec send-event-timeout-ms)))
      (Thread/sleep send-event-timeout-ms)
      nil)))

(defn fetch-agent-config []
  (log/info "Initializing agent config process")
  (loop [count 0]
    (if (> count 5)
      (do (log/warn (format "Reached max attempts to start agent, backing off for [%s] minute(s)."
                            (backoff/ms->min backoff-max-attempts-ms)))
          (Thread/sleep backoff-max-attempts-ms)
          (fetch-agent-config))
      (let [runtime-data (zipmap (map name (keys runtime-data)) (map str (vals runtime-data)))
            client (clients/grpc-conn)
            runtime-config (send-event client runtime-data)]
        (if-not (empty? runtime-config)
          (do
            (log/info (format "Found a valid runtime configuration! id=[%s], org=[%s], connection-config=[%s]"
                              (:id runtime-config)
                              (:org runtime-config)
                              (into {} (:connection-config runtime-config))))
            runtime-config)
          (do (log/warn (format "Unable to retrieve runtime config, attempt [%s/6]" (inc count)))
              (recur (inc count))))))))

(defn fetch-jwks-pubkeys
  "keywordize-keys of a jwk public key structure from an auth provider.
   In case of error fetching the public keys, the app will hang"
  []
  (if-not
   (:jwk-verify runtime-data) nil
   (try
     (->> (:body (client/get jwk-url))
          json/read-str
          keywordize-keys)
     (catch Exception e
       (log/error e {:jwk-url jwk-url} "failed to obtain JWK public keys")
       ;; passing the :throwable here strangely doesn't work 
       (sentry-logger {:message (format "failed to obtain JWK public keys, ex-info: %s" e)})
       (System/exit 1)))))
