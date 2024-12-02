import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import "./CartWidget.css";

const CartWidget = () => {
  const numeroHardcodeado = 5;

  return (
    <div className="cart-widget">
      <button className="button">
        <FaCartShopping size={24} />
        {numeroHardcodeado > 0 && (
          <span className="notification is-primary is-small">
            {numeroHardcodeado}
          </span>
        )}
      </button>
    </div>
  );
};

export default CartWidget;
