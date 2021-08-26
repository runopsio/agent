all:
	protoc --clojure_out=grpc-client:src --proto_path=resources resources/agent.proto
