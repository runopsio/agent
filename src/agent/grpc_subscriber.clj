(ns agent.grpc-subscriber
  (:require [clojure.core.async :as async]
            [agent.clients :as clients]
            [agent.agent :as agent]
            [io.grpc.Agent.client :as agent-client]
            [cambium.core :as log]
            [sentry.logger :refer [sentry-task-logger]]))

(def grpc-channels (atom {}))

(defn subscription-channel []
  (@grpc-channels :subscription-channel))

(defn subscription-channel! [chan]
  (swap! grpc-channels assoc :subscription-channel chan))


(defn process-message [task]
  (log/info (format "received task to run id: %s" (:id task)))
  (try
    (async/go (agent/run-task (assoc task :mode :grpc)))
    (catch Exception e
      (log/error (format "failed to run task id %s command with error: %s" (:id task) e))
      (sentry-task-logger e task "failed to process message"))))

(defn when-closed [future-to-watch callback]
  (future (callback
           (try
             @future-to-watch
             (catch Exception e
               (log/warn (format "subscription ended with message:%s cause:%s"
                                 (.getMessage e)
                                 (:message (ex-data (.getCause e))))))))))

(defn subscribe []
  (subscription-channel! (async/chan 1))
  (let [subscription-promise (agent-client/Subscribe (clients/grpc-client) {:tags clients/tags} (subscription-channel))]
    (when-closed subscription-promise #(when % (log/warn (format "subscription finished: %s" %))))))

(defn grpc-connect-subscribe [data]
  (if (clients/grpc-client-alive?)
    (do (log/info "gRPC subscribing new channel...")
        (subscribe))
    (do (log/info "gRPC client disconnected, creating new connection...")
        (clients/connect-grpc data)
        (when (clients/grpc-client-alive?)
          (subscribe)))))

(defn listen-subscription [backoff-timeout-ms backoff-subscribe-ms]
  (grpc-connect-subscribe {})

  (log/info "starting gRPC listener...")
  (async/go-loop []
    (if (clients/grpc-client-alive?)
      (let [out-chan (subscription-channel)
            timeout-chan (async/timeout backoff-timeout-ms)
            [msg chan] (async/alts! [out-chan timeout-chan])]
        (if (= timeout-chan chan)
          (do (log/info "did not receive any ping in past 5 minutes... restarting gRPC connection")
              (grpc-connect-subscribe {:delay backoff-subscribe-ms}))
          (if msg
            (process-message msg)
            (do (log/warn "gRPC server has closed the subscription channel...")
                (grpc-connect-subscribe {:delay backoff-subscribe-ms})))))
      (grpc-connect-subscribe {:delay backoff-subscribe-ms}))
    (recur)))
