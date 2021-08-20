const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");

router.get("/getallproducts", async (req, res) => {
  try {
    Product.find({}, (err, docs) => {
      res.json({ products: docs });
    });
    // console.log(products);
    // res.json({ products });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
