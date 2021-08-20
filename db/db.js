const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

var dbconnect = mongoose.connection;

dbconnect.on("error", () => {
  console.log("Database connection failed");
});
dbconnect.on("connected", () => {
  console.log("Database connection successful");
});

module.exports = mongoose;
