import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, name, price, image }) => {
  return (
    <div className="card has-text-centered">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt={name} />
        </figure>
      </div>

      <div className="card-content">
        <h3 className="title is-5">{name}</h3>
        <p className="subtitle is-6 has-text-weight-bold">Precio: ${price}</p>
        <Link to={`/item/${id}`} className="button is-primary is-light">
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;
