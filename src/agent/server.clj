(ns agent.server
  (:require [yada.yada :refer [listener resource as-resource handler]]
            [schema.core :as s]
            [agent.secrets :as secrets]
            [agent.errors :as err]))



;; yada
(def secret-resource
  (resource {:id      :resources/secrets
             :methods {:post {:consumes   "application/json"
                              :produces   "application/json"
                              :parameters {:body s/Any}
                              :response
                                          (fn [ctx]
                                            (let [result (err/err->> (:body ctx)
                                                                     secrets/persist-secret)]
                                              (if (first result)
                                                (first result)
                                                (:body ctx))))}

                       :get  {:produces "application/json"
                              :response (fn [ctx]
                                          (let [result (err/err->> {}
                                                                   secrets/get-filesystem-secret)]
                                            (if (first result)
                                              (:secrets (first result))
                                              (second result))))}}}))

(defn listen-http []
  (listener
    ["/"
     [
      ["secrets" secret-resource]
      [true (as-resource nil)]]]
    {:port 3000}))
