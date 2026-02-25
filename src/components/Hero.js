import React, { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [stats, setStats] = useState({
    calls: 2400,
    resolution: 66,
    latency: 4.5,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        calls: prev.calls + Math.floor(Math.random() * 5 - 2),
        resolution: Math.max(
          60,
          Math.min(75, prev.resolution + (Math.random() * 2 - 1))
        ),
        latency: Math.max(
          3.5,
          Math.min(5, prev.latency + (Math.random() * 0.2 - 0.1))
        ),
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-left fade-in">
          <p className="hero-tag">ENTERPRISE COMMUNICATION PLATFORM</p>

          <h1>
            Build conversations that{" "}
            <span>scale intelligently</span>
          </h1>

          <p className="hero-description">
            AI-powered call-centre infrastructure trusted by high-volume
            operations worldwide.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">View Platform</button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <strong>1M+</strong>
              <span>Calls / month</span>
            </div>
            <div className="stat">
              <strong>{Math.round(stats.resolution)}%</strong>
              <span>AI Resolution</span>
            </div>
            <div className="stat">
              <strong>24/7</strong>
              <span>Operations</span>
            </div>
          </div>

          <h4 className="hero-subline">
            TEAMWORK MAKES THE CALLS WORK.
          </h4>

          <div className="mini-bars">
            {[40, 65, 55, 80, 60].map((v, i) => (
              <div
                key={i}
                className="bar"
                style={{ height: `${v}px` }}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right fade-in">
          <div className="live-card">
            <h3>Live system</h3>

            <div className="live-row">
              <span>Active calls</span>
              <strong>{stats.calls}</strong>
            </div>

            <div className="live-row">
              <span>AI resolution</span>
              <strong>{Math.round(stats.resolution)}%</strong>
            </div>

            <div className="live-row">
              <span>Avg latency</span>
              <strong>{stats.latency.toFixed(2)}s</strong>
            </div>

            <div className="progress">
              <div
                className="progress-fill"
                style={{ width: `${stats.resolution}%` }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
