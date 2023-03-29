import React, { useState } from "react";
import Home from "./components/Home";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Product1 from "./components/SingleProduct/Product1";
import Product2 from "./components/SingleProduct/Product2";
import Product3 from "./components/SingleProduct/Product3";
import Product4 from "./components/SingleProduct/Product4";
import Product5 from "./components/SingleProduct/Product5";
import Product6 from "./components/SingleProduct/Product6";
import Product7 from "./components/SingleProduct/Product7";
import Product8 from "./components/SingleProduct/Product8";
import Product9 from "./components/SingleProduct/Product9";
import Product10 from "./components/SingleProduct/Product10";

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
      <Route
        path="/product1"
        element={
          <Product1
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            handleClick={handleClick}
          />
        }
      />
      <Route
        path="/product2"
        element={
          <Product2
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            handleClick={handleClick}
          />
        }
      />
      <Route
        path="/product3"
        element={
          <Product3
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            handleClick={handleClick}
          />
        }
      />
      <Route
        path="/product4"
        element={
          <Product4
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            handleClick={handleClick}
          />
        }
      />
      <Route
        path="/product5"
        element={
          <Product5
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            handleClick={handleClick}
          />
        }
      />
      <Route
        path="/product6"
        element={
          <Product6
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            handleClick={handleClick}
          />
        }
      />
      <Route
        path="/product7"
        element={
          <Product7
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            handleClick={handleClick}
          />
        }
      />
      <Route
        path="/product8"
        element={
          <Product8
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            handleClick={handleClick}
          />
        }
      />
      <Route
        path="/product9"
        element={
          <Product9
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            handleClick={handleClick}
          />
        }
      />
      <Route
        path="/product10"
        element={
          <Product10
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
