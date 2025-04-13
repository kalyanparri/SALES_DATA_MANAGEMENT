const mongoose = require("mongoose");
 
const connectDB = () => {

    const url = "mongodb+srv://kalyanparri:kalyanparri@cluster0.eubr2gb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    try {
        mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
    const dbConnection = mongoose.connection;
    dbConnection.once("open", (_) => {
        console.log(`Database connected`);
    });
    
    dbConnection.on("error", (err) => {
        console.error(`connection error: ${err}`);
    });
    return;
}

module.exports = { connectDB };