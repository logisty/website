import './ContactSection.css'; // Import the new CSS file

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Us At Any Time</h2>
      <p className="contact-description">
        Have questions, feedback, or just want to chat? Reach out to us!
      </p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" className="form-input" />
        <input type="email" placeholder="Your Email" className="form-input" />
        <textarea placeholder="Your Message" rows={5} className="form-textarea" /> {/* Increased rows for more space */}
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </section>
  );
}