import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div class="group relative overflow-hidden mb-2">
        <div className="overflow-hidden h-72">
          <img
            class="rounded-t-lg min-h-full w-full object-cover"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div class="p-4 flex items-center justify-center absolute inset-0 bg-blue-900 bg-opacity-90 transform transition ease-out opacity-0 scale-150 group-hover:opacity-100 group-hover:scale-100">
          <div class="flex flex-col space-y-2">
            <Link to={`/product/${product._id}`}
              type="button" class="inline-flex justify-center items-center
              space-x-2 border font-semibold focus:outline-none px-3 py-2
              leading-5 text-sm rounded border-gray-300 bg-white text-gray-800
              hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300
              focus:ring focus:ring-gray-500 focus:ring-opacity-25
              active:bg-white active:border-white" >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                class="opacity-50 hi-solid hi-shopping-bag inline-block w-4 h-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>View</span>
            </Link>
          </div>
        </div>
      </div>
      <a
        href="javascript:void(0)"
        class="block font-semibold text-gray-600 hover:text-gray-500"
      >
        {product.name}
      </a>
      <p className="text-gray-700 tracking-wide">
        <Rating
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star"
          initialRating={product.rating}
          readonly
        />
      </p>
      <div class="text-gray-500 font-medium">&#8377;{product.price}</div>
    </div>
  );
};

export default ProductCard;
