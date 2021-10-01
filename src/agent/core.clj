(ns agent.core
  (:require [cambium.core :as log]
            [cambium.logback.json.flat-layout :as flat]
            [cambium.codec :as codec]
            [agent.clients :as _]
            [version.version :refer [app-version git-revision]]
            [agent.http-poller :as http]
            [agent.grpc-subscriber :as grcp]
            [mount.core :as mount])
  (:gen-class))

(def tags (System/getenv "TAGS"))

(defn -main [& _]
  (flat/set-decoder! codec/destringify-val)  ; configure backend with the codec
  (log/info (format "Starting agent tagged with [%s]" tags))
  (log/info (format "version=%s, revision=%s" app-version git-revision))

  (alter-var-root #'cambium.core/transform-context
                  (fn [_]
                    (fn [context]
                      (-> context
                          (assoc :version app-version
                                 :tags tags)))))

  ; mount clients
  (mount/start)
  (grcp/listen-subscription)
  (http/poll))

