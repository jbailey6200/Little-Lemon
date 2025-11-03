import React from "react";

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <h2 id="about-title" className="section-title">About Little Lemon</h2>

        <div className="about-grid">
          <article className="about-text">
            <p>
              Family-owned Mediterranean restaurant in Chicago. We focus on
              seasonal ingredients, simple techniques, and bright flavors.
            </p>
            <p style={{ marginTop: 12, fontSize: "var(--small)", color: "#555" }}>
              (Replace with final owner story and mission.)
            </p>
          </article>

          <aside className="about-media" aria-label="About section images">
            <figure className="ph-box">
              <figcaption className="visually-hidden">Kitchen / chef placeholder</figcaption>
            </figure>
            <div className="media-row">
              <figure className="ph-box">
                <figcaption className="visually-hidden">Dining room placeholder</figcaption>
              </figure>
              <figure className="ph-box">
                <figcaption className="visually-hidden">Dish close-up placeholder</figcaption>
              </figure>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
