#!/bin/sh

# Builds for dev or prod based on env variable
if [ "${ENV}" = "PROD" ]; then
    npm run build:prod
elif [ "${ENV}" = "TEST" ]; then
    npm run test
elif [ "${ENV}" = "E2E" ]; then
    npm run e2e
else
    npm start
fi
