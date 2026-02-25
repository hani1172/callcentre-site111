import React from "react";

const people = [
  { name:"Ayesha Khan", role:"Head of Operations", img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop" },
  { name:"Omar Ali", role:"Director, Customer Success", img:"https://images.unsplash.com/photo-1545996124-1b7a1f6f1d28?q=80&w=400&auto=format&fit=crop" },
  { name:"Sara Malik", role:"Training Lead", img:"https://images.unsplash.com/photo-1552053831-71594a27632f?q=80&w=400&auto=format&fit=crop" }
];

export default function Team() {
  return (
    <div className="container">
      <h2 style={{ fontWeight:800, marginBottom:20 }}>Meet the Team</h2>
      <div style={{ display:"flex", gap:20, flexWrap:"wrap" }}>
        {people.map(p => (
          <div key={p.name} className="card" style={{ width:240, padding:16, textAlign:"center" }}>
            <img src={p.img} alt={p.name} style={{ width:120, height:120, borderRadius:999, objectFit:"cover", margin:"0 auto 12px" }} />
            <div style={{ fontWeight:700 }}>{p.name}</div>
            <div className="muted" style={{ marginTop:6 }}>{p.role}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
