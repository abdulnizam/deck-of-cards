#!/bin/bash

ARG_JOBNUMBER=$1
ARG_TOTALJOBS=$2

cd ../..
npm run test:spec $(printf "%s," "${batch_tests[@]}")