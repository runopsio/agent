#!/bin/bash

nohup /usr/local/lib/node_modules/serve/build/main.js --listen tcp://0.0.0.0:8280 -s /agent/ui & 
java -jar /agent/app.jar