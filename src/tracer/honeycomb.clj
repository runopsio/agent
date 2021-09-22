(ns tracer.honeycomb
  (:require [cambium.core :as log]
            [mount.core :refer [defstate start]]
            [version.version :refer [app-version git-revision]]
            [agent.errors :as err])
  (:import io.opentelemetry.context.Context
           io.honeycomb.opentelemetry.HoneycombSdk$Builder
           io.honeycomb.opentelemetry.sdk.trace.samplers.DeterministicTraceSampler))

(def ^:private api-key "e8f9fb62e7ff1ece4d8020df4cff5954")
(def ^:private dataset "runops")
(def ^:private service-name "runops-agent")

(defn- build-honeycomb-sdk []
  (try
    (-> (new HoneycombSdk$Builder)
        (.setApiKey api-key)
        (.setDataset dataset)
        (.setSampler (new DeterministicTraceSampler 1))
        (.setServiceName service-name)
        (.build))
    (catch Exception e
      (log/warn (format "failed to start honeycomb sdk with error %s" e)))))

(defstate ^:private honeycomb-sdk
  :start (build-honeycomb-sdk)
  :stop nil)

(declare trace-task
         safe-end
         set-span-attributes
         set-span-attribute
         tracer
         call-traced-fn)

(defn with-tracing
  "A closure that execute functions with tracing on honeycomb.
  It builds a graph automatically using a tuple of keywords (span-tuple),
  example:
  
  (agent.errors/err->> 
   task
   (with-tracing bird-fn [:bird])
   (with-tracing hawk-fn [:bird :hawk])
   (with-tracing eagle-fn [:bird :eagle])
   (with-tracing nest-fn [:eagle :nest])
   (with-tracing egg-fn [:eagle :egg])
   (with-tracing-end)))

  The following graph is created on honeycomb:

  |- bird
    |- hawk
    |- eagle
      |-- nest
      |-- egg"
  [traced-fn span-tuple & map-attrs]
  (when (not (coll? span-tuple))
    (throw (Exception. "span-tuple must implement IPersistentCollection")))
  (fn [task]
    (let [root-key (first span-tuple)
          parent-key (second span-tuple)
          root-span (get-in task [:tracing-spans root-key])
          map-attrs (apply merge map-attrs)]
      (if root-span
        (trace-task traced-fn task parent-key root-span map-attrs)
        (trace-task traced-fn task root-key map-attrs)))))

(defn with-tracing-end []
  (fn [task]
    (when-let [spans (:tracing-spans task)]
      (doall (map safe-end (vals spans)))
      [task nil])
    [task nil]))

(defn- trace-task
  ([traced-fn task parent-key root-span map-attrs]
   (let [parent-span (set-span-attributes
                      (-> (tracer)
                          (.spanBuilder (name parent-key))
                          (.setParent (-> (Context/current)
                                          (.with root-span)))
                          (.startSpan))
                      map-attrs)
         fn-result (call-traced-fn traced-fn
                                   (assoc task :tracing-spans
                                          (merge (:tracing-spans task)
                                                 {parent-key parent-span})))
         task-err (second fn-result)
         ;; the traced-fn could output sometimes [nil <task>] which
         ;; breaks the pattern of [nil <err>],
         ;; this is an attempt to normalize the output.
         task-output (cond
                       (= (:status task-err) "failure") (:logs task-err)
                       (= (string? task-err) task-err)
                       "")]
     (set-span-attribute parent-span "error" task-output)
     (when (some? task-err)
       ((with-tracing-end) task))
     (safe-end parent-span)
     fn-result))
  ([traced-fn task root-key map-attrs]
   (let [root-span (set-span-attributes
                    (-> (tracer)
                        (.spanBuilder (name root-key))
                        (.startSpan))
                    (merge map-attrs
                           {:task-id (:id task)
                            :agent-version app-version
                            :agent-revision git-revision}))
         fn-result (call-traced-fn traced-fn (assoc task :tracing-spans
                                                    {root-key root-span}))
         task-err (second fn-result)]
     (set-span-attribute root-span "error" task-err)
     (when (some? task-err)
       ((with-tracing-end) task))
     fn-result)))

(defn- call-traced-fn [traced-fn task]
  (try
    (traced-fn task)
    (catch Exception e
      [nil (format "failed in processing, err=%s" (.getMessage e))])))

(defn- safe-end [span]
  (try (.end span) (catch Exception _))
  span)

(defn- tracer []
  (-> honeycomb-sdk
      (.getTracer service-name)))

(defn- set-span-attribute [span key value]
  (try
    (when-not (clojure.string/blank? value)
      (.setAttribute span key (str value)))
    span
    (catch Exception e
      (log/warn (format "failed to set span attribute with error %s" e)))))

(defn- set-span-attribute-list [span attribute-list]
  (if (= (count attribute-list) 0)
    span
    (do (set-span-attribute span (first (first attribute-list)) (second (first attribute-list)))
        (set-span-attribute-list span (rest attribute-list)))))

(defn- set-span-attributes
  "Apply all the attributes from the map to the span as string:string"
  [span attributes-map]
  (set-span-attribute-list span (doall (map #(vector (name (first %)) (str (second %))) attributes-map))))

(comment
  ;; running it will create a trace on honeycomb where task-id=uuid
  (start #'honeycomb-sdk)
  (let [id (str (java.util.UUID/randomUUID))]
    (println id)
    (err/err->> {:org "tracing-test" :id id}
                (with-tracing #(identity [(assoc % :fn01 "fn01") nil]) [:main-fn])
                (with-tracing #(identity [(assoc % :fn02 "fn02") nil]) [:main-fn :lion01])
                (with-tracing #(identity [(assoc % :fn03 "fn03") nil]) [:main-fn :lion02])
                (with-tracing #(identity [(assoc % :fn04 "fn04") nil]) [:main-fn :lion03] {:lion03 "a-lion"})
                (with-tracing #(identity [(assoc % :fn05 "fn05") nil]) [:main-fn :lion04])

                (with-tracing #(identity [(assoc % :fn-child02 "fn-child02") nil]) [:lion04 :eagle01])
                ;; test with exception
                ;; (with-tracing (fn [_] (throw (Exception. "a nasty exception"))) [:lion04 :eagle02] {:eagle02 "an-eagle"})
                ;; test it when the function return [nil "error"]
                ;; (with-tracing (fn [_] [nil "a nasty error"]) [:lion04 :eagle02] {:eagle02 "an-eagle"})
                (with-tracing #(identity [(assoc % :fn-child03 "fn-child03") nil]) [:lion04 :eagle02] {:eagle02 "an-eagle"})
                (with-tracing #(identity [(assoc % :fn-child04 "fn-child04") nil]) [:lion04 :eagle03])

                (with-tracing #(identity [% nil]) [:eagle03 :bird01])
                (with-tracing #(identity [% nil]) [:eagle03 :bird02])
                (with-tracing #(identity [% nil]) [:eagle03 :bird03] {:bird03 "a-bird"})

                (with-tracing-end))))
