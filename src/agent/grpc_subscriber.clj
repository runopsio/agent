(ns agent.grpc-subscriber
  (:require [clojure.core.async :as async]
            [agent.clients :as clients]
            [agent.agent :as agent]
            [io.grpc.Agent.client :as agent-client]
            [cambium.core :as log])
  (:import io.sentry.Sentry))

(def out-chan (async/chan 1))

(defn process-message [task]
  (log/info (format "received task to run id: %s" (:id task)))
  (async/thread
    (try
      (agent/run-task (assoc task :mode :grpc))
      (catch Exception e
        (log/error (format "failed to run task id %s command with error: %s" (:id task) e))
        (Sentry/captureException e)))))

(defn subscribe []
  (async/go @(agent-client/Subscribe clients/grpc-client {:name (str clients/org ":" clients/tags)} out-chan)))

(defn listen-subscription []
  (when-not (nil? clients/grpc-client)
    (do (subscribe)
        (async/go-loop []
          (log/info "waiting for another task")
          (if-let [resp (async/<!! out-chan)]
            (do (process-message resp)
                (recur))
            (log/info "exiting go-loop"))))))
