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
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  );
}
