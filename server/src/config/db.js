const mongoose  = require("mongoose");

const connectDB  = async()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("MongoDB connected successfully")
    })
}

module.exports = connectDB;