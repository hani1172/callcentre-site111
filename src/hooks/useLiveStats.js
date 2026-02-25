import { useEffect, useState } from "react";

export default function useLiveStats() {
  const [stats, setStats] = useState({
    calls: 2360,
    ai: 68,
    latency: 4.2
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(s => ({
        calls: s.calls + Math.floor(Math.random() * 6 - 3),
        ai: Math.min(75, Math.max(60, s.ai + Math.floor(Math.random() * 3 - 1))),
        latency: (Math.random() * 0.5 + 4).toFixed(2)
      }));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return stats;
}
