import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./modules/cart/reducers";

const reducers = combineReducers({ cart: cartReducer })

const store = createStore(reducers, applyMiddleware(thunk));

export default store