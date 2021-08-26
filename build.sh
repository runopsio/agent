#!/bin/bash

VERSION=0.1.0

# build agent
lein uberjar


# build outer docker image
docker build -t runops/agent:$VERSION .
docker push runops/agent:$VERSION

docker tag runops/agent:$VERSION runops/agent:latest
docker push runops/agent:latest