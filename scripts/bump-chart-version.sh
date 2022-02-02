cat - > charts/Chart.yaml <<EOF
apiVersion: v2
name: agent
description: Runops Task Runner
type: application

# This is the chart version. This version number should be incremented each time you make changes
# to the chart and its templates, including the app version.
# Versions are expected to follow Semantic Versioning (https://semver.org/)
# Do not change this manually, the version is automated
version: $1

# This is the version number of the application being deployed. This version number should be
# incremented each time you make changes to the application. Versions are not expected to
# follow Semantic Versioning. They should reflect the version the application is using.
# It is recommended to use it with quotes.
# Do not change this manually, the version is automated
appVersion: "$1"

sources:
  - https://github.com/runops/agent
home: https://github.com/runops/agent
EOF
