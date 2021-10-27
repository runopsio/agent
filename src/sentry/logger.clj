(ns sentry.logger
  (:require [sentry-clj.core :as sentry]
            [version.version :refer [app-version]]
            [runtime.data :refer [runtime-data]]
            [mount.core :refer [defstate] :as mount]
            [cambium.core :as log]))

(def sentry-dsn-noop "https://public:private@sentry.io/1")

(defstate sentry-init
  :start (let [args (mount/args)
               config-id (:id args)
               sentry-dsn (get args :sentry-dsn sentry-dsn-noop)
               sentry-debug (= (:sentry-debug args) true)
               sentry-env (get args :sentry-env "production")]
           (log/info (format "Initializing logger with configuration id=[%s], debug=[%s], env=[%s]"
                             config-id
                             sentry-debug
                             sentry-env))
           (sentry/init! sentry-dsn
                         {:environment sentry-env
                          :debug sentry-debug
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