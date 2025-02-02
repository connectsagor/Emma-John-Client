import React, { useContext, useState } from "react";
import { ProductContext } from "../../App";

const Shipping = () => {
  const [name, setName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [contact, setContact] = useState("");
  const cartContext = useContext(ProductContext);
  const { cartItems, setCartItems } = cartContext[0];
  const { user, setUser } = cartContext[2];
  const { totalPrice, setTotalPrice } = cartContext[3];

  console.log(totalPrice);

  const handlePlaceOrder = (e) => {
    const userOrderData = {
      name,
      address1,
      address2,
      postalCode,
      contact,
      user: user.email,
      productName: cartItems.name,
      cartKey: cartItems.key,
      totalPrice,
    };

    e.preventDefault();
    if (name && address1 && address2 && postalCode && contact) {
      fetch("http://localhost:5000/orderNow", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userOrderData),
      })
        .then((res) => res.json())
        .then((data) => alert("Your order is confirmed"));
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {cartItems?.map((item) => (
            <div
              key={item._id}
              className="d-flex justify-content-center align-items-center order-review"
            >
              <div className="w-50">{item.name}</div>
              <div>
                <img src={item.img} alt="" />
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-6">
          <h2>Shipping</h2>
          <form onSubmit={handlePlaceOrder} className="w-75">
            <div className="from-group my-4">
              <label htmlFor="name">Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                className="form-control my-2"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="from-group my-4">
              <label htmlFor="address-1">Address Line 1</label>
              <input
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
                type="text"
                className="form-control my-2"
                id="address-1"
                placeholder="Enter your Adress Line 1"
              />
            </div>
            <div className="from-group my-4">
              <label htmlFor="address-2">Address Line 2</label>
              <input
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
                type="text"
                className="form-control my-2"
                id="address-2"
                placeholder="Enter your Adress Line 2"
              />
            </div>
            <div className="from-group my-4">
              <label htmlFor="postal">Postal Code</label>
              <input
                onChange={(e) => setPostalCode(e.target.value)}
                value={postalCode}
                type="number"
                className="form-control my-2"
                id="postal"
                placeholder="Postal Code"
              />
            </div>
            <div className="from-group my-4">
              <label htmlFor="contact">Contact Number</label>
              <input
                onChange={(e) => setContact(e.target.value)}
                value={contact}
                type="number"
                className="form-control my-2"
                id="contact"
                placeholder="Contact Number"
              />
            </div>
            <input
              className="primary-btn rounded-2 outline-0 py-2 px-4 border-warning"
              type="submit"
              value="Place your order"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
