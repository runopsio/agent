(defproject agent "0.0.0"
  :description "Runops Agent"
  :url "https://github.com/runops/agent"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.3"]
                 [org.clojure/core.async "1.3.610"]
                 [org.clojure/data.json "1.0.0"]
                 [buddy/buddy-core "1.10.1"]
                 [buddy/buddy-sign "3.4.1"]

                 ; gRPC
                 [protojure "1.5.14"]
                 [protojure/google.protobuf "0.9.1"]
                 [com.google.protobuf/protobuf-java "3.15.6"]
                 [org.eclipse.jetty.http2/http2-client "9.4.38.v20210224"]
                 [org.eclipse.jetty/jetty-alpn-java-client "9.4.38.v20210224"]
                 [org.ow2.asm/asm "8.0.1"]

                 ; monitoring
                 [io.sentry/sentry-clj "5.2.158"]
                 [io.honeycomb/honeycomb-opentelemetry-sdk "0.4.0"]

                 ; logging
                 [cambium/cambium.core "1.1.0"]
                 [cambium/cambium.codec-cheshire "1.0.0"]
                 [cambium/cambium.logback.json "0.4.4"]

                 ; aws
                 [com.cognitect.aws/api "0.8.524"]
                 [com.cognitect.aws/endpoints "1.1.12.69"]
                 [com.cognitect.aws/ecs "813.2.972.0"]

                 [clj-kondo "2021.08.06"]
                 [mount "0.1.16"]
                 [clj-http "3.12.3"]
                 [software.amazon.awssdk/secretsmanager "2.16.69"]
                 [camel-snake-kebab "0.4.2"]
                 [de.ubercode.clostache/clostache "1.4.0"]
                 [buddy "2.0.0"]]
  :plugins [[lein-bump-version "0.1.6"]]
  :source-paths ["src" "test"]
  :main ^:skip-aot agent.core
  :target-path "target/%s"
  :aliases {"clj-kondo" ["trampoline" "run" "-m" "clj-kondo.main"]
            "run-grpc-dev" ["trampoline" "run" "-m" "agent.core/run-grpc-dev"]}
  :profiles {:uberjar {:aot :all}})
