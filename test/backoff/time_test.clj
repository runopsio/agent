(ns backoff.time-test
  (:require [clojure.test :refer [deftest is testing]]
            [backoff.time :as backoff]))

(deftest conversions
  (testing "test time conversions"
    (is (= (backoff/ms->min 60000) 1))
    (is (= (backoff/ms->sec 3000) 3))
    (is (= (backoff/min->ms 1) 60000))
    (is (= (backoff/sec->ms 3) 3000)))
  (testing "test parse default"
    (is (= (backoff/parse-default 10 nil) 10))
    (is (= (backoff/parse-default nil 1000) 1000))
    (is (= (backoff/parse-default 0 1000) 1000))))