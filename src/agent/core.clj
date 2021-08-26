(ns agent.core
  (:require [cambium.core :as log]
            [agent.clients :as clients]
            [agent.http-poller :as http]
            [agent.grpc-subscriber :as grcp])
  (:gen-class))

(def tags (System/getenv "TAGS"))

(defn -main [& args]
  (log/info (format "Starting agent [%s:%s]" clients/org tags))

  ; mount clients
  (clients/mount-clients)

  (grcp/listen-subscription)
  (http/poll))

