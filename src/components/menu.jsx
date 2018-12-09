import React from "react";
import { NavLink } from "react-router-dom";

const Menu = function () {
  return (
    <div className="" id="navbarContent">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
      </nav>
    </div>
  );
};

export default Menu;
