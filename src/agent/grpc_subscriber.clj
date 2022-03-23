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

(def proc-chan-atom (atom {}))
(def queue-info (atom #{}))

(defn queue-length []
  (count @queue-info))

(defn queue-info-add [task-id]
  (swap! queue-info (fn [queue] (set (conj queue task-id)))))

(defn queue-info-remove [task-id]
  (swap! queue-info (fn [queue] (set (remove #{task-id} queue)))))

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
        (log/warn {:task-id (:id task) :queue (queue-length)} "task interrupted.")
        (add-root-span :agent-task-interrupted {:agent.org (:org task)
                                                :agent.task_id (:id task)
                                                :agent.queue_lenght (queue-length)
                                                :task-id (:id task)}))
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

(defn process-task [runtime body]
  (let [task (types/json->clj types/TaskExecutionRequest body)
        task-id-keyword (keyword (:id task))
        proc-chan {:in (async/chan 1)
                   :out (async/chan 1)}
        _ (swap! proc-chan-atom assoc task-id-keyword proc-chan)]
    (process-message proc-chan (conj task runtime))))

(defn process-task-status-request [body send-ch]
  (let [req (types/json->clj types/TaskStatusRequest body)
        proc-status (send-proc-command (:id req) :status)
        thread-info (or (find-thread-by-name (str "task:" (:id req)))
                        types/TaskStatusNotFound)
        task-status (conj thread-info
                          proc-status
                          {:id (:id req)})]
    (async/>!! send-ch {:type "task-status-response"
                        :body (types/clj->json
                               types/TaskStatusResponse
                               task-status)})))

(defn process-kill-task-request [body send-ch]
  (let [req (types/json->clj types/KillTaskRequest body)
        task-id (str "task:" (:id req))
        _ (stop-thread-by-name task-id)
        proc-status (send-proc-command (:id req) :kill)
        thread-info (or (find-thread-by-name task-id)
                        types/TaskStatusNotFound)
        task-status (conj thread-info
                          proc-status
                          {:id (:id req)})]
    (log/info (format "sending kill-task-response to channel, body=%s" task-status))
    (async/>!! send-ch {:type "kill-task-response"
                        :body (types/clj->json
                               types/KillTaskResponse
                               task-status)})))

(defn process-rpc [{:keys [type body runtime send-ch]}]
  (log/info (format "processing rpc type=%s" type))
  (case type
    "task-execution-request" (process-task runtime body)
    "keep-alive-request" (log/info "gRPC noop - received keep alive command from server")
    "task-status-request" (process-task-status-request body send-ch)
    "kill-task-request" (process-kill-task-request body send-ch)
    (throw (Exception. (format "Type %s not supported!" type)))))

(defn- when-closed [future-to-watch callback]
  (future (callback
           (try
             @future-to-watch
             (catch Exception e
               (log/warn {:queue (queue-length)} (format "subscription ended with message:%s cause:%s"
                                                         (.getMessage e)
                                                         (:message (ex-data (.getCause e))))))))))

(defn- subscribe [conn agent-boot?]
  (let [metadata {"tags" (:tags runtime-data)
                  "agent-version" (:app-version runtime-data)
                  "agent-revision" (:git-revision runtime-data)
                  "agent-machine-id" (:machine-id runtime-data)
                  "agent-hostname" (:hostname runtime-data)
                  "agent-boot" (str agent-boot?)}
        receive-ch (async/chan 1)
        send-ch (async/chan 1)
        _ (log/info "initializing subscribe ...")
        subscription-promise (agent-client/AgentConnection conn metadata send-ch receive-ch)]
    (when-closed subscription-promise #(when % (log/warn {:queue (queue-length)}
                                                         (format "subscription finished: %s" %))))
    [receive-ch send-ch]))

(defn run-controller
  [{:keys [well-known-jwks dlp-fields channel-timeout-ms backoff-subscribe-ms]}]
  (add-root-span :agent-boot {:agent.org (get (mount/args) :org "")})
  (log/info "Initialing control plane ...")
  (loop [n 1 agent-boot? true
         subscribe-channels nil]

    (let [conn (clients/grpc-conn)
          _ (log/info "obtained connection with success")
          [receive-ch send-ch] (if-some [c subscribe-channels]
                                 c
                                 (subscribe conn agent-boot?))
          _ (log/info "subscribed with sucess, waiting for new tasks ...")
            ;; the timeout must only triggers if the connection is stuck,
            ;; in normal situations, this must always be greater
            ;; than the idle timeout of the gRPC load balancer.
          timeout-chan (async/timeout (backoff/min->ms 6))
          [msg chan] (async/alts!! [receive-ch timeout-chan])]
      (try
        (if (= timeout-chan chan)
          (do
            (log/info {:queue (queue-length)}
                      (format "reached channel timeout [%sm], restarting gRPC connection"
                              (backoff/ms->min channel-timeout-ms)))
              ;; TODO: disconnect on exception!
              ;; TODO: close channels??
            (throw (Exception. (format "reached channel timeout [%sm], restarting gRPC connection"
                                       (backoff/ms->min channel-timeout-ms)))))
          (if msg
            (process-rpc {:type (:type msg)
                          :body (:body msg)
                          :send-ch send-ch
                          :runtime {:well-known-jwks well-known-jwks
                                    :dlp-fields dlp-fields
                                    :org (get (mount/args) :org "")}})
            (do (log/warn {:queue (queue-length)} "gRPC server has closed the subscription channel...")
                ;; TODO: need to close channel here!
                (async/close! receive-ch)
                (async/close! send-ch)
                (Thread/sleep backoff-subscribe-ms))))
        (catch Exception e
          (log/warn (format "got error processing call: %s" (.getMessage e)))))
      (recur (inc n) false
             [receive-ch send-ch]))))
