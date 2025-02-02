import React, { useContext, useEffect } from "react";
import "./OrderReview.css";
import { ProductContext } from "../../App";
import { useNavigate } from "react-router";

const OrderReview = () => {
  const navigate = useNavigate();
  const cartContext = useContext(ProductContext);
  const { cartItems, setCartItems } = cartContext[0];

  useEffect(() => {
    fetch("http://localhost:5000/addOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    })
      .then((res) => res.json())
      .then((data) => setCartItems(data));
  }, []);

  const handleRemoveItem = (id) => {
    const newCart = cartItems.filter((item) => item._id !== id);
    setCartItems(newCart);
  };

  const handleConfirmOrder = () => {
    navigate("/shipping");
  };

  return (
    <div className="container">
      <h2>
        Order Review {cartItems.length}{" "}
        {cartItems.length > 1 ? "items" : "item"}
      </h2>

      <div className="my-5">
        {cartItems?.map((item) => (
          <div
            key={item._id}
            className="d-flex justify-content-center align-items-center order-review"
          >
            <div className="w-50">{item.name}</div>
            <div>
              <img src={item.img} alt="" />
            </div>
            <button
              onClick={() => handleRemoveItem(item._id)}
              className="primary-btn ms-3 border-0 outline-0 py-2 px-4 border-warning"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-end">
        {cartItems.length > 0 && (
          <button
            onClick={handleConfirmOrder}
            className="primary-btn ms-3 rounded-2 outline-0 py-2 px-4 border-warning"
          >
            Confirm order
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderReview;
