import React from "react";

const reviews = [
  { name: "Maya", text: "Cozy spot! The lemon dessert is a must.", stars: 5 },
  { name: "Luca", text: "Authentic flavors and friendly staff.", stars: 4 },
  { name: "Ava", text: "Reservations were easy, food was great.", stars: 5 },
  { name: "Ethan", text: "Loved the Greek salad and bruschetta.", stars: 4 },
];

function Stars({ n }) {
  return (
    <p className="stars" aria-label={`${n} out of 5 stars`}>
      {"★".repeat(n)}{"☆".repeat(5 - n)}
    </p>
  );
}

export default function Testimonials() {
  return (
    <section className="section testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <h2 id="testimonials-title" className="section-title">Testimonials</h2>

        <ul className="t-grid" role="list">
          {reviews.map((r, i) => (
            <li key={i}>
              <article className="tcard" aria-labelledby={`reviewer-${i}`}>
                <Stars n={r.stars} />
                <p>{r.text}</p>
                <p id={`reviewer-${i}`} style={{ fontWeight: 800 }}>{r.name}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
