(ns runtime.data
  (:require [clojure.java.shell :as shell]
            [version.version :refer [app-version git-revision]]))

(def envs {:tags (System/getenv "TAGS")})

(defn- sh [& args]
  (try
    (apply shell/sh args)
    (catch Exception _
      nil)))

(defn- get-machine-id []
  (let [stdout (:out (sh "cat" "/sys/class/dmi/id/product_uuid"))]
    (clojure.string/trim stdout)))

(defn- get-kernel-version []
  (let [stdout (:out (sh "uname" "-s" "-r"))]
    (clojure.string/trim stdout)))

(defn- get-distro-name []
  (let [stdout (:out (sh "cat" "/etc/issue.net"))]
    (clojure.string/trim stdout)))

(defn- get-hostname []
  (let [stdout (:out (sh "hostname"))]
    (clojure.string/trim stdout)))

(def runtime-data
  (let [machine-id (get-machine-id)
        distro-name (get-distro-name)
        kernel-version (get-kernel-version)
        hostname (get-hostname)
        tags (:tags envs)
        machine-id (if (clojure.string/blank? machine-id) "runops:null" machine-id)
        distro-name (if (clojure.string/blank? distro-name) "runops:null" distro-name)
        kernel-version (if (clojure.string/blank? kernel-version) "runops:null" kernel-version)
        hostname (if (clojure.string/blank? hostname) "runops:null" hostname)
        tags (if (clojure.string/blank? tags) "runops:null" tags)]
    {:machine-id machine-id
     :distro distro-name
     :kernel-version kernel-version
     :hostname hostname
     :git-revision git-revision
     :app-version app-version
     :tags tags}))