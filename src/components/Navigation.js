import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Wordle
                    </Link>
                </div>
                <ul>
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
            </nav>
        </>
    )
}

export default Navbar