import { ActionTypes } from "../ActionTypes";

const initialState = {
  loader: false,
};

const loaderReducer = (state = initialState, action) => {
  if (action.type === ActionTypes.UPDATE_LOADER) {
    return { ...state, loader: action.payload };
  } else {
    return state;
  }
};

export default loaderReducer;
