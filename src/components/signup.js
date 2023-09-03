import React, { useState } from "react";
import axios from "axios";
import "../signUp.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [message, setMessage] = useState("");

  const handleSignUp = async (e) => {
    try {
      e.preventDefault();
      //   const userInfo = {
      //     url: "http://localhost:4003/api/v1/users/signup",
      //     method: "POST",

      //     userData: {
      //       name,
      //       email,
      //       password,
      //       passwordConfirm,
      //     },
      //     headers: {
      //       "Content-Type": "application/json",
      //       withCredentials: true,
      //     },
      //   };

      const response = await axios.post("/api/v1/users/signup", {
        name,
        email,
        password,
        passwordConfirm,
      });

      console.log(response);

      if (response.status === 201) {
        setMessage(`Successfully signed up as ${email}`);
        setName("");
        setEmail("");
        setPassword("");
        setPasswordConfirm("");
      } else {
        setMessage("Error signing up. Please try again.");
      }
    } catch (e) {
      console.error("Error:", e);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="signup-container">
      <h2 className="header">signup yipada.ng</h2>

      <form onSubmit={handleSignUp} className="">
        <div className="input-container">
          <input
            type="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input-container">
          <input
            type="email"
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

        <div className="input-container">
          <input
            type="password"
            placeholder="confirm password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>

        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>

      <p className="message">{message}</p>
    </div>
  );
};

export default SignUp;
