#!/usr/bin/env bash

# This is a simple helper script
# mostly because we have to copy statoc files
# from 2 places for static deployment

./bin/nuxt-lambda.js example

mkdir -p example/dist-static

cp -a example/static/* example/dist-static/
cp -a example/.nuxt/dist/client example/dist-static/_nuxt

