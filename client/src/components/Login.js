import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-form">
      <img className="user" alt="" src="login-user.jpg" />
      <h1>Login Form</h1>
      <form>
        <input type="email" className="email-box" placeholder="Email" />
        <input
          type="password"
          className="password-box"
          placeholder="Password"
        />
        <p>
          <span>
            <input type="checkbox" />
          </span>
          I agree to the terms of services
        </p>
        <button type="button" className="login-btn">
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
