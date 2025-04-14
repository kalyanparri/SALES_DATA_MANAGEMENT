const mongoose = require('mongoose');

const UploadHistorySchema = new mongoose.Schema({
    file_name: {
        type: String,
        required: true,
    },
    upload_date: {
        type: String, 
    },
    processed_rows:{
        type: Number,
    }
});

module.exports = mongoose.model('upload_history', UploadHistorySchema);
