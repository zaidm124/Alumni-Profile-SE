import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import loginimg from "./signup-user.jpg";
import "./Login.css";

export default function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/v1/alumni/login",
        {
          email,
          password,
        },
        config
      );
      window.alert("loggedin successfully");

      navigate("/profile");
    } catch (err) {
      window.alert("logged in fail");
    }
  };
  return (
    <div className="login-form">
      <img className="user" alt="" src={loginimg} />
      <h1>Login Form</h1>
      <form onSubmit={submit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email-box"
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="password-box"
          placeholder="Password"
        />

        <button type="submit" className="login-btn">
          Login
        </button>
        <hr />
        <p>
          Do'nt have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
}
