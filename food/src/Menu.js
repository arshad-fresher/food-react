import "./Styling.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Menu() {
    const { cart, setCart } = useContext(CartContext);
    function changeQuantity(name, price, change, image) {
        const existingItem = cart.find(item => item.name === name);

        if (existingItem) {
            if (existingItem.quantity + change <= 0) {
                setCart(cart.filter(item => item.name !== name));
            } else {
                setCart(
                    cart.map(item =>
                        item.name === name
                            ? { ...item, quantity: item.quantity + change }
                            : item
                    )
                );
            }
        } else if (change > 0) {
            setCart([...cart, { name, price, quantity: 1, image: image }]);
        }
    }
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
                                <Link className="nav-link text-white" href="#">
                                    Menu
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/About" href="#">
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
                            {cart.length > 0 && (
                                <span className="cart-count">
                                    {cart.reduce((total, item) => total + item.quantity, 0)}
                                </span>
                            )}

                        </Link>
                    </div>
                </div>
            </nav>
            <div>
                <div className="container me-5">
                    <div className="row">
                        <div className="col-lg-3">
                            <h2 className="text-start mt-4 ms-4 "><b>Select Menu</b></h2>
                            <div className="text-center ms-4" style={{ width: "200px" }}>
                                <Link className="d-block mt-5 menu-link" to="#"><b>All</b></Link>
                                <Link className="d-block menu-link" to="#"><b>Burger</b></Link>
                                <Link className="d-block menu-link" to="#"><b>Pizza</b></Link>
                                <Link className="d-block menu-link" to="#"><b>Fried Chicken</b></Link>
                                <Link className="d-block menu-link" to="#"><b>French Fries</b></Link>
                                <Link className="d-block menu-link" to="#"><b>Drinks</b></Link>
                                <Link className="d-block menu-link" to="#"><b>Wings</b></Link>
                            </div>
                        </div>


                        <div className="col-lg-9">
                            <h2 className="text-start mt-4 ms-4 select-menu-title">
                                <b>BURGER</b>
                            </h2>
                            <div className="row g-4">
                                <div className="col-lg-4">
                                    <div className="card h-100">
                                        <img
                                            src="https://damndelicious.net/wp-content/uploads/2022/08/220602_DD_Best-Ever-Cheeseburger_267.jpg"
                                            className="card-img-top"
                                            alt="Burger"
                                        />

                                        <div className="card-body text-center">
                                            <h5 className="card-title">Chicken Burger</h5>
                                            <p className="card-text">₹299</p>

                                            <div className="d-flex justify-content-center align-items-center gap-2">

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Chicken Burger", 299, -1, "https://damndelicious.net/wp-content/uploads/2022/08/220602_DD_Best-Ever-Cheeseburger_267.jpg")}
                                                >
                                                    -
                                                </button>

                                                <h5 className="mb-0 ms-5 me-5">
                                                    {cart.find(item => item.name === "Chicken Burger")?.quantity || "add"}
                                                </h5>

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Chicken Burger", 299, 1, "https://damndelicious.net/wp-content/uploads/2022/08/220602_DD_Best-Ever-Cheeseburger_267.jpg")}
                                                >
                                                    +
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="card h-100">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMAVhri0qPK9-5SErJsMuqb_S3dldEuVzKnGpFFAmA8yQ5tjshsnD5_Ig&s=10"
                                            className="card-img-top"
                                            alt="Burger"
                                        />

                                        <div className="card-body text-center">
                                            <h5 className="card-title">Cheese Burger</h5>
                                            <p className="card-text">₹249</p>

                                            <div className="d-flex justify-content-center align-items-center gap-2">

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Cheese Burger", 249, -1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMAVhri0qPK9-5SErJsMuqb_S3dldEuVzKnGpFFAmA8yQ5tjshsnD5_Ig&s=10")}
                                                >
                                                    -
                                                </button>

                                                <h5 className="mb-0 ms-5 me-5">
                                                    {cart.find(item => item.name === "Cheese Burger")?.quantity || "add"}
                                                </h5>

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Cheese Burger", 249, 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMAVhri0qPK9-5SErJsMuqb_S3dldEuVzKnGpFFAmA8yQ5tjshsnD5_Ig&s=10")}
                                                >
                                                    +
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="card h-100">
                                        <img
                                            src="https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/hbplsgjr/28747324-a1a8-4bba-8de0-05f381809517.jpg"
                                            className="card-img-top"
                                            alt="Burger"
                                        />

                                        <div className="card-body text-center">
                                            <h5 className="card-title">Classic Burger</h5>
                                            <p className="card-text">₹199</p>

                                            <div className="d-flex justify-content-center align-items-center gap-2">

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Classic Burger", 199, -1, "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/hbplsgjr/28747324-a1a8-4bba-8de0-05f381809517.jpg")}
                                                >
                                                    -
                                                </button>

                                                <h5 className="mb-0 ms-5 me-5">
                                                    {cart.find(item => item.name === "Classic Burger")?.quantity || "add"}
                                                </h5>

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Classic Burger", 199, 1, "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/hbplsgjr/28747324-a1a8-4bba-8de0-05f381809517.jpg")}
                                                >
                                                    +
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <h2 className="text-start mt-4 ms-4 select-menu-title">
                                <b>PIZZA</b>
                            </h2>
                            <div className="row g-4">
                                <div className="col-lg-4">
                                    <div className="card h-100">
                                        <img
                                            src="https://media.istockphoto.com/id/1340589333/photo/homemade-indian-chicken-tikka-masala-pizza.jpg?s=612x612&w=0&k=20&c=QetWD3UJeCFoTq6OYNJehauw7Utc8MxH6B90Cb9zvLw="
                                            className="card-img-top"
                                            alt="Burger"
                                        />

                                        <div className="card-body text-center">
                                            <h5 className="card-title">Chicken Pizza</h5>
                                            <p className="card-text">₹299</p>

                                            <div className="d-flex justify-content-center align-items-center gap-2">

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Chicken Pizza", 299, -1, "https://media.istockphoto.com/id/1340589333/photo/homemade-indian-chicken-tikka-masala-pizza.jpg?s=612x612&w=0&k=20&c=QetWD3UJeCFoTq6OYNJehauw7Utc8MxH6B90Cb9zvLw=")}
                                                >
                                                    -
                                                </button>

                                                <h5 className="mb-0 ms-5 me-5">
                                                    {cart.find(item => item.name === "Chicken Pizza")?.quantity || "add"}
                                                </h5>

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Chicken Pizza", 299, 1, "https://media.istockphoto.com/id/1340589333/photo/homemade-indian-chicken-tikka-masala-pizza.jpg?s=612x612&w=0&k=20&c=QetWD3UJeCFoTq6OYNJehauw7Utc8MxH6B90Cb9zvLw=")}
                                                >
                                                    +
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="card h-100">
                                        <img
                                            src="https://media.istockphoto.com/id/1393150881/photo/italian-pizza-margherita-with-cheese-and-tomato-sauce-on-the-board-on-grey-table-macro-close.jpg?s=612x612&w=0&k=20&c=kL0Vhg2XKBjEl__iG8sFv31WTiahdpLc3rTDtNZuD2g="
                                            className="card-img-top"
                                            alt="Burger"
                                        />

                                        <div className="card-body text-center">
                                            <h5 className="card-title">Cheese Pizza</h5>
                                            <p className="card-text">₹249</p>

                                            <div className="d-flex justify-content-center align-items-center gap-2">

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Cheese Pizza", 249, -1, "https://media.istockphoto.com/id/1393150881/photo/italian-pizza-margherita-with-cheese-and-tomato-sauce-on-the-board-on-grey-table-macro-close.jpg?s=612x612&w=0&k=20&c=kL0Vhg2XKBjEl__iG8sFv31WTiahdpLc3rTDtNZuD2g=")}
                                                >
                                                    -
                                                </button>

                                                <h5 className="mb-0 ms-5 me-5">
                                                    {cart.find(item => item.name === "Cheese Pizza")?.quantity || "add"}
                                                </h5>

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Cheese Pizza", 249, 1, "https://media.istockphoto.com/id/1393150881/photo/italian-pizza-margherita-with-cheese-and-tomato-sauce-on-the-board-on-grey-table-macro-close.jpg?s=612x612&w=0&k=20&c=kL0Vhg2XKBjEl__iG8sFv31WTiahdpLc3rTDtNZuD2g=")}
                                                >
                                                    +
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="card h-100">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1XDutmPeBDxpnqm01oLV5JKIHLBeVju_n_ZdLrGLGw&s"
                                            className="card-img-top"
                                            alt="Burger"
                                        />

                                        <div className="card-body text-center">
                                            <h5 className="card-title">Classic Pizza</h5>
                                            <p className="card-text">₹199</p>

                                            <div className="d-flex justify-content-center align-items-center gap-2">

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Classic Pizza", 199, -1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1XDutmPeBDxpnqm01oLV5JKIHLBeVju_n_ZdLrGLGw&s")}
                                                >
                                                    -
                                                </button>

                                                <h5 className="mb-0 ms-5 me-5">
                                                    {cart.find(item => item.name === "Classic Pizza")?.quantity || "add"}
                                                </h5>

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Classic Pizza", 199, 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1XDutmPeBDxpnqm01oLV5JKIHLBeVju_n_ZdLrGLGw&s")}
                                                >
                                                    +
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <h2 className="text-start mt-4 ms-4 select-menu-title">
                                <b>FRIED CHICKEN</b>
                            </h2>
                            <div className="row g-4">
                                <div className="col-lg-4">
                                    <div className="card h-100">
                                        <img
                                            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSI9c6w5BR1IwIYxObDIVibq9vQ08bq1Bs9bhezAPfsX7AH0aAm"
                                            className="card-img-top"
                                            alt="Burger"
                                        />

                                        <div className="card-body text-center">
                                            <h5 className="card-title">Chicken</h5>
                                            <p className="card-text">₹299</p>

                                            <div className="d-flex justify-content-center align-items-center gap-2">

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Chicken", 299, -1, "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSI9c6w5BR1IwIYxObDIVibq9vQ08bq1Bs9bhezAPfsX7AH0aAm")}
                                                >
                                                    -
                                                </button>

                                                <h5 className="mb-0 ms-5 me-5">
                                                    {cart.find(item => item.name === "Chicken")?.quantity || "add"}
                                                </h5>

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Chicken", 299, 1, "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSI9c6w5BR1IwIYxObDIVibq9vQ08bq1Bs9bhezAPfsX7AH0aAm")}
                                                >
                                                    +
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="card h-100">
                                        <img
                                            src="https://cdn.meatigo.com/richTextImages/1753522853858_Chicken_Lollipop_Raw_Mob"
                                            className="card-img-top"
                                            alt="Burger"
                                        />

                                        <div className="card-body text-center">
                                            <h5 className="card-title">Chicken lollipop</h5>
                                            <p className="card-text">₹249</p>

                                            <div className="d-flex justify-content-center align-items-center gap-2">

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Chicken lollipop", 249, -1, "https://cdn.meatigo.com/richTextImages/1753522853858_Chicken_Lollipop_Raw_Mob")}
                                                >
                                                    -
                                                </button>

                                                <h5 className="mb-0 ms-5 me-5">
                                                    {cart.find(item => item.name === "Chicken lollipop")?.quantity || "add"}
                                                </h5>

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Chicken lollipop", 249, 1, "https://cdn.meatigo.com/richTextImages/1753522853858_Chicken_Lollipop_Raw_Mob")}
                                                >
                                                    +
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="card h-100">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROOtX917MLevqyfoi0mrhUopUf6A42V9IF0BIMpKo1EW5XgmlfluzBwJo&s=10"
                                            className="card-img-top"
                                            alt="Burger"
                                        />

                                        <div className="card-body text-center">
                                            <h5 className="card-title">Classic chicken</h5>
                                            <p className="card-text">₹199</p>

                                            <div className="d-flex justify-content-center align-items-center gap-2">

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Classic Chicken", 199, -1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROOtX917MLevqyfoi0mrhUopUf6A42V9IF0BIMpKo1EW5XgmlfluzBwJo&s=10")}
                                                >
                                                    -
                                                </button>

                                                <h5 className="mb-0 ms-5 me-5">
                                                    {cart.find(item => item.name === "Classic Chicken")?.quantity || "add"}
                                                </h5>

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Classic Chicken", 199, 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROOtX917MLevqyfoi0mrhUopUf6A42V9IF0BIMpKo1EW5XgmlfluzBwJo&s=10")}
                                                >
                                                    +
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <h2 className="text-start mt-4 ms-4 select-menu-title">
                                <b>FRENCH FRIES</b>
                            </h2>
                            <div className="row g-4">
                                <div className="col-lg-4">
                                    <div className="card h-100">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnx6A0KkbKmeHSWmPa7xs5thnGkip0os5F09VP-vPi20l_4ubrXQqndCbO&s=10"
                                            className="card-img-top"
                                            alt="Burger"
                                        />

                                        <div className="card-body text-center">
                                            <h5 className="card-title">Pepper fries</h5>
                                            <p className="card-text">₹299</p>

                                            <div className="d-flex justify-content-center align-items-center gap-2">

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Pepper fries", 299, -1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnx6A0KkbKmeHSWmPa7xs5thnGkip0os5F09VP-vPi20l_4ubrXQqndCbO&s=10")}
                                                >
                                                    -
                                                </button>

                                                <h5 className="mb-0 ms-5 me-5">
                                                    {cart.find(item => item.name === "Pepper fries")?.quantity || "add"}
                                                </h5>

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Pepper fries", 299, 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnx6A0KkbKmeHSWmPa7xs5thnGkip0os5F09VP-vPi20l_4ubrXQqndCbO&s=10")}
                                                >
                                                    +
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="card h-100">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmEG-IURx7VPahQzWrd9Micn8rJW_cRWoANrfdoYAuDvKYcTjs3R7G9VK5&s=10"
                                            className="card-img-top"
                                            alt="Burger"
                                        />

                                        <div className="card-body text-center">
                                            <h5 className="card-title">Cheese fries</h5>
                                            <p className="card-text">₹249</p>

                                            <div className="d-flex justify-content-center align-items-center gap-2">

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Cheese fries", 249, -1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmEG-IURx7VPahQzWrd9Micn8rJW_cRWoANrfdoYAuDvKYcTjs3R7G9VK5&s=10")}
                                                >
                                                    -
                                                </button>

                                                <h5 className="mb-0 ms-5 me-5">
                                                    {cart.find(item => item.name === "Cheese fries")?.quantity || "add"}
                                                </h5>

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Cheese fries", 249, 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmEG-IURx7VPahQzWrd9Micn8rJW_cRWoANrfdoYAuDvKYcTjs3R7G9VK5&s=10")}
                                                >
                                                    +
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="card h-100">
                                        <img
                                            src="https://www.allrecipes.com/thmb/MGg1BbKT_QPvNZ-dk006dUGw6vM=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/50223-homemade-crispy-seasoned-french-fries-VAT-Beauty-4x3-789ecb2eaed34d6e879b9a93dd56a50a.jpg"
                                            className="card-img-top"
                                            alt="Burger"
                                        />

                                        <div className="card-body text-center">
                                            <h5 className="card-title">Classic fries</h5>
                                            <p className="card-text">₹199</p>

                                            <div className="d-flex justify-content-center align-items-center gap-2">

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Classic fries", 199, -1)}
                                                >
                                                    -
                                                </button>

                                                <h5 className="mb-0 ms-5 me-5">
                                                    {cart.find(item => item.name === "Classic fries")?.quantity || "add"}
                                                </h5>

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Classic fries", 199, 1)}
                                                >
                                                    +
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h2 className="text-start mt-4 ms-4 select-menu-title">
                                <b>DRINKS</b>
                            </h2>
                            <div className="row g-4">
                                <div className="col-lg-4">
                                    <div className="card h-100">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW_-J1KbIaghtwmQevRDzJCakFuzGLwAFOf3t078VrwaQe-BYdIeC3Kz4&s=10"
                                            className="card-img-top"
                                            alt="Burger"
                                        />

                                        <div className="card-body text-center">
                                            <h5 className="card-title">Special drinks</h5>
                                            <p className="card-text">₹299</p>

                                            <div className="d-flex justify-content-center align-items-center gap-2">

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Special drinks", 299, -1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW_-J1KbIaghtwmQevRDzJCakFuzGLwAFOf3t078VrwaQe-BYdIeC3Kz4&s=10")}
                                                >
                                                    -
                                                </button>

                                                <h5 className="mb-0 ms-5 me-5">
                                                    {cart.find(item => item.name === "Special drinks")?.quantity || "add"}
                                                </h5>

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Special drinks", 299, 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW_-J1KbIaghtwmQevRDzJCakFuzGLwAFOf3t078VrwaQe-BYdIeC3Kz4&s=10")}
                                                >
                                                    +
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="card h-100">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRa69MvGgDvBFYEg-GuBaQ-jNXwPOAW2LUU73ZE3-B3Aj6N_u5Q5Mu8c&s=10"
                                            className="card-img-top"
                                            alt="Burger"
                                        />

                                        <div className="card-body text-center">
                                            <h5 className="card-title">Soft drinks</h5>
                                            <p className="card-text">₹249</p>

                                            <div className="d-flex justify-content-center align-items-center gap-2">

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Soft drinks", 249, -1)}
                                                >
                                                    -
                                                </button>

                                                <h5 className="mb-0 ms-5 me-5">
                                                    {cart.find(item => item.name === "Soft drinks")?.quantity || "add"}
                                                </h5>

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Soft drinks", 249, 1)}
                                                >
                                                    +
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="card h-100">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9m7jMEfMp-zRmAkxd4KzoKEznCIxVl4PqTxMPSGlXv6u_-bGAHPQ5rs_O&s=10"
                                            className="card-img-top"
                                            alt="Burger"
                                        />

                                        <div className="card-body text-center">
                                            <h5 className="card-title">Cool drinks</h5>
                                            <p className="card-text">₹199</p>

                                            <div className="d-flex justify-content-center align-items-center gap-2">

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Cool drinks", 199, -1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9m7jMEfMp-zRmAkxd4KzoKEznCIxVl4PqTxMPSGlXv6u_-bGAHPQ5rs_O&s=10")}
                                                >
                                                    -
                                                </button>

                                                <h5 className="mb-0 ms-5 me-5">
                                                    {cart.find(item => item.name === "cold drinks")?.quantity || "add"}
                                                </h5>

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Cool drinks", 199, 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9m7jMEfMp-zRmAkxd4KzoKEznCIxVl4PqTxMPSGlXv6u_-bGAHPQ5rs_O&s=10")}
                                                >
                                                    +
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h2 className="text-start mt-4 ms-4 select-menu-title">
                                <b>Wings</b>
                            </h2>
                            <div className="row g-4">
                                <div className="col-lg-4">
                                    <div className="card h-100">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtcAbXt0xHxBKWva9SDx8k2jHv_-ZarZ8SdjcfN_Z7GfsZEWz_0Gm6GqWs&s=10"
                                            className="card-img-top"
                                            alt="Burger"
                                        />

                                        <div className="card-body text-center">
                                            <h5 className="card-title">Special wings</h5>
                                            <p className="card-text">₹299</p>

                                            <div className="d-flex justify-content-center align-items-center gap-2">

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Special wings", 299, -1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtcAbXt0xHxBKWva9SDx8k2jHv_-ZarZ8SdjcfN_Z7GfsZEWz_0Gm6GqWs&s=10")}
                                                >
                                                    -
                                                </button>

                                                <h5 className="mb-0 ms-5 me-5">
                                                    {cart.find(item => item.name === "Special wings")?.quantity || "add"}
                                                </h5>

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Special wings", 299, 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtcAbXt0xHxBKWva9SDx8k2jHv_-ZarZ8SdjcfN_Z7GfsZEWz_0Gm6GqWs&s=10")}
                                                >
                                                    +
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="card h-100">
                                        <img
                                            src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-193709_11-adb3a57.jpg"
                                            className="card-img-top"
                                            alt="Burger"
                                        />

                                        <div className="card-body text-center">
                                            <h5 className="card-title">Cheese wings</h5>
                                            <p className="card-text">₹249</p>

                                            <div className="d-flex justify-content-center align-items-center gap-2">

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Cheese wings", 249, -1,"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-193709_11-adb3a57.jpg")}
                                                >
                                                    -
                                                </button>

                                                <h5 className="mb-0 ms-5 me-5">
                                                    {cart.find(item => item.name === "Cheese wings")?.quantity || "add"}
                                                </h5>

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Cheese wings", 249, 1,"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-193709_11-adb3a57.jpg")}
                                                >
                                                    +
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="card h-100">
                                        <img
                                            src="https://www.wholesomeyum.com/wp-content/uploads/2022/12/wholesomeyum-Baked-Whole-Chicken-Wings-15.jpg"
                                            className="card-img-top"
                                            alt="Burger"
                                        />

                                        <div className="card-body text-center">
                                            <h5 className="card-title">Classic wings</h5>
                                            <p className="card-text">₹199</p>

                                            <div className="d-flex justify-content-center align-items-center gap-2">

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Classic wings", 199, -1,"https://www.wholesomeyum.com/wp-content/uploads/2022/12/wholesomeyum-Baked-Whole-Chicken-Wings-15.jpg")}
                                                >
                                                    -
                                                </button>

                                                <h5 className="mb-0 ms-5 me-5">
                                                    {cart.find(item => item.name === "Classic wings")?.quantity || "add"}
                                                </h5>

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => changeQuantity("Classic wings", 199, 1,"https://www.wholesomeyum.com/wp-content/uploads/2022/12/wholesomeyum-Baked-Whole-Chicken-Wings-15.jpg")}
                                                >
                                                    +
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
        </div >
    )
}