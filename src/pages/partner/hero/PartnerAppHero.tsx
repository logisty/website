import partnerAppScreenshot from '@assets/screen_dashboard.png'; 
import googlePlayBadge from '@assets/GetItOnGooglePlay_Badge_Web_color_English.png'; 
import './PartnerAppHero.css';
import { type FC } from 'react';
import { useTranslation } from '@hooks/useTranslations';

const PartnerAppHero: FC = () => {
  const { t } = useTranslation();

  // Links for the Partner Beta flow
  const googleGroupUrl = "https://groups.google.com/g/your-partner-group-link";
  const googlePlayUrl = "https://play.google.com/store/apps/details?id=your.partner.package";

  return (
    <section className="partner-app-hero">
      <div className="partner-hero-container">
        <div className="partner-grid-balanced">
          
          <div className="partner-text-area">
            <h1 className="partner-main-title">
              Logisty <span className="partner-title-outline">Partner</span>
            </h1>

            <div className="partner-availability-badges">
              <div className="p-badge-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.31-.732V2.546c0-.272.11-.533.31-.732zM14.5 12.707l2.833 2.833L4.444 23.05a1.01 1.01 0 0 0 .528.15c.182 0 .363-.05.524-.15l14.032-8.016L14.5 12.707zm5.087-1.414L15.208 8.46l-2.833 2.833 7.212 2.834a.987.987 0 0 0 .525.15c.182 0 .363-.05.524-.15a.998.998 0 0 0 0-1.728l-.552-.315zM14.5 11.293L19.556.95a1.01 1.01 0 0 0-.528-.15.99.99 0 0 0-.524.15L4.472.966l10.028 10.327z"/>
                </svg>
                <span>Production Coming Soon</span>
              </div>
              <div className="p-badge-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-1.99.77-3.27.82-1.31.05-2.31-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.89 1.22-2.11 1.09-3.33-1.04.04-2.3.7-3.05 1.57-.67.77-1.26 2.03-1.1 3.22 1.18.09 2.33-.57 3.06-1.46z"/>
                </svg>
                <span>iOS Coming Later</span>
              </div>
            </div>

            <p className="partner-description">
              {t("partnerDescription")}
            </p>

            <div className="partner-beta-stepper">
              <div className="p-step-item">
                <div className="p-step-number">1</div>
                <div className="p-step-content">
                  <h3>Join Partner Beta</h3>
                  <p>Access is reserved for verified carriers and drivers.</p>
                  <a href={googleGroupUrl} target="_blank" rel="noreferrer" className="p-step-link partner-pulse">
                    Join Google Group →
                  </a>
                </div>
              </div>

              <div className="p-step-item">
                <div className="p-step-number">2</div>
                <div className="p-step-content">
                  <h3>Download for Android</h3>
                  <a href={googlePlayUrl} target="_blank" rel="noreferrer" className="p-play-store-wrapper">
                    <img src={googlePlayBadge} alt="Get it on Google Play" className="p-google-play-img" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="partner-visual-area">
            <div className="partner-screenshot-wrapper">
               <img src={partnerAppScreenshot} alt="Partner Dashboard" className="partner-main-screenshot" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PartnerAppHero;