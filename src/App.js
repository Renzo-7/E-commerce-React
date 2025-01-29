import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/item/ItemListContainer";
import ItemDetailContainer from "./components/item/ItemDetailContainer";
import CartProvider from "./components/cart/CartContext";
import Checkout from "./components/Checkout";
import CartView from "./components/cart/CartView";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer greeting="Bienvenidos a mi E-commerce" />
            }
          />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<CartView />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
