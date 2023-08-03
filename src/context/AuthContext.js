import "../App.css";
import React, { createContext, useEffect, useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import toast from "react-hot-toast";
import axios from "axios";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);
  const [loading, setLoading] = useState(true);

  async function getLoggedIn() {
    await axios
      .get("http://localhost:8000/user/loggedIn")
      .then((res) => {
        setLoggedIn(res.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Cannot connect to the server.\nPlease try again later.");
      });
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {loading ? (
        <div className="app-spinner">
          <PulseLoader id="pulse-loader" color="#E8EDDF" />
        </div>
      ) : (
        props.children
      )}
    </AuthContext.Provider>
  );
}
export default AuthContext;
export { AuthContextProvider };
