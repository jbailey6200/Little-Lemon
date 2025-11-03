import React from "react";

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="home-title">
      <div className="container">
        <div className="grid-12">
          <header style={{ gridColumn: "span 7" }}>
            <h1 id="home-title" className="display">Little Lemon</h1>
            <p className="lede">Chicago • Mediterranean • Family-run</p>
            <p>
              Fresh, seasonal dishes inspired by family recipes and the flavors
              of the Mediterranean.
            </p>
            <a className="cta" href="#reservations" role="button" aria-label="Reserve a table">
              Reserve a Table
            </a>
          </header>

          <aside style={{ gridColumn: "span 5" }} aria-label="Hero image placeholder">
            <figure className="ph-box" style={{ height: 260, borderRadius: 18 }}>
              <figcaption className="visually-hidden">Restaurant hero image placeholder</figcaption>
            </figure>
          </aside>
        </div>
      </div>
    </section>
  );
}
