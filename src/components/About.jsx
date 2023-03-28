import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const About = ({ activeLink, setActiveLink, handleClick }) => {
  useEffect(() => {
    setActiveLink(2);
  }, []);

  return (
    <>
      <Navbar
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        handleClick={handleClick}
      />
      <div className="about">
        <div className="about-text">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            aliquam sapien at purus convallis, ac ullamcorper est hendrerit.
            Aliquam scelerisque aliquam neque, ut rhoncus nibh faucibus in. Sed
            vel sapien ut turpis luctus fermentum eu id eros. Nam et massa eget
            arcu auctor elementum. Nunc tristique elit vitae velit rhoncus
            faucibus. Donec interdum pretium nulla, eu sollicitudin enim
            accumsan vel. Donec consectetur diam vel magna euismod vestibulum.
          </p>
          <Link
            to="/contact"
            className={activeLink === 3 ? "active" : ""}
            onClick={() => handleClick(3)}
          >
            <button>Contact Us</button>
          </Link>
        </div>
        <img src="aboutus.jpg" />
      </div>
    </>
  );
};

export default About;
