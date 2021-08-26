# Agent

Runops agent. Customers deploy the docker image on their infrastructure.
Runops sends tasks via gRPC to each subscribed agent. If there is no communication,
then the API will persist the task in a `ready` state, and this agent will periodically
poll the tasks and execute them.

## Minimal required variables:
- TOKEN (token must be a base64 of the `org:clear-text-token` string. Clear text token is stored in orgs table with a sha-256 encoding)

## Optional variables:
- API_URL (http polling url, defaults to `https://api.runops.io`)
- GRPC_URL (gRPC url, defaults to `https://api.runops.io:9090`)
- TAGS (used to filter which targets are to be executed by the agent)
- AWS_ACCESS_KEY_ID (if using AWS secrets manager)
- AWS_SECRET_ACCESS_KEY (if using AWS secrets manager)
- AWS_REGION (if using AWS secrets manager)
- VAULT_ADDR (if using hashicorp-vault as secret manager)
- VAULT_ROLE (if using hashicorp-vault as secret manager)
- VAULT_AUTH_METHOD (if using hashicorp-vault as secret manager, currently only `kubernetes-account-service` supported)

## Run dev
$ lein run

## Build image
$ ./build.sh

## Run image
$ docker run --rm -e TOKEN={token} runops/agent:0.1.0
