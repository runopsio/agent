#!/bin/bash
set -eo pipefail

AGENT_TOKEN=${AGENT_TOKEN:?Is required to be exported}
COMMAND=./agent-standalone.jar

export TOKEN=$AGENT_TOKEN
export TAGS=$AGENT_TAG
export JWK_URL=$AGENT_JWK_URL
export ENV_CONFIG=$ENV_CONFIG
export AWS_SECRET_MANAGER=false

if [ -f $COMMAND ]; then
    java -jar $COMMAND
    exit 0
fi
AGENT_LATEST=$(curl -s https://api.github.com/repos/runopsio/agent/releases/latest |egrep "https://.+standalone.jar" |awk {'print $2'} |sed 's/"//g')
curl -sL $AGENT_LATEST > $COMMAND

java -jar $COMMAND
