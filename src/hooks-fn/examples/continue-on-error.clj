{:pre-hook
 {:action :prehook-stop
  :continue-on-error true
  :function
  (fn [task-context]
    (/ 1 0))}
 :post-hook nil}
