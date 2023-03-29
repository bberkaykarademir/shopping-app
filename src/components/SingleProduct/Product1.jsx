import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import ProductPage from "../ProductPage";

const Product1 = ({ activeLink, setActiveLink, handleClick }) => {
  const [singleProduct, setSingleProduct] = useState({
    category: "",
    name: "",
    rating: "",
    price: "",
    description: "",
    image: "",
  });
  useEffect(() => {
    setActiveLink(null);
  }, []);

  // Fetch the product data from the API
  const fetchProduct = async () => {
    const response = await fetch("https://fakestoreapi.com/products/1");
    const data = await response.json();
    console.log(data);
    setSingleProduct({
      ...singleProduct,
      category: data.category,
      name: data.title,
      rating: data.rating.rate,
      price: data.price,
      description: data.description,
      image: data.image,
    });
  };
  // Fetch the product data on component mount
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <Navbar
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        handleClick={handleClick}
      />
      <ProductPage
        singleProduct={singleProduct}
        setSingleProduct={setSingleProduct}
      />
    </>
  );
};

export default Product1;
