import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { login } from "../../firebase";
import { login as loginHandler } from "../store/auth";
import { useDispatch } from "react-redux";

const SignIn = ({ activeLink, setActiveLink, handleClick }) => {
  useEffect(() => {
    setActiveLink(null);
  }, []);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (user) {
      dispatch(loginHandler(user));
      navigate("/cart");
    }
  };

  return (
    <div className="signIn">
      <Navbar
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        handleClick={handleClick}
      />
      <div className="sign-section">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Sign In</button>
        </form>
        <div className="line">
          <hr />
          <span>OR</span>
          <hr />
        </div>
        <Link to="/CreateAcc">
          <button className="create-button">Create Account</button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
