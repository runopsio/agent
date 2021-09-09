(ns agent.agent-test
  (:require [clojure.test :refer [deftest is testing]]
            [agent.agent :as a]))

(deftest add-secrets-from-mapping
  (testing "must add secrets keys from secret mapping and preserve existent ones"
    (let [task (@#'a/add-secrets-from-mapping
                {:secrets {:PG_HOSTNAME "127.0.0.1"
                           :PG_USERNAME "myuser"
                           :RANDOM_SECRET "super-random"}
                 :secret-mapping "{\"PG_USER\": \"PG_USERNAME\", \"PG_HOST\": \"PG_HOSTNAME\"}"})]
      (is (= {:PG_HOST "127.0.0.1"
              :PG_USER "myuser"}
             (select-keys
              (:secrets (first task)) [:PG_HOST :PG_USER])))
      (is (= (get-in (first task) [:secrets :RANDOM_SECRET])
             "super-random"))))
  (testing "must be noop if there's any secret mapping"
    (let [task (@#'a/add-secrets-from-mapping
                {:secrets {:PG_HOST "127.0.0.1" :PG_USER "myuser"}})]
      (is (= {:PG_HOST "127.0.0.1" :PG_USER "myuser"}
             (select-keys
              (:secrets (first task)) [:PG_HOST :PG_USER]))))))
