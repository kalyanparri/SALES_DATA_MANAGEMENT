FROM node:22-alpine
WORKDIR /sdm
RUN apk update && apk add git
RUN git clone https://github.com/kalyanparri/SALES_DATA_MANAGEMENT.git /sdm
RUN npm install
EXPOSE 3000
CMD npm start