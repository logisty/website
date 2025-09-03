import './InvestorSection.css'; // Import the new CSS file

export default function InvestorSection() {
  return (
    <section id="investor-section" className="investor-section">
      <div className="investor-content">
        <h2 className="investor-title">For Visionary Backers & Investors</h2>

        <p className="investor-description">
          Logisty is at the forefront of revolutionizing logistics, actively seeking strategic partners to accelerate our market expansion and drive innovation. Join us in shaping the future of moving anything, anywhere.
        </p>

        <div className="investor-cta-container">
          <a
            href="https://calendly.com/nasserallah-hourichi/investor-meeting" // Your provided Calendly link
            target="_blank"
            rel="noopener noreferrer"
            className="investor-button primary-investor-button" // Renamed class for consistency
          >
            📅 Schedule a Meeting
          </a>
          <a
            href="#contact" // Link to your contact section or direct investment page
            className="investor-button secondary-investor-button" // New class for the green button
          >
            💰 Or Back Us Directly
          </a>
        </div>
      </div>
      {/* This div will create the glowing effect at the bottom */}
      <div className="section-glow-effect"></div>
    </section>
  );
}