const UploadHistoryModel = require('../db/models/upload-history');

const saveUploadHistory = async(data) =>{
    const uploadHistory = new UploadHistoryModel(data);
    try {
        const response = await uploadHistory.save();
        return response;
    } catch (error) {
        throw new Error(error?.message);
    }
}

const fetchUploadHistory = async () =>{
    try {
        const uploadHistory = await UploadHistoryModel.find({});
        return uploadHistory;
    } catch (error) {
        throw new Error(error?.message);
    }
}

module.exports = { saveUploadHistory, fetchUploadHistory};