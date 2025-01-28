import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from "./CartContext";
import "./css/CartWidget.css";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <Link to="/checkout" className="cart-widget">
      <FaCartShopping size={24} />
      {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
    </Link>
  );
};

export default CartWidget;
