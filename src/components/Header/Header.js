import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="" />

      <nav className="nav">
        <a href="/shop">Shop</a>
        <a href="/review">Review</a>
        <a href="/manage">Manage</a>
        <a href="/inventory">Inventory</a>
      </nav>
    </header>
  );
};

export default Header;
