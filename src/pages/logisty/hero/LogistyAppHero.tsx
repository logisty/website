import logistyAppLogo from '@assets/logisty_app.png';
import androidLogo from '@assets/android.png';
import './LogistyAppHero.css';
import type { FC } from 'react';

const LogistyAppHero: FC = () => {

  return (
    <section className="app-hero-section">
      <div className="app-hero-container">
        <div className="hero-grid-balanced">
          
          {/* Left: Refined & Left-Aligned Content */}
          <div className="hero-text-area">
            <div className="hero-badge-row">
              <span className="experimental-tag">Experimental Beta Phase</span>
              <span className="hero-status-tag">v1.0.0</span>
            </div>

            <h1 className="hero-main-title">
              Logisty <span className="title-outline">App</span>
            </h1>

            <p className="hero-description">
              The professional P2P companion for modern shipping. Track, verify, 
              and manage your delivery workflow with industrial-grade tools 
              designed for speed.
            </p>

            <div className="hero-actions">
              <a href="#android-download" className="premium-download-btn">
                <div className="btn-icon">
                  <img src={androidLogo} alt="Android" />
                </div>
                <div className="btn-label">
                  <span className="label-top">Download Direct</span>
                  <span className="label-main">Android APK</span>
                </div>
              </a>
              
              <div className="trust-indicator">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span>Verified & Secure</span>
              </div>
            </div>
          </div>

          {/* Right: Elegant Mockup */}
          <div className="hero-visual-area">
            <div className="device-frame-premium">
              <div className="device-screen">
                <div className="device-notch"></div>
                <div className="screen-content">
                  <img src={logistyAppLogo} alt="Logisty" className="app-float-logo" />
                  <div className="loading-bar-deco"></div>
                </div>
              </div>
              <div className="device-shadow"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LogistyAppHero;