{:pre-hook
 {:action :prehook-script-mutate
  :continue-on-error false
  :function
  (fn [task-context]
    (let [script (:script task-context)
          sql-comment (format "/* Runops task-id %s, started by user %s */ "
                              (:task-id task-context) (:user-email task-context))
          query-list (clojure.string/split-lines script)
          query-list (->> query-list
                          (map-indexed
                           (fn [idx q]
                             (let [q (clojure.string/trim q)]
                               (if (clojure.string/ends-with? q ";")
                                 (str sql-comment q)
                                 ;; always add it to the first line
                                 (if (= idx 0)
                                   (str sql-comment q)
                                   q))))))]
      (clojure.string/join "\n" query-list)))}}
