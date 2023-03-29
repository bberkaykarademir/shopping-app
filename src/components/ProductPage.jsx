import React, { useEffect, useState } from "react";

const ProductPage = ({ singleProduct, setSingleProduct }) => {
  // Add the product to the cart
  const addToCart = () => {
    console.log("Product added to cart:", singleProduct);
  };

  return (
    <div className="product-page">
      <img src={singleProduct.image} />
      <div className="singleProduct-text">
        <h2 className="category">{singleProduct.category}</h2>
        <p className="name">{singleProduct.name}</p>
        <h2 className="rating">Rating: {singleProduct.rating}</h2>
        <h1 className="price">${singleProduct.price}</h1>
        <p className="description">{singleProduct.description}</p>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;
