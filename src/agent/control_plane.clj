(ns agent.control-plane
  (:require [logger.timbre :as log]
            [logger.sentry :refer [sentry-task-logger]]
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
            [runtime.data :refer [runtime-data]]
            [clojure.java.io :as java.io]))

(def task-proc-status-atom (atom {}))
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
        (log/warn {:task-id (:id task) :queue (queue-length)}
                  "the task was interrupted")
        (add-root-span :agent-task-interrupted {:agent.org (:org task)
                                                :agent.task_id (:id task)
                                                :agent.queue_lenght (queue-length)
                                                :task-id (:id task)}))
      (catch Throwable e
        (queue-info-remove (:id task))
        (reset! proc-chan-atom (dissoc @proc-chan-atom (keyword (:id task))))
        (log/error e {:task-id (:id task) :queue (queue-length)} "failed to run task.")
        (sentry-task-logger e task "failed to process message")))))

(defn parse-proc-state [proc-status]
  (if (or (nil? proc-status) (empty? proc-status))
    "UNKNOWN"
    (case (not-empty (filter #(true? (:alive %)) proc-status))
      nil "DEAD"
      "RUNNING")))

(defn send-proc-command
  "Sends a proc command to a shell.sh/sh if the task-id exists in the atom.
  The accepted commands are :status or :kill"
  [task-id thread-state proc-cmd]
  (let [task-id-kw (keyword (str task-id))
        proc-chan (get @proc-chan-atom task-id-kw)
        _ (when (:in proc-chan)
            (async/>!! (:in proc-chan) proc-cmd))
        proc-status (when (:out proc-chan)
                      (-> (async/alts!! [(:out proc-chan) (async/timeout 2000)])
                          first))
        _ (when proc-status
            (swap! task-proc-status-atom assoc task-id-kw proc-status))
        proc-status (get @task-proc-status-atom task-id-kw)
        ;; makes a best-effort to validate if the pid is alive in
        ;; the operating system. The thread-state is important to determine
        ;; if a thread existed recently, otherwise this could lead to a false positive.
        proc-status (if (and (coll? proc-status)
                             (= (System/getProperty "os.name") "Linux")
                             (= thread-state "TIMED_WAITING"))
                      (map #(hash-map
                             :pid (:pid %)
                             :alive (.exists (java.io/file (str "/proc/" (:pid %)))))
                           proc-status)
                      proc-status)
        process-state (parse-proc-state proc-status)]
    {:process-state process-state
     :process-root (first proc-status)
     :process-childrens (into [] (rest proc-status))}))

(defn process-task [runtime body]
  (let [task (types/json->clj types/TaskExecutionRequest body)
        task-id-keyword (keyword (str (:id task)))
        proc-chan {:in (async/chan 1)
                   :out (async/chan 1)}
        _ (swap! proc-chan-atom assoc task-id-keyword proc-chan)]
    (process-message proc-chan (conj task runtime))))

(defn process-keep-alive-request [send-ch]
  (log/info "received keep alive request from server")
  (async/>!! send-ch {:type "keep-alive-response"}))

(defn process-task-status-request [body send-ch]
  (let [req (types/json->clj types/TaskStatusRequest body)
        thread-info (or (find-thread-by-name (str "task:" (:id req)))
                        types/TaskStatusNotFound)
        proc-status (send-proc-command (:id req) (:state thread-info) :status)
        task-status (conj thread-info
                          proc-status
                          {:id (:id req)})]
    (async/>!! send-ch {:type "task-status-response"
                        :body (types/clj->json
                               types/TaskStatusResponse
                               task-status)})))

(defn validate-kill-task-request [req]
  (when (empty? (filter #(= % (:type req))
                        ["ecs-exec" "k8s-exec" "rails-console-ecs"]))
    req))

(defn process-kill-task-request [req send-ch]
  (let [task-id (str "task:" (:id req))
        _ (stop-thread-by-name task-id)
        _ (Thread/sleep 1000) ; give time for the thread to change its state
        thread-info (or (find-thread-by-name task-id)
                        types/TaskStatusNotFound)
        proc-status (send-proc-command (:id req) (:state thread-info) :kill)
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
    "keep-alive-request" (process-keep-alive-request send-ch)
    "task-status-request" (process-task-status-request body send-ch)
    "kill-task-request" (some-> (types/json->clj types/KillTaskRequest body)
                                (validate-kill-task-request)
                                (process-kill-task-request send-ch))
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
        [receive-ch send-ch] [(async/chan 1) (async/chan 1)]
        _ (log/info "subscribing to gRPC API ...")
        subscription-promise (agent-client/AgentConnection conn metadata send-ch receive-ch)]
    (when-closed subscription-promise #(when %
                                         (log/warn {:queue (queue-length)}
                                                   (format "subscription finished: %s" %))
                                         (async/close! receive-ch)
                                         (async/close! send-ch)))
    [receive-ch send-ch]))

(defn run-controller
  [{:keys [org well-known-jwks dlp-fields backoff-subscribe-ms]}]
  (log/info "initializing control plane ...")
  (loop [n 1 agent-boot? true receive-ch nil send-ch nil]
    (let [conn (clients/grpc-conn)
          [receive-ch send-ch] (if receive-ch
                                 [receive-ch send-ch]
                                 (subscribe conn agent-boot?))
          ;; must be greater than the load balancer idle timeout
          timeout-chan (async/timeout (backoff/min->ms 6))
          [msg chan] (async/alts!! [receive-ch timeout-chan])
          [receive-ch send-ch] (cond
                                 (= timeout-chan chan)
                                 (do (log/info "reached channel timeout, re-connecting ...")
                                     (try (.disconnect conn)
                                          (async/close! receive-ch)
                                          (async/close! send-ch)
                                          (catch Exception _))
                                     [nil nil])
                                 (nil? msg)
                                 (do (log/info "ended subscription channel")
                                     (Thread/sleep backoff-subscribe-ms)
                                     [nil nil])
                                 :else [receive-ch send-ch])]
      (try
        (when msg
          (process-rpc {:type (:type msg)
                        :body (:body msg)
                        :send-ch send-ch
                        :runtime {:well-known-jwks well-known-jwks
                                  :dlp-fields dlp-fields
                                  :org org}}))
        (catch Exception e
          (log/error e "got error when processing rpc message")
          (sentry-task-logger e {:mode "grpc"} (format "failed processing rpc message. type=%s, body=%s"
                                                       (:type msg) (:body msg)))))
      (recur (inc n) false receive-ch send-ch))))
