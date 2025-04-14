const lowercaseKeys = (arr) => {
    return arr.map((object)=>{
        return Object.fromEntries(
            Object.entries(object).map(([key, value]) => [key.toLowerCase().replace(' ', '_'), value])
        );
    });
}

const getFormattedDate = () => {
    let date = new Date();
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    return day + '-' + month + '-' + year;
}


module.exports = { lowercaseKeys, getFormattedDate }