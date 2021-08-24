import { ActionTypes } from "../actionTypes";

export const setListofProduct = (productList) => ({
  type: ActionTypes.UPDATE_PRODUCT_LIST,
  payload: productList,
});

export const setCurrentProduct = (productId) => ({
  type: ActionTypes.SET_CURRENT_PRODUCT,
  payload: productId,
});
