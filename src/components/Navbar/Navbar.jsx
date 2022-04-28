import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <h1>Logo</h1>
      </Link>
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Generator</Link>
          </li>
          <li className="nav-item">
            <Link to="/About">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
