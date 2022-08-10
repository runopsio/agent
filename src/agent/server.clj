(ns agent.server
  (:require [agent.secrets :as secrets]
            [compojure.core :as compojure :refer [GET POST]]
            [ring.middleware.params :as params]
            [compojure.route :as route]
            [aleph.http :as http]
            [clojure.data.json :as json]))


(defn get-secrets-handler [req]
  (let [result (secrets/get-filesystem-secret {})]
    (if (first result)
      {:status 200
       :headers {"content-type" "application/json"}
       :body (-> (first result)
                 (:secrets)
                 (json/write-str))}
      {:status 404
       :headers {"content-type" "application/json"}
       :body "{\"message\": \"secrets not found\"}"})))

(defn post-secrets-handler [req]
  (let [body (slurp (:body req))
        result (secrets/persist-secret body)]
    (if (first result)
      body
      {:status 400
       :headers {"content-type" "application/json"}
       :body "{\"message\": \"failed to persist secrets\"}"})))

(def handler
  (params/wrap-params
    (compojure/routes
      (GET "/secrets" [] get-secrets-handler)
      (POST "/secrets" [] post-secrets-handler)
      (route/not-found "Not found"))))

(defn listen-http []
  (http/start-server handler {:port 3000}))
