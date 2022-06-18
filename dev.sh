#!/bin/bash

down_flg=0
build_flg=0
help_flg=0
sleeps="10"
time_per_sleep=3

while getopts hjda flag
do
	case ${flag} in
		h) 
			help_flg=1
		;;
		d) 
			down_flg=1
		;;
		b)
			build_flg=1
		;;	
		
		a)
			down_flg=1
			build_flg=1
		;;
	esac
done

if [[ "$help_flg" -eq 1 ]]; then
	printf "\nUSAGE: run.sh\n\tOPTIONS:\n\t\tno options : Only ups containers\n\t\t-d : Down containers\n\t\t-b : Build containers\n\t\t-a : All the options\n\n\n"
	exit 0
fi


printf "[*] STARTING DEPLOYMENT...\n"
printf "[*] DEPLOYING CONTAINERS...\n"

if [[ "$down_flg" -eq 1 ]]; then
	printf "\t[+] DOWNING CONTAINERS...\n"
	sudo docker-compose -f docker-compose.dev.yml --env-file ./testing/.env down
	printf "[+] DONE.\n"
fi

if [[ "$build_flg" -eq 1 ]]; then
	printf "\t[+] BUILDING CONTAINERS...\n"
	sudo docker-compose -f docker-compose.dev.yml --env-file ./testing/.env build
	ret=$?
	(($? != 0)) && { printf "[-] ERROR BUILDING CONTAINERS \n"; exit 1; }
	printf "\t[+] DONE.\n"
fi

printf "[+] RUNNING CONTAINERS...\n"
sudo docker-compose -f docker-compose.dev.yml --env-file ./testing/.env up -d