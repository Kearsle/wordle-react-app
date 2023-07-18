import axios from "axios";
import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { toast } from "react-hot-toast";

function LogOutBtn() {
    const {getLoggedIn} = useContext(AuthContext);

    async function logOut() {
        await axios.delete("http://localhost:8000/user/logout");
        getLoggedIn();
        toast("Logged out!", {
            icon: '🚪'
        });
    }

   return (
    <button id="logOutBtn" onClick={logOut}>
        Logout
    </button>
    );
};

export default LogOutBtn;