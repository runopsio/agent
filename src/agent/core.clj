(ns agent.core
  (:require [cambium.core :as log]
            [agent.clients :as _]
            [agent.http-poller :as http]
            [agent.grpc-subscriber :as grcp]
            [mount.core :as mount])
  (:gen-class))

(def tags (System/getenv "TAGS"))

(defn -main [& _]
  (log/info (format "Starting agent tagged with [%s]" tags))
  (log/info (format "version=%s, revision=%s"
                    (System/getProperty "agent.version")
                    (System/getProperty "agent.revision")))
  ; mount clients
  (mount/start)
  (grcp/listen-subscription)
  (http/poll))

