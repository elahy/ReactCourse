import { combineReducers } from "redux";
import productDetailsReducer from "./productDetailsReducer";
import productlistReducer from "./productListReducer";
import cartReducer from "./CartReducer";

const mainReducer = combineReducers({
  detailStore: productDetailsReducer,
  listStore: productlistReducer,
  cartStore: cartReducer,
});

export default mainReducer;
