import React, { useEffect } from "react";

// COMPONENTS
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Audience from "./components/Audience";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// GLOBAL STYLES
import "./index.css";

// SCROLL REVEAL
import { initScrollReveal } from "./utils/scrollReveal";

function App() {
  useEffect(() => {
    initScrollReveal();
  }, []);

  return (
    <>
      {/* FIXED NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main>

        {/* HOME */}
        <section id="home">
          <Hero />
        </section>

        {/* SERVICES BLOCK (Services + Audience + How It Works) */}
        <section id="services">
          <Services />
          <Audience />
          <HowItWorks />
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials">
          <Testimonials />
        </section>

        {/* CONTACT */}
        <section id="contact">
          <Contact />
        </section>

        {/* FOOTER */}
        <Footer />

      </main>
    </>
  );
}

export default App;