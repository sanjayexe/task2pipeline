#!/bin/bash

docker build -t test .
docker run -itd -p  95:80 test
