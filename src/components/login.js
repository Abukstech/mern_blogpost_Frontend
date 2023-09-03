// Login.js
import React, { useState } from "react";
import axios from "axios";
import "../login.css";

import { useNavigate } from "react-router-dom";

import { useToken } from "../LoginContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const { setAuth } = useToken();

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      //   const loginInfo = {
      //     url: "http://localhost:4003/api/v1/users/login",
      //     method: "POST",

      //     userData: {
      //       email,
      //       password,
      //     },
      //     headers: {
      //       "Content-Type": "application/json",
      //       withCredentials: true,
      //     },

      const response = await axios.post(
        "/api/v1/users/login",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        setMessage("Login successful");
        setEmail("");
        setPassword("");
        navigate("blogposts/");
        setAuth(response.data.token);
      } else {
        setMessage("Error Logging user. Please try again.");
      }
    } catch (err) {
      console.error(err);
    }
    // Make API request to log in the user with username and password
  };

  return (
    <div className="login-container">
      <h2 className="header">Login yipada.ng</h2>
      <form onSubmit={handleLogin}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button">Login</button>
      </form>
      <p className="message">{message}</p>
    </div>
  );
};

export default Login;
