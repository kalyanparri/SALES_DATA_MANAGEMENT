const SalesModel = require('../db/models/sales.js');

const saveSalesData = async(data) =>{
    const sales = new SalesModel(data);
    try {
        const response = await sales.save();
        return response;
    } catch (error) {
        throw new Error(error?.message);
    }
}

const fetchSalesData = async () =>{
    try {
        const sales = await SalesModel.find({});
        return sales;
    } catch (error) {
        throw new Error(error?.message);
    }
}

module.exports = { saveSalesData, fetchSalesData};