import "./Styling.css";
import { Link } from "react-router-dom";

export default function Admin() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-black ">
                <div className="container-fluid">
                    <div className="navbar-brand text-white">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYd1RNhLJvq1wyEfva6CkYBNyWXRXRwNXYY_XByI7mGw&s"
                            alt="logo"
                            width="70"
                            height="70"
                        />
                    </div>
                    <div className="collapse navbar-collapse justify-content-center text-white">
                        <ul className="navbar-nav text-white">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" to="/" color="light">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/menu">
                                    Menu
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/About">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="d-flex align-items-center gap-3">

                        <div className="dropdown">
                            <a
                                className="nav-link dropdown-toggle text-white me-3"
                                href="#"
                                data-bs-toggle="dropdown"
                            >
                                Account
                            </a>

                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item" to="/">
                                        Users
                                    </Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item" to="/admin">
                                        Admin
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <Link href="#" className="cart" to="/cart">
                            <img
                                src="https://www.clipartmax.com/png/middle/234-2348211_png-file-svg-shopping-bag-icon-png.png"
                                alt="cart"
                                width="30"
                                height="30"
                            />
                        </Link>
                    </div>
                </div>
            </nav>
            <div className="admin-login">

                <div className="login-card">

                    <h2>Admin Login</h2>

                    <p>Sign in with your admin account</p>

                    <form>

                        <label>User Name</label>
                        <input
                            type="text"
                            placeholder="Enter username"
                        />

                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                        />

                        <div className="remember">
                            <input type="checkbox" />
                            <span>Keep me logged in</span>
                        </div>

                        <button type="submit">
                            Login
                        </button>

                    </form>

                    <a href="#">Forgot password?</a>

                </div>

            </div>
        </div>
    )
}