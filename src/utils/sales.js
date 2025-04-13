
const readFileData = () =>{
    let data =  {
        transaction_id: 'TX109',
        customer_name: 'John Doe',
        product: 'MacBook Pro',
        quantity: 3,
        price: '300 USD',
        date: Date.now()
    }

    return data;
}

module.exports = { readFileData }