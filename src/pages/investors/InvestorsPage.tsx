import React, { useEffect } from 'react';
import './InvestorsPage.css';
import logo from '@assets/logisty-full-logo.png';

const InvestorsPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="investors-page">
      <div className="investors-container">
        
        {/* HEADER SECTION */}
        <header className="investors-header">
          <div className="header-top-bar">
            <span>REGISTRY: TUNISIA</span>
            <span>FUNDING STATUS: OPEN</span>
          </div>
          <img src={logo} alt="Logisty" className="investors-logo" />
          <h1 className="investors-title">Capital & Growth</h1>
          <p className="investors-subtitle">
            Logisty is currently open to strategic partnerships with investors who 
            believe in the modernization of North African logistics infrastructure.
          </p>
        </header>

        <div className="investors-grid">
          
          {/* LEFT: THE SAFE AGREEMENT ILLUSTRATION */}
          <section className="legal-visual-section">
            <div className="safe-document">
              <div className="doc-header">
                <span className="doc-label">Y COMBINATOR STANDARD</span>
                <span className="doc-type">SAFE</span>
              </div>
              <div className="doc-title">Simple Agreement for Future Equity</div>
              <div className="doc-lines">
                <div className="line long"></div>
                <div className="line med"></div>
                <div className="line short"></div>
                <div className="line long"></div>
                <div className="line med"></div>
              </div>
              <div className="doc-footer">
                <div className="stamp">LOGISTY TN</div>
                <div className="sig-line">FOUNDER SIGNATURE</div>
              </div>
            </div>
            <p className="legal-caption">
              Our investment framework utilizes the **Standard YC SAFE**, 
              localized for the Tunisian ecosystem to ensure transparency and speed.
            </p>
          </section>

          {/* RIGHT: ACTIONS & CONTACT */}
          <section className="investor-actions">
            <div className="action-card">
              <h3>INQUIRY HUB</h3>
              <p>Request data rooms, financial projections, or cap table details via our dedicated terminal.</p>
              <a href="mailto:investment@logisty.tn" className="investor-link-btn">
                investment@logisty.tn
              </a>
            </div>

            <div className="action-card yellow-card">
              <h3>FOUNDER MEETING</h3>
              <p>Schedule a 30-minute briefing with the management team via Calendly.</p>
              <a href="https://calendly.com/your-link" target="_blank" rel="noreferrer" className="investor-link-btn black-btn">
                BOOK VIA CALENDLY
              </a>
            </div>

            <div className="investment-bullets">
              <div className="bullet">
                <span className="b-icon">✓</span>
                <div>
                  <strong>Equity Method</strong>
                  <span>Post-Money SAFE (Standard Cap)</span>
                </div>
              </div>
              <div className="bullet">
                <span className="b-icon">✓</span>
                <div>
                  <strong>Jurisdiction</strong>
                  <span>Tunisia (Startup Act Framework)</span>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>
    </main>
  );
};

export default InvestorsPage;