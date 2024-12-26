import React, { useState } from "react";
import "./Shop.css";
import FakeData from "../../fakeData/products.json";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  const firstTen = FakeData.slice(0, 10);
  const [productData, setProductData] = useState(firstTen);
  const [cart, setCart] = useState([]);

  //addProduct
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <main className="shop">
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
