import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Highlights from "./components/Highlights.jsx";
import Testimonials from "./components/Testimonials.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import Reservations from "./pages/Reservations.jsx";
import ConfirmedBooking from "./pages/ConfirmedBooking.jsx";  // Add this

function Home() {
  return (
    <main id="main-content" role="main">
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </main>
  );
}

export default function App() {
  return (
    <>
      <a href="#main-content" className="visually-hidden-focusable">
        Skip to main content
      </a>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />  {/* Add this */}
      </Routes>
      <Footer />
    </>
  );
}