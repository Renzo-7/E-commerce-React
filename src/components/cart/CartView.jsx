import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const CartView = () => {
  const { cart, totalPrice, removeItem, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="container mt-4">
        <h2 className="title is-4">Tu carrito está vacío</h2>
        <Link to="/" className="button is-primary is-light">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="title is-4 mt-4">Carrito de compras</h2>
      <table className="table is-fullwidth is-striped">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio por unidad</th>
            <th>Subtotal</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
              <td>${item.quantity * item.price}</td>
              <td>
                <button
                  className="button is-small is-danger"
                  onClick={() => removeItem(item.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="box">
        <h3 className="title is-5">Total: ${totalPrice}</h3>
        <div className="buttons">
          <button className="button is-danger" onClick={clearCart}>
            Vaciar Carrito
          </button>
          <Link to="/checkout" className="button is-link">
            Ir a Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartView;
