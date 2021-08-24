import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import mainReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancer = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(mainReducer, composeEnhancer);
