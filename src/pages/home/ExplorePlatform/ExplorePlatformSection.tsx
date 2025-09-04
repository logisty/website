import './ExplorePlatformSection.css';
import { useTranslation } from '@hooks/useTranslations';
import androidLogo from '@assets/android.png';
import logisityAppLogo from '@assets/logisty_app.png';
import partnerAppLogo from '@assets/partner_app.png';
import infoIcon from '@assets/info_icon.png';

export default function ExplorePlatformSection() {
  const { t } = useTranslation();

  return (
    <section className="explore-platform-section">
      <h2 className="section-title">{t('explorePlatform')}</h2>
      <div className="section-content">
        <div className="apps-content">
          <div className="app-card">
            <img src={logisityAppLogo} alt="Logisity App Logo" className="app-logo" />
            <h3 className="app-title">{t('logisityAppTitle')}</h3>
            <p className="app-description">{t('logisityAppDescription')}</p>
            <div className="download-badge">
              <img src={androidLogo} alt="Android Logo" className="android-logo" />
              <div className="badge-text-container">
                <span className="badge-text-thin">{t('downloadItOn')}</span>
                <span className="badge-text-bold">{t('android')}</span>
              </div>
            </div>
          </div>
          <div className="app-card">
            <img src={partnerAppLogo} alt="Logisity Partner Logo" className="app-logo" />
            <h3 className="app-title">{t('logisityPartnerTitle')}</h3>
            <p className="app-description">{t('logisityPartnerDescription')}</p>
            <div className="download-badge">
              <img src={androidLogo} alt="Android Logo" className="android-logo" />
              <div className="badge-text-container">
                <span className="badge-text-thin">{t('downloadItOn')}</span>
                <span className="badge-text-bold">{t('android')}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="how-it-works">
          <img src={infoIcon} alt="Info Icon" className="info-icon" />
          <h3 className="how-it-works-title">{t('howItWorks')}</h3>
          <ol className="how-it-works-list">
            <li>{t('step1')}</li>
            <li>{t('step2')}</li>
            <li>{t('step3')}</li>
          </ol>
        </div>
      </div>
    </section>
  );
}