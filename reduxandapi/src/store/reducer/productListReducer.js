const initialState = {
  productList: [],
};

const productlistReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_PRODUCT_LIST") {
    return { ...state, productList: action.payload };
  } else {
    return state;
  }
};

export default productlistReducer;
