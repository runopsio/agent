(ns agent.core
  (:require [agent.clients :as _]
            [version.version :refer [git-revision]]
            [logger.timbre :as log]
            [taoensso.timbre :refer [merge-config! set-config!
                                     handle-uncaught-jvm-exceptions!]]
            [logger.timbre-json :as timbre-json]
            [taoensso.timbre.appenders.core :as appenders]
            [agent.http-poller :as http]
            [agent.grpc-subscriber :as grpc]
            [backoff.time :as backoff]
            [runtime.init :as init]
            [mount.core :as mount])
  (:gen-class))

(def tags (System/getenv "TAGS"))

(set-config! {:level :info
              :appenders {:println (appenders/println-appender {:stream :auto})}})

;; comment it for non-json logging
(merge-config! {:output-fn timbre-json/output-fn})
(handle-uncaught-jvm-exceptions!)

(defn -main [& _]
  (log/info {:git-revision git-revision :tags tags} "Starting agent")
  (let [runtime-config (init/fetch-agent-config)
        _ (-> (mount/with-args runtime-config) mount/start)
        well-known-jwks (init/fetch-jwks-pubkeys)
        grpc-channel-timeout (get-in runtime-config [:connection-config :grpc-connect-channel-timeout])
        backoff-grpc-connect-subscribe (get-in runtime-config [:connection-config :backoff-grpc-connect-subscribe])
        backoff-http-poll (get-in runtime-config [:connection-config :backoff-http-poll])
        grpc-channel-timeout (backoff/parse-default grpc-channel-timeout (backoff/min->ms 5))
        backoff-grpc-connect-subscribe (backoff/parse-default backoff-grpc-connect-subscribe (backoff/sec->ms 5))
        backoff-http-poll (backoff/parse-default backoff-http-poll (backoff/sec->ms 15))]
    (log/info (format "Agent config id=[%s] loaded with success. Backoff grpc-channel-timeout=[%s] grpc-conn-subscribe=[%s] http-poll=[%s] "
                      (:id runtime-config)
                      grpc-channel-timeout
                      backoff-grpc-connect-subscribe
                      backoff-http-poll))
    (future (grpc/listen-subscription well-known-jwks grpc-channel-timeout backoff-grpc-connect-subscribe))
    (http/poll backoff-http-poll)))

(defn run-grpc-dev []
  (log/info "Running in gRPC mode - development mode")
  (let [runtime-config (init/fetch-agent-config)
        _ (-> (mount/with-args runtime-config) mount/start)
        well-known-jwks (init/fetch-jwks-pubkeys)
        grpc-channel-timeout (get-in runtime-config [:connection-config :grpc-connect-channel-timeout])
        backoff-grpc-connect-subscribe (get-in runtime-config [:connection-config :backoff-grpc-connect-subscribe])
        grpc-channel-timeout (backoff/parse-default grpc-channel-timeout (backoff/min->ms 5))
        backoff-grpc-connect-subscribe (backoff/parse-default backoff-grpc-connect-subscribe (backoff/sec->ms 5))]
    (log/info (format "Agent config id=[%s] loaded with success. Backoff grpc-channel-timeout=[%s] grpc-conn-subscribe=[%s] "
                      (:id runtime-config)
                      grpc-channel-timeout
                      backoff-grpc-connect-subscribe))
    (grpc/listen-subscription well-known-jwks grpc-channel-timeout backoff-grpc-connect-subscribe)))
