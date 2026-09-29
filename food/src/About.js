import "./Styling.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function About() {
    const { cart } = useContext(CartContext);
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
                            <button
                                className="nav-link dropdown-toggle text-white me-3"
                                href="#"
                                data-bs-toggle="dropdown"
                            >
                                Account
                            </button>

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
                            {cart.length > 0 && (
                                <span className="cart-count">
                                    {cart.reduce((total, item) => total + item.quantity, 0)}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="text-start mt-4 "><b>About Our Story</b></h1>
                        <p className="card-text mt-4 about-text">Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        <Link className="btn Order-now" to="/menu">
                            <b>View Menu</b>
                        </Link>
                    </div>
                    <div className="col-lg-6">
                        <img
                            src="https://thumbs.dreamstime.com/b/tasty-burger-french-fries-fire-close-up-home-made-flames-137249900.jpg"
                            className="about-image"
                            alt="Burger and fries"
                        />
                    </div>
                </div>
            </div>
            <footer className="footer mt-5">

                <div className="container">

                    <div className="row">

                        <div className="col-lg-3">

                            <h5>Legal</h5>

                            <div className="mt-3 ms-5">
                                <a href="#">Terms & Conditions</a>
                            </div>

                            <div className="mt-2 ms-5">
                                <a href="#">Privacy center</a>
                            </div>

                            <div className="mt-2 ms-5">
                                <a href="#">Disclaimer</a>
                            </div>

                            <div className="mt-2 ms-5">
                                <a href="#">Caution Notice</a>
                            </div>
                        </div>

                        <div className="col-lg-3">

                            <h5>About</h5>

                            <div className="mt-3 ms-5">
                                <a href="#">Carrer</a>
                            </div>

                            <div className="mt-2 ms-5">
                                <a href="#">Our Gold Past</a>
                            </div>

                            <div className="mt-2 ms-5">
                                <a href="#">Responsible</a>
                            </div>

                            <div className="mt-2 ms-5">
                                <a href="#">Disclosure</a>
                            </div>

                        </div>

                        <div className="col-lg-3">
                            <h5>Support</h5>
                            <div className="mt-3 ms-5">
                                <a href="#">Get Help</a>
                            </div>

                            <div className="mt-2 ms-5">
                                <a href="#">Contact</a>
                            </div>

                            <div className="mt-2 ms-5">
                                <a href="#">Feedback</a>
                            </div>

                            <div className="mt-2 ms-5">
                                <a href="#">Privacy Center</a>
                            </div>

                        </div>

                        <div className="col-lg-3">
                            <h5>Contact Us</h5>

                            <div className="d-flex gap-0">

                                <i className="bi bi-instagram"></i>

                                <i className="bi bi-twitter ms-2"></i>

                                <i className="bi bi-whatsapp ms-2"></i>

                                <i className="bi bi-facebook ms-2"></i>

                            </div>

                            <div className="mt-3">
                                <i className="bi bi-telephone-fill"></i>
                                <span className="ms-2">+91 98765 43210</span>
                            </div>

                            <div className="mt-3">
                                <i className="bi bi-geo-alt-fill"></i>
                                <span className="ms-2">Coimbatore, India</span>
                            </div>

                        </div>

                    </div>
                    <div className="text-center m-5 ">
                        <h5> Copyright- 2026 All rights reserved.</h5>
                    </div>
                </div>

            </footer>
        </div>
    )
}