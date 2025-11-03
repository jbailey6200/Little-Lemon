import React from "react";

const specials = [
  { title: "Greek Salad", price: "$12.99", desc: "Crisp lettuce, olives, feta, and house dressing." },
  { title: "Bruschetta", price: "$5.99", desc: "Grilled bread, garlic, tomatoes, olive oil." },
  { title: "Lemon Dessert", price: "$4.99", desc: "Grandma's lemon cake with zest." },
  { title: "Shakshuka", price: "$10.99", desc: "Tomato, peppers, poached eggs, herbs." },
];

export default function Highlights() {
  return (
    <section id="menu" className="section" aria-labelledby="specials-title">
      <div className="container">
        <header className="highlights-header">
          <h2 id="specials-title" className="section-title">This Week’s Specials</h2>
          <a className="button-outline" href="#order" role="button" aria-label="Go to order online">Order Online</a>
        </header>

        <ul className="cards-row" role="list" aria-label="Special dishes">
          {specials.map((dish, i) => (
            <li key={i}>
              <article className="card">
                <figure className="img-ph" aria-label={`${dish.title} image placeholder`}>
                  <figcaption className="visually-hidden">{dish.title}</figcaption>
                </figure>
                <div className="body">
                  <h3 className="title">{dish.title}</h3>
                  <p className="desc">{dish.desc}</p>
                  <p className="price" aria-label={`Price ${dish.price}`}>{dish.price}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
