#!/bin/bash

printf "[*] MOVING FILES TO TESTING ENVIRONMENT...\n"

filename='./tqs_webapp/Dockerfile'
DIR='test_env'

if [ -d "$DIR" ]; then
	rm -rf test_env
    printf "[*] DONE...\n"
fi

mkdir test_env
mv -v ./* ./test_env/

cd test_env

if [ -f $filename ]; then
   rm ./tqs_webapp/Dockerfile
    printf "[*] DELETED DOCKERFILE...\n"
fi

printf "[*] CREATED DOCKERFILE...\n"
cat ./testing/Dockerfile >> ./tqs_webapp/Dockerfile

./dev.sh -a