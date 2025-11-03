import React from "react";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Little Lemon</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Family-owned Mediterranean restaurant in Chicago. We focus on
              fresh, seasonal ingredients and simple, flavorful dishes.
            </p>
          </div>
          <div className="about-media">
            <div className="ph-box"></div>
            <div className="media-row">
              <div className="ph-box"></div>
              <div className="ph-box"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
