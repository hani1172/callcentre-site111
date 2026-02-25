import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

const NAV_HEIGHT = 80;

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [orange, setOrange] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      NAV_HEIGHT;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + NAV_HEIGHT + 2;

      const home = document.getElementById("home");
      const services = document.getElementById("services");
      const testimonials = document.getElementById("testimonials");
      const contact = document.getElementById("contact");

      if (contact && scrollY >= contact.offsetTop) {
        setActive("contact");
        setOrange(false);
        return;
      }

      if (testimonials && scrollY >= testimonials.offsetTop) {
        setActive("testimonials");
        setOrange(false);
        return;
      }

      if (services && scrollY >= services.offsetTop) {
        setActive("services");
        setOrange(false);
        return;
      }

      if (home) {
        setActive("home");
        setOrange(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${orange ? "navbar-orange" : ""}`}>
      <div className="nav-left">
        <img
          src={logo}
          alt="DYD Communications"
          onClick={() => scrollToSection("home")}
        />
      </div>

      <div className="nav-center">
        <button
          className={active === "home" ? "active" : ""}
          onClick={() => scrollToSection("home")}
        >
          Home
        </button>

        <button
          className={active === "services" ? "active" : ""}
          onClick={() => scrollToSection("services")}
        >
          Services
        </button>

        <button
          className={active === "testimonials" ? "active" : ""}
          onClick={() => scrollToSection("testimonials")}
        >
          Testimonials
        </button>

        <button
          className={active === "contact" ? "active" : ""}
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </button>
      </div>

      <div className="nav-right">
        <button
          className="btn-outline"
          onClick={() => scrollToSection("contact")}
        >
          Log in
        </button>

        <button
          className="btn-solid"
          onClick={() => scrollToSection("contact")}
        >
          Sign up
        </button>
      </div>
    </nav>
  );
}