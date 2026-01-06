import type { FC } from 'react';
import './PartnerAppFeatures.css';

const partnerFeatures = [
  {
    icon: "🗺️",
    title: "VRP Solver",
    desc: "Advanced Vehicle Routing Problem logic that calculates the most efficient path for complex journeys.",
    color: "#5F9FFF"
  },
  {
    icon: "📦",
    title: "Multi-Parcel Routing",
    desc: "Bundle food, market, and package orders into a single trip to maximize your earnings per kilometer.",
    color: "#FFCF00"
  },
  {
    icon: "🔔",
    title: "Live Offers",
    desc: "Real-time marketplace for delivery requests. Accept high-value shipments as they appear on the map.",
    color: "#4CAF50"
  },
  {
    icon: "⛽",
    title: "Fuel Optimization",
    desc: "Reduce deadhead miles and idling time with precision sequencing of pickups and drop-offs.",
    color: "#FF5F5F"
  },
  {
    icon: "🚛",
    title: "Fleet Connectivity",
    desc: "Ideal for individual drivers or small transporters managing a team of delivery vehicles.",
    color: "#A061FF"
  },
  {
    icon: "💰",
    title: "Instant Earnings",
    desc: "Transparent payment tracking for every completed route, directly within the Partner interface.",
    color: "#FF9A3E"
  }
];

const PartnerAppFeatures: FC = () => {
  return (
    <section className="partner-features-section">
      <div className="partner-features-container">
        <div className="partner-features-header">
          <span className="partner-features-label">Transporter Tools</span>
          <h2 className="partner-features-title">Optimized Logistics</h2>
          <div className="partner-features-line"></div>
        </div>
        
        <div className="partner-features-grid">
          {partnerFeatures.map((item, index) => (
            <div 
              className="partner-feature-card" 
              key={index}
              style={{ '--hover-accent': item.color } as React.CSSProperties}
            >
              <div className="partner-card-icon">
                {item.icon}
              </div>
              <div className="partner-card-text">
                <h3 className="partner-card-title">{item.title}</h3>
                <p className="partner-card-desc">{item.desc}</p>
              </div>
              <div className="partner-card-indicator" style={{ backgroundColor: item.color }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerAppFeatures;