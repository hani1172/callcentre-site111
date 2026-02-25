import { useEffect, useState } from "react";

export default function useLiveStats() {
  const [stats, setStats] = useState({
    calls: 2341,
    aiRate: 62,
    response: 4.1,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        calls: prev.calls + Math.floor(Math.random() * 5),
        aiRate: Math.min(99, prev.aiRate + (Math.random() > 0.7 ? 1 : 0)),
        response: Math.max(2.1, (prev.response - Math.random() * 0.05).toFixed(2)),
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return stats;
}
