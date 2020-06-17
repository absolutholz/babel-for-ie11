# https://derickbailey.com/2017/03/09/selecting-a-node-js-image-for-docker/
FROM node:14.3.0-slim

WORKDIR /var/www/babel

COPY ./package*.json ./

# https://stackoverflow.com/questions/50837605/git-install-fails-in-dockerfile
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y git

RUN npm install
