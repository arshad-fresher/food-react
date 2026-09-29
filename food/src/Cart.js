import "./Styling.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Cart() {
    const { cart, setCart } = useContext(CartContext);
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
            <div className="container mt-5 cart-page">

                <div className="row">

                    {/* YOUR ITEMS */}
                    <div className="col-lg-8">

                        <h2 className="mb-4">Your Items</h2>

                        {cart.length === 0 ? (
                            <h4 className="text-center mt-5">
                                Your cart is empty
                            </h4>
                        ) : (
                            cart.map((item, index) => (

                                <div className="card mb-3 cart-card" key={index}>

                                    <div className="row g-0 align-items-center">

                                        <div className="col-md-3">
                                            <img
                                                src={item.image}
                                                className="img-fluid rounded-start"
                                                alt={item.name}
                                            />
                                        </div>

                                        <div className="col-md-5">
                                            <div className="card-body">

                                                <h5>{item.name}</h5>

                                                <p>₹{item.price}</p>

                                                <div className="d-flex align-items-center gap-3">

                                                    <button
                                                        className="btn btn-warning"
                                                        onClick={() => {
                                                            if (item.quantity > 1) {
                                                                setCart(
                                                                    cart.map(cartItem =>
                                                                        cartItem.name === item.name
                                                                            ? {
                                                                                ...cartItem,
                                                                                quantity: cartItem.quantity - 1
                                                                            }
                                                                            : cartItem
                                                                    )
                                                                );
                                                            } else {
                                                                setCart(
                                                                    cart.filter(
                                                                        cartItem =>
                                                                            cartItem.name !== item.name
                                                                    )
                                                                );
                                                            }
                                                        }}
                                                    >
                                                        -
                                                    </button>

                                                    <span>{item.quantity}</span>

                                                    <button
                                                        className="btn btn-warning"
                                                        onClick={() => {
                                                            setCart(
                                                                cart.map(cartItem =>
                                                                    cartItem.name === item.name
                                                                        ? {
                                                                            ...cartItem,
                                                                            quantity: cartItem.quantity + 1
                                                                        }
                                                                        : cartItem
                                                                )
                                                            );
                                                        }}
                                                    >
                                                        +
                                                    </button>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-md-4 text-center">

                                            <h5>
                                                Total: ₹{item.price * item.quantity}
                                            </h5>

                                            <button
                                                className="btn btn-danger"
                                                onClick={() => {
                                                    setCart(
                                                        cart.filter(
                                                            cartItem =>
                                                                cartItem.name !== item.name
                                                        )
                                                    );
                                                }}
                                            >
                                                Remove
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            ))
                        )}

                    </div>


                    {/* CHECKOUT */}
                    <div className="col-lg-4">

                        <div className="card checkout-card" >

                            <h3>Checkout</h3>

                            <hr />

                            <h5>
                                Total Price : ₹
                                {cart.reduce(
                                    (total, item) =>
                                        total + item.price * item.quantity,
                                    0
                                )}
                            </h5>

                            <Link className="btn btn-warning w-100 mt-3" to="/payment">
                                Buy Now
                            </Link>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}