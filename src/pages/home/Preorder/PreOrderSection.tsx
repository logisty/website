import './PreOrderSection.css'; // Import the new CSS file

export default function PreOrderSection() {
  const flouciIndividualLink = "https://pay.flouci.com/payment/INDIVIDUAL-LINK"; // Replace with your real Flouci individual link
  const flouciBusinessLink = "https://pay.flouci.com/payment/BUSINESS-LINK";   // Replace with your real Flouci business link

  return (
    <section id="pre-order-section" className="pre-order-section">
      <div className="pre-order-content">
        <h2 className="pre-order-title">
          Be a <span className="highlight-text">Pioneer Backer</span>: Secure Your Limited Offer!
        </h2>
        <p className="pre-order-description">
          Join our exclusive pre-order program and get early access to Logisty at a special, reduced price. Your contribution directly fuels our development and makes you a foundational part of our journey.
        </p>

        <div className="pre-order-buttons-container">
          <a
            href={flouciIndividualLink}
            target="_blank"
            rel="noopener noreferrer"
            className="pre-order-button primary-pre-order-button"
          >
            Pre-order for Individuals
          </a>

          <a
            href={flouciBusinessLink}
            target="_blank"
            rel="noopener noreferrer"
            className="pre-order-button secondary-pre-order-button"
          >
            Pre-order for Businesses
          </a>
        </div>
      </div>
    </section>
  );
}