import logistyAppLogo from '@assets/logisty_app.png';
import androidLogo from '@assets/android.png';
import './LogistyAppHero.css';
import { useEffect, type FC } from 'react';
import { useTranslation } from '@hooks/useTranslations';
import { useAppsStore } from '@store/useAppsStore';

const LogistyAppHero: FC = () => {
  const { t } = useTranslation();
  const { apps, loading, fetchApps } = useAppsStore();

  useEffect(() => {
    fetchApps();
  }, [fetchApps]);

  // Extract version from the store for the user app
  const logistyVersion = apps.logisty?.version || '0.0.0';

  // Construct the dynamic URL matching your GitHub Pages structure
  const logistyDownloadUrl = `https://logisty.tn/downloads/logisty_v${logistyVersion}.apk`;

  return (
    <section className="app-hero-section">
      <div className="app-hero-container">
        <div className="hero-grid-balanced">
          
          <div className="hero-text-area">
            <div className="hero-badge-row">
              <div className="experimental-tag">
                <span className="hero-status-pulse"></span>
                {t("experimentalBeta")}
              </div>
              <div className="hero-status-tag">
                {loading ? '...' : `v${logistyVersion}`}
              </div>
            </div>

            <h1 className="hero-main-title">
              Logisty <span className="title-outline">App</span>
            </h1>

            <p className="hero-description">
              {t("logistyUserDescription")}
            </p>

            <div className="hero-actions">
              {/* Updated Dynamic Download Link */}
              <a 
                href={logistyDownloadUrl} 
                className="premium-download-btn"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className="btn-icon">
                  <img src={androidLogo} alt="Android" />
                </div>
                <div className="btn-label">
                  <span className="label-top">{t("directDownload")}</span>
                  <span className="label-main">{t("androidApk")}</span>
                </div>
              </a>
              
              <div className="trust-indicator">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span>{t("verifiedSecure")}</span>
              </div>
            </div>
          </div>

          <div className="hero-visual-area">
            <div className="device-frame-premium">
              <div className="device-screen">
                <div className="device-notch"></div>
                <div className="screen-content">
                  <img src={logistyAppLogo} alt="Logisty" className="app-float-logo" />
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