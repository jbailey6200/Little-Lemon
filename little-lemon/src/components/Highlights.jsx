import React from "react";

const specials = [
  { title: "Greek Salad", price: "$12.99", desc: "Crisp lettuce, olives, feta cheese, and house dressing." },
  { title: "Bruschetta", price: "$5.99", desc: "Grilled bread, garlic, and tomatoes." },
  { title: "Lemon Dessert", price: "$4.99", desc: "Grandma’s famous lemon cake." },
];

export default function Highlights() {
  return (
    <section className="section" id="menu">
      <div className="container">
        <div className="highlights-header">
          <h2 className="section-title">This Week’s Specials</h2>
          <a className="button-outline" href="#order">Order Online</a>
        </div>

        <div className="cards-row">
          {specials.map((dish, i) => (
            <article key={i} className="card">
              <div className="img-ph"></div>
              <div className="body">
                <div className="title">{dish.title}</div>
                <div className="desc">{dish.desc}</div>
                <div className="price">{dish.price}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
