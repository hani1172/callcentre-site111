import React, { useEffect, useRef } from "react";
import "./About.css";
import aboutImg from "../assets/teamwork.jpg"; // 📸 Replace with your actual image

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);
    return () => section && observer.unobserve(section);
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      {/* LEFT TEXT CONTENT */}
      <div className="about-left">
        <h2>
          About <span>Us</span>
        </h2>
        <p className="about-intro">
          We are a customer engagement company driven by passion, technology, and excellence.  
          Our mission is to help businesses strengthen relationships with their customers through seamless communication.
        </p>

        <p className="about-body">
          Established with the belief that every interaction matters, our call centre combines professional human support
          with cutting-edge automation. From inbound customer service to AI-driven performance analytics, we deliver
          results that enhance satisfaction and efficiency for businesses around the world.
        </p>

        {/* 🌟 Stats */}
        <div className="about-highlights">
          <div className="highlight-box">
            <h3>98%</h3>
            <p>Customer Satisfaction</p>
          </div>
          <div className="highlight-box">
            <h3>35+</h3>
            <p>Enterprise Clients</p>
          </div>
          <div className="highlight-box">
            <h3>15</h3>
            <p>Countries Served</p>
          </div>
          <div className="highlight-box">
            <h3>5+</h3>
            <p>Years of Experience</p>
          </div>
        </div>

        <button className="about-btn">Learn More</button>
      </div>

      {/* RIGHT IMAGE SIDE */}
      <div className="about-right">
        <div className="about-image-wrapper">
          <img src={aboutImg} alt="Our Team" className="about-image" />
        </div>
      </div>
    </section>
  );
};

export default About;
