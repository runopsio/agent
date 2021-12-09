(ns agent.grpc-subscriber
  (:require [clojure.core.async :as async]
            [agent.clients :as clients]
            [agent.agent :as agent]
            [io.grpc.Agent.client :as agent-client]
            [cambium.core :as log]
            [backoff.time :as backoff]
            [runtime.data :refer [runtime-data]]
            [sentry.logger :refer [sentry-task-logger]]))

(def queue-info (atom #{}))

(defn queue-length []
  (count @queue-info))

(defn queue-info-add [task-id]
  (swap! queue-info (fn [queue] (set (conj queue task-id)))))

(defn queue-info-remove [task-id]
  (swap! queue-info (fn [queue] (set (remove #{task-id} queue)))))

(def grpc-channels (atom {}))

(defn subscription-channel []
  (@grpc-channels :subscription-channel))

(defn subscription-channel! [chan]
  (swap! grpc-channels assoc :subscription-channel chan))

(defn process-message [task]
  (try
    (async/thread (queue-info-add (:id task))
                  (log/info {:queue (queue-length) :queued-tasks @queue-info :task-id (:id task)}
                            "starting running task async.")
                  (agent/run-task (assoc task
                                         :mode :grpc
                                         :jwk-verify (:jwk-verify runtime-data)
                                         :queue-lenght (queue-length)))

                  (queue-info-remove (:id task))
                  (log/info {:queue (queue-length) :queued-tasks @queue-info :task-id (:id task)}
                            "finished running task async."))
    (catch Exception e
      (queue-info-remove (:id task))
      (log/error {:task-id (:id task) :queue (queue-length)} e "failed to run task.")
      (sentry-task-logger e task "failed to process message"))))

(defn when-closed [future-to-watch callback]
  (future (callback
           (try
             @future-to-watch
             (catch Exception e
               (log/warn {:queue (queue-length)} (format "subscription ended with message:%s cause:%s"
                                                         (.getMessage e)
                                                         (:message (ex-data (.getCause e))))))))))

(defn subscribe []
  (subscription-channel! (async/chan 1))
  (let [subscription-promise (agent-client/Subscribe (clients/grpc-client) {:tags clients/tags} (subscription-channel))]
    (when-closed subscription-promise #(when % (log/warn {:queue (queue-length)} (format "subscription finished: %s" %))))))

(defn grpc-connect-subscribe [data]
  (if (clients/grpc-client-alive?)
    (do (log/info {:queue (queue-length)} "gRPC subscribing new channel...")
        (subscribe))
    (do (log/info {:queue (queue-length)} "gRPC client disconnected, creating new connection...")
        (clients/connect-grpc data)
        (when (clients/grpc-client-alive?)
          (subscribe)))))

(defn listen-subscription [well-known-jwks channel-timeout-ms backoff-subscribe-ms]
  (grpc-connect-subscribe {})

  (log/info "starting gRPC listener...")
  (loop []
    (if (clients/grpc-client-alive?)
      (let [out-chan (subscription-channel)
            timeout-chan (async/timeout channel-timeout-ms)
            [msg chan] (async/alts!! [out-chan timeout-chan])]
        (if (= timeout-chan chan)
          (do (log/info {:queue (queue-length)}
                        (format "reached channel timeout [%sm], restarting gRPC connection"
                                (backoff/ms->min channel-timeout-ms)))
              (clients/disconnect-grpc)
              (grpc-connect-subscribe {:delay backoff-subscribe-ms}))
          (if msg
            (process-message (assoc msg :well-known-jwks well-known-jwks))
            (do (log/warn {:queue (queue-length)} "gRPC server has closed the subscription channel...")
                (clients/disconnect-grpc)
                (grpc-connect-subscribe {:delay backoff-subscribe-ms})))))
      (grpc-connect-subscribe {:delay backoff-subscribe-ms}))
    (recur)))
