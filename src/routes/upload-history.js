const router = require('express').Router();
const { saveUploadHistory, fetchUploadHistory } = require('../service/upload-history.js');

router.post('/', async(req, res) => {

    let data = {
        file_name: '1a.csv',
        upload_date: Date.now(),
        processed_rows: 5
    }
    let response = await saveUploadHistory(data);
    if(response?._id){
        res.send(response);
    }
})

router.get('/', async(req, res) => {
    let response = await fetchUploadHistory();
    res.send(response);
})

module.exports = router;