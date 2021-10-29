(ns agent.core
  (:require [cambium.core :as log]
            [cambium.logback.json.flat-layout :as flat]
            [cambium.codec :as codec]
            [agent.clients :as _]
            [version.version :refer [app-version git-revision]]
            [agent.http-poller :as http]
            [agent.grpc-subscriber :as grcp]
            [backoff.time :as backoff]
            [runtime.init :as init]
            [mount.core :as mount])
  (:gen-class))

(def tags (System/getenv "TAGS"))

(defn- configure-logger []
  (flat/set-decoder! codec/destringify-val)  ; configure backend with the codec
  (log/info {:version app-version :revision git-revision :tags tags} "Starting agent")
  (alter-var-root #'cambium.core/transform-context
                  (fn [_]
                    (fn [context]
                      (-> context
                          (assoc :version app-version
                                 :tags tags))))))

(defn -main [& _]
  (configure-logger)

  (let [runtime-config (init/fetch-agent-config)
        backoff-grpc-channel-timeout (get-in runtime-config [:backoff-strategy :grpc-connect-channel-timeout])
        backoff-grpc-connect-subscribe (get-in runtime-config [:backoff-strategy :grpc-connect-subscribe])
        backoff-http-poll (get-in runtime-config [:backoff-strategy :http-poll])
        backoff-grpc-channel-timeout (backoff/parse-default backoff-grpc-channel-timeout (backoff/min->ms 5))
        backoff-grpc-connect-subscribe (backoff/parse-default backoff-grpc-connect-subscribe (backoff/sec->ms 5))
        backoff-http-poll (backoff/parse-default backoff-http-poll (backoff/sec->ms 15))]
    (-> (mount/with-args runtime-config)
        mount/start)
    (log/info (format "Agent config id=[%s] loaded with success. Backoff grpc-channel-timeout=[%s] grpc-conn-subscribe=[%s] http-poll=[%s] "
                      (:id runtime-config)
                      backoff-grpc-channel-timeout
                      backoff-grpc-connect-subscribe
                      backoff-http-poll))
    (grcp/listen-subscription backoff-grpc-channel-timeout backoff-grpc-connect-subscribe)
    (http/poll backoff-http-poll)))

(defn run-grpc-dev []
  (configure-logger)

  (log/info "Running in gRPC mode - development mode")
  (let [runtime-config (init/fetch-agent-config)
        backoff-grpc-channel-timeout (get-in runtime-config [:backoff-strategy :grpc-connect-channel-timeout])
        backoff-grpc-connect-subscribe (get-in runtime-config [:backoff-strategy :grpc-connect-subscribe])
        backoff-http-poll (get-in runtime-config [:backoff-strategy :http-poll])
        backoff-grpc-channel-timeout (backoff/parse-default backoff-grpc-channel-timeout (backoff/min->ms 5))
        backoff-grpc-connect-subscribe (backoff/parse-default backoff-grpc-connect-subscribe (backoff/sec->ms 5))
        backoff-http-poll (backoff/parse-default backoff-http-poll (backoff/sec->ms 15))]
    (-> (mount/with-args runtime-config)
        mount/start)
    (log/info (format "Agent config id=[%s] loaded with success. Backoff grpc-channel-timeout=[%s] grpc-conn-subscribe=[%s] http-poll=[%s] "
                      (:id runtime-config)
                      backoff-grpc-channel-timeout
                      backoff-grpc-connect-subscribe
                      backoff-http-poll))
    (grcp/listen-subscription backoff-grpc-channel-timeout backoff-grpc-connect-subscribe)))
