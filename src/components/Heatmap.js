import "./Heatmap.css";

export default function Heatmap() {
  return (
    <div className="heatmap">
      <h4>Agent availability</h4>
      <div className="grid">
        {Array.from({ length: 42 }).map((_, i) => (
          <span key={i} className={`cell lvl-${Math.floor(Math.random() * 4)}`} />
        ))}
      </div>
    </div>
  );
}
