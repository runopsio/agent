(ns logger.timbre-json
  (:require [cheshire.core :as json]
            [version.version :refer [app-version]]))

(defn get-stacktrace [err]
  (str (.toString err) "\n"
       (clojure.string/join "\n" (.getStackTrace err))))

(defn output-fn [data]
  (let [{:keys [level ?err #_vargs msg_
                timestamp_ ?line]} data
        thread-name (.getName (Thread/currentThread))
        output-data (apply array-map [:timestamp (force timestamp_)
                                      :level (clojure.string/upper-case level)
                                      :thread thread-name
                                      ;; :ns (or ?ns-str ?file)
                                      :line ?line
                                      :version app-version
                                      :context (:context data)
                                      :msg (force msg_)
                                      :err (when ?err (get-stacktrace ?err))])]
    (json/generate-string output-data)))