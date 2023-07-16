import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navigation';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

function App() {
  return (
    <Router>
      <Toaster 
      position="bottom-center"
      reverseOrder={false}
      />
      <Navbar/>
      <Routes>
        <Route path='/' exact Component={Home}></Route>
        <Route path='/login' exact Component={Login}></Route>
        <Route path='/register' exact Component={Register}></Route>
      </Routes>
    </Router>
  );
}

export default App;
