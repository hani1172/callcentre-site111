import { useEffect } from "react";

export default function useScrollReveal(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && el.classList.add("visible"),
      { threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
}
