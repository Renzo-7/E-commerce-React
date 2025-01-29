import React, { useContext, useState } from "react";
import { CartContext } from "../cart/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (operation) => {
    setQuantity((prevQuantity) =>
      operation === "increase"
        ? prevQuantity + 1
        : prevQuantity > 1
        ? prevQuantity - 1
        : 1
    );
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="box" style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h2 className="title is-4">{product.name}</h2>
      <figure className="image is-5by4">
        <img src={product.image} alt={product.name} />
      </figure>
      <p className="subtitle is-6">{product.description}</p>
      <p className="has-text-weight-bold">Precio: ${product.price}</p>

      <div className="field has-addons is-centered">
        <button
          className="button is-small"
          onClick={() => handleQuantityChange("decrease")}
        >
          -
        </button>
        <input
          className="input is-small"
          type="number"
          value={quantity}
          readOnly
          style={{ width: "50px", textAlign: "center" }}
        />
        <button
          className="button is-small"
          onClick={() => handleQuantityChange("increase")}
        >
          +
        </button>
      </div>

      <button
        className="button is-danger is-fullwidth mt-3"
        onClick={handleAddToCart}
      >
        Agregar al carrito
      </button>
      <Link className="button is-light mt-3" to="/">
        Volver
      </Link>
    </div>
  );
};

export default ItemDetail;
