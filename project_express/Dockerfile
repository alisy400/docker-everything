FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm ci

#COPY the source code of our app
COPY src/index.js index.js

#Expose the application port
EXPOSE 3000

CMD [ "node", "index.js" ]