(ns dlp.gcp-test
  (:require [clojure.test :refer [deftest is testing run-tests]]
            [dlp.gcp :as dlp]))

(deftest bytes->chunks
  (testing "must break a text into multiple chunks maintaining the order"
    (let [input-text (str "My name is Gary Oldman and my email is gary.duck@example.com "
                          "and my phone number is +5511959656212, my ip address is 200.20.10.100, "
                          "my website is runops.io my cpf is 46251484136 my gender is male "
                          "and i have 25 years old my birthday is 04 of June!")
          chunks-of 10
          chunk-size (int (Math/ceil (/ (count input-text) 10)))
          chunk-list (dlp/bytes->chunks input-text chunks-of)]
      (is (= (count chunk-list) chunk-size))
      (is (= input-text (String. (byte-array (into [] cat chunk-list)))))))
  (testing "must throw exception when the input is neither string or bytes"
    (is (thrown? Exception (dlp/bytes->chunks 123)))))

(deftest process-chunks
  (testing "must process a group of chunks blocking until finish, then move on to the next group"
    (let [chunks-of 2
          chunk-sleep 500
          chunk-list ["a" "chunk" "list" "of" "words" "!!!"]
          f (fn [chunk] (Thread/sleep chunk-sleep) chunk)
          p-timeout (future (dlp/process-chunks chunks-of 15000 f chunk-list))
          p-ok (future (dlp/process-chunks chunks-of 15000 f chunk-list))]
      (is (= (deref p-timeout 1400 nil) nil))
      (is (= (deref p-ok 1600 nil) chunk-list))))
  (testing "must process a group of chunks and return the result sorted"
    (let [findings [{:start 32} {:start 12}]
          f (fn [_] (into [] (sort #(compare (:start %1) (:start %2)) findings)))
          [start-first start-second] (first (dlp/process-chunks f ["a" "chunk" "list"]))]
      (is (= (:start start-first) 12)
          (= (:start start-second) 32))))
  (testing "must timeout and return nil"
    (let [f (fn [chunk] (Thread/sleep 500) chunk)
          res (dlp/process-chunks 2 100 f ["a" "chunk" "list"])]
      (is (= res [nil nil nil])))))

(comment
  (run-tests))