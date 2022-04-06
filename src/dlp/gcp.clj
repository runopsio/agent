(ns dlp.gcp
  (:require [logger.timbre :as log]
            [clojure.java.io :refer [input-stream]]
            [mount.core :refer [defstate] :as mount])
  (:import com.google.cloud.dlp.v2.DlpServiceClient
           com.google.cloud.dlp.v2.DlpServiceSettings
           com.google.api.gax.core.FixedCredentialsProvider
           com.google.privacy.dlp.v2.ContentItem
           com.google.privacy.dlp.v2.InfoType
           com.google.privacy.dlp.v2.InspectConfig
           com.google.privacy.dlp.v2.LocationName
           com.google.privacy.dlp.v2.Likelihood
           com.google.privacy.dlp.v2.CharacterMaskConfig
           com.google.privacy.dlp.v2.InfoTypeTransformations
           com.google.privacy.dlp.v2.InfoTypeTransformations$InfoTypeTransformation
           com.google.privacy.dlp.v2.DeidentifyConfig
           com.google.privacy.dlp.v2.DeidentifyContentRequest
           com.google.privacy.dlp.v2.PrimitiveTransformation
           com.google.auth.oauth2.GoogleCredentials))

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

(defn- build-info-types
  ([info-types]
   (let [arr (java.util.ArrayList.)
         _ (doall (map #(.add arr (-> (InfoType/newBuilder)
                                      (.setName %)
                                      (.build))) info-types))] arr
        arr))
  ([] (build-info-types default-info-types)))

(defn overview->map
  "Convert com.google.privacy.dlp.v2.TransformationOverview to a map.
   See https://cloud.google.com/java/docs/reference/google-cloud-dlp/latest/com.google.privacy.dlp.v2.TransformationOverview?hl=en"
  [^com.google.privacy.dlp.v2.TransformationOverview overview]
  (let [summary (map #(hash-map
                       :info-type (-> % .getInfoType .getName)
                       :count (reduce +
                                      (map (fn [^com.google.privacy.dlp.v2.TransformationSummary$SummaryResult r]
                                             (.getCount r))
                                           (.getResultsList %))))
                     (.getTransformationSummariesList overview))]
    {:info-types (.getTransformationSummariesCount overview)
     :info-types-count (reduce + (map :count summary))
     :transformed-bytes (.getTransformedBytes overview)
     :serialized-size (.getSerializedSize overview)
     :summary (into [] summary)}))

(defn overview-metrics [overview-map-list]
  {:agent.info-types (reduce + (map :info-types overview-map-list))
   :agent.info-types-count (reduce + (map :info-types-count overview-map-list))
   :agent.transformed-bytes (reduce + (map :transformed-bytes overview-map-list))
   :agent.serialized-size (reduce + (map :serialized-size overview-map-list))})

(defn bytes->chunks
  "break down bytes or string to a list of byte array chunks"
  ([bytes-or-str]
   (bytes->chunks bytes-or-str max-chunk-size))
  ([bytes-or-str chunk-limit]
   (let [bytes-vec (cond
                     (string? bytes-or-str) (vec (.getBytes bytes-or-str))
                     (bytes? bytes-or-str) (vec bytes-or-str)
                     :else (throw (IllegalArgumentException. "wrong input type for bytes-or-str param")))
         input-length (count (.getBytes bytes-or-str))]
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

(defn deidentify-content
  ([text-input]
   (deidentify-content text-input default-info-types))
  ([text-input info-types]
   (when (> (count info-types) max-info-types)
     (throw (IllegalArgumentException.
             (format "Max info-types per request reached %s/%s" (count info-types) max-info-types))))
   (let [item (-> (ContentItem/newBuilder)
                  (.setValue text-input)
                  (.build))
         mask-config (-> (CharacterMaskConfig/newBuilder)
                         (.setMaskingCharacter "*")
                         (.setNumberToMask 5)
                         .build)
         transformation (-> (InfoTypeTransformations$InfoTypeTransformation/newBuilder)
                            (.setPrimitiveTransformation
                             (-> (PrimitiveTransformation/newBuilder)
                                 (.setCharacterMaskConfig mask-config)
                                 .build))
                            .build)
         deidentify-config (-> (DeidentifyConfig/newBuilder)
                               (.setInfoTypeTransformations
                                (-> (InfoTypeTransformations/newBuilder)
                                    (.addTransformations transformation)))
                               .build)
         inspect-config (-> (InspectConfig/newBuilder)
                            (.addAllInfoTypes (build-info-types info-types))
                            (.setMinLikelihood (Likelihood/POSSIBLE)) ; https://cloud.google.com/dlp/docs/likelihood
                            (.setIncludeQuote true)
                            (.build))
         [project-id goog-cred] google-credentials
         _ (when (nil? goog-cred) (throw (IllegalStateException.
                                          "failed to obtain GCP credentials")))
         req (-> (DeidentifyContentRequest/newBuilder)
                 (.setParent (.toString (LocationName/of project-id "global")))
                 (.setItem item)
                 (.setDeidentifyConfig deidentify-config)
                 (.setInspectConfig inspect-config)
                 (.build))
         client (DlpServiceClient/create
                 (-> (DlpServiceSettings/newBuilder)
                     (.setCredentialsProvider (FixedCredentialsProvider/create goog-cred))
                     (.build)))
         response (-> client (.deidentifyContent req))
         redacted-content (-> response .getItem .getValue)
         overview (-> response (.getOverview))
         _ (.close client)]
     [redacted-content overview])))

(comment
  ;; proccess ad-hoc deidentify-content in chunks
  (let [gcp-base64-service-account ""
        _ (-> (mount/with-args {:dlp-auth-b64 gcp-base64-service-account}) mount/start)
        text-input (str "My name is Gary Oldman and my email is gary.duck@example.com, fii@example.com and my phone number is +5511959606814, my ip address "
                        "is 200.20.10.100, my website is runops.io my cpf is 46251484136 my gender is male and i have 25 years old "
                        "and my birthday is 04 of June!")
        chunk-list (bytes->chunks text-input 85)
        result-list (process-chunks
                     #(deidentify-content (String. %))
                     chunk-list)
        content (clojure.string/join (map #(first %) result-list))
        overview-list (map #(overview->map (second %)) result-list)]
    [content overview-list]))

(comment
  ;; proccess ad-hoc deidentify-content full
  (let [gcp-base64-service-account ""
        _ (-> (mount/with-args {:dlp-auth-b64 gcp-base64-service-account}) mount/start)
        text-input (str "My name is Gary Oldman and my email is gary.duck@example.com, foo@example.com and my phone number is +5511959606814, my ip address "
                        "is 200.20.10.100, my website is runops.io my cpf is 46251484136 my gender is male and i have 25 years old "
                        "and my birthday is 04 of June!")
        [content overview] (deidentify-content text-input)]
    [content (overview->map overview)]))
