import React, { useContext, useEffect, useState } from "react";
import "./Shop.css";

import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { ProductContext } from "../../App";

const Shop = () => {
  const [productData, setProductData] = useState([]);
  const userContext = useContext(ProductContext);
  const { cartItems, setCartItems } = userContext[0];

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, []);

  //addProduct
  const handleAddToCart = (product) => {
    const newCart = [...cartItems, product];
    setCartItems(newCart);
  };

  return (
    <main className="shop container-fluid">
      <div className="product-container">
        {productData.map((el) => (
          <Product
            handleAddToCart={handleAddToCart}
            product={el}
            key={el.key}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cartItems}></Cart>
      </div>
    </main>
  );
};

export default Shop;
