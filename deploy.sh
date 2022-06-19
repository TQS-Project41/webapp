#!/bin/bash

printf "[*] MOVING FILES TO DEPLOYMENT ENVIRONMENT...\n"

filename='./tqs_webapp/Dockerfile'
DIR='prod_env'

if [ -d "$DIR" ]; then
	rm -rf prod_env
    printf "[*] DONE...\n"
fi

mkdir prod_env
mv -v ./* ./prod_env/

cd prod_env

if [ -f $filename ]; then
    rm ./tqs_webapp/Dockerfile
    printf "[*] DELETED DOCKERFILE...\n"
fi

printf "[*] CREATED DOCKERFILE...\n"
cat ./deployment/Dockerfile >> ./tqs_webapp/Dockerfile

./prod.sh -a
