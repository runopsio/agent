;;;----------------------------------------------------------------------------------
;;; Generated by protoc-gen-clojure.  DO NOT EDIT
;;;
;;; GRPC io.grpc.Agent Client Implementation
;;;----------------------------------------------------------------------------------
(ns io.grpc.Agent.client
  (:require [io.grpc :refer :all]
            [clojure.core.async :as async]
            [protojure.grpc.client.utils :refer [send-unary-params invoke-unary]]
            [promesa.core :as p]
            [protojure.grpc.client.api :as grpc]))

;-----------------------------------------------------------------------------
; GRPC Client Implementation
;-----------------------------------------------------------------------------

(defn Subscribe
  ([client params reply] (Subscribe client {} params reply))
  ([client metadata params reply]
  (let [input (async/chan 1)
        desc {:service "io.grpc.Agent"
              :method  "Subscribe"
              :input   {:f io.grpc/new-SubscriberRequest :ch input}
              :output  {:f io.grpc/pb->TaskResponse :ch reply}
              :metadata metadata}]
    (-> (send-unary-params input params)
        (p/then (fn [_] (grpc/invoke client desc)))))))

(defn Webhook
  ([client params] (Webhook client {} params))
  ([client metadata params]
  (let [input (async/chan 1)
        output (async/chan 1)
        desc {:service "io.grpc.Agent"
              :method  "Webhook"
              :input   {:f io.grpc/new-LogsRequest :ch input}
              :output  {:f io.grpc/pb->LogsResponse :ch output}
              :metadata metadata}]
    (-> (send-unary-params input params)
        (p/then (fn [_] (invoke-unary client desc output)))))))

(defn Health
  ([client params] (Health client {} params))
  ([client metadata params]
  (let [input (async/chan 1)
        output (async/chan 1)
        desc {:service "io.grpc.Agent"
              :method  "Health"
              :input   {:f io.grpc/new-HealthRequest :ch input}
              :output  {:f io.grpc/pb->HealthRequest :ch output}
              :metadata metadata}]
    (-> (send-unary-params input params)
        (p/then (fn [_] (invoke-unary client desc output)))))))

