const express = require("express");
const dbconnection = require("./db/db");
require("dotenv").config();

const productsRoute = require("./routes/productsRoute");

const app = express();
app.use("/api/products/", productsRoute);

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("From backend");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
