# Agent Setup

Explain how to install the runops agent in several environments

## Environment Variables

- **AGENT_TOKEN** (required) the token to authenticate in the runops API
- **AGENT_TAG** (optional) which tag this agent will run
- **AGENT_JWK_URL** (optional) validate jwt tokens session for every task
- **ENV_CONFIG** (optional) a generic env-var secret configuration

## Kubernetes

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

## Standalone

This mode will download and execute the jar locally, in order for this to work the environment need to be installed with all requirement dependencies, check the [Dockerfile](../Dockerfile) for reference.

```sh
export AGENT_TOKEN=<agent-token>
curl -sL https://raw.githubusercontent.com/runopsio/agent/main/setup/standalone.sh | bash
```
