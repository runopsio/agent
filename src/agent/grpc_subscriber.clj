(ns agent.grpc-subscriber
  (:require [logger.timbre :as log]
            [logger.sentry :refer [sentry-task-logger]]
            [mount.core :as mount]
            [clojure.core.async :as async]
            [agent.clients :as clients]
            [agent.agent :as agent]
            [io.grpc.Agent.client :as agent-client]
            [backoff.time :as backoff]
            [agent.types :as types]
            [runtime.thread-dump :refer [find-thread-by-name
                                         stop-thread-by-name]]
            [agent.errors :refer [err->>]]
            [tracer.honeycomb :refer [with-tracing
                                      with-tracing-end]]
            [runtime.data :refer [runtime-data]]))

(def boot-atom (atom nil))
(def proc-chan-atom (atom {}))
(def queue-info (atom #{}))

(def rpc-in-channel (atom nil))
(def rpc-out-channel (atom nil))

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

(defn add-root-span [root-key map-attrs]
  (err->> {}
          (with-tracing #(vector % nil) [root-key] map-attrs)
          (with-tracing-end)))

(defn process-message [proc-chan task]
  (add-root-span :agent-receive-task {:agent.org (:org task)
                                      :agent.task_id (:id task)
                                      :agent.queue_lenght (queue-length)
                                      :task-id (:id task)})
  (async/thread
    (try
      (-> (Thread/currentThread)
          (.setName (str "task:" (:id task "id"))))
      (queue-info-add (:id task))
      (log/info {:queue (queue-length) :queued-tasks @queue-info :task-id (:id task)}
                "starting running task async.")
      (agent/run-task (assoc task
                             :mode :grpc
                             :jwk-verify (:jwk-verify runtime-data)
                             :queue-lenght (queue-length)
                             :proc-chan proc-chan))
      (queue-info-remove (:id task))
      (reset! proc-chan-atom (dissoc @proc-chan-atom (keyword (:id task))))
      (log/info {:queue (queue-length) :queued-tasks @queue-info :task-id (:id task)}
                "finished running task async.")
      (catch InterruptedException _
        (queue-info-remove (:id task))
        (reset! proc-chan-atom (dissoc @proc-chan-atom (keyword (:id task))))
        (log/info {:task-id (:id task) :queue (queue-length)} "task interrupted."))
      (catch Throwable e
        (queue-info-remove (:id task))
        (reset! proc-chan-atom (dissoc @proc-chan-atom (keyword (:id task))))
        (log/error e {:task-id (:id task) :queue (queue-length)} "failed to run task.")
        (sentry-task-logger e task "failed to process message")))))

(defn send-proc-command
  "Sends a proc command to a shell.sh/sh if the task-id exists in the atom.
  The accepted commands are :status or :kill"
  [task-id proc-cmd]
  (let [proc-chan (get @proc-chan-atom (keyword task-id))
        _ (when (:in proc-chan)
            (async/>!! (:in proc-chan) proc-cmd))
        proc-status (when (:out proc-chan)
                      (-> (async/alts!! [(:out proc-chan) (async/timeout 2000)])
                          first))
        [process-state process-pid] [(:alive proc-status) (get proc-status :pid -1)]
        process-state (case process-state
                        "true" "RUNNING"
                        "false" "DEAD"
                        "UNKNOWN")]
    {:process-state process-state
     :process-pid process-pid}))

(defn process-task [spec]
  (let [task (types/json->clj types/TaskExecutionRequest spec)
        task-id-keyword (keyword (:id task))
        proc-chan {:in (async/chan 1)
                   :out (async/chan 1)}
        _ (swap! proc-chan-atom assoc task-id-keyword proc-chan)]
    (process-message proc-chan task)))

(defn process-task-status-request [spec]
  (let [req (types/json->clj types/TaskStatusRequest spec)
        proc-status (send-proc-command (:id req) :status)
        thread-info (or (find-thread-by-name (str "task:" (:id req)))
                        types/TaskStatusNotFound)
        task-status (conj thread-info
                          proc-status)]
    ;; set timeout to send response to api
    (async/>!! @rpc-out-channel {:kind "TaskStatusResponse"
                                 :spec (types/clj->json
                                        types/TaskStatusResponse
                                        task-status)})))

(defn process-kill-task-request [spec]
  (let [req (types/json->clj types/KillTaskRequest spec)
        proc-status (send-proc-command (:id req) :kill)
        task-id (str "task:" (:id req))
        _ (stop-thread-by-name task-id)
        thread-info (or (find-thread-by-name task-id)
                        types/TaskStatusNotFound)
        task-status (conj thread-info
                          proc-status)]
    ;; set timeout to send response to api
    (async/>!! @rpc-out-channel {:kind "KillTaskResponse"
                                 :spec (types/clj->json
                                        types/KillTaskResponse
                                        task-status)})))

(defn process-rpc [{:keys [kind spec]}]
  (case kind
    "TaskExecutionRequest" (process-task spec)
    "KeepAliveRequest" (log/info "gRPC noop - received keep alive command from server")
    "TaskStatusRequest" (process-task-status-request spec)
    "KillTaskRequest" (process-kill-task-request spec)
    (throw (Exception. (format "Kind %s not supported!" kind)))))

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
  (add-root-span :agent-boot {:agent.org (get (mount/args) :org "")})

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
            (process-message nil
                             (assoc msg
                                    :well-known-jwks well-known-jwks
                                    :dlp-fields dlp-fields
                                    :org (get (mount/args) :org "")))
            (do (log/warn {:queue (queue-length)} "gRPC server has closed the subscription channel...")
                (grpc-connect-subscribe {:delay backoff-subscribe-ms})))))
      (grpc-connect-subscribe {:delay backoff-subscribe-ms}))
    (recur (inc n))))
