import React, { useEffect } from 'react';
import './EcosystemPage.css';

// PNG Assets
import appLogo from '@assets/logisty_app.png';
import businessLogo from '@assets/logisty-business.png';
import partnerLogo from '@assets/logisty-partner.png';
import gcpBadge from '@assets/gcp.png';
import appleBadge from '@assets/apple.png';
import playBadge from '@assets/play-store.png';

const EcosystemPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="eco-minimal-page">
      <div className="eco-dots-bg"></div>
      
      <div className="eco-content-wrap">
        <header className="eco-header-main">
          <div className="eco-tag">Ecosystem</div>
          <h1 className="eco-hero-text">
            A synchronized <span className="text-highlight">logistics</span> network.
          </h1>
          <p className="eco-hero-sub">
            The infrastructure connecting Tunisian commerce through four specialized layers.
          </p>
        </header>

        <div className="eco-stack">
          
          {/* TIER 01 */}
          <div className="eco-row">
            <div className="eco-num">01</div>
            <div className="eco-card">
              <div className="eco-visual">
                <div className="img-duo">
                  <img src={appLogo} alt="App" />
                  <img src={businessLogo} alt="Business" />
                </div>
              </div>
              <div className="eco-info">
                <h2 className="eco-node-name">Logisty app & business</h2>
                <p>Demand gateway for individuals and high-volume merchants.</p>
                <div className="eco-platforms">
                  <div className="plat-item"><img src={playBadge} alt="Play" /> Google Play</div>
                  <div className="plat-item"><img src={appleBadge} alt="Apple" /> App Store</div>
                </div>
              </div>
              <div className="hover-line"></div>
            </div>
          </div>

          {/* TIER 02 - LOGISTY CORE */}
          <div className="eco-row">
            <div className="eco-num">02</div>
            <div className="eco-card">
              <div className="eco-visual">
                <div className="simple-icon-box gold-bg">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
              </div>
              <div className="eco-info">
                <h2 className="eco-node-name">Logisty core</h2>
                <p>The central matching engine hosted on Google Cloud.</p>
                <div className="eco-platforms">
                  <div className="plat-item"><img src={gcpBadge} alt="GCP" /> Google Cloud</div>
                </div>
              </div>
              <div className="hover-line"></div>
            </div>
          </div>

          {/* TIER 03 */}
          <div className="eco-row">
            <div className="eco-num">03</div>
            <div className="eco-card">
              <div className="eco-visual">
                <img src={partnerLogo} alt="Partner" className="single-asset" />
              </div>
              <div className="eco-info">
                <h2 className="eco-node-name">Logisty partner</h2>
                <p>OS for the verified fleet with real-time geo-tracking.</p>
                <div className="eco-platforms">
                  <div className="plat-item"><img src={playBadge} alt="Play" /> Google Play</div>
                </div>
              </div>
              <div className="hover-line"></div>
            </div>
          </div>

          {/* TIER 04 - OVERSEER */}
          <div className="eco-row">
            <div className="eco-num">04</div>
            <div className="eco-card">
              <div className="eco-visual">
                <div className="simple-icon-box black-bg">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
              </div>
              <div className="eco-info">
                <h2 className="eco-node-name">Overseer</h2>
                <p>Administrative terminal for security and network health.</p>
                <div className="eco-platforms">
                  <div className="plat-item">Web Terminal</div>
                </div>
              </div>
              <div className="hover-line"></div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default EcosystemPage;