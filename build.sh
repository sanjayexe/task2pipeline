#!/bin/bash

docker build -t test .
docker run -itd -p 92:80
