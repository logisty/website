import React, { useEffect } from 'react';
import './BackersPage.css';
import logo from '@assets/logo.png';

const BackersPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const backers = [
    { name: "Sami Ben Hassine", role: "Early Adopter" },
    { name: "Fatma Mansour", role: "Logistics Advisor" },
    { name: "The Bizerte Innovation Lab", role: "Foundational Supporter" },
    { name: "Yassine Kallel", role: "Beta Tester" },
    { name: "Zied Aloui", role: "Individual Backer" },
  ];

  return (
    <main className="backers-page">
      {/* Subtle backer text pattern in the background */}
      <div className="backers-watermark-bg">
        SAMI BEN HASSINE FATMA MANSOUR THE BIZERTE INNOVATION LAB YASSINE KALLEL ZIED ALOUI 
        SAMI BEN HASSINE FATMA MANSOUR THE BIZERTE INNOVATION LAB YASSINE KALLEL ZIED ALOUI
        SAMI BEN HASSINE FATMA MANSOUR THE BIZERTE INNOVATION LAB YASSINE KALLEL ZIED ALOUI
      </div>

      <div className="backers-container">
        
        {/* HEADER SECTION */}
        <header className="backers-header">
          <div className="header-label">COMMUNITY SUPPORT</div>
          <h1 className="backers-title">Early <span className="text-highlight">Backers</span></h1>
          <p className="backers-subtitle">
            The laboratory experiment is made possible by those who believe in 
            modernizing Tunisian trade from day zero.
          </p>
        </header>

        <div className="backers-main-grid">
          
          {/* LEFT: THE FOUNDER CARD ILLUSTRATION */}
          <section className="card-promo-section">
            <div className="founder-card">
              {/* Amazon Signature: Full logo watermark in the background */}
              <img src={logo} alt="" className="card-bg-watermark" />
              
              <div className="card-top">
                <img src={logo} alt="Logisty" className="card-mini-logo" />
                <span className="card-edition">EARLY ACCESS</span>
              </div>
              
              <div className="card-middle">
                <div className="card-label">FOUNDER CARD</div>
                <div className="card-value">50 DT</div>
              </div>
              
              <div className="card-bottom">
                <span className="card-serial">LOG-BETA-2026</span>
                <span className="card-credit">FUTURE APP CREDIT</span>
              </div>
              <div className="card-shimmer"></div>
            </div>
            
            <div className="promo-details">
              <h3>Secure your status.</h3>
              <p>Purchase the **50 DT Founder Card** today. Get immediate recognition on this page and 50 DT pre-loaded credit when the official app launches.</p>
              <div className="promo-actions">
                <a href="mailto:sales@logisty.tn" className="backer-btn-primary">
                  INQUIRE VIA SALES@LOGISTY.TN
                </a>
              </div>
            </div>
          </section>

          {/* RIGHT: THE WALL OF NAMES */}
          <section className="backers-list-section">
            <h2 className="list-title">The Honor Roll</h2>
            <div className="names-grid">
              {backers.map((backer, index) => (
                <div key={index} className="backer-item">
                  <span className="backer-name">{backer.name}</span>
                  <span className="backer-role">{backer.role}</span>
                </div>
              ))}
              {/* Dynamic Placeholder for the next person */}
              <div className="backer-item placeholder">
                <span className="backer-name">Your Name Here?</span>
                <span className="backer-role">Become a Backer</span>
              </div>
            </div>
          </section>
        </div>

      </div>
    </main>
  );
};

export default BackersPage;