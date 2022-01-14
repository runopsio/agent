(ns agent.grpc-subscriber
  (:require [logger.timbre :as log]
            [logger.sentry :refer [sentry-task-logger]]
            [mount.core :as mount]
            [clojure.core.async :as async]
            [agent.clients :as clients]
            [agent.agent :as agent]
            [io.grpc.Agent.client :as agent-client]
            [backoff.time :as backoff]
            [runtime.data :refer [runtime-data]]))

(def boot-atom (atom nil))

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
  (if (:keep-alive-task task)
    (log/info "gRPC noop - received keep alive command from server")
    (async/thread
      (try
        (queue-info-add (:id task))
        (log/info {:queue (queue-length) :queued-tasks @queue-info :task-id (:id task)}
                  "starting running task async.")
        (agent/run-task (assoc task
                               :mode :grpc
                               :jwk-verify (:jwk-verify runtime-data)
                               :queue-lenght (queue-length)))

        (queue-info-remove (:id task))
        (log/info {:queue (queue-length) :queued-tasks @queue-info :task-id (:id task)}
                  "finished running task async.")
        (catch Exception e
          (queue-info-remove (:id task))
          (log/error {:task-id (:id task) :queue (queue-length)} e "failed to run task.")
          (sentry-task-logger e task "failed to process message"))))))

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
  (let [proto-body {:tags (:tags runtime-data)
                    :feature-keep-alive true
                    :version (:app-version runtime-data)
                    :revision (:git-revision runtime-data)
                    :machine-id (:machine-id runtime-data)
                    :hostname (:hostname runtime-data)
                    :boot @boot-atom}
        subscription-promise (agent-client/Subscribe (clients/grpc-client) proto-body (subscription-channel))]
    (when-closed subscription-promise #(when % (log/warn {:queue (queue-length)} (format "subscription finished: %s" %))))))

(defn grpc-connect-subscribe [data]
  (if (clients/grpc-client-alive?)
    (do (log/info {:queue (queue-length)} "gRPC subscribing new channel...")
        (subscribe)
        ;; backoff if the grpc connection is alive, it will prevent exhausting resources when
        ;; the connection is alive and the server or load balancer are returning errors
        (Thread/sleep 5000))
    (do (log/info {:queue (queue-length)} "gRPC client disconnected, creating new connection...")
        (clients/connect-grpc data)
        (when (clients/grpc-client-alive?)
          (subscribe)))))

(defn listen-subscription
  [{:keys [well-known-jwks dlp-fields channel-timeout-ms backoff-subscribe-ms]}]
  (reset! boot-atom true)
  (grpc-connect-subscribe {})
  (reset! boot-atom false)

  (loop [n 1]
    (log/info {:grpc-client-alive (clients/grpc-client-alive?)}
              (format "[%s] gRPC subscription controller" n))
    (if (clients/grpc-client-alive?)
      (let [out-chan (subscription-channel)
            ;; the timeout must only triggers if the connection is stuck,
            ;; in normal situations, this must always be greater
            ;; than the idle timeout of the gRPC load balancer.
            timeout-chan (async/timeout (backoff/min->ms 6))
            [msg chan] (async/alts!! [out-chan timeout-chan])]
        (if (= timeout-chan chan)
          (do (log/info {:queue (queue-length)}
                        (format "reached channel timeout [%sm], restarting gRPC connection"
                                (backoff/ms->min channel-timeout-ms)))
              ;; always disconnect first, otherwise it will not
              ;; unsubscribe properly from the server, returning
              ;; an error informing it's already subscribed.
              (clients/disconnect-grpc)
              (grpc-connect-subscribe {:delay backoff-subscribe-ms}))
          (if msg
            (process-message (assoc msg
                                    :well-known-jwks well-known-jwks
                                    :dlp-fields dlp-fields
                                    :org (get (mount/args) :org "")))
            (do (log/warn {:queue (queue-length)} "gRPC server has closed the subscription channel...")
                (grpc-connect-subscribe {:delay backoff-subscribe-ms})))))
      (grpc-connect-subscribe {:delay backoff-subscribe-ms}))
    (recur (inc n))))
