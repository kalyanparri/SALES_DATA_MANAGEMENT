const router = require('express').Router();
const { saveUploadHistory, fetchUploadHistory, clearUploadHistory } = require('../service/upload-history.js');

// we can use this API externally
router.post('/', async(req, res) => {
    let response = await saveUploadHistory(req?.body);
    if(response?._id){
        res.send(response);
    }
})

router.get('/', async(req, res) => {
    let response = await fetchUploadHistory();
    res.send(response);
})

router.delete('/', async(req, res) => {
    let response = await clearUploadHistory();
    res.send(response);
})

module.exports = router;