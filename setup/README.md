# Agent Setup

Explain how to install the runops agent in several environments

## Kubernetes - Helm 3

### Requisites

- [Install helm 3](https://helm.sh/docs/intro/install/)
- A Kubernetes Cluster
- Ask the runops team for an agent token

> We'll be providing a way to generate and reset the the agent token straight from the cli and the webapp in the near future

2. Clone the agent repo and create a namespace

```sh
git clone git@github.com:runopsio/agent.git && cd agent
kubectl create ns runops
```

> Starting from version 0.13.2 it's possible to download the tarball containing the helm package, so you could:
> `helm upgrade --install agent https://github.com/runopsio/agent/releases/download/0.13.2/agent-0.13.2.tgz`

3. Deploy the agent with custom configuration

```sh
AGENT_TOKEN=
# install or upgrade an agent with env var as credentials
helm upgrade --install agent ./charts \
    --set config.token=$AGENT_TOKEN \
    --set env_var.PG_HOST=127.0.0.1 \
    --set env_var.PG_USER=root \
    --set env_var.PG_PASS=pg-root-pass \
    --set env_var.PG_DB=appdb \
    --set env_var.MYAPP_ENV=app-custom-env \
    --namespace runops
```

In order to redeploy changing the `PG_DB` env var, run the command again:

```sh
AGENT_TOKEN=
helm upgrade --install agent ./charts \
    --set config.token=$AGENT_TOKEN \
    --set env_var.PG_HOST=127.0.0.1 \
    --set env_var.PG_USER=root \
    --set env_var.PG_PASS=pg-root-pass \
    --set env_var.PG_DB=appdb-prod \
    --set env_var.MYAPP_ENV=app-custom-env \
    --namespace runops
```

Run a second instance using a distinct tag

```sh
AGENT_TOKEN=
helm upgrade --install agent-dev ./charts \
    --set config.token=$AGENT_TOKEN \
    --set config.tags=dev \
    --set env_var.PG_HOST=127.0.0.1 \
    --set env_var.PG_USER=root \
    --set env_var.PG_PASS=pg-root-pass \
    --set env_var.PG_DB=appdb-dev \
    --set env_var.MYAPP_ENV=app-custom-env \
    --namespace runops
```

4. To uninstall

```sh
helm uninstall agent --namespace runops
```

## Kubernetes - Raw Script

### Environment Variables

- **AGENT_TOKEN** (required) the token to authenticate in the runops API
- **AGENT_TAG** (optional) which tag this agent will run
- **AGENT_JWK_URL** (optional) validate jwt tokens session for every task
- **ENV_CONFIG** (optional) a generic env-var secret configuration

This mode will create a namespace `runops` and deploy the agent, it's safe to reexecute this script
in case of adding new options (e.g.: tag)

```sh
export AGENT_TOKEN=<agent-token>
curl -sL https://raw.githubusercontent.com/runopsio/agent/main/setup/k8s.sh | bash
```

### Running With Custom Configuration

```sh
export AGENT_TOKEN=<agent-token>
export AGENT_TAG=homolog
export ENV_CONFIG='{"PG_HOST": "127.0.0.1", "PG_USER": "appuser", "PG_PASS": "123", "PG_DB": "appdb", "PG_PORT": 5432}'
curl -sL https://raw.githubusercontent.com/runopsio/agent/main/setup/k8s.sh | bash
```

## Docker Local

Run an agent locally with pg configuration integration

> You could pass the address of a local postgres installation, mind to change the PG_HOST to a docker container or your host running postgres.

```sh
AGENT_TOKEN=$(runops agents create-token -f)
runops agents docker-run \
	--token $AGENT_TOKEN \
	--ev PG_HOST=127.0.0.1 \
	--ev PG_USER=root \
	--ev PG_PASS=passwd \
	--ev PG_DB=test \
	--name agent --rm
```

Run an new agent instance with a distinct tag

```sh
runops agents docker-run \
	--tags dev \
        --token $AGENT_TOKEN \
        --ev PG_HOST=127.0.0.1 \
        --ev PG_USER=root \
        --ev PG_PASS=passwd \
        --ev PG_DB=test \
        --name agent --rm
```

Add a custom environment variable to the agent

```sh
runops agents docker-run \
        --token $AGENT_TOKEN \
        --ev PG_HOST=127.0.0.1 \
        --ev PG_USER=root \
        --ev PG_PASS=passwd \
        --ev PG_DB=test \
        -e MYCUSTOM_ENV=my-custom-env-val \
        --name agent --rm
```

## Standalone

This mode will download and execute the jar locally, in order for this to work the environment need to be installed with all requirement dependencies, check the [Dockerfile](../Dockerfile) for reference.

```sh
export AGENT_TOKEN=<agent-token>
curl -sL https://raw.githubusercontent.com/runopsio/agent/main/setup/standalone.sh | bash
```
