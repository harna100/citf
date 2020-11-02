FROM node:12

WORKDIR /client

COPY package*.json ./

RUN npm install

COPY . .

RUN chmod u+x  ./build.sh

CMD [ "sh", "./build.sh"]
