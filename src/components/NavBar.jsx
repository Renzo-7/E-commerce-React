import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="#inicio">
          <strong>Infinity Stones</strong>
        </a>
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
          <a className="navbar-item" href="#inicio">
            Inicio
          </a>
          <a className="navbar-item" href="#productos">
            Productos
          </a>
          <a className="navbar-item" href="#contacto">
            Contacto
          </a>
        </div>

        <div className="navbar-end">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
