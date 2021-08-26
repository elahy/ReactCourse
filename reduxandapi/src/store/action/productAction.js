import { ActionTypes } from "../ActionTypes";
import axios from "axios";
import { setLoaderValue } from "./loaderAction";

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
export const deleteProduct = (response) => ({
  type: ActionTypes.DELETE_A_PRODUCT,
  payload: response,
});

export const requestProductList = () => {
  return async (dispatch) => {
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch(setListofProduct(response.data));
    dispatch(setLoaderValue(false));
  };
};

export const requestProductDetails = (productId) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    dispatch(setCurrentProduct(response.data));
    dispatch(setLoaderValue(false));
  };
};

export const requestDeleteProduct = (productId) => {
  return async (dispatch) => {
    const response = await axios.delete(
      `https://fakestoreapi.com/products/${productId}`
    );
    dispatch(deleteProduct(response));
    dispatch(setLoaderValue(false));
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
    dispatch(setLoaderValue(false));
    // console.log(response, "===response from update");
  };
};
