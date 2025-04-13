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
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('sales', SalesSchema);
