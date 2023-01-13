FROM node:latest

WORKDIR /app

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

COPY .npmrc package.json ./

RUN pnpm install

COPY . .