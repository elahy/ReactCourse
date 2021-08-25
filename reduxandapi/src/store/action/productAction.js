import { ActionTypes } from "../ActionTypes";
import axios from "axios";

export const setListofProduct = (productList) => ({
  type: ActionTypes.UPDATE_PRODUCT_LIST,
  payload: productList,
});

export const setCurrentProduct = (product) => ({
  type: ActionTypes.SET_CURRENT_PRODUCT,
  payload: product,
});

export const editProduct = (response) => ({
  type: ActionTypes.UPDATE_A_PRODUCT,
  payload: response,
});

export const requestProductList = () => {
  return async (dispatch) => {
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch(setListofProduct(response.data));
  };
};

export const requestProductDetails = (productId) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    dispatch(setCurrentProduct(response.data));
  };
};

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    const response = await axios.delete(
      `https://fakestoreapi.com/products/${productId}`
    );
    dispatch(setCurrentProduct(response));
    console.log(response, "===response from delete");
  };
};

export const updateProduct = (product) => {
  return async (dispatch) => {
    const response = await axios.put(
      `https://fakestoreapi.com/products/${product.id}`,
      {
        title: product.title,
        price: product.price,
        description: product.dexcription,
        image: product.image,
        category: product.category,
      }
    );
    dispatch(editProduct(response));
    console.log(response, "===response from update");
  };
};
