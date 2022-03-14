(ns agent.core
  (:require [agent.clients :as _]
            [version.version :refer [git-revision]]
            [logger.timbre :as log]
            [taoensso.timbre :refer [merge-config! set-config!
                                     handle-uncaught-jvm-exceptions!]]
            [environ.core :refer [env]]
            [logger.timbre-json :as timbre-json]
            [taoensso.timbre.appenders.core :as appenders]
            [clojure.core.async :as async]
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
;; (merge-config! {:output-fn timbre-json/output-fn})
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
    (future (grpc/listen-subscription {:well-known-jwks well-known-jwks
                                       :dlp-fields dlp-fields
                                       :channel-timeout-ms grpc-channel-timeout
                                       :backoff-subscribe-ms backoff-grpc-connect-subscribe}))
    (http/poll dlp-fields backoff-http-poll)))

(defn fake-server
  "A fake implementation of a bi directional streaming used for testing purposes."
  []
  (when @grpc/rpc-in-channel (async/close! @grpc/rpc-in-channel))
  (when @grpc/rpc-out-channel (async/close! @grpc/rpc-out-channel))
  (reset! grpc/rpc-in-channel (async/chan 1))
  (reset! grpc/rpc-out-channel (async/chan 1))
  (async/thread
    (loop []
      (when-some [object (async/<!! @grpc/rpc-in-channel)]
        (log/info (format "processing rpc-in message, object=%s" object))
        (try
          (grpc/process-rpc {:kind (:kind object) :spec (:spec object)})
          (catch Exception e
            (println (.getMessage e))))
        (recur)))
    (log/info "end of rpc-in thread"))
  (async/thread
    (loop []
      (when-some [object (async/<!! @grpc/rpc-out-channel)]
        (log/info (format "received response from agent, object=%s" object))
        (recur)))
    (log/info "end of rpc-out thread")))

(comment
  ;; add .lein-env in the base of the agent directory before starting a REPL
  ;; {:token "<runops-agent-token>" :tags "local" :debug_output "true"}
  (fake-server)
  (-> (mount/only #{#'tracer.honeycomb/honeycomb-sdk})
      mount/start)

  (async/>!! @grpc/rpc-in-channel {:kind "KeepAliveRequest"
                                   :spec nil})
  ;; make sure to use an id from a test org!!
  ;; retrieve the logs running: runops tasks logs --id 39529
  (async/>!! @grpc/rpc-in-channel {:kind "TaskExecutionRequest"
                                   :spec (agent.types/clj->json
                                          agent.types/TaskExecutionRequest
                                          {:id "39529"
                                           :type "python"
                                           :script "import os,time\ntime.sleep(40)\nprint('end')"
                                           :config nil
                                           :redact "none"})})

  ;; add the keys {(...) :secret-path :pg-config :pg-config "<FLAT_JSON>"} in .lein-env
  (async/>!! @grpc/rpc-in-channel {:kind "TaskExecutionRequest"
                                   :spec (agent.types/clj->json
                                          agent.types/TaskExecutionRequest
                                          {:id "39529"
                                           :type "postgres"
                                           :script "SELECT pg_sleep(30); SELECT * FROM accounts"
                                           :secret-provider "env-var"
                                           :secret-path "PG_CONFIG"
                                           :config nil
                                           :redact "none"})})

  ;; (async/close! (get-in @grpc/proc-chan-atom [:39529 :in]))
  (async/>!! @grpc/rpc-in-channel {:kind "TaskStatusRequest"
                                   :spec (agent.types/clj->json
                                          agent.types/TaskStatusRequest
                                          {:id "39529"})})
  (async/>!! @grpc/rpc-in-channel {:kind "KillTaskRequest"
                                   :spec (agent.types/clj->json
                                          agent.types/KillTaskRequest
                                          {:id "39529"})}))
