(ns agent.core
  (:require [cambium.core :as log]
            [agent.clients :as clients]
            [agent.http-poller :as http]
            [agent.grpc-subscriber :as grcp]
            [mount.core :as mount])
  (:gen-class))

(def tags (System/getenv "TAGS"))

(defn -main [& args]
  (log/info (format "Starting agent tagged with [%s]" tags))

  ; mount clients
  (mount/start)

  (grcp/listen-subscription)
  ;(http/poll)
  )

