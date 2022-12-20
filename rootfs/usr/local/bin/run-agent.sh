#!/bin/bash

if [[ "${GOSU_DISABLE}" == "true" ]]; then
    # it will override /usr/sbin/gosu
    mv /usr/local/bin/fake-gosu.sh /usr/local/bin/gosu
fi
java -jar /agent/app.jar