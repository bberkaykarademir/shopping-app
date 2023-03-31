import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { AiOutlineClose } from "react-icons/ai";
import { logout as logoutHandler } from "./store/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Cart = ({
  activeLink,
  setActiveLink,
  handleClick,
  setProductBasket,
  productBasket,
  user,
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

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(logoutHandler(user));
    navigate("/");
  };
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
          <p>{user.displayName}</p>
          <h3 className="total-price">Total Price: ${totalPrice.toFixed(2)}</h3>
          {totalPrice != 0 && (
            <Link to="/Checkout">
              <button className="buy-now-btn">Buy Now</button>
            </Link>
          )}

          {user && (
            <button className="signout-btn" onClick={signOut}>
              Sign Out
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
