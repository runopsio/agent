(ns agent.types
  (:require [schema.core :as s]
            [clojure.walk :refer [keywordize-keys]]
            [clojure.data.json :as json]))

(s/defschema TaskExecutionRequest
  "api -> agent"
  {:id s/Int
   :type (s/enum "bash" "ecs-exec" "elixir" "hashicorp-vault" "k8s" "k8s-apply"
                 "k8s-exec" "mongodb" "mysql" "mysql-csv" "node" "postgres" "postgres-csv"
                 "python" "rails" "rails-console" "rails-console-ecs" "rails-console-k8s"
                 "sql-server")
   :script s/Str
   (s/optional-key :config) (s/maybe s/Str)
   (s/optional-key :redact) (s/maybe (s/enum "all" "none"))
   (s/optional-key :secret-provider) (s/maybe (s/enum "runops" "aws" "env-var"
                                                      "hashicorp/db" "hashicorp/kv"))
   (s/optional-key :secret-path) (s/maybe s/Str)
   (s/optional-key :secret-mapping) (s/maybe s/Str)
   (s/optional-key :custom-command) (s/maybe s/Str)
   (s/optional-key :token) (s/maybe s/Str)
   (s/optional-key :pre-signed-upload-url) (s/maybe s/Str)
   ;; metadata keys
   (s/optional-key :target) (s/maybe s/Str)
   (s/optional-key :description) (s/maybe s/Str)
   (s/optional-key :user-email) (s/maybe s/Str)
   s/Any s/Any})

(s/defschema TaskStatusRequest
  "api -> agent"
  {:id s/Int
   s/Any s/Any})

(s/defschema TaskStatusResponse
  "agent -> api"
  {:id s/Int
   :thread-id s/Int
   :name s/Str
   :block s/Int
   :daemon s/Bool
   :process-state (s/enum "RUNNING" "DEAD" "UNKNOWN")
   :process-root (s/maybe {:pid s/Int :alive s/Bool})
   :process-childrens (s/maybe [{:pid s/Int :alive s/Bool}])
   ;; https://docs.oracle.com/javase/7/docs/api/java/lang/Thread.State.html
   :state (s/enum "NEW" "RUNNABLE" "BLOCKED" "WAITING" "TIMED_WAITING" "TERMINATED" "NOT_FOUND")
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
  {:id s/Int
   s/Any s/Any})

(s/defschema KillTaskResponse
  "agent -> api"
  TaskStatusResponse)

(def TaskStatusNotFound
  {:id -1
   :name ""
   :thread-id -1
   :block -1
   :daemon false
   :process-state "UNKNOWN"
   :process-root nil
   :process-childrens nil
   :state "NOT_FOUND"
   :suspended false
   :native false
   :priority -1
   :stack ""
   :wait -1
   :locked-synchronizers ""
   :user -1
   :cpu -1
   :lock nil})

(defn json->clj [type body]
  (s/validate
   type
   (-> body
       json/read-str
       keywordize-keys)))

(defn clj->json [type body]
  (json/write-str
   (s/validate type body)))
