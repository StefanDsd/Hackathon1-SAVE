import React from "react";
import { NavLink } from "react-router-dom";
import "./BurgerMenuList.styles.css";

export default function BurgerMenuList({ close }) {
  return (
    <div className="menu">
      <ul>
        <li>
          <NavLink onClick={close} activeclassName="current" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink onClick={close} activeclassName="current" to="City">
            City
          </NavLink>
        </li>
        <li>
          <NavLink onClick={close} activeclassName="current" to="Currency">
            Currency
          </NavLink>
        </li>
        <li>
          <NavLink onClick={close} activeclassName="current" to="About Us">
            About Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
