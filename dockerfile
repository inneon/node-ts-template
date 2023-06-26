# Install Stage
FROM node:20.3.1-alpine as base
WORKDIR /usr/src/app
COPY . .
RUN npm ci &&\
  npm run build

FROM node:20.3.1-alpine as test
WORKDIR /usr/src/app
COPY . .
RUN npm ci

FROM base as service

WORKDIR /usr/src/app

RUN npm prune --production

ENV NODE_ENV production
CMD ["npm", "run", "prod"]