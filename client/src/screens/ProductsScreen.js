import React from "react";

const ProductsScreen = () => {
  return (
    <div class="bg-white">
      <div class="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0 sm:space-x-2 mb-5">
          <div>
            <span class="inline-block font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded">
              120
            </span>{" "}
            products
          </div>
          <form onsubmit="return false;" class="space-x-1">
            <div class="inline-block w-16">
              <select
                class="block border border-gray-200 rounded px-3 py-2 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                id="tk-products-num"
              >
                <option selected="selected">6</option>
                <option>12</option>
                <option>18</option>
                <option>24</option>
                <option>All</option>
              </select>
            </div>
            <div class="inline-block w-40">
              <select
                class="block border border-gray-200 rounded px-3 py-2 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                id="tk-products-cat"
              >
                <option selected="selected">All</option>
                <option>Electronics</option>
                <option>Computers</option>
                <option>Smart Home</option>
                <option>Arts &amp; Crafts</option>
                <option>Automotive</option>
                <option>Baby</option>
                <option>Personal Care</option>
                <option>Fashion</option>
              </select>
            </div>
          </form>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          <div>
            <div class="group relative overflow-hidden mb-2">
              <img
                src="https://source.unsplash.com/2cFZ_FB08UM/600x600"
                alt="Product Image"
              />
              <div class="p-4 flex items-center justify-center absolute inset-0 bg-blue-900 bg-opacity-90 transform transition ease-out opacity-0 scale-150 group-hover:opacity-100 group-hover:scale-100">
                <div class="flex flex-col space-y-2">
                  <button
                    type="button"
                    class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      class="opacity-50 hi-solid hi-heart inline-block w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Favorite</span>
                  </button>
                  <button
                    type="button"
                    class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white"
                  >
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
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
            <a
              href="javascript:void(0)"
              class="block font-semibold text-gray-600 hover:text-gray-500"
            >
              Amazing Smart Watch
            </a>
            <div class="text-gray-500 font-medium">$280</div>
          </div>
          <div>
            <div class="group relative overflow-hidden mb-2">
              <img
                src="https://source.unsplash.com/KStSiM1UvPw/600x600"
                alt="Product Image"
              />
              <div class="p-4 flex items-center justify-center absolute inset-0 bg-blue-900 bg-opacity-90 transform transition ease-out opacity-0 scale-150 group-hover:opacity-100 group-hover:scale-100">
                <div class="flex flex-col space-y-2">
                  <button
                    type="button"
                    class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      class="opacity-50 hi-solid hi-heart inline-block w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Favorite</span>
                  </button>
                  <button
                    type="button"
                    class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white"
                  >
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
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
            <a
              href="javascript:void(0)"
              class="block font-semibold text-gray-600 hover:text-gray-500"
            >
              Modern Shoes
            </a>
            <div class="text-gray-500 font-medium">
              <del>$120</del> <span class="text-red-500">$65</span>
            </div>
          </div>
          <div>
            <div class="group relative overflow-hidden mb-2">
              <img
                src="https://source.unsplash.com/K62u25Jk6vo/600x600"
                alt="Product Image"
              />
              <div class="p-4 flex items-center justify-center absolute inset-0 bg-blue-900 bg-opacity-90 transform transition ease-out opacity-0 scale-150 group-hover:opacity-100 group-hover:scale-100">
                <div class="flex flex-col space-y-2">
                  <button
                    type="button"
                    class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      class="opacity-50 hi-solid hi-heart inline-block w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Favorite</span>
                  </button>
                  <button
                    type="button"
                    class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white"
                  >
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
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
            <a
              href="javascript:void(0)"
              class="block font-semibold text-gray-600 hover:text-gray-500"
            >
              Cool Sunglasses
            </a>
            <div class="text-gray-500 font-medium">$92</div>
          </div>
          <div>
            <div class="group relative overflow-hidden mb-2">
              <img
                src="https://source.unsplash.com/LxVxPA1LOVM/600x600"
                alt="Product Image"
              />
              <div class="p-4 flex items-center justify-center absolute inset-0 bg-blue-900 bg-opacity-90 transform transition ease-out opacity-0 scale-150 group-hover:opacity-100 group-hover:scale-100">
                <div class="flex flex-col space-y-2">
                  <button
                    type="button"
                    class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      class="opacity-50 hi-solid hi-heart inline-block w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Favorite</span>
                  </button>
                  <button
                    type="button"
                    class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white"
                  >
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
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
            <a
              href="javascript:void(0)"
              class="block font-semibold text-gray-600 hover:text-gray-500"
            >
              Sneakers
            </a>
            <div class="text-gray-500 font-medium">
              <del>$57</del> <span class="text-red-500">$43</span>
            </div>
          </div>
          <div>
            <div class="group relative overflow-hidden mb-2">
              <img
                src="https://source.unsplash.com/NuOGFo4PudE/600x600"
                alt="Product Image"
              />
              <div class="p-4 flex items-center justify-center absolute inset-0 bg-blue-900 bg-opacity-90 transform transition ease-out opacity-0 scale-150 group-hover:opacity-100 group-hover:scale-100">
                <div class="flex flex-col space-y-2">
                  <button
                    type="button"
                    class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      class="opacity-50 hi-solid hi-heart inline-block w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Favorite</span>
                  </button>
                  <button
                    type="button"
                    class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white"
                  >
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
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
            <a
              href="javascript:void(0)"
              class="block font-semibold text-gray-600 hover:text-gray-500"
            >
              Bluetooth headphones
            </a>
            <div class="text-gray-500 font-medium">$160</div>
          </div>
          <div>
            <div class="group relative overflow-hidden mb-2">
              <img
                src="https://source.unsplash.com/KsLPTsYaqIQ/600x600"
                alt="Product Image"
              />
              <div class="p-4 flex items-center justify-center absolute inset-0 bg-blue-900 bg-opacity-90 transform transition ease-out opacity-0 scale-150 group-hover:opacity-100 group-hover:scale-100">
                <div class="flex flex-col space-y-2">
                  <button
                    type="button"
                    class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      class="opacity-50 hi-solid hi-heart inline-block w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Favorite</span>
                  </button>
                  <button
                    type="button"
                    class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white"
                  >
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
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
            <a
              href="javascript:void(0)"
              class="block font-semibold text-gray-600 hover:text-gray-500"
            >
              Retro Camera
            </a>
            <div class="text-gray-500 font-medium">$153</div>
          </div>
        </div>

        <hr class="my-10" />

        <div>
          <nav class="flex sm:hidden">
            <a
              href="javascript:void(0)"
              class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                class="hi-solid hi-chevron-left inline-block w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <div class="flex items-center flex-grow justify-center px-2 sm:px-4">
              <span>
                Page <span class="font-semibold">1</span> of{" "}
                <span class="font-semibold">20</span>
              </span>
            </div>
            <a
              href="javascript:void(0)"
              class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                class="hi-solid hi-chevron-right inline-block w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </nav>
          <nav class="hidden sm:flex sm:justify-between">
            <a
              href="javascript:void(0)"
              class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                class="hi-solid hi-chevron-left inline-block w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <div class="inline-flex">
              <a
                href="javascript:void(0)"
                class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600"
              >
                <span class="px-0 sm:px-1">1</span>
              </a>
              <a
                href="javascript:void(0)"
                class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600"
              >
                <span class="px-0 sm:px-1">2</span>
              </a>
              <a
                href="javascript:void(0)"
                class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600"
              >
                <span class="px-0 sm:px-1">3</span>
              </a>
              <div class="flex items-center justify-center px-2 sm:px-4">
                ...
              </div>
              <a
                href="javascript:void(0)"
                class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600"
              >
                <span class="px-0 sm:px-1">19</span>
              </a>
              <a
                href="javascript:void(0)"
                class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600"
              >
                <span class="px-0 sm:px-1">20</span>
              </a>
            </div>
            <a
              href="javascript:void(0)"
              class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                class="hi-solid hi-chevron-right inline-block w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ProductsScreen;
