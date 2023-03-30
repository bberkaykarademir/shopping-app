import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { AiOutlineClose } from "react-icons/ai";

const Cart = ({
  activeLink,
  setActiveLink,
  handleClick,
  setProductBasket,
  productBasket,
}) => {
  useEffect(() => {
    setActiveLink(null);
  }, []);

  const handleDelete = (productId) => {
    setProductBasket((prevBasket) =>
      prevBasket.filter((product) => product.id !== productId)
    );
  };

  const totalPrice = productBasket.reduce(
    (accumulator, currentProduct) => accumulator + currentProduct.price,
    0
  );

  return (
    <>
      <Navbar
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        handleClick={handleClick}
      />
      <div className="cart">
        <div className="cart-products">
          {productBasket.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <p>{product.price} USD</p>
              <i className="delete" onClick={() => handleDelete(product.id)}>
                <AiOutlineClose />
              </i>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h3 className="total-price">Total Price: ${totalPrice.toFixed(2)}</h3>
          <button className="buy-now-btn">Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
