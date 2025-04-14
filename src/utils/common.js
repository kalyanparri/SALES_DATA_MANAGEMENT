const lowercaseKeys = (arr) => {
    return arr.map((object)=>{
        return Object.fromEntries(
            Object.entries(object).map(([key, value]) => [key.toLowerCase().replace(' ', '_'), value])
        );
    });
}

const addTotalSale = (arr) =>{

    return arr.map((object) => {
        return {
            ...object,
            total_sale: calculateTotalSale(object?.quantity, object?.price)
        }
    })
}

const calculateTotalSale = (quantity, price) =>{

    const arr = price?.split(' ');
    if(quantity && arr.length === 2){
        const sale = quantity * arr[0];
        return `${sale} ${arr[1]}`;
    }
    return '0';
}

const getFormattedDate = () => {
    let date = new Date();
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    return day + '-' + month + '-' + year;
}


module.exports = { lowercaseKeys, getFormattedDate, addTotalSale }