const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema(
  {
    userid: {
      type: mongoose.Schema.Types.ObjectId,
    },
    name: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  {
    timeStamps: true,
  }
);
const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    countInStock: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    reviews: [ReviewSchema],
  },
  {
    timeStamps: true,
  }
);

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
