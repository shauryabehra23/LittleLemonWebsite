import React from 'react';
import pic from "./OIP.png";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <img src={pic} alt="Little Lemon Logo" className="navbar-logo" />
      <Link to="/home">Home</Link>     
      <Link to="/about">About</Link>      
      <Link to="/contact">Contact</Link>  
      <Link to="/login">Login</Link>       
      <Link to="/reservations">Reservations</Link>
      <Link to="/order-online">Order Online</Link>
    </nav>
  );
}

export default Navbar;
