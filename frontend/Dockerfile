FROM node:12

WORKDIR /client

COPY package*.json ./

RUN npm install

COPY . .

RUN chmod u+x  ./build.sh

# Dev server
EXPOSE 4200
# Test runner server
EXPOSE 9876

CMD [ "sh", "./build.sh"]
