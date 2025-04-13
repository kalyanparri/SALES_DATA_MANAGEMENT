const router = require('express').Router();
const fs = require('fs');
const { saveSalesData, fetchSalesData} = require('../service/sales.js');
const { readFileData } = require('../utils/sales.js');
// const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

router.post('/file', async(req, res) => {

    let data = readFileData(req);
    let response = await saveSalesData(data);
    console.log('api ',response)
    if(response?._id){
        res.send(response);
    }
    
})

router.get('/', async(req, res) => {
    let response = await fetchSalesData();
    res.send(response);
})

module.exports = router;