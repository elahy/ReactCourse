export const setListofProduct = (productList) => ({
  type: "UPDATE_PRODUCT_LIST",
  payload: productList,
});

export const setCurrentProduct = (productId) => ({
  type: "SET_CURRENT_PRODUCT",
  payload: productId,
});
