(ns logger.timbre
  (:require [taoensso.timbre :as log]))

(defn debug
  ([msg] (log/info msg))
  ([context msg] (log/with-context context (log/info msg))))

(defn info
  ([msg] (log/info msg))
  ([context msg] (log/with-context context (log/info msg))))

(defn warn
  ([msg] (log/warn msg))
  ([context-or-trowable msg]
   (when (instance? java.lang.Throwable context-or-trowable)
     (log/warn context-or-trowable msg))
   (when (map? context-or-trowable)
     (log/with-context context-or-trowable (log/warn msg))))
  ([ex context msg]
   (log/with-context context (log/warn ex msg))))

(defn error
  ([msg] (log/error msg))
  ([context-or-trowable msg]
   (when (instance? java.lang.Throwable context-or-trowable)
     (log/error context-or-trowable msg))
   (when (map? context-or-trowable)
     (log/with-context context-or-trowable (log/error msg))))
  ([ex context msg]
   (log/with-context context (log/error ex msg))))