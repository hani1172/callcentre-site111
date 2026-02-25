import "./Audience.css";
import supportImg from "../assets/support.jpg";
import opsImg from "../assets/operations.jpg";
import devImg from "../assets/engineering.jpg";

export default function Audience() {
  return (
    <section className="audience">
      <div className="audience-container">

        <h2>Built for every layer of your call operation</h2>
        <p>
          From frontline agents to enterprise leadership,
          our AI infrastructure adapts to your workflow.
        </p>

        <div className="audience-cards">

          <div className="audience-card">
            <img src={supportImg} alt="Support Teams" />
            <div className="audience-overlay">
              <h3>Support Teams</h3>
              <button>Explore Agent Tools →</button>
            </div>
          </div>

          <div className="audience-card">
            <img src={opsImg} alt="Operations Leaders" />
            <div className="audience-overlay">
              <h3>Operations Leaders</h3>
              <button>Explore Enterprise Features →</button>
            </div>
          </div>

          <div className="audience-card">
            <img src={devImg} alt="Engineering Teams" />
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