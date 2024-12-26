import React from "react";
import "./Cart.css";

const Cart = (props) => {
  let total = props.cart.reduce((prev, curr) => {
    console.log(prev, curr);
    return prev + curr.price;
  }, 0);

  let shipping = (total / 10).toFixed(2);
  total = total + Number(shipping);

  return (
    <div className="order">
      <h4>Order Summary</h4>
      <p>Items Orderd: {props.cart.length}</p>
      <p>Shippping cost: ${shipping}</p>
      <p>Total cost: ${total}</p>
    </div>
  );
};

export default Cart;
