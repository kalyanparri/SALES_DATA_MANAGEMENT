const mongoose = require('mongoose');

const SalesSchema = new mongoose.Schema({
    transaction_id: {
        type: String,
        required: true,
    },
    customer_name: {
        type: String,
    },
    product:{
        type: String,
    },
    quantity:{
        type: Number,
    },
    price:{
        type: String,
    },
    total_sale:{
        type: String,
    },
    date: { 
        type: String
    },
});

module.exports = mongoose.model('sales', SalesSchema);
