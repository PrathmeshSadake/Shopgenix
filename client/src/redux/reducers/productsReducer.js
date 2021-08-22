export const getAllProductsReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return { loading: true };
    case "GET_PRODUCTS_SUCCESS":
      return { loading: false, data: action.payload };
    case "GET_PRODUCTS_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getProductByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_PRODUCTBYID":
      return { loading: true };
    case "GET_PRODUCTBYID_SUCCESS":
      return { loading: false, data: action.payload };
    case "GET_PRODUCTBYID_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
