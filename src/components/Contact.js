import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-inner">

        {/* HEADER */}
        <div className="contact-header">
          <span className="contact-eyebrow">GET IN TOUCH</span>

          <h2>
            Let’s discuss your <br />
            call-centre requirements
          </h2>

          <p>
            Reach out to learn how our operations can support
            your campaigns, coverage needs, and growth plans.
          </p>
        </div>

        {/* CONTENT */}
        <div className="contact-grid">

          {/* LEFT INFO */}
          <div className="contact-info">
            <div className="info-block">
              <h4>Email</h4>
              <p>contact@yourcompany.com</p>
            </div>

            <div className="info-block">
              <h4>Phone</h4>
              <p>+92 300 0000000</p>
            </div>

            <div className="info-block">
              <h4>Operations</h4>
              <p>24/7 Coverage · Global Campaigns</p>
            </div>

            <div className="info-block">
              <h4>Location</h4>
              <p>Lahore, Pakistan</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Full name" required />
              <input type="email" placeholder="Work email" required />
            </div>

            <input type="text" placeholder="Company name" />

            <textarea
              rows="5"
              placeholder="Tell us about your requirements"
            ></textarea>

            <button type="submit" className="btn-primary">
              Submit enquiry
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}