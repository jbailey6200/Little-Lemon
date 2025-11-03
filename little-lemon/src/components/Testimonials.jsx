import React from "react";

const reviews = [
  { name: "Maya", text: "Cozy spot! The lemon dessert is a must.", stars: 5 },
  { name: "Luca", text: "Authentic flavors and friendly staff.", stars: 4 },
  { name: "Ava", text: "Reservations were easy, food was great.", stars: 5 },
  { name: "Ethan", text: "Loved the Greek salad and bruschetta.", stars: 4 },
];

function Stars({ n }) {
  return <div className="stars">{"★".repeat(n)}{"☆".repeat(5 - n)}</div>;
}

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <h2 className="section-title">Testimonials</h2>
        <div className="t-grid">
          {reviews.map((r, i) => (
            <article key={i} className="tcard">
              <Stars n={r.stars} />
              <p>{r.text}</p>
              <strong>{r.name}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
