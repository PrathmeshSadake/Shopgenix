export const addToCart = (product, quantity) => (dispatch, getState) => {
  const cartItem = {
    name: product.name,
    _id: product._id,
    price: product.price,
    countInStock: product.countInStock,
    quantity,
  };
  dispatch({ type: "ADD_TO_CART", payload: cartItem });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const deleteFromCart = (product) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: product });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};