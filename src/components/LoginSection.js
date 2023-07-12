import React, { useState } from "react";
import "./LoginSection.css";
import { Link } from "react-router-dom"
import axios from "axios";

function LoginSection() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://127.0.0.1:8000/user/login', {username, password})
      .then(res => {
        console.log(res.data.userID)
        setUsername("")
        setPassword("")
        })
      .catch(err => console.log(err.response.data.error));
  }

  return (
    <div class="login-container">
      <div id="login" className="login-card">
        <form className="login-form" action="POST" onSubmit={handleSubmit}>
          <div className="input">
            <label for="username">Username:</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="username" />
          </div>
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