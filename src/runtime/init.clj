(ns runtime.init
  (:require [agent.clients :as clients]
            [io.grpc.Agent.client :as agent-client]
            [cambium.core :as log]
            [clojure.walk :refer [stringify-keys]]
            [runtime.data :refer [runtime-data]]))

(def ^:private send-event-timeout-ms (* 10 1000))
(def ^:private backoff-ms (* 300 1000))

(defn- grpc-client
  "run until it finds a grpc client connection"
  []
  (cond
    (= (clients/grpc-client-alive?) true) (clients/grpc-client)
    :else
    (do
      (log/warn "Couldn't find any gRPC client alive, (re)connecting.")
      (clients/connect-grpc {:delay 0})
      (grpc-client))))

(defn fetch-agent-config []
  (log/info "Initializing agent config process")
  (loop [count 0]
    (if (> count 5)
      (do (log/warn (format "Reached max attempts to start agent, backing off for [%s] minute(s)." (/ (/ backoff-ms 1000) 60)))
          (Thread/sleep backoff-ms)
          (fetch-agent-config))
      (let [client (grpc-client)
            runtime-data (stringify-keys runtime-data)
            runtime-config (deref (agent-client/Event client {:runtime-data runtime-data}) send-event-timeout-ms nil)]
        (if-not (empty? runtime-config)
          (do (log/info (format "Found a valid runtime configuration, id=[%s] http-poll-interval=[%s]"
                                (:id runtime-config)
                                (:http-poll-interval-in-seconds runtime-config)))
              runtime-config)
          (do (log/warn (format "Timeout fetching agent runtime config, attempt [%s/6]" (inc count)))
              (recur (inc count))))))))