(ns agent.http-poller
  (:require [cambium.core :as log]
            [sentry.logger :refer [sentry-logger]]
            [clj-http.client :as client]
            [agent.clients :as clients]
            [agent.agent :as agent]
            [runtime.data :refer [runtime-data]]
            [camel-snake-kebab.extras :as cske]
            [camel-snake-kebab.core :as csk]))

(def poll-params
  (conj {:runner_provider "runops" :status "ready"}
        (when clients/tags {:tags clients/tags})))

(defn poll-tasks []
  (try
    (let [response (client/get (format "%s/v2/tasks" clients/api-url)
                               {:headers {"Authorization" (str "Bearer " clients/token)
                                          "Accept" "application/edn"}
                                :query-params poll-params})
          tasks (map #(cske/transform-keys csk/->kebab-case %) (read-string (:body response)))]
      (when (> (count tasks) 0)
        (if (:jwk-verify runtime-data) nil
            (do
              (log/info (format "found %s task(s) to run" (count tasks)))
              (doall (pmap #(agent/run-task (assoc % :mode :poll)) tasks))))))
    (catch java.io.EOFException e
      (log/error (format "failed to poll tasks with error: %s" e))
      (sentry-logger {:message "failed to poll tasks" :throwable e})
        ;; this is a workaround to make agent resilient to network issues
        ;; we saw this issue happening in some customers
      (when (clojure.string/includes? (str (.getMessage e)) "SSL peer shut down incorrectly")
        (log/warn "agent force shutdown due to connection issues")
        (System/exit 1)))
    (catch Exception e
      (log/error (format "failed to poll tasks with error: %s" e))
      (sentry-logger {:message "failed to poll tasks" :throwable e}))))

(defn poll [backoff-http-poll-ms]
  (log/info "Starting task poller...")
  (loop []
    (poll-tasks)
    (Thread/sleep backoff-http-poll-ms)
    (recur)))