# Using LocalStack

LocalStack allows simulating an AWS environment which could be useful for testing purposes.

To use the secret manager with localstack:

1. Run localstack in docker

```sh
docker run --rm -it -p 4566:4566 -p 4571:4571 localstack/localstack
```

2. In another window, create some secrets

```sh
cat - >/tmp/creds.json <<EOF
{"PG_USERNAME":"pguser", "PG_PASSWORD":"pgpass", "PG_DATABASE":"mydb", "PG_HOSTNAME":"127.0.0.1"}
EOF
aws --endpoint-url http://localhost:4566 secretsmanager create-secret \
  --name pg-local \
  --secret-string file:///tmp/creds.json
```

> To delete an existent secret

```sh
aws --endpoint-url http://localhost:4566 secretsmanager delete-secret \
  --secret-id pg-local \
  --force-delete-without-recovery
```

3. Run the agent with the following environment variables

```
export LOCALSTACK_URL=http://127.0.0.1:4566
export AWS_ACCESS_KEY_ID=test
export AWS_SECRET_ACCESS_KEY=test
export AWS_REGION=us-east-1
cd agent && lein run
```

This will initialize a client pointing to your localstack instance, the payload above will create a target, which could be used to test if the agent is fetching credentials from aws secret manager in localstack:

```json
// POST /v1/targets
{
    "name": "pg-local2",
    "type": "postgres",
    "secret_path": "pg-local",
    "secret_provider": "aws",
    "tags": "local",
}
```
