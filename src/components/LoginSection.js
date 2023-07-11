import React, { useState } from "react";
import "./LoginSection.css";
import { Link } from "react-router-dom"

function LoginSection() {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username);
  }

  return (
    <div class="login-container">
      <div id="login" className="login-card">
        <form onSubmit={handleSubmit}>
          <label for="username">Username:</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="username" />
          <label for="password">Password:</label>
          <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" />
          <button type="submit">Login</button>
        </form>
        <div className="register-container">
          <Link to='/register'>Register</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginSection;