FROM node:14.17.0-alpine as build-step

RUN mkdir -p /usr/src/app_test
WORKDIR /usr/src/app_test

RUN npm install

COPY . /usr/src/app_test

CMD ng serve --host 0.0.0.0 --port 9200