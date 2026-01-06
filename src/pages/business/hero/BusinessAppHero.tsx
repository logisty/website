import businessAppLogo from '@assets/logisty-business.png'; 
import androidLogo from '@assets/android.png';
import './BusinessAppHero.css';
import type { FC } from 'react';
import { useTranslation } from '@hooks/useTranslations';

const BusinessAppHero: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="business-app-hero">
      <div className="business-hero-container">
        <div className="business-grid-balanced">
          
          {/* Left: Merchant & Store Owner Content */}
          <div className="business-text-area">
            <div className="business-status-row">
              <div className="business-beta-tag">
                <span className="business-status-pulse"></span>
                {t("merchantBetaAccess")}
              </div>
              <div className="business-version-pill">v1.0.4-terminal</div>
            </div>

            <h1 className="business-main-title">
              Logisty <span className="business-title-outline">Business</span>
            </h1>

            <p className="business-description">
              {t("logistyBusinessDescription")}
            </p>

            <div className="business-actions">
              <a href="#business-download" className="business-download-btn">
                <div className="btn-icon">
                  <img src={androidLogo} alt="Android" />
                </div>
                <div className="btn-label">
                  <span className="label-top">{t("merchantEdition")}</span>
                  <span className="label-main">{t("businessApk")}</span>
                </div>
              </a>
              
              <div className="visibility-status-indicator">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span>{t("storeVisibilityActive")}</span>
              </div>
            </div>
          </div>

          {/* Right: Business Interface Visual */}
          <div className="business-visual-area">
            <div className="business-device-frame">
              <div className="business-device-screen">
                <div className="business-device-notch"></div>
                <div className="business-screen-content">
                  <img src={businessAppLogo} alt="Business App" className="business-float-logo" />
                  <div className="merchant-grid-deco"></div>
                </div>
              </div>
              <div className="business-device-shadow"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessAppHero;