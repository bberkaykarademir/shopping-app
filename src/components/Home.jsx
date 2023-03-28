import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Products from "./Products";
import Hero from "./Hero";

const Home = ({ activeLink, setActiveLink, handleClick }) => {
  return (
    <>
      <Navbar
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        handleClick={handleClick}
      />
      <Hero />
      <Products />
      <Footer />
    </>
  );
};

export default Home;
