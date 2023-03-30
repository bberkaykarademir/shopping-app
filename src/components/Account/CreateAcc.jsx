import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { Link, useNavigate } from "react-router-dom";

import { register, update } from "../../firebase";

const CreateAcc = ({ activeLink, setActiveLink, handleClick }) => {
  useEffect(() => {
    setActiveLink(null);
  }, []);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    {
      !fName && alert("Please Enter Your Name!");
    }
    const user = await register(email, password);
    navigate("/SignIn");
  };
  return (
    <div className="signIn">
      <Navbar
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        handleClick={handleClick}
      />
      <div className="sign-section">
        <h1>Create Account</h1>
        <form onSubmit={submitHandler}>
          <label htmlFor="text">First Name</label>
          <input
            type="text"
            id="fname"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          />
          <label htmlFor="text">Last Name</label>
          <input
            type="text"
            id="lname"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Create Account</button>
        </form>
        <div className="line">
          <hr />
          <span>OR</span>
          <hr />
        </div>

        <Link to="/SignIn">
          <button className="create-button">Sign In</button>
        </Link>
      </div>
    </div>
  );
};

export default CreateAcc;
