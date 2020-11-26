FROM alpine

WORKDIR /client

COPY . .

RUN chmod u+x ./test-docker.sh

CMD [ "./test-docker.sh" ]