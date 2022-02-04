(defproject agent "0.0.0"
  :description "Runops Agent"
  :url "https://github.com/runops/agent"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.3"]
                 [org.clojure/core.async "1.5.644"]
                 [org.clojure/data.json "1.0.0"]
                 [buddy "2.0.0"]
                 [buddy/buddy-core "1.10.1"]
                 [buddy/buddy-sign "3.4.1"]

                 ; gRPC
                 [protojure "1.6.4"]
                 [protojure/google.protobuf "0.9.1"]

                 ;; -- PROTOC_GEN_CLOJURE CLIENT DEPS --
                 [org.eclipse.jetty.http2/http2-client "11.0.7"]
                 [org.eclipse.jetty/jetty-alpn-java-client "11.0.7"]
                 [org.eclipse.jetty/jetty-client "11.0.7"]

                 ;; -- Jetty Client Dep --
                 [org.ow2.asm/asm "9.1"]

                 ; monitoring
                 [io.sentry/sentry-clj "5.5.164"]
                 [io.honeycomb/honeycomb-opentelemetry-sdk "0.4.0"]

                 ;; logging
                 [com.taoensso/timbre "5.1.2"]
                 [com.fzakaria/slf4j-timbre "0.3.21"]
                 ;; required because of https://github.com/fzakaria/slf4j-timbre/issues/45
                 [org.slf4j/slf4j-api "1.7.30"]

                 ; aws
                 [amazonica/amazonica "0.3.159" :exclusions [com.amazonaws/aws-java-sdk
                                                             com.amazonaws/amazon-kinesis-client
                                                             com.amazonaws/dynamodb-streams-kinesis-adapter]]
                 [com.amazonaws/aws-java-sdk-ecs "1.11.968"]

                 ;; gcp
                 [com.google.cloud/google-cloud-dlp "3.1.0"]

                 [clj-kondo "2021.08.06"]
                 [mount "0.1.16"]
                 [clj-http "3.12.3"]
                 [software.amazon.awssdk/secretsmanager "2.17.102"]
                 [camel-snake-kebab "0.4.2"]
                 [de.ubercode.clostache/clostache "1.4.0"]]
  :plugins [[lein-bump-version "0.1.6"]]
  :source-paths ["src" "test"]
  :main ^:skip-aot agent.core
  :target-path "target/%s"
  :aliases {"clj-kondo" ["trampoline" "run" "-m" "clj-kondo.main"]
            "run-grpc-dev" ["trampoline" "run" "-m" "agent.core/run-grpc-dev"]}
  :profiles {:uberjar {:aot :all}})
