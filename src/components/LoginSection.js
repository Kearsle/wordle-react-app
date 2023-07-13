import React, { useState } from "react";
import "./LoginSection.css";
import { Link } from "react-router-dom"
import FormInput from "./FormInput";
import axios from "axios";

function LoginSection() {
  const [values, setvalues] = useState({
    username:"",
    password:""
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username"
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password"
    }
]

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
    /*axios.post('http://127.0.0.1:8000/user/login', {username, password})
      .then(res => {
        console.log(res.data.userID)
        setUsername("")
        setPassword("")
        })
      .catch(err => console.log(err.response.data.error));*/
  }

  return (
    <div class="login-container">
      <div id="login" className="login-card">
        <form className="login-form" action="POST" onSubmit={handleSubmit}>
          <FormInput name="username" placeholder="Username"/>
          <div className="input">
            <label for="password">Password:</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" />
          </div>
          <div className="submitButton">
            <button type="submit">Login</button>
          </div>
        </form>
        <div className="register-link">
          <Link to='/register'>Register</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginSection;