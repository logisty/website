import partnerAppLogo from '@assets/logisty-partner.png'; 
import androidLogo from '@assets/android.png';
import './PartnerAppHero.css';
import { useEffect, type FC } from 'react';
import { useTranslation } from '@hooks/useTranslations';
import { useAppsStore } from '@store/useAppsStore';

const PartnerAppHero: FC = () => {
  const { t } = useTranslation();
  const { apps, loading, fetchApps } = useAppsStore();

  useEffect(() => {
    fetchApps();
  }, [fetchApps]);

  // Extract version from the store
  const partnerVersion = apps.partner?.version || '0.0.0';

  // Construct the dynamic URL based on your specified GitHub Pages structure
  const partnerDownloadUrl = `http://logisty.tn/downloads/partner_v${partnerVersion}.apk`;

  return (
    <section className="partner-app-hero">
      <div className="partner-hero-container">
        <div className="partner-grid-balanced">
          
          {/* Left: Driver & Transporter Content */}
          <div className="partner-text-area">
            <div className="partner-status-row">
              <div className="experimental-beta-tag">
                <span className="status-pulse"></span>
                {t("experimentalBeta")}
              </div>
              <div className="partner-version-pill">
                {loading ? '...' : `v${partnerVersion}`}
              </div>
            </div>

            <h1 className="partner-main-title">
              Logisty <span className="partner-title-outline">Partner</span>
            </h1>

            <p className="partner-description">
              {t("partnerDescription")}
            </p>

            <div className="partner-actions">
              {/* Dynamic Download Link */}
              <a 
                href={partnerDownloadUrl} 
                className="partner-download-btn"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className="btn-icon">
                  <img src={androidLogo} alt="Android" />
                </div>
                <div className="btn-label">
                  <span className="label-top">{t("carrierEdition")}</span>
                  <span className="label-main">{t("partnerApk")}</span>
                </div>
              </a>
              
              <div className="vrp-status-indicator">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2v20M2 12h20M12 2l4 4M12 22l-4-4M2 12l4 4M22 12l-4-4" />
                </svg>
                <span>{t("vrpRoutingActive")}</span>
              </div>
            </div>
          </div>

          {/* Right: Driver Interface Visual */}
          <div className="partner-visual-area">
            <div className="partner-device-frame">
              <div className="partner-device-screen">
                <div className="partner-device-notch"></div>
                <div className="partner-screen-content">
                  <img src={partnerAppLogo} alt="Partner App" className="partner-float-logo" />
                  <div className="routing-line-deco"></div>
                </div>
              </div>
              <div className="partner-device-shadow"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PartnerAppHero;