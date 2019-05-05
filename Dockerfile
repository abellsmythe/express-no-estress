FROM node:carbon

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]
FROM node:8.10.0

# app directory
WORKDIR /usr/src

# Install app dependencies
COPY package.json /usr/src
RUN npm install

# Bundle app source
COPY . /usr/src

EXPOSE 3000
CMD [ "npm", "start" ]