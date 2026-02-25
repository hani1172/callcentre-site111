import "../styles/dashboard.css";
import useScrollFade from "../hooks/useScrollFade";

export default function DashboardPreview() {
  const ref = useScrollFade();

  return (
    <section className="dashboard fade" ref={ref}>
      <h2>Command-level visibility</h2>
      <p>Monitor calls, agents, and AI performance in real time.</p>

      <div className="dashboard-mock">
        <div />
        <div />
        <div />
      </div>
    </section>
  );
}
