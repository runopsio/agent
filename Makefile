SHORT_NAME ?= agent

MUTABLE_VERSION ?= $(or ${VERSION},${VERSION},latest)
IMMUTABLE_VERSION ?= latest

DOCKER_REGISTRY ?=
IMAGE_PREFIX ?= runops

IMMUTABLE_IMAGE := ${DOCKER_REGISTRY}${IMAGE_PREFIX}/${SHORT_NAME}:${IMMUTABLE_VERSION}
MUTABLE_IMAGE := ${DOCKER_REGISTRY}${IMAGE_PREFIX}/${SHORT_NAME}:${MUTABLE_VERSION}

all:
	protoc --clojure_out=grpc-client:src --proto_path=resources resources/agent.proto

info:
	@echo "Registry:        ${DOCKER_REGISTRY}"
	@echo "Immutable tag:   ${IMMUTABLE_IMAGE}"
	@echo "Mutable tag:     ${MUTABLE_IMAGE}"

build:
	lein uberjar
	docker build -t ${MUTABLE_IMAGE} .
	docker tag ${MUTABLE_IMAGE} ${IMMUTABLE_IMAGE}

docker-immutable-push:
	docker push ${IMMUTABLE_IMAGE}

docker-mutable-push:
	docker push ${MUTABLE_IMAGE}

docker-push: docker-mutable-push docker-immutable-push
