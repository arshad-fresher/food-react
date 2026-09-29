import "./Styling.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Home() {

    const { cart } = useContext(CartContext);

    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-black">
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
                                <Link
                                    className="nav-link active text-white"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="nav-link text-white"
                                    to="/menu"
                                >
                                    Menu
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="nav-link text-white"
                                    to="/about"
                                >
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
                                    <Link
                                        className="dropdown-item"
                                        to="/"
                                    >
                                        Users
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to="/admin"
                                    >
                                        Admin
                                    </Link>
                                </li>

                            </ul>

                        </div>

                        <Link className="cart" to="/cart">

                            <img
                                src="https://www.clipartmax.com/png/middle/234-2348211_png-file-svg-shopping-bag-icon-png.png"
                                alt="cart"
                                width="30"
                                height="30"
                            />

                            {cart.length > 0 && (
                                <span className="cart-count">
                                    {cart.reduce(
                                        (total, item) => total + item.quantity,
                                        0
                                    )}
                                </span>
                            )}

                        </Link>

                    </div>

                </div>
            </nav>


            {/* HERO */}

            <div className="container-fluid hero">

                <div className="hero-content">

                    <img
                        src="https://lens.usercontent.google.com/banana?agsi=CmdnbG9iYWw6OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAwZWI6MTpiOGI5YTU0ZjJkMDhkMDAwOjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAyZTE1NDAwMzM2ODowMDA2NWEyZmQ3Y2E2NmNmEAIYASIJaW1hZ2UvcG5n"
                        alt="Special Offer First Order - Fast Food Banner"
                        className="img-fluid w-100"
                    />

                    <Link
                        className="btn order-btn"
                        to="/menu"
                    >
                        <b>ORDER NOW</b>
                    </Link>

                </div>

            </div>


            {/* MENU CATEGORIES */}

            <div className="container">

                <h2 className="text-center m-5 category-title">
                    Menu Categories
                </h2>

                <div className="row justify-content-center g-4">

                    <div className="col-lg-4 text-center">

                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGkpglGsixWUdviPIDEP5DrMER-DquW3bYsnhpU5ZmPDoA-QD1UkWb8ugw&s=10"
                            className="img-thumbnail"
                            alt="Burger"
                        />

                        <p className="category-name">
                            Burger
                        </p>

                    </div>


                    <div className="col-lg-4 text-center">

                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZqw-jNp9Q350ya2RL8oispyT0t-U0gUxFCJ3R-H1MXLS3Q2TJqA4WD34&s=10"
                            className="img-thumbnail"
                            alt="Pizza"
                        />

                        <p className="category-name">
                            Pizza
                        </p>

                    </div>


                    <div className="col-lg-4 text-center">

                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtPe3GPROls2MVlS78wZj-IkzLoAf-UDtN7nk0aEfPtDqjhs528TKGaqSt&s=10"
                            className="img-thumbnail"
                            alt="Fried Chicken"
                        />

                        <p className="category-name">
                            Fried Chicken
                        </p>

                    </div>

                </div>


                <div className="row justify-content-center g-4">

                    <div className="col-lg-4 text-center">

                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2vu6RRcbkBfH4AnBQMQddbYLlbgJAHaG1kf8w9S5PaIzNDQYRdaGOxh0&s=10"
                            className="img-thumbnail"
                            alt="French-Fries"
                        />

                        <p className="category-name">
                            French-Fries
                        </p>

                    </div>


                    <div className="col-lg-4 text-center">

                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRa69MvGgDvBFYEg-GuBaQ-jNXwPOAW2LUU73ZE3-B3Aj6N_u5Q5Mu8c&s=10"
                            className="img-thumbnail"
                            alt="Drinks"
                        />

                        <p className="category-name">
                            Drinks
                        </p>

                    </div>


                    <div className="col-lg-4 text-center">

                        <img
                            src="https://www.wholesomeyum.com/wp-content/uploads/2022/12/wholesomeyum-Baked-Whole-Chicken-Wings-15.jpg"
                            className="img-thumbnail"
                            alt="Wings"
                        />

                        <p className="category-name">
                            Wings
                        </p>

                    </div>

                </div>

            </div>


            {/* DELIVERY BANNER */}

            <div className="container-fluid delivery">

                <div className="delivery-content">

                    <img
                        src="https://lens.usercontent.google.com/banana?agsi=CmdnbG9iYWw6OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAwZWI6MTo5MjFjODM4NTkwMTZiZTdiOjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAyZTE1NDAwMzM2ODowMDA2NWE1MmRmYThjOTRmEAIYASIJaW1hZ2UvcG5n"
                        alt="Special Offer First Order - Fast Food Banner"
                        className="img-fluid w-100"
                    />

                    <Link
                        className="btn delivery-btn"
                        to="/menu"
                    >
                        <b>ORDER NOW</b>
                    </Link>

                </div>

            </div>


            {/* FOOTER */}

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

                                <span className="ms-2">
                                    +91 98765 43210
                                </span>

                            </div>

                            <div className="mt-3">

                                <i className="bi bi-geo-alt-fill"></i>

                                <span className="ms-2">
                                    Coimbatore, India
                                </span>

                            </div>

                        </div>

                    </div>


                    <div className="text-center m-5">

                        <h5>
                            Copyright- 2026 All rights reserved.
                        </h5>

                    </div>

                </div>

            </footer>

        </div>
    );
}