import React, { useEffect } from "react";
import "./Main.css";
import { Routes, Route } from "react-router-dom";
import MenuPage from "../pages/MenuPage.js";
import CartPage from "../pages/CartPage.js";
const Main = ({ menuPizzas, cartPizzas, menuClick, cartClick, setPrice }) => {
  return (
    <main>
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<div>Pizzeria!</div>} />
          <Route
            path="/cart"
            element={
              <CartPage
                cartPizzas={cartPizzas}
                cartClick={cartClick}
                setPrice={setPrice}
              />
            }
          />
          <Route
            path="/menu"
            element={<MenuPage menuPizzas={menuPizzas} menuClick={menuClick} />}
          />

          <Route path="/contact" element={<div>contact</div>} />
        </Routes>
      </div>
      <menuPage />
    </main>
  );
};

export default Main;
