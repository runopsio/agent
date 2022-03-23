(ns agent.core
  (:require [agent.clients :as _]
            [version.version :refer [git-revision]]
            [logger.timbre :as log]
            [taoensso.timbre :refer [merge-config! set-config!
                                     handle-uncaught-jvm-exceptions!]]
            [environ.core :refer [env]]
            [logger.timbre-json :as timbre-json]
            [taoensso.timbre.appenders.core :as appenders]
            [agent.http-poller :as http]
            [agent.grpc-subscriber :as grpc]
            [backoff.time :as backoff]
            [runtime.init :as init]
            [mount.core :as mount]
            [dlp.gcp :as dlp])
  (:gen-class))

(def tags (env :tags))

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
        backoff-http-poll (backoff/parse-default backoff-http-poll (backoff/sec->ms 15))
        dlp-fields (:dlp-fields runtime-config)
        dlp-fields (if (> (count dlp-fields) 0) dlp-fields dlp/default-info-types)]
    (log/info (format (str "Agent config id=[%s] loaded with success. Backoff grpc-channel-timeout=[%s]"
                           " grpc-conn-subscribe=[%s] http-poll=[%s] total-dlp-fields=[%s]")
                      (:id runtime-config)
                      grpc-channel-timeout
                      backoff-grpc-connect-subscribe
                      backoff-http-poll
                      (count (:dlp-fields runtime-config))))
    (future
      (grpc/run-controller {:well-known-jwks well-known-jwks
                            :dlp-fields dlp-fields
                            :channel-timeout-ms grpc-channel-timeout
                            :backoff-subscribe-ms backoff-grpc-connect-subscribe}))
    (http/poll dlp-fields backoff-http-poll)))
