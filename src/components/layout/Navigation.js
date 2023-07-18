import { Link } from "react-router-dom"
import "./Navigation.css"
import { useContext } from "react"
import AuthContext from "../../context/AuthContext"
import LogOutBtn from "../auth/LogOutBtn";

function Navbar() {

    const {loggedIn} = useContext(AuthContext);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Wordle
                    </Link>
                    {loggedIn === false && (
                        <ul className="nav-menu">
                            <li className="nav-item">
                                <Link to="/login" className="nav-links">
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register" className="nav-links">
                                    Register
                                </Link>
                            </li>
                        </ul>
                    )}
                    {loggedIn === true && (
                        <ul className="nav-menu">
                            <li className="nav-item">
                                <LogOutBtn />
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        </>
    )
}

export default Navbar