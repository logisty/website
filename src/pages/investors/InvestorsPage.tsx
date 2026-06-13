import React, { useEffect } from 'react';
import './InvestorsPage.css';
import logo from '@assets/logisty-full-logo.png';
import { useTranslation } from '@hooks/useTranslations'; 

const InvestorsPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, []);

  return (
    <main className="investors-page">
      <div className="investors-container">
        
        {/* HEADER SECTION */}
        <header className="investors-header">
          <div className="header-top-bar">
            <span>{t('investors.registry')}</span>
            <span>{t('investors.funding_status')}</span>
          </div>
          <img src={logo} alt="Logisty" className="investors-logo" />
          <h1 className="investors-title">{t('investors.title')}</h1>
          <p className="investors-subtitle">
            {t('investors.subtitle')}
          </p>
        </header>

        <div className="investors-grid">
          
          {/* LEFT: THE SAFE AGREEMENT ILLUSTRATION */}
          <section className="legal-visual-section">
            <div className="safe-document">
              <div className="doc-header">
                <span className="doc-label">{t('investors.safe.yc_standard')}</span>
                <span className="doc-type">{t('investors.safe.type')}</span>
              </div>
              <div className="doc-title">{t('investors.safe.title')}</div>
              <div className="doc-lines">
                <div className="line long"></div>
                <div className="line med"></div>
                <div className="line short"></div>
                <div className="line long"></div>
                <div className="line med"></div>
                <div className="line short"></div>
              </div>
              <div className="doc-footer">
                <div className="stamp">LOGISTY TN</div>
                <div className="sig-line">{t('investors.safe.signature')}</div>
              </div>
            </div>
            <p className="legal-caption">
              {t('investors.safe.caption')}
            </p>
          </section>

          {/* RIGHT: ACTIONS & CONTACT */}
          <section className="investor-actions">
            <div className="action-card">
              <h3>{t('investors.hub.title')}</h3>
              <p>{t('investors.hub.description')}</p>
              <a href="mailto:investment@logisty.tn" className="investor-link-btn">
                investment@logisty.tn
              </a>
            </div>

            <div className="action-card yellow-card">
              <h3>{t('investors.meeting.title')}</h3>
              <p>{t('investors.meeting.description')}</p>
              <a href="https://calendly.com/nasserallah-hourichi-logisty/30min" target="_blank" rel="noreferrer" className="investor-link-btn black-btn">
                {t('investors.meeting.btn')}
              </a>
            </div>

            <div className="investment-bullets">
              <div className="bullet">
                <span className="b-icon">✓</span>
                <div>
                  <strong>{t('investors.bullets.equity.title')}</strong>
                  <span>{t('investors.bullets.equity.desc')}</span>
                </div>
              </div>
              <div className="bullet">
                <span className="b-icon">✓</span>
                <div>
                  <strong>{t('investors.bullets.jurisdiction.title')}</strong>
                  <span>{t('investors.bullets.jurisdiction.desc')}</span>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>
    </main>
  );
};

export default InvestorsPage;