FROM node:8-alpine
RUN mkdir /app
COPY *.js /app/
COPY *.json /app/
COPY *.text /app/

WORKDIR /app
RUN npm install
# export port 8000 real port

EXPOSE 8000
CMD "node" "app-express"