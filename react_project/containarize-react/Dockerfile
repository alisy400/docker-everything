#Build our production bundle

FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

# Serve the bundle with an http server

FROM nginx:1.27.0

COPY --from=build app/build /usr/share/nginx/html


