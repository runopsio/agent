(ns dlp.gcp-test
  (:require [clojure.test :refer [deftest is testing]]
            [dlp.gcp :as dlp]))

(def input-text (str "My name is Gary Oldman and my email is gary.duck@example.com "
                     "and my phone number is +5511959606814, my ip address is 200.20.10.100, "
                     "my website is runops.io my cpf is 46251484136 my gender is male "
                     "and i have 25 years old my birthday is 04 of June!"))
(def redacted-input (str "My name is Gary Oldman and my email is *****duck@example.com "
                         "and my phone number is *****959606814, my ip address is *****0.10.100, "
                         "my website is *****s.io my cpf is *****484136 my gender is ***** "
                         "and i have *****ars old my birthday is ***** June!"))

(def findings-list [{:finding-id "2022-01-12T16:04:53.402171Z2228834116584927040"
                     :info-type "EMAIL_ADDRESS"
                     :quote "gary.duck@example.com"
                     :likelihood "VERY_LIKELY"
                     :start 39
                     :end 60}
                    {:finding-id "2022-01-12T16:04:53.402174Z8072478956957853268"
                     :info-type "PHONE_NUMBER"
                     :quote "+5511959606814"
                     :likelihood "VERY_LIKELY"
                     :start 84
                     :end 98}
                    {:finding-id "2022-01-12T16:04:53.402140Z5591059405735705230"
                     :info-type "IP_ADDRESS"
                     :quote "200.20.10.100"
                     :likelihood "LIKELY"
                     :start 117
                     :end 130}
                    {:finding-id "2022-01-12T16:04:53.402166Z7134793372037236706"
                     :info-type "URL"
                     :quote "runops.io"
                     :likelihood "POSSIBLE"
                     :start 146
                     :end 155}
                    {:finding-id "2022-01-12T16:04:53.402177Z3345376263066899337"
                     :info-type "BRAZIL_CPF_NUMBER"
                     :quote "46251484136"
                     :likelihood "POSSIBLE"
                     :start 166
                     :end 177}
                    {:finding-id "2022-01-12T16:04:53.402180Z3370601685672683044"
                     :info-type "GENDER"
                     :quote "male"
                     :likelihood "LIKELY"
                     :start 191
                     :end 195}
                    {:finding-id "2022-01-12T16:04:53.402183Z1008799718046668068"
                     :info-type "AGE"
                     :quote "25 years old"
                     :likelihood "VERY_LIKELY"
                     :start 207
                     :end 219}
                    {:finding-id "2022-01-12T16:04:53.402185Z2889842100858079150"
                     :info-type "DATE_OF_BIRTH"
                     :quote "04 of June"
                     :likelihood "VERY_LIKELY"
                     :start 235
                     :end 245}])

(deftest bytes->chunks
  (testing "must break a text into multiple chunks maintaining the order"
    (let [chunks-of 10
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

(deftest redact-by-findings
  (testing "must redact all content based on the findings list"
    (let [res (dlp/redact-by-findings input-text findings-list)]
      (is (= (String. res) redacted-input))))
  (testing "must throw exception when the input is neither string or bytes"
    (is (thrown? Exception (dlp/redact-by-findings 123 findings-list))))
  (testing "must throw index out of bounds exception when the findings list is unsorted"
    (is (thrown? IndexOutOfBoundsException
                 (dlp/redact-by-findings input-text [{:start 30 :end 40}
                                                     {:start 15 :end 20}])))))
