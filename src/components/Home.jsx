import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Products from "./Products";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Footer />
    </>
  );
};

export default Home;
