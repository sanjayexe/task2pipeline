#!/bin/bash

docker build -t test .
docker run -itd  92:80 test
 
