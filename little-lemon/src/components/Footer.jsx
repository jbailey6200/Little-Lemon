import React from "react";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container footer-grid">
        <div>
          <h4>Little Lemon</h4>
          <div className="logo-placeholder"></div>
        </div>
        <div>
          <h4>Navigation</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order">Order Online</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <p>123 Lemon St, Chicago, IL</p>
          <p>(312) 555-0137</p>
          <p>hello@littlelemon.com</p>
        </div>
        <div>
          <h4>Social</h4>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
          </ul>
        </div>
      </div>
      <p className="smallprint">© Little Lemon. Demo site for portfolio.</p>
    </footer>
  );
}
