import { ActionTypes } from "../ActionTypes";
import axios from "axios";

export const setListofProduct = (productList) => ({
  type: ActionTypes.UPDATE_PRODUCT_LIST,
  payload: productList,
});

export const setCurrentProduct = (productId) => ({
  type: ActionTypes.SET_CURRENT_PRODUCT,
  payload: productId,
});

export const requestProductList = () => {
  return async (dispatch) => {
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch(setListofProduct(response.data));
  };
};

export const requestProductDetails = (currentProduct) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${currentProduct}`
    );
    dispatch(setCurrentProduct(response.data));
  };
};
