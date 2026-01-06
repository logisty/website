import { useTranslation } from '@hooks/useTranslations';
import { Link } from 'react-router-dom';
import logistyAppLogo from '@assets/logisty_app.png';
import partnerAppLogo from '@assets/logisty-partner.png';
import businessAppLogo from '@assets/logisty-business.png'; 
import './ExplorePlatformSection.css';
import { useAppsStore } from '@store/useAppsStore';
import { useEffect, type FC } from 'react';

const ExplorePlatformSection: FC = () => {
  const { t } = useTranslation();
  const { apps, loading, fetchApps } = useAppsStore();

  useEffect(() => {
    fetchApps();
  }, [fetchApps]);

  const logistyVersion = apps.logisty?.version || '0.0.0';
  const partnerVersion = apps.partner?.version || '0.0.0';
  const businessVersion = apps.business?.version ||'0.0.0';

  return (
    <section id="explore" className="explore-platform-section">
      <div className="explore-container">
        <div className="section-title-container">
          <h2 className="section-title">{t('explorePlatform')}</h2>
          
          <div className="beta-label-experimental">
            <span className="beta-icon-red">✦</span>
            <span className="beta-text-main">EXPERIMENTAL BETA</span>
            <span className="beta-date">EARLY 2026</span>
          </div>
        </div>
        
        <div className="apps-grid">
          {/* Logisty App Card - Updated Link to /logisty-app */}
          <Link to="/logisty-app" className="app-card card-app">
            <div className="card-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </div>
            <img src={logistyAppLogo} alt="Logisty App" className="app-logo-clean" />
            <div className="app-header-text">
              <span className="brand-name">Logisty</span>
              <span className="app-type">App</span>
            </div>
            <span className="version-badge">{loading ? '...' : `v${logistyVersion}`}</span>
            <p className="app-description">{t('logisityAppDescription')}</p>
          </Link>

          {/* Logisty Partner Card */}
          <Link to="/partner-app" className="app-card card-partner">
            <div className="card-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </div>
            <img src={partnerAppLogo} alt="Logisty Partner" className="app-logo-clean" />
            <div className="app-header-text">
              <span className="brand-name">Logisty</span>
              <span className="app-type">Partner</span>
            </div>
            <span className="version-badge">{loading ? '...' : `v${partnerVersion}`}</span>
            <p className="app-description">{t('logisityPartnerDescription')}</p>
          </Link>

          {/* Logisty Business Card */}
          <Link to="/business-app" className="app-card card-business">
            <div className="card-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </div>
            <img src={businessAppLogo} alt="Logisty Business" className="app-logo-clean" />
            <div className="app-header-text">
              <span className="brand-name">Logisty</span>
              <span className="app-type">Business</span>
            </div>
            <span className="version-badge">v{businessVersion}</span>
<p className="app-description">
  {t('logistyBusinessDescription') || 'Professional logistics management and tracking for enterprise clients.'}
</p>          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExplorePlatformSection;