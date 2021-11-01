(ns runtime.init
  (:require [agent.clients :as clients]
            [io.grpc.Agent.client :as agent-client]
            [cambium.core :as log]
            [backoff.time :as backoff]
            [clojure.walk :refer [stringify-keys]]
            [runtime.data :refer [runtime-data]]))

(def ^:private send-event-timeout-ms (backoff/sec->ms 15))
(def ^:private backoff-max-attempts-ms (backoff/min->ms 5))

(defn- grpc-client
  "run until it finds a grpc client connection"
  []
  (cond
    (= (clients/grpc-client-alive?) true) (clients/grpc-client)
    :else
    (do
      (log/warn "Couldn't find any gRPC client alive, (re)connecting.")
      (clients/connect-grpc {})
      (grpc-client))))

(defn- send-event [client runtime-data]
  (try
    (deref (agent-client/Event client {:runtime-data runtime-data})
           send-event-timeout-ms
           nil)
    (catch Exception e
      (log/error (format "Failed to fetch runtime config, backing off for [%s] second(s). ex=%s"
                         (backoff/ms->sec send-event-timeout-ms) e))
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
      (let [runtime-data (stringify-keys runtime-data)
            client (grpc-client)
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