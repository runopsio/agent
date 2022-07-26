(ns agent.server
  (:require [yada.yada :refer [listener resource as-resource handler]]
            [logger.timbre :as log]))

;; yada
(handler
  {:methods
   {:get
    {:produces "text/html"
     :response "<h1>Hello World!</h1>"}}})

(defn listen-http []
  (listener
    ["/"
     [
      ["hello" (as-resource "Hello World!")]
      ["test" (resource {:produces "text/plain"
                         :response "This is a test!"})]
      [true (as-resource nil)]]]
    {:port 3000}))
