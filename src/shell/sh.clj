(ns shell.sh
  (:require [clojure.core.async :as async]
            [clojure.java.io :refer [as-file copy]])
  (:import (java.io ByteArrayOutputStream StringWriter)
           (java.nio.charset Charset)))

(def ^:dynamic *sh-dir* nil)
(def ^:dynamic *sh-env* nil)

(defmacro with-sh-dir
  "Sets the directory for use with sh, see sh for details."
  {:added "1.2"}
  [dir & forms]
  `(binding [*sh-dir* ~dir]
     ~@forms))

(defmacro with-sh-env
  "Sets the environment for use with sh, see sh for details."
  {:added "1.2"}
  [env & forms]
  `(binding [*sh-env* ~env]
     ~@forms))

(defn- parse-args
  [args]
  (let [default-encoding "UTF-8" ;; see sh doc string
        default-opts {:out-enc default-encoding :in-enc default-encoding :dir *sh-dir* :env *sh-env*}
        [cmd opts] (split-with string? args)]
    [cmd (merge default-opts (apply hash-map opts))]))

(defn- ^"[Ljava.lang.String;" as-env-strings
  "Helper so that callers can pass a Clojure map for the :env to sh."
  [arg]
  (cond
    (nil? arg) nil
    (map? arg) (into-array String (map (fn [[k v]] (str (name k) "=" v)) arg))
    :else arg))

(defn- stream-to-bytes
  [in]
  (with-open [bout (ByteArrayOutputStream.)]
    (copy in bout)
    (.toByteArray bout)))

(defn- stream-to-string
  ([in] (stream-to-string in (.name (Charset/defaultCharset))))
  ([in enc]
   (with-open [bout (StringWriter.)]
     (copy in bout :encoding enc)
     (.toString bout))))

(defn- stream-to-enc
  [stream enc]
  (if (= enc :bytes)
    (stream-to-bytes stream)
    (stream-to-string stream enc)))

(defn sh
  "Passes the given strings to Runtime.exec() to launch a sub-process.

  Options are

  :in         may be given followed by any legal input source for
              clojure.java.io/copy, e.g. InputStream, Reader, File, byte[],
              or String, to be fed to the sub-process's stdin.
  :in-enc     option may be given followed by a String, used as a character
              encoding name (for example \"UTF-8\" or \"ISO-8859-1\") to
              convert the input string specified by the :in option to the
              sub-process's stdin.  Defaults to UTF-8.
              If the :in option provides a byte array, then the bytes are passed
              unencoded, and this option is ignored.
  :out-enc    option may be given followed by :bytes or a String. If a
              String is given, it will be used as a character encoding
              name (for example \"UTF-8\" or \"ISO-8859-1\") to convert
              the sub-process's stdout to a String which is returned.
              If :bytes is given, the sub-process's stdout will be stored
              in a byte array and returned.  Defaults to UTF-8.
  :env        override the process env with a map (or the underlying Java
              String[] if you are a masochist).
  :dir        override the process dir with a String or java.io.File.
  :proc-chan  option may be given followed by :proc-chan {:in (async/chan) :out (async/chan)},
              the :in channel will be used to process rpc commands to a running process:
              * Sending a :kill to the channel will kill the process gracefully.
              * Sending a :status to the channel will retrieve the status of the process.
              The :out channel will report the status of process as a map:
              {:process-alive true|false :process-pid int}

  You can bind :env or :dir for multiple operations using with-sh-env
  and with-sh-dir.

  sh returns a map of
    :exit => sub-process's exit code
    :out  => sub-process's stdout (as byte[] or String)
    :err  => sub-process's stderr (String via platform default encoding)"
  {:added "1.2"}
  [& args]
  (let [[cmd opts] (parse-args args)
        proc (.exec (Runtime/getRuntime)
                    ^"[Ljava.lang.String;" (into-array cmd)
                    (as-env-strings (:env opts))
                    (as-file (:dir opts)))
        {:keys [in in-enc out-enc proc-chan]} opts]
    (if in
      (future
        (with-open [os (.getOutputStream proc)]
          (copy in os :encoding in-enc)))
      (.close (.getOutputStream proc)))
    (with-open [stdout (.getInputStream proc)
                stderr (.getErrorStream proc)]
      (when (and (:in proc-chan) (:out proc-chan))
        (async/thread
          (loop []
            (when-some [chan-cmd (async/<!! (:in proc-chan))]
              (case chan-cmd
                :status (async/>!! (:out proc-chan) {:alive (str (.isAlive proc))
                                                     :pid (.pid proc)})
                :kill (when (.isAlive proc)
                        (.destroy proc)
                        ;; give some time for the kill to propagate to the O.S.
                        (Thread/sleep 500)
                        (async/>!! (:out proc-chan) {:alive (str (.isAlive proc))
                                                     :pid (.pid proc)}))
                nil)
              (recur)))))

      (let [out (future (stream-to-enc stdout out-enc))
            err (future (stream-to-string stderr))
            exit-code (.waitFor proc)]
        {:exit exit-code :out @out :err @err}))))
