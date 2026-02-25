import "./Footer.css";
import logo from "../assets/logo.png";

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* TOP */}
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} alt="DYD Communications" />
            <p>
              Reliable call-centre services built for scale,
              compliance, and performance.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Company</h4>
              <button onClick={() => scrollTo("services")}>Services</button>
              <button onClick={() => scrollTo("testimonials")}>Testimonials</button>
              <button onClick={() => scrollTo("contact")}>Contact</button>
            </div>

            <div className="footer-col">
              <h4>Operations</h4>
              <button type="button">Inbound Calling</button>
              <button type="button">Outbound Campaigns</button>
              <button type="button">Quality Assurance</button>
              <button type="button">Reporting</button>
            </div>

            <div className="footer-col">
              <h4>Compliance</h4>
              <button type="button">Data Protection</button>
              <button type="button">Call Monitoring</button>
              <button type="button">Security Standards</button>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="footer-divider" />

        {/* BOTTOM */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} DYD Communications</span>
          <span>All rights reserved</span>
        </div>

      </div>
    </footer>
  );
}
