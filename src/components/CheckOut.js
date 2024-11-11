import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderActions";
import Success from "../components/Success";
import Error from "../components/Error";
import Loading from "../components/Loading";

function CheckOut({ subtotal }) {
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderstate;
  const dispatch = useDispatch();
  function tokenHander(token) {
    console.log(token);
    dispatch(placeOrder(token, subtotal));
  }

  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      {success && <Success success="Your Order Placed Successfully" />}

      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHander}
        stripeKey="pk_test_51NJslGSIuMtvk7tZPK2bVVjtHZpUTcM3Abqjw0XmMHKYMWc9ecAcy4EzDWzykt5Uz08b1GjxXKEr7LqYlLJok17Z00ToGGjxT3"
        currency="INR"
        key={Math.random()}
      >
        <button className="btn">Pay Now</button>
      </StripeCheckout>
    </div>
  );
}

export default CheckOut;
