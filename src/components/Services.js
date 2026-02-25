import "./Services.css";
import bg from "../assets/services-bg.png";
import { Headphones, Cpu, BarChart3, Globe } from "lucide-react";

export default function Services() {
  const isTouch =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none)").matches;

  const handleMouseMove = (e) => {
    if (isTouch) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -10;
    const rotateY = ((x / rect.width) - 0.5) * 10;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
    card.style.transform = `
      translateY(-12px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  };

  const handleMouseLeave = (e) => {
    if (isTouch) return;
    e.currentTarget.style.transform = "translateY(0)";
  };

  return (
    <section
      className="services"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="services-film" />
      <div className="services-grid" />
      <div className="services-noise" />

      <div className="services-panel">
        <span className="services-eyebrow">ENTERPRISE SERVICES</span>

        <h2>
          Powering modern
          <span> call-centre operations</span>
        </h2>

        <p>
          AI-assisted infrastructure built for scale, reliability,
          and real-time performance monitoring across global operations.
        </p>

        <div className="services-cards">
          <div
            className="service-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <Headphones className="service-icon" />
            <h3>Voice Support</h3>
            <div className="divider" />
            <p>24/7 inbound & outbound calls with AI routing.</p>
            <span className="service-link">Explore →</span>
          </div>

          <div
            className="service-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <Cpu className="service-icon" />
            <h3>AI Resolution</h3>
            <div className="divider" />
            <p>Automated issue handling with real-time learning.</p>
            <span className="service-link">Explore →</span>
          </div>

          <div
            className="service-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <BarChart3 className="service-icon" />
            <h3>Live Analytics</h3>
            <div className="divider" />
            <p>Monitor agents, calls, and performance instantly.</p>
            <span className="service-link">Explore →</span>
          </div>

          <div
            className="service-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <Globe className="service-icon" />
            <h3>Global Scaling</h3>
            <div className="divider" />
            <p>Distributed systems built for enterprise growth.</p>
            <span className="service-link">Explore →</span>
          </div>
        </div>

        <div className="services-trust">
          <span>✓ 99.99% uptime</span>
          <span>✓ SOC-2 ready</span>
          <span>✓ ISO compliant</span>
          <span>✓ Used by 100+ teams</span>
        </div>
      </div>
    </section>
  );
}
