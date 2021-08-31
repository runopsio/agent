(ns agent.grpc-subscriber
  (:require [clojure.core.async :as async]
            [clojure.core.async.impl.protocols :as asyncp]
            [agent.clients :as clients]
            [agent.agent :as agent]
            [io.grpc.Agent.client :as agent-client]
            [cambium.core :as log])
  (:import io.sentry.Sentry))

(def grpc-channels (atom {}))

(defn get-subscription-channel []
  (@grpc-channels :subscription-channel))

(defn subscription-channel! [chan]
  (swap! grpc-channels assoc :subscription-channel chan))


(defn process-message [task]
  (log/info (format "received task to run id: %s" (:id task)))
  (try
    (future (agent/run-task (assoc task :mode :grpc)))
    (catch Exception e
      (log/error (format "failed to run task id %s command with error: %s" (:id task) e))
      (Sentry/captureException e))))

(defn subscribe []
  (subscription-channel! (async/chan 1))
  (log/info "subscribing to server...")
  (async/go @(agent-client/Subscribe (clients/get-grpc-client) {:name (str clients/org ":" clients/tags)} (get-subscription-channel))))

(defn listen-subscription []
  (when (clients/reconnect-grpc)
    (subscribe))

  (log/info "starting gRPC listener...")
  (async/go-loop []
    (if (or (nil? (agent.clients/get-grpc-client))
            (.isClosed (:session (.context (agent.clients/get-grpc-client)))))
      (when (clients/reconnect-grpc)
        (subscribe))
      (let [[resp _] (async/alts! [(get-subscription-channel) (async/timeout (* 2 1000))])]
        (when resp
          (process-message resp))))
    (recur)))
