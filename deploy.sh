#!/bin/bash
    echo hi123
    sh 'chmod +x build.sh'
    sh './build.sh'
    docker login -u sanjay188 -p virat@18vk
    docker tag test sanjay188/repo-1
    docker push sanjay188/repo-1
    
