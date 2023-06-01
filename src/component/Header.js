import React from "react";
import Logo from "../images/logo.jpg";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "#000",
};

function Header() {
  return (
    <div className="header">
      <Link to="/">
      <img src={Logo} alt="logo" className="logo" />
      </Link>
      <ul>
        <Link to="/search" style={linkStyle}>
          <li>
            <i className="fa-solid fa-magnifying-glass">&nbsp;&nbsp;</i>Search
          </li>
        </Link>
        <li>
          <i className="fa-solid fa-percent"></i>&nbsp;&nbsp;Offers
        </li>
        <li>
          <i className="fa-regular fa-circle-question"></i>&nbsp;&nbsp;Help
        </li>
        <li>
          <i className="fa-regular fa-user"></i>&nbsp;&nbsp;Sign In
        </li>
        <li>
          <i className="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;Cart
        </li>
      </ul>
    </div>
  );
}

export default Header;
