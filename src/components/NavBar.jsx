import React from "react";
import { Link } from "react-router-dom";
import images from "../img/images";

function NavBar() {
  return (
    <div className="nav-wrap">
      <nav className="nav">
        <Link to="/" className="nav-link nav-logo">
          <img src={images.favicon} /> Gen Alpha Store
        </Link>
        <Link to="/merch" className="nav-link">
          Sigma Merch
        </Link>
        <Link to="/about" className="nav-link">
          Ohio About
        </Link>
        <Link to="/contact" className="nav-link">
          Rizzy Contact
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
