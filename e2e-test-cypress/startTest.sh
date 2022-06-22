#!/bin/bash

ARG_JOBNUMBER=$1
ARG_TOTALJOBS=$2

function isTotalJobsTooLarge() {
    if [[ $ARG_TOTALJOBS -gt $1 ]]; then
        echo "Total jobs '$ARG_TOTALJOBS', cannot be greater than the total number of test suites '$1'"
        exit 1
    fi
}

if [[ -z $ARG_JOBNUMBER ]]; then
    echo "Job number cannot be empty and must be a number"
    exit 1
fi

if [[ -z $ARG_TOTALJOBS ]]; then
    echo "Total jobs cannot be empty and must be a number"
    exit 1
fi

if [[ $ARG_JOBNUMBER -gt $ARG_TOTALJOBS ]]; then
    echo "Job number '$ARG_JOBNUMBER', cannot be greater than total jobs '$ARG_TOTALJOBS'"
    exit 1
fi

job_number=$(($ARG_JOBNUMBER-1))
batch_tests=()
cd src
cd integration

# Input list of test files into an array
testFilesList=($(ls -d *.spec.ts))
isTotalJobsTooLarge ${#testFilesList[@]}

for (( index=$job_number; index<${#testFilesList[@]}; index+=$ARG_TOTALJOBS ));
do
    if [[ ! "GDPRAds.spec.ts" =~ "${testFilesList[index]}" ]]; then
        batch_tests+=("src/integration/${testFilesList[index]}")
    fi
done

cd ../..

npm run test:spec $(printf "%s," "${batch_tests[@]}")