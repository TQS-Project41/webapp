FROM node:14.17.0-alpine as build-step

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g @angular/cli@13.1.4

COPY ./package.json ./
RUN npm install

COPY . .

CMD ng serve --prod --host 0.0.0.0 --disable-host-check
