import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './WhyLogistySection.css';

const WhyLogistySection: React.FC = () => {
  const [bgColor, setBgColor] = useState("#000000");

  const cards = [
    {
      id: "01",
      title: "Digital Trust",
      desc: "Encrypted QR handshakes ensure deliveries only finalize when verified by both parties. Zero-error protocol.",
      color: "#FFCF00", // Logisty Yellow
      tag: "SECURE",
      icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
    },
    {
      id: "02",
      title: "Accessibility",
      desc: "Our tech-native infrastructure allows us to scale instantly to any region where a community exists.",
      color: "#39DD85", // Brutalist Green
      tag: "SCALABLE",
      icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    },
    {
      id: "03",
      title: "Innovation",
      desc: "AI routing and low-carbon navigation designed to maximize speed and protect the environment.",
      color: "#3B82F6", // Brutalist Blue
      tag: "FUTURE",
      icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    }
  ];

  return (
    <div className="sticky-parent-container">
      <section 
        className="brutalist-expand-section" 
        style={{ backgroundColor: bgColor }}
      >
        <div className="section-content-limit">
          <header className="brutalist-header-v2">
            <span className="eyebrow-v2">Engineered for Excellence</span>
            <h2 className="title-v2">
              Why <span className="logisty-brand">Logisty</span>?
            </h2>
          </header>

          <div className="brutalist-grid-v2">
            {cards.map((card) => (
              <div 
                key={card.id} 
                className="brutalist-card-v2"
                onMouseEnter={() => setBgColor(card.color)}
                onMouseLeave={() => setBgColor("#000000")}
              >
                <div className="card-ui-top">
                  <div className="card-icon-v2">{card.icon}</div>
                  <div className="card-id-v2">{card.id}</div>
                </div>
                
                <h3 className="card-title-v2">{card.title}</h3>
                <p className="card-desc-v2">{card.desc}</p>
                
                <div className="card-tag-v2">{card.tag}</div>
              </div>
            ))}
          </div>

          <div className="footer-v2">
            <Link to="/ecosystem" className="brutalist-btn-v2">
              Discover the Ecosystem
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="square"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyLogistySection;