#!/bin/bash

mkdir -p build && rm -rf ./build/webapp
git clone git@github.com:runopsio/webapp.git ./build/webapp && cd ./build/webapp
npm install
npm run release:agent-ui
mv resources/public ../../rootfs/agent/ui
cd -
