import axios from "axios";
import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function LogOutBtn() {
  const { getLoggedIn } = useContext(AuthContext);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `../`;
    navigate(path);
  };

  async function logOut() {
    await axios.delete("http://localhost:8000/user/logout");
    getLoggedIn();
    toast("Logged out!", {
      icon: "🚪",
    });
    routeChange();
  }

  return (
    <button id="logOutBtn" onClick={logOut}>
      Logout
    </button>
  );
}

export default LogOutBtn;
