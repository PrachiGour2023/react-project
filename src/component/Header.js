import React from "react";
import Logo from "../images/logo.jpg";

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />
      <ul>
        <li>Search</li>
        <li>About</li>
        <li>Help</li>
        <li>Sign In</li>
        <li>Cart</li>
      </ul>
    </div>
  );
}

export default Header;
