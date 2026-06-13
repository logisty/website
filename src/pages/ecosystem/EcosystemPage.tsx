import React, { useEffect } from 'react';
import './EcosystemPage.css';
import { useTranslation } from '@hooks/useTranslations'; 

// PNG Assets
import appLogo from '@assets/logisty_app.png';
import businessLogo from '@assets/logisty-business.png';
import partnerLogo from '@assets/logisty-partner.png';
import gcpBadge from '@assets/gcp.png';
import appleBadge from '@assets/apple.png';
import playBadge from '@assets/play-store.png';

const EcosystemPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, []);

  return (
    <main className="eco-minimal-page">
      <div className="eco-dots-bg"></div>
      
      <div className="eco-content-wrap">
        <header className="eco-header-main">
          <div className="eco-tag">{t('eco.header.tag')}</div>
          <h1 className="eco-hero-text">
            {t('eco.header.title_prefix')} <span className="text-highlight">{t('eco.header.title_highlight')}</span> {t('eco.header.title_suffix')}
          </h1>
          <p className="eco-hero-sub">
            {t('eco.header.subtitle')}
          </p>
        </header>

        <div className="eco-stack">
          
          {/* TIER 01 */}
          <div className="eco-row">
            <div className="eco-num">01</div>
            <div className="eco-card">
              <div className="eco-visual">
                <div className="img-duo">
                  <img src={appLogo} alt="App" />
                  <img src={businessLogo} alt="Business" />
                </div>
              </div>
              <div className="eco-info">
                <h2 className="eco-node-name">{t('eco.tier1.title')}</h2>
                <p>{t('eco.tier1.desc')}</p>
                <div className="eco-platforms">
                  <div className="plat-item"><img src={playBadge} alt="Play" /> Google Play</div>
                  <div className="plat-item"><img src={appleBadge} alt="Apple" /> App Store</div>
                </div>
              </div>
              <div className="hover-line"></div>
            </div>
          </div>

          {/* TIER 02 - LOGISTY CORE */}
          <div className="eco-row">
            <div className="eco-num">02</div>
            <div className="eco-card">
              <div className="eco-visual">
                <div className="simple-icon-box gold-bg">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
              </div>
              <div className="eco-info">
                <h2 className="eco-node-name">{t('eco.tier2.title')}</h2>
                <p>{t('eco.tier2.desc')}</p>
                <div className="eco-platforms">
                  <div className="plat-item"><img src={gcpBadge} alt="GCP" /> Google Cloud</div>
                </div>
              </div>
              <div className="hover-line"></div>
            </div>
          </div>

          {/* TIER 03 */}
          <div className="eco-row">
            <div className="eco-num">03</div>
            <div className="eco-card">
              <div className="eco-visual">
                <img src={partnerLogo} alt="Partner" className="single-asset" />
              </div>
              <div className="eco-info">
                <h2 className="eco-node-name">{t('eco.tier3.title')}</h2>
                <p>{t('eco.tier3.desc')}</p>
                <div className="eco-platforms">
                  <div className="plat-item"><img src={playBadge} alt="Play" /> Google Play</div>
                </div>
              </div>
              <div className="hover-line"></div>
            </div>
          </div>

          {/* TIER 04 - OVERSEER */}
          <div className="eco-row">
            <div className="eco-num">04</div>
            <div className="eco-card">
              <div className="eco-visual">
                <div className="simple-icon-box black-bg">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
              </div>
              <div className="eco-info">
                <h2 className="eco-node-name">{t('eco.tier4.title')}</h2>
                <p>{t('eco.tier4.desc')}</p>
                <div className="eco-platforms">
                  <div className="plat-item">{t('eco.tier4.platform')}</div>
                </div>
              </div>
              <div className="hover-line"></div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default EcosystemPage;