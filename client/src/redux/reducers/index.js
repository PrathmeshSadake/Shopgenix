import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import {
  getAllProductsReducer,
  getProductByIdReducer,
} from "./productsReducer";

const rootReducer = combineReducers({
  products: getAllProductsReducer,
  product: getProductByIdReducer,
  cart: cartReducer,
});

export default rootReducer;
