import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import mainReducer from "./reducer";

// creating redux store 
const store = createStore(mainReducer,applyMiddleware(thunk));

export default store;