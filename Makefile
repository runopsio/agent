SHORT_NAME ?= agent

MUTABLE_VERSION ?= $(shell echo $(or ${GITHUB_REF},${VERSION},latest) | cut -d / -f 3)
IMMUTABLE_VERSION ?= latest

DOCKER_REGISTRY ?=
IMAGE_PREFIX ?= runops

IMMUTABLE_IMAGE := ${DOCKER_REGISTRY}${IMAGE_PREFIX}/${SHORT_NAME}:${IMMUTABLE_VERSION}
MUTABLE_IMAGE := ${DOCKER_REGISTRY}${IMAGE_PREFIX}/${SHORT_NAME}:${MUTABLE_VERSION}

gen-proto:
	protoc --clojure_out=grpc-client:src --proto_path=resources resources/agent.proto

info:
	@echo "Registry:        ${DOCKER_REGISTRY}"
	@echo "Immutable tag:   ${IMMUTABLE_IMAGE}"
	@echo "Mutable tag:     ${MUTABLE_IMAGE}"

clj-kondo-lint:
	lein clj-kondo --lint src/ --config .clj-kondo/config.edn

test:
	lein test

docker-login:
	docker login -u="${DOCKER_USERNAME}" -p="${DOCKER_PASSWORD}"

build:
	docker-login
	lein bump-version ${MUTABLE_VERSION}
	lein uberjar
	docker build --build-arg VERSION=${MUTABLE_VERSION} -t ${MUTABLE_IMAGE} .
	docker tag ${MUTABLE_IMAGE} ${IMMUTABLE_IMAGE}

docker-immutable-push: docker-login
	docker push ${IMMUTABLE_IMAGE}

docker-mutable-push: docker-login
	docker push ${MUTABLE_IMAGE}

docker-push: docker-mutable-push docker-immutable-push
