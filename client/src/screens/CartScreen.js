import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../redux/actions/cartActions";

const CartScreen = () => {
  const [quantity, setquantity] = useState(0);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  var subTotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <div className="flex flex-col min-h-screen mt-8 max-w-screen-xl mx-auto">
      <div className="overflow-x-auto lg:mx-8">
        <div className="align-middle inline-block min-w-full px-4">
          <h1 className="pb-5 text-center font-bold text-xl">My Cart</h1>

          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y text-center divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Total Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cartItems.map((product) => (
                  <tr key={product._id}>
                    <td className="px-6 text-left py-4 whitespace-nowrap">
                      <div className="text-sm  text-gray-900">
                        {product.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        &#8377; {product.price}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {product.countInStock ? (
                        <div className="">
                          <select
                            value={product.quantity}
                            onChange={(e) =>
                              dispatch(addToCart(product, e.target.value))
                            }
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x, i) => (
                                <option value={i + 1}>{i + 1}</option>
                              )
                            )}
                          </select>
                        </div>
                      ) : (
                        <p className="font-bold text-red-600">Out of Stock</p>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      &#8377; {product.quantity * product.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <i
                        class="far fa-trash-alt cursor-pointer"
                        onClick={() => dispatch(deleteFromCart(product))}
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col items-center mt-5">
            <h1 className="text-center font-bold text-2xl">
              Total: &#8377;{subTotal}
            </h1>
            <button
              type="button"
              class="bg-blue-600 mt-6 uppercase text-white px-6 py-2 rounded font-medium hover:bg-blue-700 transition duration-200 each-in-out"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
