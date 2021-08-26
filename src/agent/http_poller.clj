(ns agent.http-poller
  (:require [cambium.core :as log]
            [clj-http.client :as client]
            [agent.clients :as clients]
            [agent.agent :as agent]
            [camel-snake-kebab.extras :as cske]
            [camel-snake-kebab.core :as csk]
            [clojure.core.async :as async])
  (:import (io.sentry Sentry)))

(def poll-params
  (conj {:runner_provider "runops" :status "ready"}
        (when clients/tags {:tags clients/tags})))

(defn poll-tasks []
  (async/go
    (try
      (let [response (client/get (format "%s/v2/tasks" clients/api-url)
                                 {:headers {"Authorization" (str "Bearer " clients/token)
                                            "Accept" "application/edn"}
                                  :query-params poll-params})
            tasks (map #(cske/transform-keys csk/->kebab-case %) (read-string (:body response)))]
        (when (> (count tasks) 0)
          (do (log/info (format "found %s task(s) to run" (count tasks)))
              (doall (pmap #(agent/run-task (assoc % :mode :poll)) tasks)))))
      (catch Exception e
        (Sentry/captureException e (format "failed to poll tasks with error: %s" e))
        (log/error (format "failed to poll tasks with error: %s" e))))))

(def poll-interval 1000)

(defn poll []
  (log/info "Starting task poller...")
  (async/go-loop []
    (Thread/sleep poll-interval)
    (poll-tasks)
    (recur)))