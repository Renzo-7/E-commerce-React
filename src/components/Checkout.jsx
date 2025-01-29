import React, { useState, useContext } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";
import { CartContext } from "./cart/CartContext";

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
  const [orderDetails, setOrderDetails] = useState(null);

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
      setOrderDetails(newOrder);
      clearCart();
    } catch (error) {
      console.error("Error al guardar la orden:", error);
    }
  };

  return (
    <div className="box">
      {!orderId ? (
        <>
          <h2 className="title is-4">Finalizar Compra</h2>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Nombre</label>
              <input
                className="input"
                type="text"
                name="name"
                value={buyer.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label className="label">Apellido</label>
              <input
                className="input"
                type="text"
                name="lastName"
                value={buyer.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label className="label">Teléfono</label>
              <input
                className="input"
                type="text"
                name="phone"
                value={buyer.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label className="label">Email</label>
              <input
                className="input"
                type="email"
                name="email"
                value={buyer.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label className="label">Confirmar Email</label>
              <input
                className="input"
                type="email"
                name="confirmEmail"
                value={buyer.confirmEmail}
                onChange={handleInputChange}
              />
            </div>
            {error && <p className="has-text-danger">{error}</p>}
            <button className="button is-primary">Realizar compra</button>
          </form>
        </>
      ) : (
        <div>
          <h2 className="title is-4 has-text-success">
            ¡Compra realizada con éxito!
          </h2>
          <p>
            Tu número de orden es: <strong>{orderId}</strong>
          </p>

          <h3 className="title is-5">Resumen de compra:</h3>
          <ul>
            {orderDetails.items.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity} x ${item.price}
              </li>
            ))}
          </ul>
          <p className="has-text-weight-bold">Total: ${orderDetails.total}</p>
        </div>
      )}
    </div>
  );
};

export default Checkout;
