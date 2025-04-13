const lowercaseKeys = (arr) => {
    return arr.map((object)=>{
        return Object.fromEntries(
            Object.entries(object).map(([key, value]) => [key.toLowerCase().replace(' ', '_'), value])
        );
    });
}

module.exports = { lowercaseKeys }