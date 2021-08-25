import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./CartReducer";

const mainReducer = combineReducers({
  productStore: productReducer,
  cartStore: cartReducer,
});

export default mainReducer;
