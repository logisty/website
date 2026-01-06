import type { FC } from 'react';
import './PartnerAppInstall.css';

const PartnerAppInstall: FC = () => {
  const steps = [
    {
      title: "Download APK",
      desc: "Tap download. Your browser may flag the file as 'potentially harmful'—this is standard for direct APKs.",
      placeholderLabel: "Browser Warning"
    },
    {
      title: "Enable Trust",
      desc: "Go to Settings > Security and enable 'Install from Unknown Sources' for your mobile browser.",
      placeholderLabel: "Settings Toggle"
    },
    {
      title: "Play Protect",
      desc: "Google may ask to scan the app. Select 'Install Anyway'—the app is verified and safe.",
      placeholderLabel: "Play Protect Popup"
    },
    {
      title: "Ready to Use",
      desc: "Once installed, open Logisty Partner and log in to start optimizing your delivery routes.",
      placeholderLabel: "Partner Interface"
    }
  ];

  return (
    <section className="partner-install-section">
      <div className="partner-install-container">
        
        {/* Header - Aligned with the rest of the layout */}
        <div className="partner-install-header">
          <span className="install-label">Get Started</span>
          <h2 className="install-main-title">Installation Guide</h2>
          <div className="install-accent-line"></div>
        </div>

        <div className="partner-install-grid">
          {steps.map((step, index) => (
            <div className="install-step-card" key={index}>
              {/* Visual Placeholder */}
              <div className="step-visual-container placeholder-bg">
                <div className="placeholder-content">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                  <span className="placeholder-label">{step.placeholderLabel}</span>
                </div>
                <div className="step-count-badge">{index + 1}</div>
              </div>
              
              <div className="step-text-body">
                <h3 className="step-title-text">{step.title}</h3>
                <p className="step-description-text">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="partner-security-notice">
          <div className="security-notice-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <div className="security-notice-text">
            <strong>Partner Security Protocol:</strong> The Logisty Partner APK is 100% verified. We distribute directly to enable industrial-grade features like our <strong>VRP Solver</strong> which requires deep system integration for background GPS optimization.
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerAppInstall;