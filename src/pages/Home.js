import React from "react";

export default function Home() {
  return (
    <section style={{ backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop')", backgroundSize:"cover", backgroundPosition:"center" }}>
      <div className="container" style={{ padding: "120px 0", display:"flex", gap:40, alignItems:"center", color:"var(--text-light)" }}>
        <div style={{ flex:1 }}>
          <h1 style={{ fontSize:48, marginBottom:16 }}>Customer support that scales with your business</h1>
          <p className="muted" style={{ color:"rgba(255,255,255,0.9)", marginBottom:24 }}>24/7 inbound & outbound contact centre, live chat, and virtual assistants integrated with your stack.</p>
          <div style={{ display:"flex", gap:12 }}>
            <a className="btn" href="#contact">Get a Quote</a>
            <a className="btn secondary" href="#services">Our Services</a>
          </div>
        </div>

        <div style={{ width:420, height:280, borderRadius:12, overflow:"hidden", boxShadow:"0 20px 50px rgba(0,0,0,0.2)" }}>
          <img src="https://images.unsplash.com/photo-1521790366062-0a3c9165f04c?q=80&w=800&auto=format&fit=crop" alt="hero" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
        </div>
      </div>
    </section>
  );
}
