(ns version.version
  (:require [clojure.java.io :as io]
            [cambium.core :as log])
  (:import (java.util Properties)))

(defn read-pom-property [property]
  (try
    (-> (doto (Properties.)
          (.load (-> "META-INF/maven/%s/%s/pom.properties"
                     (format "agent" "agent")
                     (io/resource)
                     (io/reader))))
        (.get property))
    (catch Exception e
      (log/warn (format "failed reading pom.properties, err=%s" (.getMessage e)))
      "unknown")))

(defonce app-version (read-pom-property "version"))
(defonce git-revision (read-pom-property "revision"))
