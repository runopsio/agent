{:pre-hook
 {:action :prehook-stop
  :continue-on-error false
  :function
  (fn [task-context]
    (let [script (:script task-context)]
      (if (clojure.string/starts-with? script "CREATE")
        "task execution denied for command CREATE"
        nil)))}
 :post-hook nil}
