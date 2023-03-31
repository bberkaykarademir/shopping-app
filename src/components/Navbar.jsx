import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { useLocation } from "react-router-dom";

const Navbar = ({ activeLink, setActiveLink, handleClick }) => {
  let location = useLocation();
  return (
    <div className="navbar">
      <div className="logo">
        <h2>Fashion</h2>
      </div>
      <div className="links">
        <Link
          to="/"
          className={activeLink === 0 ? "active" : ""}
          onClick={() => handleClick(0)}
        >
          Home
        </Link>

        {location.pathname === "/" ? (
          <a href="#products">Products</a>
        ) : (
          <Link
            to="/products"
            className={activeLink === 1 ? "active" : ""}
            onClick={() => handleClick(1)}
          >
            Products
          </Link>
        )}

        <Link
          to="/about"
          className={activeLink === 2 ? "active" : ""}
          onClick={() => handleClick(2)}
        >
          About
        </Link>

        <Link
          to="/contact"
          className={activeLink === 3 ? "active" : ""}
          onClick={() => handleClick(3)}
        >
          Contact
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/cart">
          <i className="navbarIcon">
            <BsCart4 />
          </i>
        </Link>
        <Link to="/signIn">
          <i className="navbarIcon">
            <MdAccountCircle />
          </i>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
