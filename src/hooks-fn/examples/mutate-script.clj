{:pre-hook
 {:action :prehook-script-mutate
  :continue-on-error false
  :function
  (fn [task-context]
    (let [script (:script task-context)
          user-email (:user-email task-context)
          task-id (:task-id task-context)]
      (str (format "/** Runops task-id %s, started as user %s **/ " task-id user-email)
           script)))}
 :post-hook nil}
