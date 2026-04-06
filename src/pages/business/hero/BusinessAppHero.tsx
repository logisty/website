import businessAppScreenshot from '@assets/business_screenshot.png'; 
import googlePlayBadge from '@assets/GetItOnGooglePlay_Badge_Web_color_English.png'; 
import './BusinessAppHero.css';
import { type FC } from 'react';
import { useTranslation } from '@hooks/useTranslations';

const BusinessAppHero: FC = () => {
  const { t } = useTranslation();

  const googleGroupUrl = "https://groups.google.com/g/logisty-testers";
  const googlePlayUrl = "https://play.google.com/store/apps/details?id=tn.logisty.business";

  return (
    <section className="business-hero-section">
      <div className="hero-max-width">
        <div className="hero-main-grid">
          
          <div className="hero-text-content">
            <header className="hero-header">
              <div className="beta-status">BUSINESS BETA LIVE</div>
              <h1 className="hero-title">
                Logisty <span className="title-stroke">Business</span>
              </h1>
              <p className="hero-subtitle">
                {t("logistyBusinessDescription")}
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
                  <h3>Authorize Merchant</h3>
                  <p>Join the business beta group to manage your store.</p>
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
                  <h3>Download Dashboard</h3>
                  <p>Install the business app from the Play Store.</p>
                  <a href={googlePlayUrl} target="_blank" rel="noreferrer" className="play-store-trigger">
                    <img src={googlePlayBadge} alt="Get it on Google Play" className="play-badge-img" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-visual-content">
            <div className="phone-wrapper">
               <img src={businessAppScreenshot} alt="Logisty Business App" className="phone-asset" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessAppHero;