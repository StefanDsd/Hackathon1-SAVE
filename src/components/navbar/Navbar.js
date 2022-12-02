import React from "react";
import { NavLink } from "react-router-dom";
import logo2 from "../../assets/logo2.png";

const NavBar = () => {
  return (
    <div className="navBar">
      <i>
        <img src={logo2} alt="logo" />
      </i>
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/city">
          <li>City</li>
        </NavLink>
        <NavLink to="/Currency">
          <li>Currency</li>
        </NavLink>
        <NavLink to="/About Us">
          <li>About Us</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default NavBar;
