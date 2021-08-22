import Rating from "react-rating";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../redux/actions/productsActions";
import LoadingSpinner from "../components/LoadingSpinner";
import { addToCart } from "../redux/actions/cartActions";

const ProductDescriptionScreen = ({ match }) => {
  const [quantity, setquantity] = useState(1);

  const getProductByIdState = useSelector((state) => state.product);
  const { data, loading, error } = getProductByIdState;
  const dispatch = useDispatch();

  const productId = match.params.id;
  useEffect(() => {
    dispatch(getSingleProduct(productId));
    // eslint-disable-next-line
  }, []);

  function addItemToCart() {
    dispatch(addToCart(data, quantity));
  }

  return (
    <div className="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
      {data && (
        <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div className="relative">
                <img src={data.image} className="w-full relative z-10" alt="" />
                <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
              </div>
            </div>

            <div className="w-full md:w-1/2 px-10">
              <div className="mb-3">
                <h1 className="font-bold uppercase text-2xl mb-3">
                  {data.name}
                </h1>
                <Rating
                  emptySymbol="far fa-star"
                  fullSymbol="fas fa-star"
                  initialRating={data.rating}
                  readonly
                />
                <p className="text-md mt-2">{data.description}</p>
              </div>

              <div className="mb-4">
                {data.countInStock ? (
                  <div className="">
                    <span className="mr-3 font-medium">Quantity</span>
                    <select
                      value={quantity}
                      onChange={(e) => setquantity(e.target.value)}
                    >
                      {[...Array(data.countInStock).keys()].map((x, i) => (
                        <option value={i + 1}>{i + 1}</option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <p className="font-bold text-red-600">Out of Stock</p>
                )}
              </div>
              <div>
                <div className="inline-block align-bottom mr-5">
                  <span className="text-2xl leading-none align-baseline">
                    &#8377;
                  </span>

                  <span className="font-bold text-5xl leading-none align-baseline">
                    {data.price}
                  </span>
                </div>
                <div className="inline-block align-bottom">
                  <button
                    onClick={addItemToCart}
                    disabled={!data.countInStock}
                    className={`${
                      !data.countInStock
                        ? "bg-yellow-100 cursor-default"
                        : "bg-yellow-300 hover:opacity-100"
                    } opacity-75  text-indigo-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold`}
                  >
                    <i className="mdi mdi-cart -ml-2 mr-2"></i> ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {loading && <LoadingSpinner />}
      {error && <h1>{error.message}</h1>}
    </div>
  );
};

export default ProductDescriptionScreen;
