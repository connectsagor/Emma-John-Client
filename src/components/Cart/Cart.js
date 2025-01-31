import React, { useEffect, useState } from "react";
import "./Cart.css";

const Cart = ({ cart, product }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(product);
  }, []);
  console.log(data);

  let total = cart.reduce((prev, curr) => {
    console.log(prev, curr);
    return prev + curr.price;
  }, 0);

  let shipping = (total / 10).toFixed(2);
  total = total + Number(shipping);

  // const handleAddData = () => {
  //   fetch("http://localhost:5000/addProduct", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(product),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // };
  return (
    <div className="order">
      <h4>Order Summary</h4>
      <p>Items Orderd: {cart.length}</p>
      <p>Shippping cost: ${shipping}</p>
      <p>Total cost: ${total}</p>

      <button className="order-btn">Add to DB</button>
    </div>
  );
};

export default Cart;
