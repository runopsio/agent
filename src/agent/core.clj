(ns agent.core
  (:require [cambium.core :as log]
            [cambium.logback.json.flat-layout :as flat]
            [cambium.codec :as codec]
            [agent.clients :as _]
            [version.version :refer [app-version git-revision]]
            [agent.http-poller :as http]
            [agent.grpc-subscriber :as grcp]
            [runtime.init :as init]
            [mount.core :as mount])
  (:gen-class))

(def tags (System/getenv "TAGS"))

(defn -main [& _]
  (flat/set-decoder! codec/destringify-val)  ; configure backend with the codec
  (log/info {:version app-version :revision git-revision :tags tags} "Starting agent")
  (alter-var-root #'cambium.core/transform-context
                  (fn [_]
                    (fn [context]
                      (-> context
                          (assoc :version app-version
                                 :tags tags)))))

  (let [runtime-config (init/fetch-agent-config)]
    (-> (mount/with-args runtime-config)
        mount/start)
    (log/info (format "Agent config id=[%s] loaded with success" (:id runtime-config)))
    (grcp/listen-subscription)
    (http/poll (get runtime-config :http-poll-interval-in-seconds 10))))
