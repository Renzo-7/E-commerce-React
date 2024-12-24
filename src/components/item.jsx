import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio }) => {
  return (
    <div className="box has-text-centered">
      <h3 className="title is-5">{nombre}</h3>
      <p className="subtitle is-6">Precio: ${precio}</p>
      <Link to={`/item/${id}`} className="button is-primary is-light">
        Ver Detalles
      </Link>
    </div>
  );
};

export default Item;
