import axios from "axios";
import CartReducer from "../reducers/CartReducer";
export const placeOrder = (token, subtotal) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  const currentUser = getState().loginUserReducer.currentUser;

  const cartItems = getState().CartReducer.cartItems;
  console.log(cartItems);

  try {
    const response = await axios.post(
      "https://shaypizza.onrender.com/api/orders/placeorder",
      {
        token,
        subtotal,
        currentUser,
        cartItems,
      }
    );
    dispatch({ type: "PLACE_ORDER_SUCCESS" });
    console.log(response);
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAILED" });
    console.log(error);
  }
};

export const getUserOrders = () => async (dispatch, getState) => {
  const currentUser = getState().loginUserReducer.currentUser;
  dispatch({ type: "GET_USER_ORDERS_REQUEST" });

  try {
    const response = await axios.post(
      "https://shaypizza.onrender.com/api/orders/getuserorders",
      {
        userid: currentUser._id,
      }
    );
    dispatch({ type: "GET_USER_ORDERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_USER_ORDERS_FAILED", payload: error });
  }
};
