import React from "react";
import Logo from "../images/logo.jpg";

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />
      <ul>
        <li><i className="fa-solid fa-magnifying-glass">&nbsp;&nbsp;</i>Search</li>
        <li><i className="fa-solid fa-percent"></i>&nbsp;&nbsp;About</li>
        <li><i className="fa-regular fa-circle-question"></i>&nbsp;&nbsp;Help</li>
        <li><i className="fa-regular fa-user"></i>&nbsp;&nbsp;Sign In</li>
        <li><i className="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;Cart</li>
      </ul>
    </div>
  );
}

export default Header;
