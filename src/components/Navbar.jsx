import React, { useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(0);

  const handleClick = (index) => {
    setActiveLink(index);
  };
  return (
    <div className="navbar">
      <div className="logo">
        <h2>Fashion</h2>
      </div>
      <div className="links">
        <a
          className={activeLink === 0 ? "active" : ""}
          onClick={() => handleClick(0)}
          href="#"
        >
          Home
        </a>
        <a
          className={activeLink === 1 ? "active" : ""}
          onClick={() => handleClick(1)}
          href="#"
        >
          Products
        </a>
        <a
          className={activeLink === 2 ? "active" : ""}
          onClick={() => handleClick(2)}
          href="#"
        >
          About
        </a>
        <a
          className={activeLink === 3 ? "active" : ""}
          onClick={() => handleClick(3)}
          href="#"
        >
          Contact
        </a>
      </div>
      <div className="navbar-right">
        <i className="navbarIcon" href="#">
          <BsCart4 />
        </i>
        <i className="navbarIcon" href="#">
          <MdAccountCircle />
        </i>
      </div>
    </div>
  );
};

export default Navbar;
