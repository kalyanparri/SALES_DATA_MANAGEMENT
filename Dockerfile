FROM node:22-alpine
WORKDIR /sdm
# RUN apk update && apk add git
# RUN git clone https://github.com/kalyanparri/SALES_DATA_MANAGEMENT.git /sdm
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD npm start