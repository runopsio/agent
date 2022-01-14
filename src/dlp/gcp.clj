(ns dlp.gcp
  (:require [logger.timbre :as log]
            [clojure.java.io :refer [input-stream]]
            [mount.core :refer [defstate] :as mount])
  (:import com.google.cloud.dlp.v2.DlpServiceClient
           com.google.cloud.dlp.v2.DlpServiceSettings
           com.google.api.gax.core.FixedCredentialsProvider
           com.google.privacy.dlp.v2.ByteContentItem
           com.google.privacy.dlp.v2.ByteContentItem$BytesType
           com.google.privacy.dlp.v2.ContentItem
           com.google.privacy.dlp.v2.InfoType
           com.google.privacy.dlp.v2.InspectConfig
           com.google.privacy.dlp.v2.InspectContentRequest
           com.google.privacy.dlp.v2.LocationName
           com.google.privacy.dlp.v2.Likelihood
           com.google.protobuf.ByteString
           com.google.auth.oauth2.GoogleCredentials))

(def numbers-to-mask 5)
(def max-info-types 35)
;; this values needs to be low to avoid the max limit of findings (3000) per chunk
;; thus we send chunks of 0.0625 Megabytes
;; https://cloud.google.com/dlp/limits#content-limits
(def max-chunk-size 62500)
(def default-info-types
  ["PHONE_NUMBER"
   "AGE"
   "CREDIT_CARD_NUMBER"
   "CREDIT_CARD_TRACK_NUMBER"
   "DATE_OF_BIRTH"
   "EMAIL_ADDRESS"
   "ETHNIC_GROUP"
   "GENDER"
   "IBAN_CODE"
   "HTTP_COOKIE"
   "ICD9_CODE"
   "ICD10_CODE"
   "IMEI_HARDWARE_ID"
   "IP_ADDRESS"
   "STORAGE_SIGNED_URL"
   "URL"
   "VEHICLE_IDENTIFICATION_NUMBER"
   "BRAZIL_CPF_NUMBER"
   "AMERICAN_BANKERS_CUSIP_ID"
   "FDA_CODE"
   "US_ADOPTION_TAXPAYER_IDENTIFICATION_NUMBER"
   "US_BANK_ROUTING_MICR"
   "US_DEA_NUMBER"
   "US_DRIVERS_LICENSE_NUMBER"
   "US_EMPLOYER_IDENTIFICATION_NUMBER"
   "US_HEALTHCARE_NPI"
   "US_INDIVIDUAL_TAXPAYER_IDENTIFICATION_NUMBER"
   "US_PASSPORT"
   "US_PREPARER_TAXPAYER_IDENTIFICATION_NUMBER"
   "US_SOCIAL_SECURITY_NUMBER"
   "US_TOLLFREE_PHONE_NUMBER"
   "US_VEHICLE_IDENTIFICATION_NUMBER"])

(defn- parse-service-account [serv-account-enc]
  (log/info "Initializing Data Loss Prevention client ...")
  (try
    (let [goog-cred (GoogleCredentials/fromStream
                     (input-stream (-> (java.util.Base64/getDecoder)
                                       (.decode serv-account-enc))))
          project-id (.getProjectId goog-cred)]
      [project-id goog-cred])
    (catch Exception e
      (log/warn e "failed to start Data Loss Prevention client"))))

(defstate ^:private google-credentials
  :start (parse-service-account (:dlp-auth-b64 (mount/args)))
  :stop nil)

(defn- finding->map [^com.google.privacy.dlp.v2.Finding f]
  {:finding-id (.getFindingId f)
   :info-type (-> f (.getInfoType) (.getName))
  ;;  :quote (.getQuote f)
   :likelihood (.toString (.getLikelihood f))
   :start (-> f (.getLocation) (.getByteRange) (.getStart))
   :end (-> f (.getLocation) (.getByteRange) (.getEnd))})

(defn findings-metrics
  "Given a list of findings-list and count of total-chunks, return
   a map containing metrics"
  [findings-list total-chunks]
  (let [total-findings (count (into [] cat findings-list))
        findings-chunks (count findings-list)]
    {:agent.dlp.total_findings total-findings
     :agent.dlp.total_findings_chunks findings-chunks
     :agent.dlp.total_chunks total-chunks
     :agent.dlp.estimated_findings_per_chunk (int (/ total-findings (max findings-chunks 1)))}))

(defn- build-info-types
  ([info-types]
   (let [arr (java.util.ArrayList.)
         _ (doall (map #(.add arr (-> (InfoType/newBuilder)
                                      (.setName %)
                                      (.build))) info-types))] arr
        arr))
  ([] (build-info-types default-info-types)))

(defn bytes->chunks
  "break down bytes or string to a list of byte array chunks"
  ([bytes-or-str]
   (bytes->chunks bytes-or-str max-chunk-size))
  ([bytes-or-str chunk-limit]
   (let [bytes-vec (cond
                     (string? bytes-or-str) (vec (.getBytes bytes-or-str))
                     (bytes? bytes-or-str) (vec bytes-or-str)
                     :else (throw (IllegalArgumentException. "wrong input type for bytes-or-str param")))
         input-length (count bytes-or-str)]
     (loop [chunk-start 0
            chunk-end chunk-limit
            result []]
       (let [chunk-end (min chunk-end input-length)
             chunk-result (byte-array (subvec bytes-vec chunk-start chunk-end))
             chunk-result (conj result chunk-result)]
         (if (= chunk-end input-length)
           chunk-result
           (recur chunk-end
                  (min (+ chunk-end chunk-limit) input-length)
                  chunk-result)))))))

(defn process-chunks
  "It will break chunks by groups and apply in parallel the f function in a future, 
   blocking until the chunk group results are returned iterating throughout
   chunks in the list. It returns the results in a vector."
  ([f chunk-list]
   (process-chunks
    (+ 2 (.. Runtime getRuntime availableProcessors))
    15000
    f chunk-list))
  ([n timeout-ms f chunk-list]
   (loop [chunks chunk-list
          findings-results []]
     (if (empty? chunks)
       findings-results
       (let [chunk-group (take n chunks)
             findings (into [] (doall (map #(deref % timeout-ms nil)
                                           (pmap #(future (f %))
                                                 chunk-group))))
             findings-results (into [] cat [findings-results findings])]
         (recur (drop n chunks)
                findings-results))))))

(defn redact-by-findings
  "Redact content base on a vector of com.google.privacy.dlp.v2.Finding,
   the findings->map structure must be sorted increasingly by :start"
  [bytes-or-str findings-list]
  (let [input-bytes
        (cond
          (string? bytes-or-str) (vec (.getBytes bytes-or-str))
          (bytes? bytes-or-str) (vec bytes-or-str)
          :else (throw (IllegalArgumentException. "wrong input type for bytes-or-str param")))]
    (loop [index 0
           flist findings-list
           redact-result []]
      (if (empty? flist)
        (byte-array
         (concat redact-result
                 (subvec input-bytes (get (last findings-list) :end 0) (count input-bytes))))
        (let [finding (first flist)
              ;; select a chunk until the occurence of a finding
              previous-finding (nth findings-list (max 0 (- index 1)))
              chunk-idx-start (if (= (:start previous-finding) (:start finding)) 0
                                  (:end previous-finding))
              chunk-idx-end (:start finding)
              chunk (subvec input-bytes chunk-idx-start chunk-idx-end)
              ;; select the chunk to be replaced and concat with the character to mask it
              chunk-to-replace (subvec input-bytes (:start finding) (:end finding))
              chunk-to-replace-max (count chunk-to-replace)
              chunk-to-replace (concat (.getBytes (clojure.string/join (repeat numbers-to-mask "*")))
                                       ;;  TODO: change to max instead of using if here!
                                       (subvec chunk-to-replace
                                               (if (< chunk-to-replace-max numbers-to-mask)
                                                 chunk-to-replace-max
                                                 numbers-to-mask)
                                               chunk-to-replace-max))]
          (recur (inc index)
                 (rest flist)
                 (into [] cat [redact-result chunk chunk-to-replace])))))))

(defn inspect-content
  "Inspect strings for sensitive data, returning a list of map
   extracted from a com.google.privacy.dlp.v2.Finding object, by providing:
   * text-input as string
   * info-type as a vector of info types strings, if it's not set it will use default ones
   inspired in this example: https://cloud.google.com/dlp/docs/inspecting-text"
  ([text-input]
   (inspect-content text-input default-info-types))
  ([text-input info-types]
   (when (> (count info-types) max-info-types)
     (throw (IllegalArgumentException.
             (format "Max info-types per request reached %s/%s" (count info-types) max-info-types))))
   (let [byte-item (-> (ByteContentItem/newBuilder)
                       (.setType (ByteContentItem$BytesType/TEXT_UTF8))
                       (.setData (ByteString/copyFromUtf8 (String. text-input)))
                       (.build))
         item (-> (ContentItem/newBuilder)
                  (.setByteItem byte-item)
                  (.build))
         config (-> (InspectConfig/newBuilder)
                    (.addAllInfoTypes (build-info-types info-types))
                    (.setMinLikelihood (Likelihood/POSSIBLE)) ; https://cloud.google.com/dlp/docs/likelihood
                    (.setIncludeQuote true)
                    (.build))
         [project-id goog-cred] google-credentials
         _ (when (nil? goog-cred) (throw (IllegalStateException.
                                          "failed to obtain GCP credentials")))
         req (-> (InspectContentRequest/newBuilder)
                 (.setParent (.toString (LocationName/of project-id "global")))
                 (.setItem item)
                 (.setInspectConfig config)
                 (.build))
         client (DlpServiceClient/create
                 (-> (DlpServiceSettings/newBuilder)
                     (.setCredentialsProvider (FixedCredentialsProvider/create goog-cred))
                     (.build)))
         content (-> client (.inspectContent req))
         findings (-> content
                      (.getResult)
                      (.getFindingsList))
         _ (.close client)]
     (into [] (doall (map finding->map findings))))))

(comment
  (let [gcp-base64-service-account "<json-base64-service-account-credentials>"
        _ (-> (mount/with-args {:dlp-auth-b64 gcp-base64-service-account}) mount/start)
        text-input (str "My name is Gary Oldman and my email is gary.duck@example.com and my phone number is +5511959606814, my ip address "
                        "is 200.20.10.100, my website is runops.io my cpf is 46251484136 my gender is male and i have 25 years old "
                        "and my birthday is 04 of June!")
        chunk-list (bytes->chunks text-input)
        sorted-findings-list (process-chunks
                              (fn [chunk]
                                (into [] (sort #(compare (:start %1) (:start %2))
                                               (inspect-content chunk))))
                              chunk-list)
        result (pmap #(redact-by-findings %1 %2) chunk-list sorted-findings-list)]
    (String. (byte-array (into [] cat result)))))
