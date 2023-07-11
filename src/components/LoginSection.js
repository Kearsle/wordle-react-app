import React from "react";
import "./LoginSection.css";
import { Link } from "react-router-dom"

function LoginSection() {
  return (
    <div class="login-container">
      <div id="login" className="login-card">
        <h1>Login</h1>
        <label>Username: </label>
        <input type="text" name="wordleUsername" />
        <label>Password: </label>
        <input type="password" name="wordlePassword" />
        <button>Login</button>
        <div className="register-container">
          <Link to='/register'>Register</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginSection;