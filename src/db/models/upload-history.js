const mongoose = require('mongoose');

const UploadHistorySchema = new mongoose.Schema({
    file_name: {
        type: String,
        required: true,
    },
    upload_date: {
        type: Date, 
        default: Date.now
    },
    processed_rows:{
        type: Number,
    }
});

module.exports = mongoose.model('upload_history', UploadHistorySchema);
