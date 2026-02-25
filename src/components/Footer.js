import "./Footer.css";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* TOP */}
        <div className="footer-top">
          <div className="footer-brand">
            <img
              src={logo}
              alt="DYD Communications"
            />
            <p>
              Reliable call-centre services built for scale,
              compliance, and performance.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#services">Services</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer-col">
              <h4>Operations</h4>
              <a href="#">Inbound Calling</a>
              <a href="#">Outbound Campaigns</a>
              <a href="#">Quality Assurance</a>
              <a href="#">Reporting</a>
            </div>

            <div className="footer-col">
              <h4>Compliance</h4>
              <a href="#">Data Protection</a>
              <a href="#">Call Monitoring</a>
              <a href="#">Security Standards</a>
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