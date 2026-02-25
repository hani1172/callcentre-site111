import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Lenis from "@studio-freight/lenis";

function SmoothScrollWrapper() {
  useEffect(() => {
    // Initialize Lenis with buttery-smooth parameters
    const lenis = new Lenis({
      duration: 1.8, // base duration for scroll inertia
      easing: (t) => 1 - Math.pow(1 - t, 3.2), // custom ease-out cubic
      smoothWheel: true,
      smoothTouch: true,
      touchMultiplier: 1.4, // makes trackpads feel natural
      direction: "vertical",
      gestureDirection: "vertical",
      infinite: false,
    });

    // Sync animation frame with browser paint for consistency
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Handle resize to maintain smoothness
    window.addEventListener("resize", () => lenis.resize());

    return () => {
      lenis.destroy();
      window.removeEventListener("resize", () => lenis.resize());
    };
  }, []);

  return <App />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SmoothScrollWrapper />
  </React.StrictMode>
);
