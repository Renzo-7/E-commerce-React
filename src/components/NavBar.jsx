import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <strong>Infinity Stones</strong>
        </Link>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Inicio
          </Link>
          <Link className="navbar-item" to="/category/ropa">
            Ropa
          </Link>
          <Link className="navbar-item" to="/category/figuras">
            Figuras
          </Link>
          <Link className="navbar-item" to="/category/accesorios">
            Accesorios
          </Link>
        </div>

        <div className="navbar-end">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
