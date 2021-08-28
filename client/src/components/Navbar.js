import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const addToCartReducer = useSelector((state) => state.cart);
  const { cartItems } = addToCartReducer;
  return (
    <header class="flex flex-none items-center bg-white py-4">
      <div class="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 container xl:max-w-7xl mx-auto px-4 lg:px-8">
        <div>
          <Link
            to="/"
            class="inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-blue-600 hover:text-blue-400"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              class="opacity-50 hi-solid hi-shopping-bag inline-block w-4 h-4 -mt-0.5"
            >
              <path
                fill-rule="evenodd"
                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>SHOPGENIX</span>
          </Link>
        </div>
        <div class="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 md:space-x-10">
          <nav class="space-x-4 md:space-x-6">
            <Link
              to="/products"
              class="font-semibold text-gray-900 hover:text-gray-500"
            >
              <span>Products</span>
            </Link>
            <Link
              class="font-semibold text-gray-900 hover:text-gray-500"
              to="/cart"
            >
              <i className="fas fa-shopping-cart"></i>
              <span className="text-sm ml-1">{cartItems.length}</span>
            </Link>
          </nav>
          <div class="flex items-center justify-center space-x-2">
            <Link
              to="/signin"
              class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
            >
              <span>Sign In</span>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                class="opacity-50 hi-solid hi-arrow-right inline-block w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
