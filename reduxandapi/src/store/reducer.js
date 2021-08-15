const initialState = {
  productList: [],
};

const myReducer = (state = initialState, action) => {
  if (action.type === "update_product_list") {
    return { ...state, productList: action.payload };
  } else {
    return state;
  }
};

export default myReducer;
