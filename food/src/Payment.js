import "./Styling.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

export default function Payment() {

    const { cart } = useContext(CartContext);

    const [details, setDetails] = useState({
        name: "",
        number: "",
        address: "",
        city: "",
        pincode: ""
    });

    const [errors, setErrors] = useState({});

    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    function handleChange(e) {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        });
    }

    function handlePayment(e) {
        e.preventDefault();

        let newErrors = {};

        if (details.name === "") {
            newErrors.name = "Enter the name";
        }

        if (details.number === "") {
            newErrors.number = "Enter the number";
        }

        if (details.address === "") {
            newErrors.address = "Enter the address";
        }

        if (details.city === "") {
            newErrors.city = "Enter the city";
        }

        if (details.pincode === "") {
            newErrors.pincode = "Enter the pincode";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert("Order placed successfully!");
        }
    }

    return (
        <div>

            {/* NAVBAR */}
            <nav className="navbar navbar-expand-lg navbar-light bg-black">
                <div className="container-fluid">

                    <div className="navbar-brand">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYd1RNhLJvq1wyEfva6CkYBNyWXRXRwNXYY_XByI7mGw&s"
                            alt="logo"
                            width="70"
                            height="70"
                        />
                    </div>

                    <div className="collapse navbar-collapse justify-content-center">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/">
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

                </div>
            </nav>


            {/* PAYMENT PAGE */}
            <div className="container payment-page mt-5">

                <div className="row justify-content-center">

                    {/* DELIVERY DETAILS */}
                    <div className="col-lg-7">

                        <div className="card payment-card p-4">

                            <h2 className="mb-4">Delivery Details</h2>

                            <form onSubmit={handlePayment}>

                                {/* NAME */}
                                <div className="mb-3">
                                    <label className="form-label">
                                        Name
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        value={details.name}
                                        onChange={handleChange}
                                    />

                                    {errors.name && (
                                        <p className="text-danger mt-1">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>


                                {/* NUMBER */}
                                <div className="mb-3">
                                    <label className="form-label">
                                        Phone Number
                                    </label>

                                    <input
                                        type="text"
                                        name="number"
                                        className="form-control"
                                        value={details.number}
                                        onChange={handleChange}
                                    />

                                    {errors.number && (
                                        <p className="text-danger mt-1">
                                            {errors.number}
                                        </p>
                                    )}
                                </div>


                                {/* ADDRESS */}
                                <div className="mb-3">
                                    <label className="form-label">
                                        Address
                                    </label>

                                    <textarea
                                        name="address"
                                        className="form-control"
                                        rows="3"
                                        value={details.address}
                                        onChange={handleChange}
                                    ></textarea>

                                    {errors.address && (
                                        <p className="text-danger mt-1">
                                            {errors.address}
                                        </p>
                                    )}
                                </div>


                                {/* CITY */}
                                <div className="mb-3">
                                    <label className="form-label">
                                        City
                                    </label>

                                    <input
                                        type="text"
                                        name="city"
                                        className="form-control"
                                        value={details.city}
                                        onChange={handleChange}
                                    />

                                    {errors.city && (
                                        <p className="text-danger mt-1">
                                            {errors.city}
                                        </p>
                                    )}
                                </div>


                                {/* PINCODE */}
                                <div className="mb-3">
                                    <label className="form-label">
                                        Pincode
                                    </label>

                                    <input
                                        type="text"
                                        name="pincode"
                                        className="form-control"
                                        value={details.pincode}
                                        onChange={handleChange}
                                    />

                                    {errors.pincode && (
                                        <p className="text-danger mt-1">
                                            {errors.pincode}
                                        </p>
                                    )}
                                </div>


                                <button
                                    type="submit"
                                    className="btn btn-warning w-100 mt-3"
                                >
                                    Proceed to Pay
                                </button>

                            </form>

                        </div>

                    </div>


                    {/* ORDER SUMMARY */}
                    <div className="col-lg-4">

                        <div className="card payment-summary p-4">

                            <h3>Order Summary</h3>

                            <hr />

                            {cart.map((item, index) => (
                                <div
                                    className="d-flex justify-content-between mb-3"
                                    key={index}
                                >

                                    <span>
                                        {item.name} × {item.quantity}
                                    </span>

                                    <span>
                                        ₹{item.price * item.quantity}
                                    </span>

                                </div>
                            ))}

                            <hr />

                            <div className="d-flex justify-content-between">

                                <h5>Total Price</h5>

                                <h5>₹{totalPrice}</h5>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}