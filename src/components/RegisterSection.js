import React, { useState } from "react";
import "./RegisterSection.css";
import axios from "axios";

function RegisterSection() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://127.0.0.1:8000/user/create', {username, password, email})
      .then(res => {
          console.log(res.data.success)
          setUsername("")
          setPassword("")
          setEmail("")
        })
      .catch(err => console.log(err.response.data.error));
  }

  return (
    <div class="register-container">
      <div id="register" className="register-card">
        <h1>Register</h1>
        <form action="POST" onSubmit={handleSubmit}>
          <div>
            <label for="username">Username:</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="username" />
          </div>
          <div>
            <label for="password">Password:</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" />
          </div>
          <div>
            <label for="email">Email:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterSection;