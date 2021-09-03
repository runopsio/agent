(ns agent.grpc-subscriber
  (:require [clojure.core.async :as async]
            [agent.clients :as clients]
            [agent.agent :as agent]
            [io.grpc.Agent.client :as agent-client]
            [cambium.core :as log])
  (:import io.sentry.Sentry))

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
      (Sentry/captureException e))))

(defn subscribe []
  (subscription-channel! (async/chan 1))
  (agent-client/Subscribe (clients/grpc-client) {:tags clients/tags} (subscription-channel)))

(defn grpc-connect-subscribe [data]
  (if (clients/grpc-client-alive?)
    (do (log/info "gRPC subscribing new channel...")
        (subscribe))
    (do (log/info "gRPC client disconnected, creating new connection...")
        (clients/connect-grpc data)
        (when (clients/grpc-client-alive?)
          (subscribe)))))

(defn listen-subscription []
  (grpc-connect-subscribe {})

  (log/info "starting gRPC listener...")
  (async/go-loop []
    (if (clients/grpc-client-alive?)
      (let [out-chan (subscription-channel)
            timeout-chan (async/timeout (* 60 1000 5))
            [msg chan] (async/alts! [out-chan timeout-chan])]
        (if (= timeout-chan chan)
          (log/info "did not receive any ping in past 5 minutes... restarting gRPC connection")
          (if msg
            (process-message msg)
            (do (log/warn "gRPC server has closed the subscription channel...")
                (grpc-connect-subscribe {:delay 5000})))))
      (grpc-connect-subscribe {:delay 5000}))
    (recur)))
