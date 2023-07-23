import './App.css';
import React from "react";
import { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { AuthContextProvider } from './context/AuthContext';
import Router from './Router';

axios.defaults.withCredentials = true;

function App() {

  return (
    <div className="app-background">
      <Toaster 
          position="bottom-center"
          reverseOrder={false}
          />
      <AuthContextProvider> 
        <Router />
      </AuthContextProvider>
    </div>
  );
}

export default App;
