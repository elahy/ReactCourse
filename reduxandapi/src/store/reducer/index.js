import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./CartReducer";
import loaderReducer from "./loaderReducer";

const mainReducer = combineReducers({
  productStore: productReducer,
  cartStore: cartReducer,
  loaderStore: loaderReducer,
});

export default mainReducer;
