(ns backoff.time)

(defn sec->ms [^Integer s] (* s 1000))
(defn min->ms [^Integer m] (sec->ms (* m 60)))
(defn ms->sec [^Integer ms] (quot ms 1000))
(defn ms->min [^Integer ms] (quot (ms->sec ms) 60))

(defn parse-default
  "If the n is not a number, return the default value d"
  [^Integer n ^Integer d]
  (if (and (number? n) (> n 0)) n d))