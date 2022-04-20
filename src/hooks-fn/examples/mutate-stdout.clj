
{:pre-hook nil
 :post-hook
 {:action :posthook-stdout-mutate
  :continue-on-error false
  :function
  (fn [task-context]
    (let [stdout (:shell-stdout task-context)
          exit-code (:shell-exit-code task-context)]
      (if (= exit-code 0)
        (str stdout " <<< STDOUT MODIFY >>>")
        stdout)))}}

