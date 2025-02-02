import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import { Link } from "react-router";
const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="" />

      <nav className="nav d-flex justify-content-center align-items-center">
        <Link to="/shop">Shop</Link>
        <Link to="/OrderReview">Review</Link>
        <Link to="/manage">Manage</Link>
        <Link to="/inventory">Inventory</Link>
      </nav>
    </header>
  );
};

export default Header;
