#!/usr/bin/env bash
cd /tmp

rm -rf egoGraph; true

git clone https://github.com/rwuebker/egoGraph.git

cd egoGraph

npm install --unsafe-perm
npm start
