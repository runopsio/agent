(ns agent.types
  (:require [schema.core :as s]
            [clojure.walk :refer [keywordize-keys]]
            [clojure.data.json :as json]))

(s/defschema SubscribeRequest
  "agent -> api"
  {:tags s/Str
   :version s/Str
   :git-revision s/Str
   :distro-name s/Str
   :kernel-version s/Str
   :hostname s/Str
   :jwk-verify s/Bool
   :jwk-url s/Str
   :machine-id s/Str})

(s/defschema TaskExecutionRequest
  "api -> agent"
  {:id s/Str
   :type (s/enum "bash" "ecs-exec" "elixir" "hashicorp-vault" "k8s" "k8s-apply"
                 "k8s-exec" "mongodb" "mysql" "mysql-csv" "node" "postgres" "postgres-csv"
                 "python" "rails" "rails-console" "rails-console-ecs" "rails-console-k8s"
                 "sql-server")
   :script s/Str
   :config (s/maybe s/Str)
   :redact (s/maybe (s/enum "all" "none"))
   (s/optional-key :secret-provider) (s/maybe (s/enum "runops" "aws" "env-var"
                                                      "hashicorp/db" "hashicorp/kv"))
   (s/optional-key :secret-path) (s/maybe s/Str)
   (s/optional-key :secret-mapping) (s/maybe s/Str)
   (s/optional-key :custom-command) (s/maybe s/Str)
   (s/optional-key :token) (s/maybe s/Str)
   (s/optional-key :pre-signed-upload-url) (s/maybe s/Str)
   (s/optional-key :metadata) {s/Str (s/maybe s/Str)}})

(s/defschema TaskStatusRequest
  "api -> agent"
  {:id s/Str})

(s/defschema TaskStatusResponse
  "agent -> api"
  {:id s/Int
   :name s/Str
   :block s/Int
   :daemon s/Bool
   :process-state (s/enum "RUNNING" "DEAD" "UNKNOWN")
   :process-pid s/Int
   ;; https://docs.oracle.com/javase/7/docs/api/java/lang/Thread.State.html
   :state (s/enum "NEW" "RUNNABLE" "BLOCKED" "WAITING" "TIMED_WAITING" "TERMINATED")
   :suspended s/Bool
   :native s/Bool
   :priority s/Int
   :stack s/Str
   :wait s/Int
   :locked-synchronizers s/Str
   :user s/Int
   :cpu s/Int
   :lock (s/maybe s/Str)})

(s/defschema KillTaskRequest
  "api -> agent"
  {:id s/Str})

(s/defschema KillTaskResponse
  "agent -> api"
  TaskStatusResponse)

(defn json->clj [kind spec]
  (s/validate
   kind
   (-> spec
       json/read-str
       keywordize-keys)))

(defn clj->json [kind spec]
  (json/write-str
   (s/validate kind spec)))
