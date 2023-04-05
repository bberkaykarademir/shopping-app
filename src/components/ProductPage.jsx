import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addProduct, getProducts, updateProducts } from "../firebase";
import { useSelector } from "react-redux";

const ProductPage = ({
  singleProduct,
  setSingleProduct,
  setProductBasket,
  productBasket,
}) => {
  const { user } = useSelector((state) => state.auth);
  const { firebaseCart } = useSelector((state) => state.firebaseCart);

  // Add the product to the cart
  const addToCart = (singleProductId) => {
    const existingProduct = productBasket.find(
      (item) => item.id === singleProductId
    );
    const existingProductFirebase = Object.keys(firebaseCart).find(
      (item) => item == singleProductId
    );

    const keyName = `${singleProductId}`;
    user
      ? updateProducts(user.email, {
          [keyName]: {
            category: singleProduct.category,
            title: singleProduct.name,
            rating: singleProduct.rating,
            price: singleProduct.price,
            description: singleProduct.description,
            image: singleProduct.image,
            id: singleProduct.id,
            ...(user && { uid: user.uid }),
          },
        })
      : !existingProduct &&
        setProductBasket([
          ...productBasket,
          {
            category: singleProduct.category,
            title: singleProduct.name,
            rating: singleProduct.rating,
            price: singleProduct.price,
            description: singleProduct.description,
            image: singleProduct.image,
            id: singleProduct.id,
            ...(user && { uid: user.uid }),
          },
        ]);
    user && getProducts(user.email);

    if (user ? existingProductFirebase : existingProduct) {
      console.log("exist");
    } else {
      toast("added to cart!");
    }
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
        <button
          className="addProduct"
          onClick={() => addToCart(singleProduct.id)}
        >
          Add to Cart
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductPage;
