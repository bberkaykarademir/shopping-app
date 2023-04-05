import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "./Navbar";
import "react-toastify/dist/ReactToastify.css";
import { deleteProducts } from "../firebase";
import { useSelector } from "react-redux";

const Checkout = ({ activeLink, setActiveLink, handleClick }) => {
  useEffect(() => {
    setActiveLink(null);
  }, []);
  const [card, setCard] = useState("");
  const cardNumber = "1111111111111111";

  const { user } = useSelector((state) => state.auth);
  const buy = (e) => {
    e.preventDefault();
    if (card == cardNumber) {
      toast("Ordered! You will back to home.");
    }
    setTimeout(() => {
      window.open("/", "_self");
    }, 3000);
    deleteProducts(user.email);
  };
  return (
    <>
      <Navbar
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        handleClick={handleClick}
      />
      <form onSubmit={buy} className="payment">
        <h2>Payment</h2>
        <input
          type="text"
          placeholder="Card Number"
          onChange={(e) => setCard(e.target.value)}
        />
        <button type="submit" className="buy-button">
          Buy Now
        </button>
        <ToastContainer />
      </form>
    </>
  );
};

export default Checkout;
