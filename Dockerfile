FROM node:16.17.0
ENV NODE_ENV=dev

WORKDIR /app

COPY . .

RUN npm ci

RUN npx tsc

CMD [ "npm", "start" ]