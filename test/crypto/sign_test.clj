(ns crypto.sign-test
  (:require [clojure.test :refer [deftest is testing]]
            [crypto.sign :as crypto]
            [buddy.core.keys :refer [private-key public-key public-key->jwk]]
            [clojure.java.io :refer [input-stream]]
            [buddy.sign.jwt :as jwt]))

;; openssl genrsa -out privkey.pem 2048
(def rsa256-privkey-01 "-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAs83RFJEGC08kmHQGqSlDSiRhrjwDRpNHHuDs17NZVEXCjcz8
yI2BJl4EPZiNV2jJ6GlAd4kUTzIsiPefklAPJT7U4N+4/MYjE+/8W+C5oV/UaFrs
cZO7uIZy7h34oT4N4CXRaZJ0mkMR/Bqxxx9AVWuei4QdPT1dMmWvZCVG2E3+TSwt
qwLsb+/9Ou/RiC1B0BiHJxH46UNmsm+yf1e2nuheseE5BKhxhU7zWAzht1Pql/eY
vYaK8IqWb6aV+JVpgr1qC1uK5FPw1KWBkCXdMtF7dJ1lL9tszB7VqiFC5Do/lW1w
eBJkxUWX/c21PNkMR+MrEInJMADvqQiRHme4/wIDAQABAoIBAAh8XTLASW29NXfw
eeP/64oTP3zuniT1jHS7ntHrR/r/M9hnZUK90uuRoleZ3InUizrpxL4ffRLjxlBM
h35rQtu6JGfchyl+3Gbze5CGgZxJHogySlht5X0m80OjrHlHqXX7su9tlw00vyOL
yvof0nR1mMzy1kJuo/hd7jImxDovF9MQNUQxZQ4QACiVldvw78ekf9aeUhhjV1jn
wB8gQjCOuTLP/5z0mAKLZ6Fncvc2d5/rCn3xY4SkOIcn2R23oPO4vDu7h06JxRx5
pykY+xuKpSOjQo7HncvUi5vk78Jm5IzM+PuVb5w9kwX7wDqzPhuKXZs1laJlnmS8
Sbo2AMkCgYEA54PuRVNNobv36kM7TWwNMkcABU1PI5lkDcQEjb9ll4zE/3kv3mIZ
JI7Q/lwkAe4uI7dSjH176TnVAMaPfaH4mINu/phtC6uUPJG2n8TfeuOEdhhbltJj
joW0bkmYKgnBWcgDCn1xS5av468yK2+bBEEcqgWzlZOsIcKodBn/roMCgYEAxtHY
0jXiYS2MygBAW0MK+mHCDuBzuy57I0cN8fDUducGAno6dvH/3gr76ihEOAs+NO0r
mAu+CJdcraHGii3+rMyDT9lAhC6lFP8VUPiz3lXG9sUXKiapZfoTYPe06OcqG2Dd
NwD3vWtnVSk3H6gKZntwP4aO86IFcpP3IDQvgtUCgYEAg9GPojNbOWJwNxdOtbd3
EBBzB5HMJKXa3SelvBulOZPyOtACnGlYjYMvphRKgDrgVH+15b4xBktiZ02nN844
YIY9dYLOW922yoHg7LlI0YynyCH4TDjAbM7ePAl1NUJWr8r9SETCdFp5DXecZjTm
m5aDPp9+cAUj9hkClxCSjwcCgYA9AG3SMY4/2sXzxJf6aFuZ7xyni952dBB8BnUU
4puNz9xcLjx5+k5TRnN8qNYli+2ON6bEg/XOlQJuk9Bi3THiuu0fNr1A0T79bjaQ
HX6ynQbq+BXfbPVUwKHpgpcTTrnwpIu7MKTSjX2q93ZeVCS8xOrv0s1Rm0iomxWb
3+cj8QKBgQCsonMxwN8brdehbxGU80pKElAjHh0eXom5Br6THP8gl0ykL+7ZbVLV
QcbtN6OWtt0pTc9vJDOBXqIlNWGJnli8M82MiwA13Jqj2o6FF7bP1vimm+QjIYpx
D50VmH5EtWwIJ5JLLmKCrzNogokejXnbULMlNjXxWYoM7VBF0cxRRA==
-----END RSA PRIVATE KEY-----")

;; openssl rsa -pubout -in privkey.pem -out pubkey.pem
(def rsa256-pubkey-01 "-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs83RFJEGC08kmHQGqSlD
SiRhrjwDRpNHHuDs17NZVEXCjcz8yI2BJl4EPZiNV2jJ6GlAd4kUTzIsiPefklAP
JT7U4N+4/MYjE+/8W+C5oV/UaFrscZO7uIZy7h34oT4N4CXRaZJ0mkMR/Bqxxx9A
VWuei4QdPT1dMmWvZCVG2E3+TSwtqwLsb+/9Ou/RiC1B0BiHJxH46UNmsm+yf1e2
nuheseE5BKhxhU7zWAzht1Pql/eYvYaK8IqWb6aV+JVpgr1qC1uK5FPw1KWBkCXd
MtF7dJ1lL9tszB7VqiFC5Do/lW1weBJkxUWX/c21PNkMR+MrEInJMADvqQiRHme4
/wIDAQAB
-----END PUBLIC KEY-----")

(def rsa256-pubkey-02 "-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyVbFwEqRhZyFo5SNjZc9
EcgAnESYr3umih7k4lJ9MK3b5zNOy1cR0Nrfu+X9V061zC7tRMX6Dze91qiWxUAn
p/M0KDJqWIrsZ6P9fzfcL+sSTs6EAu1uOUguox6Y+AL8CpHdnwlz02eRb+kD1e/s
tckN1HkNyAQFPEaFA6+aPH4ofRCRVZP5AmLIndJPMcNxp4oU3JGtt1ltbtYftlfk
iCgyXKn4Xl7bDM3N6A/j3CJ45WciOve1MF7d3XM2/VFHKRhN91Yd5hVQ7rUlYHf2
5uNlVBEio7g7yAYy52foHluwV4PENwth1BYRDr++/jI1kuoncpTRxLeAtHJWaB7J
AwIDAQAB
-----END PUBLIC KEY-----")

(def ecdsa256-privkey "-----BEGIN EC PRIVATE KEY-----
MHcCAQEEIIF5uIfbnlIENX6A1h/tmXHTDT7vfbRwOyrw1OEC5oKVoAoGCCqGSM49
AwEHoUQDQgAEwj5eCxYBlsptuHPxBWkqMIUi95r+joz5YYG7s/OmMCyaLkQrUsLE
ffbSWH0KaxHS6dV72D2GnuWLPHyvdvQfwA==
-----END EC PRIVATE KEY-----")

(def ecdsa256-pubkey "-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEwj5eCxYBlsptuHPxBWkqMIUi95r+
joz5YYG7s/OmMCyaLkQrUsLEffbSWH0KaxHS6dV72D2GnuWLPHyvdvQfwA==
-----END PUBLIC KEY-----")

(deftest validate-algorithms
  (testing "verify rs256 key pair jwt token"
    (let [privkey (private-key (input-stream (.getBytes rsa256-privkey-01)))
          pubkey (public-key (input-stream (.getBytes rsa256-pubkey-01)))
          exp-kid "expected-kid"
          jwk-pubkey {:keys [(assoc (public-key->jwk pubkey) :kid exp-kid)]}
          claims {:iss "https://runops.us.auth0.com/"
                  :sub "google-oauth2|107828005680090926270"
                  :iat (quot (System/currentTimeMillis) 1000)
                  :exp (+ (quot (System/currentTimeMillis) 1000) 2000)}
          headers {:alg :rs256 :header {:kid exp-kid}}
          jwt-token (jwt/sign claims privkey headers)]
      (is (= (crypto/verify-sig jwt-token jwk-pubkey)
             (assoc claims :header {:alg "RS256" :kid exp-kid})))))
  (testing "verify ecdsa256 key pair jwt token"
    (let [privkey (private-key (input-stream (.getBytes ecdsa256-privkey)))
          pubkey (public-key (input-stream (.getBytes ecdsa256-pubkey)))
          exp-kid "expected-kid"
          jwk-pubkey {:keys [(assoc (public-key->jwk pubkey) :kid exp-kid)]}
          claims {:iss "https://runops.us.auth0.com/"
                  :sub "google-oauth2|107828005680090926270"
                  :iat (quot (System/currentTimeMillis) 1000)
                  :exp (+ (quot (System/currentTimeMillis) 1000) 2000)}
          headers {:alg :es256 :header {:kid exp-kid}}
          jwt-token (jwt/sign claims privkey headers)]
      (is (= (crypto/verify-sig jwt-token jwk-pubkey)
             (assoc claims :header {:alg "ES256" :kid exp-kid})))))
  (testing "jwt token algorithm not supported"
    (let [privkey (private-key (input-stream (.getBytes rsa256-privkey-01)))
          pubkey (public-key (input-stream (.getBytes rsa256-pubkey-01)))
          exp-kid "expected-kid"
          jwk-pubkey {:keys [(assoc (public-key->jwk pubkey) :kid exp-kid)]}
          headers {:alg :rs512 :header {:kid exp-kid}}
          jwt-token (jwt/sign {:foo "bar"} privkey headers)]
      (try (crypto/verify-sig jwt-token jwk-pubkey)
           (throw (ex-info "it shouldn't accept this algorithm [RS512]!" {}))
           (catch Exception e
             (is (= (.getMessage e)
                    "jwt token algorithm [RS512] not supported"))))))
  (testing "jwt kid not present inside the jwk structure"
    (let [privkey (private-key (input-stream (.getBytes rsa256-privkey-01)))
          pubkey (public-key (input-stream (.getBytes rsa256-pubkey-01)))
          exp-kid "expected-kid"
          jwk-pubkey {:keys [(assoc (public-key->jwk pubkey) :kid "unknown-jwk-kid")]}
          claims {:iss "https://runops.us.auth0.com/"
                  :sub "google-oauth2|107828005680090926270"
                  :iat (quot (System/currentTimeMillis) 1000)
                  :exp (+ (quot (System/currentTimeMillis) 1000) 2000)}
          headers {:alg :rs256 :header {:kid exp-kid}}
          jwt-token (jwt/sign claims privkey headers)]
      (try (crypto/verify-sig jwt-token jwk-pubkey)
           (throw (ex-info "kid shouldn't be found in well-known jwks!" {}))
           (catch Exception e
             (is (= (.getMessage e)
                    (format "jwt token kid [%s] not found in well-known jwks"
                            exp-kid)))))))
  (testing "jwk pubkey doesn't match"
    (let [privkey (private-key (input-stream (.getBytes rsa256-privkey-01)))
          pubkey (public-key (input-stream (.getBytes rsa256-pubkey-02)))
          exp-kid "expected-kid"
          jwk-pubkey {:keys [(assoc (public-key->jwk pubkey) :kid "expected-kid")]}
          claims {:iss "https://runops.us.auth0.com/"
                  :sub "google-oauth2|107828005680090926270"
                  :iat (quot (System/currentTimeMillis) 1000)
                  :exp (+ (quot (System/currentTimeMillis) 1000) 2000)}
          headers {:alg :rs256 :header {:kid exp-kid}}
          jwt-token (jwt/sign claims privkey headers)]
      (try (crypto/verify-sig jwt-token jwk-pubkey)
           (throw (ex-info "the signature shouldn't be valid!" {}))
           (catch Exception e
             (is (= (.getMessage e)
                    "Message seems corrupt or manipulated."))))))
  (testing "jwt expired"
    (let [privkey (private-key (input-stream (.getBytes rsa256-privkey-01)))
          pubkey (public-key (input-stream (.getBytes rsa256-pubkey-01)))
          exp-kid "expected-kid"
          jwk-pubkey {:keys [(assoc (public-key->jwk pubkey) :kid "expected-kid")]}
          claims {:iss "https://runops.us.auth0.com/"
                  :sub "google-oauth2|107828005680090926270"
                  :iat 1637932100
                  :exp 1637932523}
          headers {:alg :rs256 :header {:kid exp-kid}}
          jwt-token (jwt/sign claims privkey headers)]
      (try (crypto/verify-sig jwt-token jwk-pubkey)
           (throw (ex-info "the jwt token should be expired!" {}))
           (catch Exception e
             (is (= (.getMessage e)
                    "Token is expired (1637932523)")))))))
