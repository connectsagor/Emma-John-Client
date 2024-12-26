import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./Product.css";

const Product = (props) => {
  const { name, img, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div className="div">
        <img src={img} alt="Img" />
      </div>
      <div className="product-info">
        <h4>{name}</h4>
        <p>By: {seller}</p>
        <p>${price}</p>
        <p>only {stock} left in stock - order soon</p>
        <button
          onClick={() => props.handleAddToCart(props.product)}
          className="my-button"
        >
          {" "}
          <FontAwesomeIcon icon={faShoppingCart} />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default Product;
