import React from "react";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <nav className="navbar-inner" aria-label="Primary">
          <a className="brand" href="/" aria-label="Little Lemon Home">
            <span className="logo-placeholder" aria-hidden="true"></span>
            <span>Little Lemon</span>
          </a>

          <ul className="navlinks" role="list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
