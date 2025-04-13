const SalesModel = require('../db/models/sales.js');

const saveSalesData = async(data) =>{
    try {
        return await SalesModel.insertMany(data);
    } catch (error) {
        throw new Error(error?.message);
    }
}

const fetchSalesData = async () =>{
    try {
        return await SalesModel.find({});
    } catch (error) {
        throw new Error(error?.message);
    }
}

const clearSalesData = async () =>{
    try {
        return await SalesModel.deleteMany({});
    } catch (error) {
        throw new Error(error?.message);
    }
}

module.exports = { saveSalesData, fetchSalesData, clearSalesData};