const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true,
      tlsAllowInvalidCertificates: false,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    });
};

module.exports = connectDB;
