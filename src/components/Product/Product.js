import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./Product.css";
import { useNavigate } from "react-router";

const Product = (props) => {
  const navigate = useNavigate();
  const { name, img, seller, price, stock } = props.product;

  const handleSingleProduct = (id) => {
    navigate("/productInfo/" + id);
  };

  return (
    <div className="product">
      <div className="div">
        <img src={img} alt="Img" />
      </div>
      <div className="product-info">
        <h4
          className="product-title"
          onClick={() => handleSingleProduct(props.product._id)}
        >
          {name}
        </h4>
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
