import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div class="flex justify-center border-2 h-full border-yellow-300">
        <div class="container flex justify-center">
          <div class="max-w-sm">
            <div class="bg-white h-full relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
              <div className="overflow-hidden h-60 px-4">
                {" "}
                <img
                  class="rounded-t-lg min-h-full w-full object-cover"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div class="px-4 pt-2 pb-10 rounded-lg bg-white">
                <h1 class="text-gray-700 font-bold text-xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                  {product.name}
                </h1>
              </div>

              <div class="absolute bottom-1 py-1 px-2">
                <p class="text-gray-700 tracking-wide">
                  <Rating
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    initialRating={product.rating}
                    readonly
                  />
                </p>
              </div>
              <div class="absolute bottom-2 right-2 py-1 px-2 bg-indigo-500 rounded-md">
                <span class="text-sm text-white">&#8377;{product.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
