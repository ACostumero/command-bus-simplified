FROM node:18.14.0

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install --save

COPY . /app