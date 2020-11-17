FROM node:15.1.0-alpine3.10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
#CMD ["npm", "run", "dev"]
