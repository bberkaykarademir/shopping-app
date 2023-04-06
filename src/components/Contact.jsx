import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ activeLink, setActiveLink, handleClick }) => {
  useEffect(() => {
    setActiveLink(3);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4jw1hxx",
        "template_hx712nr",
        e.target,
        "-jDpJH8ZJs4oaPchN"
      )
      .then(() => {
        toast("sended!");
      });
    e.target.reset();
  };
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
          <form onSubmit={sendEmail}>
            <div>
              <p>Full Name:</p>
              <input type="text" name="fullname" required />
            </div>
            <div>
              <p>Email Address:</p>
              <input type="email" name="email" required />
            </div>
            <div>
              <p>Message:</p>
              <textarea name="message" rows="5" required></textarea>
            </div>
            <div>
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;
