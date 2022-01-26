;;;----------------------------------------------------------------------------------
;;; Generated by protoc-gen-clojure.  DO NOT EDIT
;;;
;;; Message Implementation of package io.grpc
;;;----------------------------------------------------------------------------------
(ns io.grpc
  (:require [protojure.protobuf.protocol :as pb]
            [protojure.protobuf.serdes.core :as serdes.core]
            [protojure.protobuf.serdes.complex :as serdes.complex]
            [protojure.protobuf.serdes.utils :refer [tag-map]]
            [protojure.protobuf.serdes.stream :as serdes.stream]
            [clojure.set :as set]
            [clojure.spec.alpha :as s]))

;;----------------------------------------------------------------------------------
;;----------------------------------------------------------------------------------
;; Forward declarations
;;----------------------------------------------------------------------------------
;;----------------------------------------------------------------------------------

(declare cis->EventRequest-RuntimeDataEntry)
(declare ecis->EventRequest-RuntimeDataEntry)
(declare new-EventRequest-RuntimeDataEntry)
(declare cis->RuntimeConfigurationResponse)
(declare ecis->RuntimeConfigurationResponse)
(declare new-RuntimeConfigurationResponse)
(declare cis->SubscriberRequest)
(declare ecis->SubscriberRequest)
(declare new-SubscriberRequest)
(declare cis->HealthRequest)
(declare ecis->HealthRequest)
(declare new-HealthRequest)
(declare cis->LogsRequest)
(declare ecis->LogsRequest)
(declare new-LogsRequest)
(declare cis->LogsResponse)
(declare ecis->LogsResponse)
(declare new-LogsResponse)
(declare cis->ConnectionConfig)
(declare ecis->ConnectionConfig)
(declare new-ConnectionConfig)
(declare cis->EventRequest)
(declare ecis->EventRequest)
(declare new-EventRequest)
(declare cis->TaskResponse)
(declare ecis->TaskResponse)
(declare new-TaskResponse)


;;----------------------------------------------------------------------------------
;;----------------------------------------------------------------------------------
;; Message Implementations
;;----------------------------------------------------------------------------------
;;----------------------------------------------------------------------------------

;-----------------------------------------------------------------------------
; EventRequest-RuntimeDataEntry
;-----------------------------------------------------------------------------
(defrecord EventRequest-RuntimeDataEntry-record [key value]
  pb/Writer
  (serialize [this os]
    (serdes.core/write-String 1  {:optimize true} (:key this) os)
    (serdes.core/write-String 2  {:optimize true} (:value this) os))
  pb/TypeReflection
  (gettype [this]
    "io.grpc.EventRequest-RuntimeDataEntry"))

(s/def :io.grpc.EventRequest-RuntimeDataEntry/key string?)
(s/def :io.grpc.EventRequest-RuntimeDataEntry/value string?)
(s/def ::EventRequest-RuntimeDataEntry-spec (s/keys :opt-un [:io.grpc.EventRequest-RuntimeDataEntry/key :io.grpc.EventRequest-RuntimeDataEntry/value ]))
(def EventRequest-RuntimeDataEntry-defaults {:key "" :value "" })

(defn cis->EventRequest-RuntimeDataEntry
  "CodedInputStream to EventRequest-RuntimeDataEntry"
  [is]
  (->> (tag-map EventRequest-RuntimeDataEntry-defaults
         (fn [tag index]
             (case index
               1 [:key (serdes.core/cis->String is)]
               2 [:value (serdes.core/cis->String is)]

               [index (serdes.core/cis->undefined tag is)]))
         is)
        (map->EventRequest-RuntimeDataEntry-record)))

(defn ecis->EventRequest-RuntimeDataEntry
  "Embedded CodedInputStream to EventRequest-RuntimeDataEntry"
  [is]
  (serdes.core/cis->embedded cis->EventRequest-RuntimeDataEntry is))

(defn new-EventRequest-RuntimeDataEntry
  "Creates a new instance from a map, similar to map->EventRequest-RuntimeDataEntry except that
  it properly accounts for nested messages, when applicable.
  "
  [init]
  {:pre [(if (s/valid? ::EventRequest-RuntimeDataEntry-spec init) true (throw (ex-info "Invalid input" (s/explain-data ::EventRequest-RuntimeDataEntry-spec init))))]}
  (-> (merge EventRequest-RuntimeDataEntry-defaults init)
      (map->EventRequest-RuntimeDataEntry-record)))

(defn pb->EventRequest-RuntimeDataEntry
  "Protobuf to EventRequest-RuntimeDataEntry"
  [input]
  (cis->EventRequest-RuntimeDataEntry (serdes.stream/new-cis input)))

(def ^:protojure.protobuf.any/record EventRequest-RuntimeDataEntry-meta {:type "io.grpc.EventRequest-RuntimeDataEntry" :decoder pb->EventRequest-RuntimeDataEntry})

;-----------------------------------------------------------------------------
; RuntimeConfigurationResponse
;-----------------------------------------------------------------------------
(defrecord RuntimeConfigurationResponse-record [hc-dataset org hc-api-key id sentry-env sentry-dsn dlp-auth-b64 dlp-fields connection-config]
  pb/Writer
  (serialize [this os]
    (serdes.core/write-String 3  {:optimize true} (:hc-dataset this) os)
    (serdes.core/write-String 2  {:optimize true} (:org this) os)
    (serdes.core/write-String 4  {:optimize true} (:hc-api-key this) os)
    (serdes.core/write-String 1  {:optimize true} (:id this) os)
    (serdes.core/write-String 6  {:optimize true} (:sentry-env this) os)
    (serdes.core/write-String 5  {:optimize true} (:sentry-dsn this) os)
    (serdes.core/write-String 8  {:optimize true} (:dlp-auth-b64 this) os)
    (serdes.complex/write-repeated serdes.core/write-String 9 (:dlp-fields this) os)
    (serdes.core/write-embedded 7 (:connection-config this) os))
  pb/TypeReflection
  (gettype [this]
    "io.grpc.RuntimeConfigurationResponse"))

(s/def :io.grpc.RuntimeConfigurationResponse/hc-dataset string?)
(s/def :io.grpc.RuntimeConfigurationResponse/org string?)
(s/def :io.grpc.RuntimeConfigurationResponse/hc-api-key string?)
(s/def :io.grpc.RuntimeConfigurationResponse/id string?)
(s/def :io.grpc.RuntimeConfigurationResponse/sentry-env string?)
(s/def :io.grpc.RuntimeConfigurationResponse/sentry-dsn string?)
(s/def :io.grpc.RuntimeConfigurationResponse/dlp-auth-b64 string?)
(s/def :io.grpc.RuntimeConfigurationResponse/dlp-fields (s/every string?))

(s/def ::RuntimeConfigurationResponse-spec (s/keys :opt-un [:io.grpc.RuntimeConfigurationResponse/hc-dataset :io.grpc.RuntimeConfigurationResponse/org :io.grpc.RuntimeConfigurationResponse/hc-api-key :io.grpc.RuntimeConfigurationResponse/id :io.grpc.RuntimeConfigurationResponse/sentry-env :io.grpc.RuntimeConfigurationResponse/sentry-dsn :io.grpc.RuntimeConfigurationResponse/dlp-auth-b64 :io.grpc.RuntimeConfigurationResponse/dlp-fields ]))
(def RuntimeConfigurationResponse-defaults {:hc-dataset "" :org "" :hc-api-key "" :id "" :sentry-env "" :sentry-dsn "" :dlp-auth-b64 "" :dlp-fields [] })

(defn cis->RuntimeConfigurationResponse
  "CodedInputStream to RuntimeConfigurationResponse"
  [is]
  (->> (tag-map RuntimeConfigurationResponse-defaults
         (fn [tag index]
             (case index
               3 [:hc-dataset (serdes.core/cis->String is)]
               2 [:org (serdes.core/cis->String is)]
               4 [:hc-api-key (serdes.core/cis->String is)]
               1 [:id (serdes.core/cis->String is)]
               6 [:sentry-env (serdes.core/cis->String is)]
               5 [:sentry-dsn (serdes.core/cis->String is)]
               8 [:dlp-auth-b64 (serdes.core/cis->String is)]
               9 [:dlp-fields (serdes.complex/cis->repeated serdes.core/cis->String is)]
               7 [:connection-config (ecis->ConnectionConfig is)]

               [index (serdes.core/cis->undefined tag is)]))
         is)
        (map->RuntimeConfigurationResponse-record)))

(defn ecis->RuntimeConfigurationResponse
  "Embedded CodedInputStream to RuntimeConfigurationResponse"
  [is]
  (serdes.core/cis->embedded cis->RuntimeConfigurationResponse is))

(defn new-RuntimeConfigurationResponse
  "Creates a new instance from a map, similar to map->RuntimeConfigurationResponse except that
  it properly accounts for nested messages, when applicable.
  "
  [init]
  {:pre [(if (s/valid? ::RuntimeConfigurationResponse-spec init) true (throw (ex-info "Invalid input" (s/explain-data ::RuntimeConfigurationResponse-spec init))))]}
  (-> (merge RuntimeConfigurationResponse-defaults init)
      (cond-> (some? (get init :connection-config)) (update :connection-config new-ConnectionConfig))
      (map->RuntimeConfigurationResponse-record)))

(defn pb->RuntimeConfigurationResponse
  "Protobuf to RuntimeConfigurationResponse"
  [input]
  (cis->RuntimeConfigurationResponse (serdes.stream/new-cis input)))

(def ^:protojure.protobuf.any/record RuntimeConfigurationResponse-meta {:type "io.grpc.RuntimeConfigurationResponse" :decoder pb->RuntimeConfigurationResponse})

;-----------------------------------------------------------------------------
; SubscriberRequest
;-----------------------------------------------------------------------------
(defrecord SubscriberRequest-record [tags version revision hostname machine-id boot feature-keep-alive]
  pb/Writer
  (serialize [this os]
    (serdes.core/write-String 1  {:optimize true} (:tags this) os)
    (serdes.core/write-String 2  {:optimize true} (:version this) os)
    (serdes.core/write-String 3  {:optimize true} (:revision this) os)
    (serdes.core/write-String 4  {:optimize true} (:hostname this) os)
    (serdes.core/write-String 5  {:optimize true} (:machine-id this) os)
    (serdes.core/write-Bool 6  {:optimize true} (:boot this) os)
    (serdes.core/write-Bool 7  {:optimize true} (:feature-keep-alive this) os))
  pb/TypeReflection
  (gettype [this]
    "io.grpc.SubscriberRequest"))

(s/def :io.grpc.SubscriberRequest/tags string?)
(s/def :io.grpc.SubscriberRequest/version string?)
(s/def :io.grpc.SubscriberRequest/revision string?)
(s/def :io.grpc.SubscriberRequest/hostname string?)
(s/def :io.grpc.SubscriberRequest/machine-id string?)
(s/def :io.grpc.SubscriberRequest/boot boolean?)
(s/def :io.grpc.SubscriberRequest/feature-keep-alive boolean?)
(s/def ::SubscriberRequest-spec (s/keys :opt-un [:io.grpc.SubscriberRequest/tags :io.grpc.SubscriberRequest/version :io.grpc.SubscriberRequest/revision :io.grpc.SubscriberRequest/hostname :io.grpc.SubscriberRequest/machine-id :io.grpc.SubscriberRequest/boot :io.grpc.SubscriberRequest/feature-keep-alive ]))
(def SubscriberRequest-defaults {:tags "" :version "" :revision "" :hostname "" :machine-id "" :boot false :feature-keep-alive false })

(defn cis->SubscriberRequest
  "CodedInputStream to SubscriberRequest"
  [is]
  (->> (tag-map SubscriberRequest-defaults
         (fn [tag index]
             (case index
               1 [:tags (serdes.core/cis->String is)]
               2 [:version (serdes.core/cis->String is)]
               3 [:revision (serdes.core/cis->String is)]
               4 [:hostname (serdes.core/cis->String is)]
               5 [:machine-id (serdes.core/cis->String is)]
               6 [:boot (serdes.core/cis->Bool is)]
               7 [:feature-keep-alive (serdes.core/cis->Bool is)]

               [index (serdes.core/cis->undefined tag is)]))
         is)
        (map->SubscriberRequest-record)))

(defn ecis->SubscriberRequest
  "Embedded CodedInputStream to SubscriberRequest"
  [is]
  (serdes.core/cis->embedded cis->SubscriberRequest is))

(defn new-SubscriberRequest
  "Creates a new instance from a map, similar to map->SubscriberRequest except that
  it properly accounts for nested messages, when applicable.
  "
  [init]
  {:pre [(if (s/valid? ::SubscriberRequest-spec init) true (throw (ex-info "Invalid input" (s/explain-data ::SubscriberRequest-spec init))))]}
  (-> (merge SubscriberRequest-defaults init)
      (map->SubscriberRequest-record)))

(defn pb->SubscriberRequest
  "Protobuf to SubscriberRequest"
  [input]
  (cis->SubscriberRequest (serdes.stream/new-cis input)))

(def ^:protojure.protobuf.any/record SubscriberRequest-meta {:type "io.grpc.SubscriberRequest" :decoder pb->SubscriberRequest})

;-----------------------------------------------------------------------------
; HealthRequest
;-----------------------------------------------------------------------------
(defrecord HealthRequest-record []
  pb/Writer
  (serialize [this os]
)
  pb/TypeReflection
  (gettype [this]
    "io.grpc.HealthRequest"))

(s/def ::HealthRequest-spec (s/keys :opt-un []))
(def HealthRequest-defaults {})

(defn cis->HealthRequest
  "CodedInputStream to HealthRequest"
  [is]
  (->> (tag-map HealthRequest-defaults
         (fn [tag index]
             (case index
               [index (serdes.core/cis->undefined tag is)]))
         is)
        (map->HealthRequest-record)))

(defn ecis->HealthRequest
  "Embedded CodedInputStream to HealthRequest"
  [is]
  (serdes.core/cis->embedded cis->HealthRequest is))

(defn new-HealthRequest
  "Creates a new instance from a map, similar to map->HealthRequest except that
  it properly accounts for nested messages, when applicable.
  "
  [init]
  {:pre [(if (s/valid? ::HealthRequest-spec init) true (throw (ex-info "Invalid input" (s/explain-data ::HealthRequest-spec init))))]}
  (-> (merge HealthRequest-defaults init)
      (map->HealthRequest-record)))

(defn pb->HealthRequest
  "Protobuf to HealthRequest"
  [input]
  (cis->HealthRequest (serdes.stream/new-cis input)))

(def ^:protojure.protobuf.any/record HealthRequest-meta {:type "io.grpc.HealthRequest" :decoder pb->HealthRequest})

;-----------------------------------------------------------------------------
; LogsRequest
;-----------------------------------------------------------------------------
(defrecord LogsRequest-record [id status logs redacted]
  pb/Writer
  (serialize [this os]
    (serdes.core/write-Int32 1  {:optimize true} (:id this) os)
    (serdes.core/write-String 2  {:optimize true} (:status this) os)
    (serdes.core/write-String 3  {:optimize true} (:logs this) os)
    (serdes.core/write-Bool 4  {:optimize true} (:redacted this) os))
  pb/TypeReflection
  (gettype [this]
    "io.grpc.LogsRequest"))

(s/def :io.grpc.LogsRequest/id int?)
(s/def :io.grpc.LogsRequest/status string?)
(s/def :io.grpc.LogsRequest/logs string?)
(s/def :io.grpc.LogsRequest/redacted boolean?)
(s/def ::LogsRequest-spec (s/keys :opt-un [:io.grpc.LogsRequest/id :io.grpc.LogsRequest/status :io.grpc.LogsRequest/logs :io.grpc.LogsRequest/redacted ]))
(def LogsRequest-defaults {:id 0 :status "" :logs "" :redacted false })

(defn cis->LogsRequest
  "CodedInputStream to LogsRequest"
  [is]
  (->> (tag-map LogsRequest-defaults
         (fn [tag index]
             (case index
               1 [:id (serdes.core/cis->Int32 is)]
               2 [:status (serdes.core/cis->String is)]
               3 [:logs (serdes.core/cis->String is)]
               4 [:redacted (serdes.core/cis->Bool is)]

               [index (serdes.core/cis->undefined tag is)]))
         is)
        (map->LogsRequest-record)))

(defn ecis->LogsRequest
  "Embedded CodedInputStream to LogsRequest"
  [is]
  (serdes.core/cis->embedded cis->LogsRequest is))

(defn new-LogsRequest
  "Creates a new instance from a map, similar to map->LogsRequest except that
  it properly accounts for nested messages, when applicable.
  "
  [init]
  {:pre [(if (s/valid? ::LogsRequest-spec init) true (throw (ex-info "Invalid input" (s/explain-data ::LogsRequest-spec init))))]}
  (-> (merge LogsRequest-defaults init)
      (map->LogsRequest-record)))

(defn pb->LogsRequest
  "Protobuf to LogsRequest"
  [input]
  (cis->LogsRequest (serdes.stream/new-cis input)))

(def ^:protojure.protobuf.any/record LogsRequest-meta {:type "io.grpc.LogsRequest" :decoder pb->LogsRequest})

;-----------------------------------------------------------------------------
; LogsResponse
;-----------------------------------------------------------------------------
(defrecord LogsResponse-record [message]
  pb/Writer
  (serialize [this os]
    (serdes.core/write-String 1  {:optimize true} (:message this) os))
  pb/TypeReflection
  (gettype [this]
    "io.grpc.LogsResponse"))

(s/def :io.grpc.LogsResponse/message string?)
(s/def ::LogsResponse-spec (s/keys :opt-un [:io.grpc.LogsResponse/message ]))
(def LogsResponse-defaults {:message "" })

(defn cis->LogsResponse
  "CodedInputStream to LogsResponse"
  [is]
  (->> (tag-map LogsResponse-defaults
         (fn [tag index]
             (case index
               1 [:message (serdes.core/cis->String is)]

               [index (serdes.core/cis->undefined tag is)]))
         is)
        (map->LogsResponse-record)))

(defn ecis->LogsResponse
  "Embedded CodedInputStream to LogsResponse"
  [is]
  (serdes.core/cis->embedded cis->LogsResponse is))

(defn new-LogsResponse
  "Creates a new instance from a map, similar to map->LogsResponse except that
  it properly accounts for nested messages, when applicable.
  "
  [init]
  {:pre [(if (s/valid? ::LogsResponse-spec init) true (throw (ex-info "Invalid input" (s/explain-data ::LogsResponse-spec init))))]}
  (-> (merge LogsResponse-defaults init)
      (map->LogsResponse-record)))

(defn pb->LogsResponse
  "Protobuf to LogsResponse"
  [input]
  (cis->LogsResponse (serdes.stream/new-cis input)))

(def ^:protojure.protobuf.any/record LogsResponse-meta {:type "io.grpc.LogsResponse" :decoder pb->LogsResponse})

;-----------------------------------------------------------------------------
; ConnectionConfig
;-----------------------------------------------------------------------------
(defrecord ConnectionConfig-record [backoff-http-poll backoff-grpc-connect-subscribe grpc-connect-channel-timeout]
  pb/Writer
  (serialize [this os]
    (serdes.core/write-Int32 1  {:optimize true} (:backoff-http-poll this) os)
    (serdes.core/write-Int32 2  {:optimize true} (:backoff-grpc-connect-subscribe this) os)
    (serdes.core/write-Int32 3  {:optimize true} (:grpc-connect-channel-timeout this) os))
  pb/TypeReflection
  (gettype [this]
    "io.grpc.ConnectionConfig"))

(s/def :io.grpc.ConnectionConfig/backoff-http-poll int?)
(s/def :io.grpc.ConnectionConfig/backoff-grpc-connect-subscribe int?)
(s/def :io.grpc.ConnectionConfig/grpc-connect-channel-timeout int?)
(s/def ::ConnectionConfig-spec (s/keys :opt-un [:io.grpc.ConnectionConfig/backoff-http-poll :io.grpc.ConnectionConfig/backoff-grpc-connect-subscribe :io.grpc.ConnectionConfig/grpc-connect-channel-timeout ]))
(def ConnectionConfig-defaults {:backoff-http-poll 0 :backoff-grpc-connect-subscribe 0 :grpc-connect-channel-timeout 0 })

(defn cis->ConnectionConfig
  "CodedInputStream to ConnectionConfig"
  [is]
  (->> (tag-map ConnectionConfig-defaults
         (fn [tag index]
             (case index
               1 [:backoff-http-poll (serdes.core/cis->Int32 is)]
               2 [:backoff-grpc-connect-subscribe (serdes.core/cis->Int32 is)]
               3 [:grpc-connect-channel-timeout (serdes.core/cis->Int32 is)]

               [index (serdes.core/cis->undefined tag is)]))
         is)
        (map->ConnectionConfig-record)))

(defn ecis->ConnectionConfig
  "Embedded CodedInputStream to ConnectionConfig"
  [is]
  (serdes.core/cis->embedded cis->ConnectionConfig is))

(defn new-ConnectionConfig
  "Creates a new instance from a map, similar to map->ConnectionConfig except that
  it properly accounts for nested messages, when applicable.
  "
  [init]
  {:pre [(if (s/valid? ::ConnectionConfig-spec init) true (throw (ex-info "Invalid input" (s/explain-data ::ConnectionConfig-spec init))))]}
  (-> (merge ConnectionConfig-defaults init)
      (map->ConnectionConfig-record)))

(defn pb->ConnectionConfig
  "Protobuf to ConnectionConfig"
  [input]
  (cis->ConnectionConfig (serdes.stream/new-cis input)))

(def ^:protojure.protobuf.any/record ConnectionConfig-meta {:type "io.grpc.ConnectionConfig" :decoder pb->ConnectionConfig})

;-----------------------------------------------------------------------------
; EventRequest
;-----------------------------------------------------------------------------
(defrecord EventRequest-record [runtime-data]
  pb/Writer
  (serialize [this os]
    (serdes.complex/write-map new-EventRequest-RuntimeDataEntry 1 (:runtime-data this) os))
  pb/TypeReflection
  (gettype [this]
    "io.grpc.EventRequest"))

(s/def ::EventRequest-spec (s/keys :opt-un []))
(def EventRequest-defaults {:runtime-data [] })

(defn cis->EventRequest
  "CodedInputStream to EventRequest"
  [is]
  (->> (tag-map EventRequest-defaults
         (fn [tag index]
             (case index
               1 [:runtime-data (serdes.complex/cis->map ecis->EventRequest-RuntimeDataEntry is)]

               [index (serdes.core/cis->undefined tag is)]))
         is)
        (map->EventRequest-record)))

(defn ecis->EventRequest
  "Embedded CodedInputStream to EventRequest"
  [is]
  (serdes.core/cis->embedded cis->EventRequest is))

(defn new-EventRequest
  "Creates a new instance from a map, similar to map->EventRequest except that
  it properly accounts for nested messages, when applicable.
  "
  [init]
  {:pre [(if (s/valid? ::EventRequest-spec init) true (throw (ex-info "Invalid input" (s/explain-data ::EventRequest-spec init))))]}
  (-> (merge EventRequest-defaults init)
      (map->EventRequest-record)))

(defn pb->EventRequest
  "Protobuf to EventRequest"
  [input]
  (cis->EventRequest (serdes.stream/new-cis input)))

(def ^:protojure.protobuf.any/record EventRequest-meta {:type "io.grpc.EventRequest" :decoder pb->EventRequest})

;-----------------------------------------------------------------------------
; TaskResponse
;-----------------------------------------------------------------------------
(defrecord TaskResponse-record [token config custom-command x-b3-parent-span-id id secret-provider pre-signed-upload-url script keep-alive-task secret-path type secret-mapping redact x-b3-trace-id]
  pb/Writer
  (serialize [this os]
    (serdes.core/write-String 11  {:optimize true} (:token this) os)
    (serdes.core/write-String 7  {:optimize true} (:config this) os)
    (serdes.core/write-String 10  {:optimize true} (:custom-command this) os)
    (serdes.core/write-String 9  {:optimize true} (:x-b3-parent-span-id this) os)
    (serdes.core/write-Int32 1  {:optimize true} (:id this) os)
    (serdes.core/write-String 4  {:optimize true} (:secret-provider this) os)
    (serdes.core/write-String 14  {:optimize true} (:pre-signed-upload-url this) os)
    (serdes.core/write-String 3  {:optimize true} (:script this) os)
    (serdes.core/write-Bool 12  {:optimize true} (:keep-alive-task this) os)
    (serdes.core/write-String 5  {:optimize true} (:secret-path this) os)
    (serdes.core/write-String 2  {:optimize true} (:type this) os)
    (serdes.core/write-String 6  {:optimize true} (:secret-mapping this) os)
    (serdes.core/write-String 13  {:optimize true} (:redact this) os)
    (serdes.core/write-String 8  {:optimize true} (:x-b3-trace-id this) os))
  pb/TypeReflection
  (gettype [this]
    "io.grpc.TaskResponse"))

(s/def :io.grpc.TaskResponse/token string?)
(s/def :io.grpc.TaskResponse/config string?)
(s/def :io.grpc.TaskResponse/custom-command string?)
(s/def :io.grpc.TaskResponse/x-b3-parent-span-id string?)
(s/def :io.grpc.TaskResponse/id int?)
(s/def :io.grpc.TaskResponse/secret-provider string?)
(s/def :io.grpc.TaskResponse/pre-signed-upload-url string?)
(s/def :io.grpc.TaskResponse/script string?)
(s/def :io.grpc.TaskResponse/keep-alive-task boolean?)
(s/def :io.grpc.TaskResponse/secret-path string?)
(s/def :io.grpc.TaskResponse/type string?)
(s/def :io.grpc.TaskResponse/secret-mapping string?)
(s/def :io.grpc.TaskResponse/redact string?)
(s/def :io.grpc.TaskResponse/x-b3-trace-id string?)
(s/def ::TaskResponse-spec (s/keys :opt-un [:io.grpc.TaskResponse/token :io.grpc.TaskResponse/config :io.grpc.TaskResponse/custom-command :io.grpc.TaskResponse/x-b3-parent-span-id :io.grpc.TaskResponse/id :io.grpc.TaskResponse/secret-provider :io.grpc.TaskResponse/pre-signed-upload-url :io.grpc.TaskResponse/script :io.grpc.TaskResponse/keep-alive-task :io.grpc.TaskResponse/secret-path :io.grpc.TaskResponse/type :io.grpc.TaskResponse/secret-mapping :io.grpc.TaskResponse/redact :io.grpc.TaskResponse/x-b3-trace-id ]))
(def TaskResponse-defaults {:token "" :config "" :custom-command "" :x-b3-parent-span-id "" :id 0 :secret-provider "" :pre-signed-upload-url "" :script "" :keep-alive-task false :secret-path "" :type "" :secret-mapping "" :redact "" :x-b3-trace-id "" })

(defn cis->TaskResponse
  "CodedInputStream to TaskResponse"
  [is]
  (->> (tag-map TaskResponse-defaults
         (fn [tag index]
             (case index
               11 [:token (serdes.core/cis->String is)]
               7 [:config (serdes.core/cis->String is)]
               10 [:custom-command (serdes.core/cis->String is)]
               9 [:x-b3-parent-span-id (serdes.core/cis->String is)]
               1 [:id (serdes.core/cis->Int32 is)]
               4 [:secret-provider (serdes.core/cis->String is)]
               14 [:pre-signed-upload-url (serdes.core/cis->String is)]
               3 [:script (serdes.core/cis->String is)]
               12 [:keep-alive-task (serdes.core/cis->Bool is)]
               5 [:secret-path (serdes.core/cis->String is)]
               2 [:type (serdes.core/cis->String is)]
               6 [:secret-mapping (serdes.core/cis->String is)]
               13 [:redact (serdes.core/cis->String is)]
               8 [:x-b3-trace-id (serdes.core/cis->String is)]

               [index (serdes.core/cis->undefined tag is)]))
         is)
        (map->TaskResponse-record)))

(defn ecis->TaskResponse
  "Embedded CodedInputStream to TaskResponse"
  [is]
  (serdes.core/cis->embedded cis->TaskResponse is))

(defn new-TaskResponse
  "Creates a new instance from a map, similar to map->TaskResponse except that
  it properly accounts for nested messages, when applicable.
  "
  [init]
  {:pre [(if (s/valid? ::TaskResponse-spec init) true (throw (ex-info "Invalid input" (s/explain-data ::TaskResponse-spec init))))]}
  (-> (merge TaskResponse-defaults init)
      (map->TaskResponse-record)))

(defn pb->TaskResponse
  "Protobuf to TaskResponse"
  [input]
  (cis->TaskResponse (serdes.stream/new-cis input)))

(def ^:protojure.protobuf.any/record TaskResponse-meta {:type "io.grpc.TaskResponse" :decoder pb->TaskResponse})

