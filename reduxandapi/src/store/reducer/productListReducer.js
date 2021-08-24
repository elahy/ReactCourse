import { ActionTypes } from "../actionTypes";

const initialState = {
  productList: [],
};

const productlistReducer = (state = initialState, action) => {
  if (action.type === ActionTypes.UPDATE_PRODUCT_LIST) {
    return { ...state, productList: action.payload };
  } else {
    return state;
  }
};

export default productlistReducer;
