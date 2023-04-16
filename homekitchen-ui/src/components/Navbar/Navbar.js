import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Home Kitchen
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/login" className="navbar-link">
              Login
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/register" className="navbar-link">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
