#!/bin/bash
set -eo pipefail

AGENT_TOKEN=${AGENT_TOKEN:?Is required to be exported}

kubectl create namespace runops || true
kubectl -n runops delete secret agent-config || true
kubectl -n runops create secret generic agent-config \
  --from-literal=TOKEN=$AGENT_TOKEN \
  --from-literal=TAGS=$AGENT_TAG \
  --from-literal=JWK_URL=$AGENT_JWK_URL \
  --from-literal=ENV_CONFIG="$ENV_CONFIG" \
  --from-literal=AWS_SECRET_MANAGER=false
kubectl delete po -n runops -l app=agent || true

kubectl -n runops apply -n runops -f - <<EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: agent
  name: agent
spec:
  replicas: 1
  selector:
    matchLabels:
      app: agent
  template:
    metadata:
      labels:
        app: agent
    spec:
      containers:
      - envFrom:
        - secretRef:
            name: agent-config
        image: runops/agent
        imagePullPolicy: Always
        name: agent
EOF

echo ""
kubectl -n runops get pod
echo "------"
kubectl -n runops get secrets
