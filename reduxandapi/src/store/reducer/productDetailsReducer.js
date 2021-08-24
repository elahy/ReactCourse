import { ActionTypes } from "../actionTypes";

const initialState = {
  currentProduct: null,
};

const productDetailsReducer = (state = initialState, action) => {
  if (action.type === ActionTypes.SET_CURRENT_PRODUCT) {
    return { ...state, currentProduct: action.payload };
  } else {
    return state;
  }
};

export default productDetailsReducer;
