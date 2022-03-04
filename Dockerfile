FROM node:16.13.2-slim

ARG NODE_ENV=development

WORKDIR /app
COPY / ./

RUN npm install -g nodemon
RUN npm install

EXPOSE 3000

CMD nodemon --exec babel-node -r dotenv/config ./src/server.js
