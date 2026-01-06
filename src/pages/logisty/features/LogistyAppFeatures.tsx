import type { FC } from 'react';
import './LogistyAppFeatures.css';

const features = [
  {
    icon: "🛍️",
    title: "Market Discovery",
    desc: "Browse local vendors and products in your area with a unified interface.",
    color: "#FFCF00"
  },
  {
    icon: "🍔",
    title: "Fast Food",
    desc: "Discover nearby restaurants and order instantly through our P2P network.",
    color: "#FF5F5F"
  },
  {
    icon: "📍",
    title: "P2P GPS Pickup",
    desc: "Real-time GPS network for precise peer-to-peer delivery and tracking.",
    color: "#5F9FFF"
  },
  {
    icon: "🛡️",
    title: "Secure Verification",
    desc: "Encrypted QR code scanning ensures every delivery reaches the right hands.",
    color: "#4CAF50"
  },
  {
    icon: "🧾",
    title: "Digital Receipts",
    desc: "Automated, cloud-stored proof of purchase and delivery for every transaction.",
    color: "#A061FF"
  },
  {
    icon: "⏱️",
    title: "Arrival Estimation",
    desc: "Precision tracking using local traffic data for accurate arrival times.",
    color: "#FF9A3E"
  }
];

const LogistyAppFeatures: FC = () => {
  return (
    <section className="app-features-section">
      <div className="features-container">
        <div className="features-header-left">
          <span className="features-label">Core Capabilities</span>
          <h2 className="features-main-title">Built for Efficiency</h2>
          <div className="features-accent-line"></div>
        </div>
        
        <div className="features-clean-grid">
          {features.map((item, index) => (
            <div 
              className="feature-v-card" 
              key={index}
              style={{ '--accent-color': item.color } as React.CSSProperties}
            >
              <div className="card-top-row">
                <div className="card-icon-wrapper">
                  <span className="emoji-icon">{item.icon}</span>
                </div>
                <div className="card-dot" style={{ backgroundColor: item.color }}></div>
              </div>
              <div className="card-body">
                <h3 className="card-title-refined">{item.title}</h3>
                <p className="card-desc-refined">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogistyAppFeatures;