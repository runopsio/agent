(ns agent.errors)

(defn apply-or-error [f [val err]]
  (if (nil? err)
    (f val)
    [nil err]))

(defmacro err->>
  "Skip the next executions after the first function returns an error message.
    Checkout more here: https://roamresearch.com/#/app/runops-internal/page/ofTv5YRmu"
  [val & fns]
  (let [fns (for [f fns] `(apply-or-error ~f))]
    `(->> [~val nil]
          ~@fns)))
