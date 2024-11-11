import React, { useState } from "react";
// import pizzas from "../pizzasdata";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/CartActions";

export const Pizza = ({ pizza }) => {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  function addtocart() {
    dispatch(addToCart(pizza, quantity, varient));
  }

  return (
    <div
      // style={{ margin: "50px" }}
      className="shadow-lg p-3 m-5 bg-white"
    >
      <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img
          style={{ height: "200px", width: "300px" }}
          src={pizza.image}
          className="img-fluid"
        />
      </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Varients</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => {
              setVarient(e.target.value);
            }}
          >
            {pizza.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100 ">
          <h1 className="mt-2">
            Price: {pizza.prices[0][varient] * quantity} Rs/-
          </h1>
        </div>
        <div className="m-1 w-100 md:w-1/3">
          <button className="btn px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-basebtn" onClick={addtocart}>
            ADD TO CART
          </button>
        </div>
      </div>
      <button onClick={handleShow}></button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            className="img-fluid"
            src={pizza.image}
            style={{ height: "300px" }}
          />
          <p>{pizza.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <button
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "4px",
            }}
            onClick={handleClose}
          >
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};