import React from 'react';
import './IntroductionSection.css';
import { Link } from 'react-router-dom';
import { useTranslation } from '@hooks/useTranslations';

// Assets
import appMockup from '@assets/screen_dashboard.png'; 
import googlePlayBadge from '@assets/GetItOnGooglePlay_Badge_Web_color_English.png'; 

const IntroductionSection: React.FC = () => {
  const { t } = useTranslation();
  
  const actionParts = t('introHeadlineAction').split(' ');
  
  // Format first word (Explore) to Sentence case
  const rawExplore = actionParts[0] || '';
  const exploreText = rawExplore.charAt(0).toUpperCase() + rawExplore.slice(1).toLowerCase();

  // Format second word (Logisty) to Sentence case
  const rawLogisty = actionParts[1] || '';
  const logistyText = rawLogisty.charAt(0).toUpperCase() + rawLogisty.slice(1).toLowerCase();

  return (
    <section className="flouci-hero">
      <div className="hero-container">
        
        {/* Left Side: Content */}
        <div className="hero-text-block">
          <div className="beta-badge">
            <span className="dot"></span>
            <span className="label">EXPERIMENTAL BETA — EARLY 2026</span>
          </div>

          <h1 className="hero-title">
            <span className="title-prefix">{t('introHeadlinePrefix')}</span>
            <span className="title-main">
              {/* Force non-uppercase styling for the action word */}
              <span className="action-text-case">{exploreText}</span>
              <span className="word-spacer">&nbsp;</span> 
              <span className="marker-wrapper">
                <span className="brand-name-case">{logistyText}</span>
                <div className="yellow-highlighter"></div>
              </span>
            </span>
          </h1>
          
          <p className="hero-description">
            {t('introDescription')}
          </p>

          <div className="hero-btns-wrapper">
            <Link to="/logisty-app" className="google-play-link">
              <img 
                src={googlePlayBadge} 
                alt="Get it on Google Play" 
                className="official-play-badge" 
              />
            </Link>

            <div className="store-placeholder">
              <svg viewBox="0 0 384 512" className="apple-icon" fill="currentColor">
                <path d="M318.7 268.7c-.2-36.3 15.6-67.1 38.8-81.9-18.1-25.9-46.6-42.3-80-45.1-39.1-3.3-75.1 23.1-94.4 23.1-19.7 0-48.1-22.1-78.7-22.1-40.2 0-77.2 22.1-97.4 56.6-41.1 70.3-10.4 174.4 29.8 231.3 19.8 28.1 42.6 59.4 73 58.2 29.1-1.2 40.5-18.5 75.3-18.5 34.4 0 45.4 18.5 75.6 17.8 31.1-.6 51.1-28.5 70.6-56.5 22.8-32.5 32.1-64.2 32.5-65.9-.6-.2-63.5-24.1-63.5-97.1zM232.1 84.3c17.4-20.6 28.6-49.4 25.4-78.3-25.2 1-55.8 16.5-73.8 37.3-16 18.6-30.1 47.9-26.3 76.2 27.9 2.1 57-14.4 74.7-35.2z"/>
              </svg>
              <div className="placeholder-txt">
                <span className="p-small">COMING SOON</span>
                <span className="p-big">App Store</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: App Mockup Image */}
        <div className="hero-visual">
          <div className="mockup-container">
            <img src={appMockup} alt="Logisty App Dashboard" className="static-mockup" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;