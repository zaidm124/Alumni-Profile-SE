import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/v1/alumni/signup",
        {
          username,
          email,
          password,
          passwordConfirm,
        },
        config
      );
      // localStorage.setItem("token", data.responses.accessToken);
      window.alert("registered successfully");
      console.log(data);
      navigate("/login");
    } catch (err) {
      window.alert("Not registered. please fill form again.");
    }
  };

  return (
    <div className="signup-form" id="signup-form">
      {/* <img className="user" alt="" src="../../public/img/signup-user.jpg" /> */}
      <h1>Signup Form</h1>
      <form onSubmit={submit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="name-box"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email-box"
          placeholder="Your Email"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="password-box"
          placeholder="Password"
          required
        />
        <input
          type="password"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          className="password-box"
          placeholder="Confirm Password"
          required
        />
        <button type="submit" className="signup-btn">
          Signup
        </button>

        <hr />
        <p>
          Do you have an account? <a href="/login">Log in </a>
        </p>
      </form>
    </div>
  );
}
