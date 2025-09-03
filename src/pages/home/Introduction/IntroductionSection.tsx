import './IntroductionSection.css';
// import iphoneMockup from '../../../assets/iphone-mockup.png'; // No longer needed

export default function IntroductionSection() {
  return (
    <section className="intro-section">
      {/* Removed the hero-background div and its image */}
      <div className="intro-content">
        {/* Added a span for the glowing word */}
        <h1 className="intro-slogan">
          Move Smarter, Logisticlly <span className="glowing-word">Better</span>.
        </h1>
        {/* Short, concise description */}
        <p className="intro-description">
          Effortlessly manage all your deliveries with real-time tracking and a vast network of reliable transport partners.
        </p>
        <div className="cta-buttons">
          <button className="cta-button primary-button">Get Started</button>
          <button className="cta-button secondary-button">Learn More</button>
        </div>
      </div>
    </section>
  );
}