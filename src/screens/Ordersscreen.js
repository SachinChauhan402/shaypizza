import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../actions/orderActions";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Ordersscreen = () => {
  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.getUserOrdersReducer);
  const { orders, error, loading } = orderstate;
  console.log(orders);

  useEffect(() => {
    dispatch(getUserOrders());
  }, []);

  return (
    <div>
      <h2 style={{ fontSize: "35px" }}>My Orders</h2>
      <hr />

      <div className="row justify-content-center">
        {loading && <Loading />}
        {error && <Error error="Something went Wrong" />}

        {orders &&
          orders.map((order) => {
            return (
              <div
                className="col-md-8 m-2"
                style={{
                  backgroundColor: "#719998",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                <div className="flex-container">
                  <div className="text-left w-100 m-1">
                    <p>Items</p>
                    <hr />
                    {order.orderItems.map((item) => {
                      return (
                        <div>
                          <p>
                            {item.name} [{item.varient}] * {item.quantity} *
                            {item.price}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-left w-100 m-1">
                    <h6 style={{ fontSize: "25px" }}>Address</h6>
                    <hr />
                    <p>Street : {order.shippingAddress.street}</p>
                    <p>City : {order.shippingAddress.city} </p>
                    <p>Country : {order.shippingAddress.country}</p>
                    <p>Pincode : {order.shippingAddress.pincode}</p>
                  </div>
                  <div className="text-left w-100 m-1">
                    <h2 style={{ fontSize: "25px" }}>Order Information</h2>
                    <hr />
                    <p>Order Amount : {order.orderAmount}</p>
                    <p>Date : {order.createdAt.substring(0, 10)}</p>
                    <p>Transaction Id : {order.transactionId}</p>
                    <p>Order Id : {order._id}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Ordersscreen;
