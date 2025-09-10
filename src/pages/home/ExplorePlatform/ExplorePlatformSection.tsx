import { useTranslation } from '@hooks/useTranslations';
import androidLogo from '@assets/android.png';
import logistyAppLogo from '@assets/logisty_app.png';
import partnerAppLogo from '@assets/partner_app.png';
import infoIcon from '@assets/info_icon.png';
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

  const logistyDownloadUrl = `https://logisty.github.io/website/downloads/logisty_v${logistyVersion}.apk`;
  const partnerDownloadUrl = `https://logisty.github.io/website/downloads/partner_v${partnerVersion}.apk`;

  return (
    <section id="explore" className="explore-platform-section">
      <h2 className="section-title">{t('explorePlatform')}</h2>
      <div className="section-content">
        <div className="apps-content">

          {/* Logisty App */}
          <div className="app-card">
            <img src={logistyAppLogo} alt="Logisty App Logo" className="app-logo" />
            <h3 className="app-title">{t('logisityAppTitle')}</h3>
            <span className="version-badge">{loading ? '...' : `v${logistyVersion}`}</span>
            <p className="app-description">{t('logisityAppDescription')}</p>
            <a href={logistyDownloadUrl} target="_blank" rel="noopener noreferrer" className="download-badge">
              <img src={androidLogo} alt="Android Logo" className="android-logo" />
              <div className="badge-text-container">
                <span className="badge-text-thin">{t('downloadItOn')}</span>
                <span className="badge-text-bold">{t('android')}</span>
              </div>
            </a>
          </div>

          {/* Partner App */}
          <div className="app-card">
            <img src={partnerAppLogo} alt="Partner App Logo" className="app-logo" />
            <h3 className="app-title">{t('logisityPartnerTitle')}</h3>
            <span className="version-badge">{loading ? '...' : `v${partnerVersion}`}</span>
            <p className="app-description">{t('logisityPartnerDescription')}</p>
            <a href={partnerDownloadUrl} target="_blank" rel="noopener noreferrer" className="download-badge">
              <img src={androidLogo} alt="Android Logo" className="android-logo" />
              <div className="badge-text-container">
                <span className="badge-text-thin">{t('downloadItOn')}</span>
                <span className="badge-text-bold">{t('android')}</span>
              </div>
            </a>
          </div>

        </div>

        {/* How it works */}
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
};

export default ExplorePlatformSection;
