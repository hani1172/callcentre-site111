import "./HowItWorks.css";
import operationsVideo from "../assets/operations.mp4";

export default function HowItWorks() {
  return (
    <section className="how">
      <div className="how-inner">
        {/* VIDEO */}
        <div className="how-video-wrap">
          <video
            className="how-video"
            src={operationsVideo}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="how-video-fade"></div>
        </div>

        {/* CONTENT */}
        <div className="how-content">
          <span className="how-eyebrow">LIVE OPERATIONS</span>

          <h2>
            Real call-centre environments <br />
            built for reliability and scale
          </h2>

          <p className="how-intro">
            What you see is a real operational environment —
            structured teams, monitored workflows, and
            consistent delivery across campaigns.
          </p>

          <div className="how-steps">
            <div className="how-step">
              <span className="how-index">01</span>
              <h3>Inbound & Outbound Calls</h3>
              <p>
                Calls are received and initiated through
                dedicated agent queues to maintain
                speed and availability.
              </p>
            </div>

            <div className="how-step">
              <span className="how-index">02</span>
              <h3>Routing & Assignment</h3>
              <p>
                Calls are assigned based on campaign,
                region, and language requirements.
              </p>
            </div>

            <div className="how-step">
              <span className="how-index">03</span>
              <h3>Live Agent Handling</h3>
              <p>
                Trained agents handle conversations
                using approved scripts and quality
                guidelines.
              </p>
            </div>

            <div className="how-step">
              <span className="how-index">04</span>
              <h3>Monitoring & Quality Control</h3>
              <p>
                Supervisors actively monitor calls
                to ensure consistency and compliance.
              </p>
            </div>

            <div className="how-step">
              <span className="how-index">05</span>
              <h3>Reporting & Optimization</h3>
              <p>
                Performance reports help refine
                operations and improve outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}