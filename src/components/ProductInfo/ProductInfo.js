import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../App";
const ProductInfo = () => {
  const userContext = useContext(ProductContext);
  const { cartItems, setCartItems } = userContext[0];
  const { isLogedIn, setIsLogedIn } = userContext[1];
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/product?id=${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);

  const handleAddToCart = (product) => {
    const newCart = [...cartItems, product];

    setCartItems(newCart);
  };
  return (
    <div className="container">
      <button className="border-0 py-2 px-4 mb-5" onClick={() => navigate(-1)}>
        Go back
      </button>
      {data &&
        data.map((el) => {
          return (
            <div className="row" key={el._id}>
              <div className="col-md-6">
                <h3>Product Name:{el.name}</h3>
                <h5>Category: {el.category}</h5>
                <h5>Seller: {el.seller}</h5>
                <h5>Price: {el.price}</h5>
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <img src={el.img} alt={el.name} />
              </div>
              <button
                onClick={() => handleAddToCart(el)}
                className="btn-primary py-2 px-4 mt-2 rounded-1 w-25"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default ProductInfo;
