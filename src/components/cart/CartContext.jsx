import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const removeItem = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      setTotalItems(updatedCart.reduce((acc, item) => acc + item.quantity, 0));
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    setTotalItems(0);
  };

  const addToCart = (product, quantity) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }

    setTotalItems(totalItems + quantity);
  };

  return (
    <CartContext.Provider
      value={{ cart, totalItems, totalPrice, clearCart, addToCart, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
