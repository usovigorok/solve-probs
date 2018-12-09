import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";

const Menu = function() {
  return (
    <div className="collapse navbar-collapse" id="navbarContent">
      <ul className="nav">
        <li className="nav-item">
          <NavLink className="nav-link active" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/session">
            Book session
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/services">
            Services
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/about">
            About us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/conacts">
            Contacts
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
