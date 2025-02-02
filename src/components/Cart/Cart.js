import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { useNavigate } from "react-router";
import { ProductContext } from "../../App";

const Cart = ({ cart }) => {
  const cartContext = useContext(ProductContext);
  const { cartItems, setCartItems } = cartContext[0];

  const { totalPrice, setTotalPrice } = cartContext[3];

  const navigate = useNavigate();

  let total = cart.reduce((prev, curr) => {
    return prev + curr.price;
  }, 0);

  let shipping = (total / 10).toFixed(2);
  total = total + Number(shipping);

  const handleOrderReview = (cartItems) => {
    if (cartItems.length === 0) {
      return alert("Please add some items to cart first");
    } else {
      navigate("/orderReview");

      const cartdata = [...cartItems];
      setTotalPrice(total);
      setCartItems(cartdata);
    }
  };
  return (
    <div className="order container">
      <h4>Order Summary</h4>
      <p>Items Orderd: {cart.length}</p>
      <p>Shippping cost: ${shipping}</p>
      <p>Total cost: ${total}</p>

      <button onClick={() => handleOrderReview(cart)} className="order-btn">
        Order Review
      </button>
    </div>
  );
};

export default Cart;
