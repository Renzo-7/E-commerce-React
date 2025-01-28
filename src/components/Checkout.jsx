import React, { useState, useContext } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";
import { CartContext } from "./CartContext";

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    confirmEmail: "",
  });

  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !buyer.name ||
      !buyer.lastName ||
      !buyer.phone ||
      !buyer.email ||
      !buyer.confirmEmail
    ) {
      setError("Todos los campos son obligatorios");
      return;
    }
    if (buyer.email !== buyer.confirmEmail) {
      setError("Los correos electrónicos no coinciden");
      return;
    }

    const newOrder = {
      buyer,
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      total: totalPrice,
      date: serverTimestamp(),
    };

    try {
      const docRef = await addDoc(collection(db, "Orders"), newOrder);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al guardar la orden:", error);
    }
  };

  return (
    <div className="box">
      <h2 className="title is-4">Checkout</h2>
      {orderId ? (
        <p className="notification is-success">
          ¡Gracias por tu compra! Tu número de orden es:{" "}
          <strong>{orderId}</strong>
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Nombre</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Nombre"
                value={buyer.name}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Apellido</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="lastName"
                placeholder="Apellido"
                value={buyer.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Teléfono</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="phone"
                placeholder="Teléfono"
                value={buyer.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={buyer.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Confirmar Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                name="confirmEmail"
                placeholder="Confirma tu correo"
                value={buyer.confirmEmail}
                onChange={handleInputChange}
              />
            </div>
          </div>
          {error && <p className="has-text-danger">{error}</p>}
          <button type="submit" className="button">
            Realizar compra
          </button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
