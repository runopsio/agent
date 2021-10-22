(ns sentry.logger
  (:require [sentry-clj.core :as sentry]
            [version.version :refer [app-version]]
            [runtime.data :refer [runtime-data]]
            [mount.core :refer [defstate]]
            [cambium.core :as log]))

(defstate sentry-init
  :start (do
           (log/info "Initializing logger")
           (sentry/init! "https://7bee01d63c85471188c9157e62c79771@o919346.ingest.sentry.io/5863449"
                         {:environment "production"
                          :debug false
                          :release app-version})))

(defn sentry-logger
  "Log exceptions to Sentry with metadata runtime data as tags.
  event - Contain the full event.
  See more: https://github.com/getsentry/sentry-clj/tree/5.2.158"
  [event]
  (sentry/send-event
   (assoc event :tags (conj (:tags event) (dissoc runtime-data :app-version)))))

(defn sentry-task-logger
  "Extract useful information from a runops task and add as a context"
  ([ex task message]
   (sentry-logger {:message message
                   :throwable ex
                   :tags (merge {:mode (name (get task :mode "runops:unknown"))
                                 :type (get task :type "runops:unknown")
                                 :org (get task :org "runops:unknown")
                                 :task-id (get task :id "runops:unknown")}
                                (when-not (clojure.string/blank? (:secret-provider task))
                                  {:secret-provider (:secret-provider task)}))}))
  ([task message]
   (sentry-task-logger nil task message)))