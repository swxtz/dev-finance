FROM node:18-alpine

WORKDIR /usr/src/app

COPY . .
COPY ./.env.prod ./.env

COPY ./yarn.lock ./yarn.lock

RUN npm install -g corepack --quiet --no-optional --no-fund --loglevel=error

RUN yarn --network-timeout 100000

RUN yarn build

EXPOSE 3333

CMD [ "yarn", "start" ]