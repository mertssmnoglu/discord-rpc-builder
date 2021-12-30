FROM node:16.13.1-alpine
WORKDIR /usr/src/discord-rpc-builder
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "node", "index.js" ]