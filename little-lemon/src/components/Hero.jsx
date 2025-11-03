import React from "react";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="grid-12">
          <div style={{ gridColumn: "span 7" }}>
            <h1 className="display">Little Lemon</h1>
            <p className="lede">Chicago • Mediterranean • Family-run</p>
            <p>
              Fresh, seasonal dishes inspired by the Mediterranean. Reserve your
              table or order online today.
            </p>
            <a className="cta" href="#reservations">
              Reserve a Table
            </a>
          </div>
          <div style={{ gridColumn: "span 5" }}>
            <div className="ph-box" style={{ height: 260 }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
