import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Contact = ({ activeLink, setActiveLink, handleClick }) => {
  useEffect(() => {
    setActiveLink(3);
  }, []);
  return (
    <>
      <Navbar
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        handleClick={handleClick}
      />
      <div className="contact">
        <img src="contactus.jpg" />
        <div className="contact-text">
          <h1>Contact Us</h1>
          <form>
            <div>
              <p>Full Name:</p>
              <input type="text" name="fullname" />
            </div>
            <div>
              <p>Email Address:</p>
              <input type="email" name="email" />
            </div>
            <div>
              <p>Message:</p>
              <textarea name="message" rows="5"></textarea>
            </div>
            <div>
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
