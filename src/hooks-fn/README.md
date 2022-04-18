# Hooks Functions

This directory contains examples and helper functions which will run before or after a running task, a hook is wrote in an [edn format](https://github.com/edn-format/edn). The example below will use attributes from the runtime of a task and add a prefix to the script mutating it:

```clj
{:pre-hook
 {:action :prehook-script-mutate
  :continue-on-error false
  :function
  (fn [task-context]
    (let [script (:script task-context)
          user-email (:user-email task-context)
          task-id (:task-id task-context)]
      (str (format "/** Runops task-id %s, started by user %s **/ " task-id user-email)
           script)))}}

```

> Libraries can be used using the full path, e.g.: (clojure.string/blank? "foo")

The `task-context` provides the following attributes:

```clj
{:task-id Int
 :user-email String
 :description String
 :type String
 :target String
 :secret-provider String
 :secret-path String
 :redact String
 :script String}
```
The `:function` attribute must be an anonymous function with a param containing the `task-context`

### The `:action` attribute

- `nil`: the default action will only execute the pre/post hook
- `:prehook-script-mutate`: the returned result from the function, must be a string which will mutate the script before the execution of the task.
- `:posthook-stdout-mutate`: it mutates the output result from the script after the execution of the task. The keys `:shell-stdout` and `:shell-exit-code` are added in the task context in this phrase.
- `:prehook-stop`: it will hang the execution of the task if the function returns a non-nil response.

The attribute `:continue-on-error` option will continue the execution of the script if the hook returns an exception, example:

```clj
{:pre-hook
 {:action :prehook-stop
  :continue-on-error true
  :function
  (fn [task-context]
    (/ 1 0))}
 :post-hook nil}
```
