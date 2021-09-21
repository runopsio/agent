(defproject agent "0.0.0"
  :description "Runops Agent"
  :url "https://github.com/runops/agent"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.3"]
                 [org.clojure/core.async "1.3.610"]
                 [org.clojure/data.json "1.0.0"]

                 ; gRPC
                 [protojure "1.5.11"]
                 [protojure/google.protobuf "0.9.1"]
                 [com.google.protobuf/protobuf-java "3.13.0"]
                 [org.eclipse.jetty.http2/http2-client "9.4.20.v20190813"]
                 [org.eclipse.jetty/jetty-alpn-java-client "9.4.28.v20200408"]
                 [org.ow2.asm/asm "8.0.1"]

                 ; monitoring
                 [io.sentry/sentry-logback "5.0.1"]
                 [io.honeycomb/honeycomb-opentelemetry-sdk "0.4.0"]

                 ; logging
                 [cambium "0.8.1"]
                 [cambium/cambium.core "1.0.0"]
                 [cambium/cambium.codec-cheshire "1.0.0"]
                 [cambium/cambium.logback.json "0.4.4"]

                 [clj-kondo "2021.08.06"]
                 [mount "0.1.16"]
                 [clj-http "3.12.3"]
                 [software.amazon.awssdk/secretsmanager "2.16.69"]
                 [camel-snake-kebab "0.4.2"]
                 [de.ubercode.clostache/clostache "1.4.0"]
                 [buddy "2.0.0"]]
  :plugins [[lein-bump-version "0.1.6"]
            [lein-exec "0.3.7"]]
  :source-paths ["src" "test"]
  :main ^:skip-aot agent.core
  :target-path "target/%s"
  :aliases {"agent-version" ["exec" "-e"
                             "(println (->> \"project.clj\" slurp read-string (drop 2) first))"]
            "clj-kondo" ["trampoline" "run" "-m" "clj-kondo.main"]}
  :profiles {:uberjar {:aot :all}})
