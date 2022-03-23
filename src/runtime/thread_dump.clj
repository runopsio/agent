(ns runtime.thread-dump
  (:require [clojure.string :as str])
  (:import (java.lang.management ManagementFactory ThreadInfo ThreadMXBean)))

(defn- thread-info
  [^ThreadMXBean mxbean ^ThreadInfo ti]
  (let [locked-synchronizers (apply str (map #(str "\t\t" "- (a " (.toString %) ")\n") (.getLockedSynchronizers ti)))
        locked-synchronizers (if (clojure.string/blank? locked-synchronizers) ""
                                 locked-synchronizers)]
    {:name (.getThreadName ti)
     :thread-id (.getThreadId ti)
     :priority (.getPriority ti)
     :state (.toString (.getThreadState ti))
     :native (.isInNative ti)
     :daemon (.isDaemon ti)
     :suspended (.isSuspended ti)
     :block (.getBlockedCount ti)
     :wait (.getWaitedCount ti)
     :lock (.getLockName ti)
     :cpu (quot (.getThreadCpuTime mxbean (.getThreadId ti)) 1000000)
     :user (quot (.getThreadUserTime mxbean (.getThreadId ti)) 1000000)
     :stack (apply str (map #(str "\t\t" % "\n") (.getStackTrace ti)))
     :locked-synchronizers locked-synchronizers}))

(defn stop-thread-by-name [thread-name]
  (let [t (-> (filter #(= thread-name (-> (:key %)
                                          (.getName)))
                      (mapv bean (Thread/getAllStackTraces)))
              first
              :key)]
    (when t (.interrupt t))))

(defn find-thread-by-name [thread-name]
  (let [bean   (ManagementFactory/getThreadMXBean)
        dump   (.dumpAllThreads bean true true)
        dump (mapv #(thread-info bean %) dump)
        result (filter #(= (:name %) thread-name) dump)]
    (first result)))

(comment
  (-> (find-thread-by-name "main")))
