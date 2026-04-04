import React, { useEffect } from 'react';
import './AboutPage.css';
import tnFlag from '@assets/flags/tn.png'; 
import logo from '@assets/logisty-full-logo.png'; 

const AboutPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="about-page">
      <div className="about-master-grid">
        
        {/* LEFT PANEL: IDENTITY + METADATA */}
        <section className="brand-panel">
          <div className="sticky-content">
            <img src={logo} alt="Logisty" className="about-main-logo" />
            
            <div className="badge-row">
              <div className="origin-pill">
                <span>MADE IN</span>
                <img src={tnFlag} alt="TN" />
                <span>TUNISIA</span>
              </div>
              <div className="status-pill">PRE-INCORPORATED</div>
            </div>

            {/* NEW: METADATA BLOCK UNDER LOGO */}
            <div className="brand-metadata">
              <div className="meta-item">
                <span className="meta-label">LOCATION</span>
                <span className="meta-val">Tunis, TN</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">PHASE</span>
                <span className="meta-val">Experimental Beta</span>
              </div>
            </div>

            <div className="panel-footer">
              <p>© 2026 Logisty</p>
            </div>
          </div>
        </section>

        {/* RIGHT PANEL: CONTENT */}
        <section className="content-panel">
          <div className="content-block">
            <h1 className="main-heading">FACILITATING THE <span className="highlight">FUTURE</span> OF TUNISIAN LOGISTICS.</h1>
            <p className="lead-text">
              Logisty is a tech startup designed to introduce innovation and trust to the economy, 
              facilitating and accelerating logistics in Tunisia and beyond.
            </p>
          </div>

          <div className="feature-grid">
            <div className="f-box yellow">
              <h3>01. INNOVATION</h3>
              <p>We replace paper-based friction with real-time digital intelligence and automated workflows.</p>
            </div>
            <div className="f-box black">
              <h3>02. TRUST</h3>
              <p>Built-in encryption and verified partner protocols ensure every handover is secure and documented.</p>
            </div>
          </div>

          <div className="manifesto-section">
            <h2>OUR MISSION</h2>
            <p>
              Logistics is the backbone of any economy. In Tunisia, we are building the digital 
              connective tissue that allows businesses to scale without the traditional 
              bottlenecks of delivery uncertainty. 
            </p>
            <p className="sub-p">
              By leveraging AI-driven routing and a transparent ledger system, we provide 
              infrastructure that is as reliable as it is fast.
            </p>
          </div>
          {/* Bottom utility-footer removed to keep it clean */}
        </section>

      </div>
    </main>
  );
};

export default AboutPage;