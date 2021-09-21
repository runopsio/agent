(ns agent.core
  (:require [cambium.core :as log]
            [agent.clients :as _]
            [version.version :refer [app-version git-revision]]
            [agent.http-poller :as http]
            [agent.grpc-subscriber :as grcp]
            [mount.core :as mount])
  (:gen-class))

(def tags (System/getenv "TAGS"))

(defn -main [& _]
  (log/info (format "Starting agent tagged with [%s]" tags))
  (log/info (format "version=%s, revision=%s" app-version git-revision))
  ; mount clients
  (mount/start)
  (grcp/listen-subscription)
  (http/poll))

