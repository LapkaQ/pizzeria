import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [menuPizzas, setMenuPizzas] = useState([
    { id: 1, name: "Margheritta", price: 20, isActive: true },
    { id: 2, name: "Peperoni", price: 30, isActive: true },
    { id: 3, name: "Capricciosa", price: 35, isActive: true },
    { id: 4, name: "Hawaiian", price: 10, isActive: true },
  ]);
  const [cartPizzas, setCartPizzas] = useState([]);
  const [price, setPrice] = useState(0);
  const menuClick = (id) => {
    const updatedMenuPizzas = menuPizzas.map((pizza) => {
      if (pizza.id === id) {
        return { ...pizza, isActive: !pizza.isActive };
      }
      return pizza;
    });
    setMenuPizzas(updatedMenuPizzas);

    const clickedPizza = menuPizzas.find((pizza) => pizza.id === id);

    if (!clickedPizza.isActive) {
      const updatedCartPizzas = cartPizzas.filter((pizza) => pizza.id !== id);
      setCartPizzas(updatedCartPizzas);
    } else {
      const newPizza = { ...clickedPizza, quantity: 1 };
      setCartPizzas([...cartPizzas, newPizza]);
    }
  };
  const cartClick = (id, operation) => {
    const updatedCartPizzas = cartPizzas
      .map((pizza) => {
        if (pizza.id === id) {
          if (operation === "add") {
            return { ...pizza, quantity: pizza.quantity + 1 };
          } else if (operation === "remove") {
            return { ...pizza, quantity: pizza.quantity - 1 };
          }
        }
        return pizza;
      })
      .filter((pizza) => pizza.quantity > 0);

    if (updatedCartPizzas.length !== cartPizzas.length) {
      const removedPizza = cartPizzas.find((pizza) => pizza.id === id);
      const updatedMenuPizzas = menuPizzas.map((pizza) => {
        if (pizza.id === id) {
          return { ...pizza, isActive: true };
        }
        return pizza;
      });
      setMenuPizzas(updatedMenuPizzas);
      setCartPizzas(updatedCartPizzas);
    } else {
      setCartPizzas(updatedCartPizzas);
    }
  };

  return (
    <div className="app">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Main
          menuPizzas={menuPizzas}
          cartPizzas={cartPizzas}
          menuClick={menuClick}
          cartClick={cartClick}
          setPrice={setPrice}
        />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
