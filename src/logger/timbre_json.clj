(ns logger.timbre-json
  (:require [cheshire.core :as json]
            [taoensso.timbre :as timbre]
            [version.version :refer [app-version]]))

(defn output-fn [data]
  (let [{:keys [level ?err #_vargs msg_ ?ns-str ?file
                timestamp_ ?line]} data
        thread-name (.getName (Thread/currentThread))

        output-data (cond->
                     (merge {:timestamp (force timestamp_)
                             :level level
                             :thread thread-name
                             :ns (or ?ns-str ?file)
                             :line ?line
                             :version app-version}
                            (when (map? (:context data))
                              {:context (:context data)})
                            {:msg (force msg_)})
                      ?err (assoc :err (timbre/stacktrace ?err {:stacktrace-fonts {}})))]
    (json/generate-string output-data)))