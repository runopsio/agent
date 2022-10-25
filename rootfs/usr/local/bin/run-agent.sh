#!/bin/bash

nohup /usr/local/lib/node_modules/serve/build/main.js --listen tcp://0.0.0.0:8000 -s /agent/ui & 
if [[ "${GOSU_DISABLE}" == "true" ]]; then
    # it will override /usr/sbin/gosu
    mv /usr/local/bin/fake-gosu.sh /usr/local/bin/gosu
fi
java -jar /agent/app.jar