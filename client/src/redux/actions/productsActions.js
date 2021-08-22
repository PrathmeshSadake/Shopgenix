import axios from "axios";

export const getAllProducts = () => (dispatch) => {
  dispatch({ type: "GET_ALL_PRODUCTS" });
  axios
    .get("/api/products/getallproducts")
    .then((res) => {
      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: res.data.products });
    })
    .catch((err) => {
      console.error(err);
      dispatch({ type: "GET_PRODUCTS_FAIL", payload: err });
    });
};

export const getSingleProduct = (productid) => (dispatch) => {
  dispatch({ type: "GET_PRODUCTBYID" });
  console.log(productid);
  axios
    .post("/api/products/getproductbyid", { productid })
    .then((res) => {
      dispatch({ type: "GET_PRODUCTBYID_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      console.error(err);
      dispatch({ type: "GET_PRODUCTBYID_FAIL", payload: err });
    });
};
