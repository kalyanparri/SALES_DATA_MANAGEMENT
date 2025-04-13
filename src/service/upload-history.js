const UploadHistoryModel = require('../db/models/upload-history');

const saveUploadHistory = async(data) =>{
    const uploadHistory = new UploadHistoryModel(data);
    try {
        return await uploadHistory.save(data);
    } catch (error) {
        throw new Error(error?.message);
    }
}

const fetchUploadHistory = async () =>{
    try {
        return await UploadHistoryModel.find({});
    } catch (error) {
        throw new Error(error?.message);
    }
}

const clearUploadHistory = async () =>{
    try {
        return await UploadHistoryModel.deleteMany({});
    } catch (error) {
        throw new Error(error?.message);
    }
}

module.exports = { saveUploadHistory, fetchUploadHistory, clearUploadHistory};