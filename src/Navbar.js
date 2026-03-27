import React from "react";
import pic from "./OIP.png";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

function Navbar() {
  const { getCartCount } = useCart();

  return (
    <nav className="navbar">
      <img src={pic} alt="Little Lemon Logo" className="navbar-logo" />
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
      <Link to="/reservations">Reservations</Link>
      <Link to="/order-online">Order Online</Link>
      <Link
        to="/cart"
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        🛒 Cart
        {getCartCount() > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-8px",
              right: "-8px",
              backgroundColor: "#E07A5F",
              color: "#FFF",
              borderRadius: "50%",
              width: "24px",
              height: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.8rem",
              fontWeight: "bold",
            }}
          >
            {getCartCount()}
          </span>
        )}
      </Link>
    </nav>
  );
}

export default Navbar;
