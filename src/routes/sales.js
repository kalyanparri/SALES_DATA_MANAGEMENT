const router = require('express').Router();
const { saveSalesData, fetchSalesData, clearSalesData} = require('../service/sales.js');
const { lowercaseKeys, getFormattedDate, addTotalSale } = require('../utils/common.js');
const csv = require("@fast-csv/parse");
const streamifier = require("streamifier");
const multer = require('multer');
const upload = multer().single("file");
const { saveUploadHistory } = require('../service/upload-history.js');

router.post('/', upload, async(req, res) => {

    const { buffer } = req.file;
    let dataFromRows = [];
    streamifier
    .createReadStream(buffer)
    .pipe(csv.parse({ delimiter: "\t", headers: true, ignoreEmpty: true }))
    .on("data", (row) => {
        dataFromRows.push(row);
    })
    .on("end", async (rowCount) => {
        try {
            dataFromRows = await lowercaseKeys(dataFromRows);
            dataFromRows = await addTotalSale(dataFromRows);
            const response = await saveSalesData(dataFromRows);
            const fileInfo = {
                file_name: req.file.originalname,
                upload_date: getFormattedDate(),
                processed_rows: response?.length
            }
            await saveUploadHistory(fileInfo);
            res.status(200).json({ rows_inserted: response?.length, message:"File uploaded successfully"});
        } catch (error) {
            res.status(400).json({ error});
        }
    });
})

router.get('/', async(req, res) => {
    let response = await fetchSalesData();
    res.send(response);
})

router.delete('/', async(req, res) => {
    let response = await clearSalesData();
    res.send(response);
})

module.exports = router;