import React, { useRef } from "react";
import "./Stats.css";
import useLiveStats from "../hooks/useLiveStats";
import useScrollFade from "../hooks/useScrollFade";

const Stats = () => {
  const stats = useLiveStats();
  const ref = useRef(null);
  useScrollFade(ref);

  return (
    <div ref={ref} className="stats fade">
      <div className="stat">
        <h3>{stats.calls.toLocaleString()}</h3>
        <p>Live Calls</p>
      </div>
      <div className="stat">
        <h3>{stats.aiRate}%</h3>
        <p>AI Handling</p>
      </div>
      <div className="stat">
        <h3>{stats.response}s</h3>
        <p>Avg Response</p>
      </div>
    </div>
  );
};

export default Stats;
