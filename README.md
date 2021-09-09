# Agent

Runops agent. Customers deploy the docker image on their infrastructure.
Runops sends tasks via gRPC to each subscribed agent. If there is no communication,
then the API will persist the task in a `ready` state, and this agent will periodically
poll the tasks and execute them.

## Minimal required variables:
- TOKEN (token must be a base64 of the `org:clear-text-token` string. Clear text token is stored in orgs table with a sha-256 encoding)

## Optional variables:
- API_URL (http polling url, defaults to `https://api.runops.io`)
- GRPC_URL (gRPC url, defaults to `https://api.runops.io:8443`)
- GRPC_SSL (if gRPC uses ssl, defaults to `true`. If targeting a localhost grpc server, set to `false`)
- TAGS (used to filter which targets are to be executed by the agent)
- AWS_ACCESS_KEY_ID (if using AWS secrets manager)
- AWS_SECRET_ACCESS_KEY (if using AWS secrets manager)
- AWS_REGION (if using AWS secrets manager)
- VAULT_ADDR (if using hashicorp-vault as secret manager)
- VAULT_ROLE (if using hashicorp-vault as secret manager)
- VAULT_AUTH_METHOD (if using hashicorp-vault as secret manager, currently only `kubernetes-account-service` supported)

## Run dev
$ lein run

### Run Tests

```sh
lein test
```

## Build / Release image

> In order to build the agent you'll need [protoc](https://grpc.io/docs/protoc-installation/) and [protoc-plugin](https://github.com/protojure/protoc-plugin#installation)

```sh
VERSION=0.1.0 make build
# push version image and tag as latest
VERSION=0.1.0 make docker-push

# optionally, release as latest
make docker-immutable-push
# release tag version
VERSION=0.1.0 make docker-mutable-push
```

## Run image
$ docker run --rm -e TOKEN={token} runops/agent:0.1.0

