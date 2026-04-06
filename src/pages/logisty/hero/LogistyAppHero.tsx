import logistyAppScreenshot from '@assets/screen_dashboard.png'; 
import googlePlayBadge from '@assets/GetItOnGooglePlay_Badge_Web_color_English.png'; 
import './LogistyAppHero.css';
import { type FC } from 'react';
import { useTranslation } from '@hooks/useTranslations';

const LogistyAppHero: FC = () => {
  const { t } = useTranslation();

  const googleGroupUrl = "https://groups.google.com/g/logisty-testers";
  const googlePlayUrl = "https://play.google.com/store/apps/details?id=tn.logisty.app";

  return (
    <section className="app-hero-section">
      <div className="hero-max-width">
        <div className="hero-main-grid">
          
          <div className="hero-text-content">
            <header className="hero-header">
              <div className="beta-status">PRODUCTION BETA LIVE</div>
              <h1 className="hero-title">
                Logisty <span className="title-stroke">App</span>
              </h1>
              <p className="hero-subtitle">
                {t("logistyUserDescription")}
              </p>
            </header>

            <div className="onboarding-flow">
              {/* STEP 1 */}
              <div className="flow-item">
                <div className="flow-path-container">
                  <div className="flow-dot">1</div>
                  <div className="flow-line"></div>
                </div>
                <div className="flow-body">
                  <h3>Authorize Account</h3>
                  <p>Join our Google Group to unlock beta access.</p>
                  <a href={googleGroupUrl} target="_blank" rel="noreferrer" className="brutal-btn">
                    JOIN GROUP →
                  </a>
                </div>
              </div>

              {/* STEP 2 */}
              <div className="flow-item">
                <div className="flow-path-container">
                  <div className="flow-dot">2</div>
                </div>
                <div className="flow-body">
                  <h3>Download App</h3>
                  <p>Install Logisty from the Play Store.</p>
                  <a href={googlePlayUrl} target="_blank" rel="noreferrer" className="play-store-trigger">
                    <img src={googlePlayBadge} alt="Get it on Google Play" className="play-badge-img" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-visual-content">
            <div className="phone-wrapper">
               <img src={logistyAppScreenshot} alt="Logisty App" className="phone-asset" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LogistyAppHero;