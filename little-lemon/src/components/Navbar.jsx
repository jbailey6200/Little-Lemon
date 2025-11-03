import React from "react";
// import { Link } from "react-router-dom"; // ← uncomment if using Router

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

            {/* Use ONE of the two blocks below */}

            {/* Anchors */}
            <li>
              <a className="cta" href="/reservations" role="button" aria-label="Reserve a table">
                Reserve a Table
              </a>
            </li>

            {/* React Router Link (preferred) */}
            {/* <li>
              <Link className="cta" to="/reservations" aria-label="Reserve a table">
                Reserve a Table
              </Link>
            </li> */}

            <li><a href="#order">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
