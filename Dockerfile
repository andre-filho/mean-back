FROM node:10.9

RUN apt-get update

WORKDIR /backend

ADD . /backend

RUN yarn install
