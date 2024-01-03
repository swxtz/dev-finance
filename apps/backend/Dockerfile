FROM node:18-alpine
ENV NODE_ENV production

WORKDIR /usr/src/app

COPY . .
COPY ./.env.prod ./.env

RUN rm -rf yarn.lock

RUN npm ci --only=production

EXPOSE 3333

CMD [ "npm", "run", "start" ]