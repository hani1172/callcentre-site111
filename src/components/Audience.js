import { useEffect, useRef, useState } from "react";
import "./Audience.css";
import supportImg from "../assets/support.jpg";
import opsImg from "../assets/operations.jpg";
import devImg from "../assets/engineering.jpg";

export default function Audience() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`audience ${visible ? "active" : ""}`} ref={ref}>
      <div className="audience-container">

        <h2>Built for every layer of your call operation</h2>
        <p>
          From frontline agents to enterprise leadership,
          our AI infrastructure adapts to your workflow.
        </p>

        <div className="audience-cards">

          <div className="audience-card">
            <img src={supportImg} alt="Support Teams" loading="lazy" />
            <div className="audience-overlay">
              <h3>Support Teams</h3>
              <button>Explore Agent Tools →</button>
            </div>
          </div>

          <div className="audience-card">
            <img src={opsImg} alt="Operations Leaders" loading="lazy" />
            <div className="audience-overlay">
              <h3>Operations Leaders</h3>
              <button>Explore Enterprise Features →</button>
            </div>
          </div>

          <div className="audience-card">
            <img src={devImg} alt="Engineering Teams" loading="lazy" />
            <div className="audience-overlay">
              <h3>AI & Engineering</h3>
              <button>Explore API & Integrations →</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
