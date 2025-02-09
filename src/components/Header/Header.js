import React, { useContext } from "react";
import "./Header.css";
import { Cart4 } from "react-bootstrap-icons";

import logo from "../../images/logo.png";
import { Link, useRoutes } from "react-router";
import { getAuth, signOut } from "firebase/auth";
import { ProductContext } from "../../App";
const Header = () => {
  const userContext = useContext(ProductContext);
  const { cartItems, setCartItems } = userContext[0];
  const { isLogedIn, setIsLogedIn } = userContext[1];
  const { user, setUser } = userContext[2];

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(null);
        setIsLogedIn(false);
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <header className="header">
      <img src={logo} alt="" />

      <nav className="nav d-flex justify-content-center align-items-center">
        <Link to="/shop">Shop</Link>
        <Link to="/OrderReview">Review</Link>
        <Link to="/manage">Manage</Link>
        <Link to="/inventory">Inventory</Link>
        {isLogedIn && <Link onClick={handleSignOut}>Sign Out</Link>}
        <div className="text-white ">
          <Link
            to="orderReview"
            className="d-flex justify-content-center align-items-center"
          >
            <Cart4 className="cart-icon" />
            <p>{cartItems.length}</p>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
