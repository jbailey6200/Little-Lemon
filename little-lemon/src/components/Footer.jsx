import React from "react";

export default function Footer() {
  return (
    <footer className="footer" aria-labelledby="footer-title">
      <div className="container">
        <h2 id="footer-title" className="visually-hidden">Footer</h2>

        <div className="footer-grid">
          <section aria-labelledby="brand-footer">
            <h3 id="brand-footer">Little Lemon</h3>
            <div className="logo-placeholder" style={{ width: 48, height: 48, marginTop: 10 }} aria-hidden="true"></div>
          </section>

          <nav aria-labelledby="doormat-title">
            <h3 id="doormat-title">Doormat</h3>
            <ul style={{ display: "grid", gap: 8 }}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#reservations" id="reservations">Reservations</a></li>
              <li><a href="#order" id="order">Order Online</a></li>
              <li><a href="#login" id="login">Login</a></li>
            </ul>
          </nav>

          <section aria-labelledby="contact-title">
            <h3 id="contact-title">Contact</h3>
            <address style={{ fontStyle: "normal" }}>
              123 Lemon St, Chicago, IL<br />
              (312) 555-0137<br />
              <a href="mailto:hello@littlelemon.com">hello@littlelemon.com</a>
            </address>
          </section>

          <nav aria-labelledby="social-title">
            <h3 id="social-title">Social</h3>
            <ul style={{ display: "grid", gap: 8 }}>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">TikTok</a></li>
            </ul>
          </nav>
        </div>

        <div className="hr" role="separator" aria-hidden="true"></div>
        <p className="smallprint">© Little Lemon. Demo for portfolio.</p>
      </div>
    </footer>
  );
}
