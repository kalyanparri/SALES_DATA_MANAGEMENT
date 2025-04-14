const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require("body-parser");
const salesRouter = require('./routes/sales.js');
const uploadHistoryRouter = require('./routes/upload-history.js');
const { connectDB } = require('./db/db.js');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;

(()=>{
  connectDB();
})();

app.use('/sales', salesRouter);
app.use('/upload-history', uploadHistoryRouter);

app.listen(port, ()=>{
    console.info(`server running on port ${port}`);
})