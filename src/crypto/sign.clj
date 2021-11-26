(ns crypto.sign
  (:require [buddy.core.keys :as keys]
            [clojure.data.json :as json]
            [buddy.sign.jwt :as jwt]
            [buddy.core.codecs.base64 :as base64]
            [clojure.walk :refer [keywordize-keys]]))

(defn- parse-token-header [jwt-token]
  (->> jwt-token
       (#(clojure.string/split % #"\."))
       (#(if (< (count %) 3) (throw (ex-info "malformed jwt token" {:type :validation :cause :malformed-token}))
             %))
       (#(base64/decode (first %)))
       (String.)
       (json/read-str)
       (keywordize-keys)))

(defn verify-sig
  "Parse jwt token and find the correspond kid in the jwks structure and returns a map with all claims"
  [jwt-token well-known-jwks]
  (let [token-header (parse-token-header jwt-token)
        jwt-kid (:kid token-header)
        jwk-pubkey (first (filter #(= jwt-kid (:kid %)) (:keys well-known-jwks)))
        pubkey (when (not (nil? jwk-pubkey)) (keys/jwk->public-key jwk-pubkey))
        alg (case (:alg token-header)
              "RS256" :rs256
              "ES256" :es256
              nil)]
    (cond
      (nil? alg) (throw (ex-info (format "jwt token algorithm [%s] not supported" (:alg token-header))
                                 {:type :validation :cause :alg}))
      (nil? pubkey) (throw (ex-info (format "jwt token kid [%s] not found in well-known jwks" jwt-kid)
                                    {:type :validation :cause :kid}))
      :else (assoc (jwt/unsign jwt-token pubkey {:alg alg})
                   :header token-header))))
