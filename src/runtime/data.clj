(ns runtime.data
  (:require [clojure.java.shell :as shell]
            [version.version :refer [app-version git-revision]]))

(def envs {:tags (System/getenv "TAGS")})
(def jwk-url (System/getenv "JWK_URL"))

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
        jwk-verify (not (clojure.string/blank? jwk-url))
        jwk-url (if (clojure.string/blank? jwk-url) "" jwk-url)
        machine-id (if (clojure.string/blank? machine-id) "" machine-id)
        distro-name (if (clojure.string/blank? distro-name) "" distro-name)
        kernel-version (if (clojure.string/blank? kernel-version) "" kernel-version)
        hostname (if (clojure.string/blank? hostname) "" hostname)
        tags (if (clojure.string/blank? tags) "" tags)]
    {:machine-id machine-id
     :distro distro-name
     :kernel-version kernel-version
     :hostname hostname
     :jwk-verify jwk-verify
     :jwk-url jwk-url
     :git-revision git-revision
     :app-version app-version
     :tags tags}))