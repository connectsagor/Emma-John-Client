import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import { Link, useRoutes } from "react-router";
import { getAuth, signOut } from "firebase/auth";
import { ProductContext } from "../../App";
const Header = () => {
  const userContext = useContext(ProductContext);
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
      </nav>
    </header>
  );
};

export default Header;
