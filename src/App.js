import React, { useState } from "react";
import Home from "./components/Home";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Cart from "./components/Cart";

const App = () => {
  const [activeLink, setActiveLink] = useState(0);

  const handleClick = (index) => {
    setActiveLink(index);
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            handleClick={handleClick}
          />
        }
      />
      <Route
        path="/products"
        element={
          <Home
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            handleClick={handleClick}
          />
        }
      />
      <Route
        path="/about"
        element={
          <About
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            handleClick={handleClick}
          />
        }
      />
      <Route
        path="/contact"
        element={
          <Contact
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            handleClick={handleClick}
          />
        }
      />
      <Route
        path="/cart"
        element={
          <Cart
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            handleClick={handleClick}
          />
        }
      />
    </Routes>
  );
};

export default App;
