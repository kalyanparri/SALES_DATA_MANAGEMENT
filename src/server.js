const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require("body-parser");
const { connectDB } = require('./db/db.js');
const apiRouter = require('./routes/api.js');
const replicaApp = process.env.APP_NAME;
const apiRoot = '/api';

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;

(()=>{
  connectDB();
})();

app.use(apiRoot, (req, res, next)=> {
  console.log(`${replicaApp} server instance responded`);
  next();
}, apiRouter);

app.listen(port, ()=>{
    console.info(`server ${replicaApp} instance running on port ${port}`);
})