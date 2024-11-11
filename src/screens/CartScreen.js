import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/CartActions";
import { deleteFromCart } from "../actions/CartActions";
import CheckOut from "../components/CheckOut";

const CartScreen = () => {
  const cartstate = useSelector((state) => state.CartReducer);
  const cartItems = cartstate.cartItems;
  const dispatch = useDispatch();
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0);

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2 style={{ fontSize: "40px" }}>My Cart</h2>

        {cartItems.map((item) => {
          return (
            <div className="flex-container">
              <div>
                <h1>
                  {item.name}[{item.varient}]
                </h1>
                <h1>
                  Price : {item.quantity} * {item.prices[0][item.varient]} ={" "}
                  {item.price}
                </h1>
                <h1 style={{ display: "inline", margin: "5px" }}>Quantity :</h1>
                <i
                  className="plus-btn"
                  onClick={() => {
                    dispatch(addToCart(item, item.quantity + 1, item.varient));
                  }}
                >
                  +
                </i>
                <b> {item.quantity} </b>
                <i
                  className="minus-btn"
                  onClick={() => {
                    dispatch(addToCart(item, item.quantity - 1, item.varient));
                  }}
                >
                  -
                </i>
              </div>
              <div className="m-1 w-100">
                <img src={item.image} style={{ height: "80px" }} alt="" />
              </div>
              <div className="m-4 w-100">
                <i
                  className="fa fa-trash"
                  aria-hidden="true"
                  onClick={() => {
                    dispatch(deleteFromCart(item));
                  }}
                ></i>
              </div>
            </div>
          );
        })}
      </div>
      <div className="col-md-4 text-left">
        <h2 style={{ fontSize: "40px" }}>Sub Total : {subtotal} /-</h2>
        <CheckOut subtotal={subtotal} />
      </div>
    </div>
  );
};

export default CartScreen;
