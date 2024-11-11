import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { getAllPizzasReducer } from "./reducers/PizzaReducers";
import { CartReducer } from "./reducers/CartReducer";
import { registerUserReducer } from "./reducers/UserReducer";
import {
  placeOrderReducer,
  getUserOrdersReducer,
} from "./reducers/orderReducer";
import { loginUserReducer } from "./reducers/UserReducer";

const finalReducer = combineReducers({
  getAllPizzasReducer: getAllPizzasReducer,
  CartReducer: CartReducer,
  loginUserReducer: loginUserReducer,
  registerUserReducer: registerUserReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrdersReducer: getUserOrdersReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const initialState = {
  CartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentUser: currentUser,
  },
};

const composeEnhancers = composeWithDevTools({});

const store = configureStore({
  reducer: finalReducer,
  preloadedState: initialState,
  middleware: [...getDefaultMiddleware(), thunk],
});

export default store;
