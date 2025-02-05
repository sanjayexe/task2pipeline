#!/bin/bash
    echo hi123
    sh 'chmod +x build.sh'
    sh './build.sh'
    docker login -u sanjay188 -p 123456789
    docker tag test sanjay188/repo-1
    docker push sanjay188/repo-1
    
