import "./Testimonials.css";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-inner">

        <div className="testimonials-header">
          <span className="testimonials-eyebrow">
            TRUSTED BY OPERATIONS TEAMS
          </span>

          <h2>
            What our partners say <br />
            about working with us
          </h2>

          <p>
            From frontline supervisors to enterprise managers,
            our call-centre solutions support real teams every day.
          </p>
        </div>

        <div className="testimonials-grid">

          <div className="testimonial-card">
            <p className="testimonial-quote">
              “Their team integrated seamlessly into our outbound
              campaigns. Performance increased within the first month.”
            </p>
            <div className="testimonial-author">
              <strong>James Carter</strong>
              <span>Operations Manager, UK</span>
            </div>
          </div>

          <div className="testimonial-card">
            <p className="testimonial-quote">
              “Reliable coverage, consistent reporting, and strong
              agent performance across all time zones.”
            </p>
            <div className="testimonial-author">
              <strong>Sarah Malik</strong>
              <span>Customer Support Director</span>
            </div>
          </div>

          <div className="testimonial-card">
            <p className="testimonial-quote">
              “We needed scalable call handling fast. They delivered
              structured workflows and measurable improvements.”
            </p>
            <div className="testimonial-author">
              <strong>Daniel Brooks</strong>
              <span>Enterprise Solutions Lead</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}