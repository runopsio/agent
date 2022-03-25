(ns agent.core
  (:require [agent.clients :as _]
            [version.version :refer [git-revision]]
            [logger.sentry :refer [sentry-task-logger]]
            [logger.timbre :as log]
            [taoensso.timbre :refer [merge-config! set-config!
                                     handle-uncaught-jvm-exceptions!]]
            [environ.core :refer [env]]
            [logger.timbre-json :as timbre-json]
            [taoensso.timbre.appenders.core :as appenders]
            [agent.http-poller :as http]
            [agent.control-plane :as cp]
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
  (log/info {:git-revision git-revision :tags tags :os (System/getProperty "os.name")}
            "Starting agent")
  (let [runtime-config (init/fetch-agent-config)
        _ (-> (mount/with-args runtime-config) mount/start)
        well-known-jwks (init/fetch-jwks-pubkeys)
        backoff-grpc-connect-subscribe (get-in runtime-config [:connection-config :backoff-grpc-connect-subscribe])
        backoff-http-poll (get-in runtime-config [:connection-config :backoff-http-poll])
        backoff-grpc-connect-subscribe (backoff/parse-default backoff-grpc-connect-subscribe (backoff/sec->ms 5))
        backoff-http-poll (backoff/parse-default backoff-http-poll (backoff/sec->ms 15))
        dlp-fields (:dlp-fields runtime-config)
        dlp-fields (if (> (count dlp-fields) 0) dlp-fields dlp/default-info-types)]
    (log/info (format (str "Agent config id=[%s] loaded with success. Backoff"
                           " grpc-conn-subscribe=[%s] http-poll=[%s] total-dlp-fields=[%s]")
                      (:id runtime-config)
                      backoff-grpc-connect-subscribe
                      backoff-http-poll
                      (count (:dlp-fields runtime-config))))
    (future
      (try
        (cp/run-controller {:org (get (mount/args) :org "")
                            :well-known-jwks well-known-jwks
                            :dlp-fields dlp-fields
                            :backoff-subscribe-ms backoff-grpc-connect-subscribe})
        (catch Throwable e
          (log/error e "failed running control plane controller, shuting down process!")
          (sentry-task-logger e {:mode "grpc"} "failed running control plane controller")
          (System/exit 1))))
    (http/poll dlp-fields backoff-http-poll)))
