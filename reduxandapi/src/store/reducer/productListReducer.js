import { ActionTypes } from "../actionTypes";

const initialState = {
  productList: [],
};

const productlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_PRODUCT_LIST:
      return { ...state, productList: action.payload };

    default:
      return state;
  }
};

export default productlistReducer;
