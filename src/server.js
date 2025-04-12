const express = require('express');
require('dotenv').config();
const salesRouter = require('./routes/sales-router.js');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/sales', salesRouter);

app.listen(port, ()=>{
    console.info(`server running on port ${port}`);
})