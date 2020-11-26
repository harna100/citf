#!/bin/sh

docker build -t citf-docker-test ./dockerTest

if [ ! -f ./.env ]; then
    echo "Using env vars"
    docker container run \
    --name citf-docker-test \
    --network citf_citf_network \
    --env TITLE_NAME=$TITLE_NAME \
    --env ENV=$ENV \
    --rm \
    citf-docker-test
else
    echo "Using .env file"
    docker container run \
    --name citf-docker-test \
    --network citf_citf_network \
    --env-file .env \
    --rm \
    citf-docker-test
fi