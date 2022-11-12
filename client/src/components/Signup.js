import React from "react";

import "./Signup.css";

export default function Signup() {
  return (
    <div className="signup-form">
      <img className="user" alt="" src="signup-user.jpg" />
      <h1>Signup Form</h1>
      <form>
        <input type="email" className="email-box" placeholder="Your Email" />
        <input
          type="password"
          className="password-box"
          placeholder="Password"
        />
        <input
          type="password"
          className="password-box"
          placeholder="Confirm Password"
        />
        <p>
          <span>
            <input type="checkbox" />
          </span>
          I agree to the terms of services
        </p>
        <button type="button" className="signup-btn">
          sign Up
        </button>
        <hr />
        <p>
          Do you have an account? <a href="/login">Log in </a>
        </p>
      </form>
    </div>
  );
}
