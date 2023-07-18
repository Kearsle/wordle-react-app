import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import "./RegisterSection.css";
import FormInput from '../FormInput'
import axios from "axios";

function RegisterSection() {
  let navigate = useNavigate(); 

  const routeChange = () =>{
    let path = "../login"
    navigate(path);
  }

  const [values, setValues] = useState({
    username: "",
    usernameTaken: "",
    password: "",
    email: "",
    emailTaken: "",
    confirmPassword: ""
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username must be between 3-16 characters and cannot include special characters.",
      errorTaken: "Username is already taken.",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Please provide a valid email address.",
      errorTaken: "This email is already used.",
      label: "Email",
      required: true
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password must be between 5-20 characters.",
      label: "Password",
      pattern: "^[^\n ]{5,20}$",
      required: true
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords do not match.",
      label: "Confirm Password",
      pattern: values.password,
      required: true
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const username = Object.fromEntries(data.entries()).username
    const password = Object.fromEntries(data.entries()).password
    const email = Object.fromEntries(data.entries()).email
    const toastId = toast.loading('Loading...');
    axios.post('http://localhost:8000/user/create', {username, password, email})
      .then(res => {
        toast.success("Account created!", {
          id: toastId
        });
        routeChange();
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
    <div class="register-container">
      <form autoComplete="new-password" className="register-form" action="POST" onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={handleChange} />
        ))}
        <button id="buttonRegisterSubmit" type="submit">Register</button>
        <button id="buttonLogin" onClick={routeChange}>Already have an account?</button>
      </form>
    </div>
  );
}

export default RegisterSection;