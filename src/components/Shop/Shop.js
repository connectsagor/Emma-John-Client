import React, { useEffect, useState } from "react";
import "./Shop.css";

import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [productData, setProductData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, []);

  //addProduct
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
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
        <Cart cart={cart}></Cart>
      </div>
    </main>
  );
};

export default Shop;
