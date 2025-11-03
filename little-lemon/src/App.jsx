import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Highlights from "./components/Highlights.jsx";
import Testimonials from "./components/Testimonials.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <a href="#main-content" className="visually-hidden-focusable">Skip to main content</a>
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <Highlights />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  );
}
