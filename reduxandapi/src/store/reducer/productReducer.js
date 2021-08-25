import { ActionTypes } from "../ActionTypes";

const initialState = {
  productList: [],
  currentProduct: null,
  productEdited: null,
  productDeleted: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_A_PRODUCT:
      return { ...state, productEdited: action.payload };
    case ActionTypes.SET_CURRENT_PRODUCT:
      return { ...state, currentProduct: action.payload };
    case ActionTypes.UPDATE_PRODUCT_LIST:
      return { ...state, productList: action.payload };
    case ActionTypes.DELETE_A_PRODUCT:
      return { ...state, productDeleted: action.payload };

    default:
      return state;
  }
};

export default productReducer;
