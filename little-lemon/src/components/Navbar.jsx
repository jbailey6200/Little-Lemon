import React from "react";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a className="brand" href="/">
          <span className="logo-placeholder"></span>
          Little Lemon
        </a>

        <nav className="navlinks">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#reservations">Reservations</a>
          <a href="#order">Order Online</a>
          <a href="#login">Login</a>
        </nav>
      </div>
    </header>
  );
}
