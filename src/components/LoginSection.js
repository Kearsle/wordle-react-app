import React, { useState } from "react";
import "./LoginSection.css";
import { useNavigate } from "react-router-dom"
import toast from 'react-hot-toast';
import FormInput from "./FormInput";
import axios from "axios";

function LoginSection() {
  let navigate = useNavigate(); 
  const routeChangeRegister = () =>{ 
    let path = `../register`; 
    navigate(path);
  }

  const routeChangeHome = () =>{ 
    let path = `../`; 
    navigate(path);
  }

  const [values, setValues] = useState({
    username: "",
    password: ""
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
    const username = Object.fromEntries(data.entries()).username
    const password = Object.fromEntries(data.entries()).password
    const toastId = toast.loading('Loading...');
    axios.post('http://127.0.0.1:8000/user/login', {username, password})
      .then(res => {
        toast.success("Logged in", {
          id: toastId
        });
        routeChangeHome();
      })
      .catch(err => {
        try {
          toast.error(err.response.data.error, {
            id: toastId
          });
        } catch(error) {
          toast.error("Cannot connect to the server.\nPlease try again later.", {
            id: toastId
          });
        }
      });
  }

  const handleChange = (e) => {
     setValues({...values, [e.target.name]: e.target.value})
  }

  return (
    <div class="login-container">
      <form className="login-form" action="POST" onSubmit={handleSubmit}>
        <h1>Login</h1>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={handleChange} />
        ))}
        <button id="buttonLoginSubmit" type="submit">Login</button>
        <button id="buttonRegister" onClick={routeChangeRegister}>Don't have an account?</button>
      </form>
    </div>
  );
}

export default LoginSection;