import React, { useContext } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function HomeSection() {
  let navigate = useNavigate();
  async function play() {
    let path = `/play`;
    navigate(path);
  }

  const { loggedIn } = useContext(AuthContext);

  return (
    <div className="home-container">
      {loggedIn === false && <h1>Please login</h1>}
      {loggedIn === true && (
        <button className="home-play-button" onClick={play}>
          Play
        </button>
      )}
    </div>
  );
}

export default HomeSection;
