# ECS Rails Console Exec Integration

In order to configure a cluster to function properly with ECS Rails Console, a few requirements need to be fullfiled:

- https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html#ecs-exec-considerations

> [This project](https://github.com/aws-containers/amazon-ecs-exec-checker) could be used to check if the ECS setup is properly configured

## Quick Start

1. Assuming that you have valid credentials at `~/.aws/...` to interact with ECS, export the following variables:

```env
export TAGS=local
# get a token from the production environment
export TOKEN=
ACCESS_KEY=$(cat ~/.aws/credentials  |grep aws_access |awk {'print $3'})
SECRET_KEY=$(cat ~/.aws/credentials  |grep aws_secret |awk {'print $3'})
AWS_REGION=us-east-2
# name of the cluster, task id and container
ECS_CLUSTER=
ECS_TASK_ID=
ECS_CONTAINER=
export ECS_CONFIG='{"ECS_AWS_ACCESS_KEY_ID": "'${ACCESS_KEY}'", "ECS_AWS_SECRET_ACCESS_KEY": "'${SECRET_KEY}'", "ECS_AWS_REGION": "us-east-2", "ECS_CLUSTER": $ECS_CLUSTER, "ECS_TASK_ID": $ECS_TASK_ID, "ECS_CONTAINER": $ECS_CONTAINER}'
```

2. Run the agent

```sh
git clone git@github.com:runopsio/agent.git && cd agent
lein run
```

3. Create a target and run a task

```sh
runops targets create \
  --tags local \
  --name rails-ecs-local \
  --type rails-console-ecs \
  --secret_provider env-var \
  --secret_path "ECS_CONFIG"

runops tasks create -t rails-ecs-local -s 'puts "Hello World from rails ecs console"'
```
