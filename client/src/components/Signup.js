import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import signupimg from "./signup-user.jpg";
import signupbg from "./signup-background.jpg";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [batch, setBatch] = useState("");
  const [admission, setAdmission] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (password != passwordConfirm) {
        window.alert("Password not matching");
        return;
      }
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/v1/alumni/signup",
        {
          name,
          email,
          password,
          batch,
          admission,
          phone
        },
        config
      );

      window.alert("registered successfully");
      console.log(data);
      navigate("/login");
    } catch (err) {
      window.alert("Not registered. please fill form again.");
    }
  };

  return (
    <div className="signup-form" id="signup-form">
      <img className="user" alt="" src={signupimg} />
      <h1>Signup Form</h1>
      <form onSubmit={submit}>
        <input
          type="text"
          name="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="name-box"
          placeholder="Alumni Name"
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email-box"
          placeholder="Alumni Email"
          required
        />
        <input
          type="text"
          name="batch"
          value={batch}
          onChange={(e) => setBatch(e.target.value)}
          className="email-box"
          placeholder="Passing Year"
          required
        />
        <input
          type="number"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="email-box"
          placeholder="Alumni Number"
          required
        />
        <input
          type="text"
          name="admission"
          value={admission}
          onChange={(e) => setAdmission(e.target.value)}
          className="email-box"
          placeholder="Alumni Admission Number"
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
