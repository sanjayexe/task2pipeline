#!/bin/bash
chmod +x build.sh
./build.sh
docker build -t test .
