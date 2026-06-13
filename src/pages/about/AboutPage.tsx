import React, { useEffect } from 'react';
import './AboutPage.css';
import tnFlag from '@assets/flags/tn.png'; 
import logo from '@assets/logisty-full-logo.png'; 
import { useTranslation } from '@hooks/useTranslations';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, []);

  return (
    <main className="about-page">
      <div className="about-master-grid">
        
        {/* LEFT PANEL: IDENTITY + METADATA */}
        <section className="brand-panel">
          <div className="sticky-content">
            <img src={logo} alt="Logisty" className="about-main-logo" />
            
            <div className="badge-row">
              <div className="origin-pill">
                <span>{t('about.brand.made_in')}</span>
                <img src={tnFlag} alt="TN" />
                <span>{t('about.brand.country')}</span>
              </div>
              <div className="status-pill">{t('about.brand.status')}</div>
            </div>

            <div className="brand-metadata">
              <div className="meta-item">
                <span className="meta-label">{t('about.brand.meta.location_label')}</span>
                <span className="meta-val">{t('about.brand.meta.location_val')}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">{t('about.brand.meta.phase_label')}</span>
                <span className="meta-val">{t('about.brand.meta.phase_val')}</span>
              </div>
            </div>

            <div className="panel-footer">
              <p>© 2026 Logisty</p>
            </div>
          </div>
        </section>

        {/* RIGHT PANEL: CONTENT */}
        <section className="content-panel">
          <div className="content-block">
            <h1 className="main-heading">
              {t('about.content.heading_prefix')} <span className="highlight">{t('about.content.heading_highlight')}</span> {t('about.content.heading_suffix')}
            </h1>
            <p className="lead-text">
              {t('about.content.lead_text')}
            </p>
          </div>

          <div className="feature-grid">
            {/* 01. INNOVATION - Purple */}
            <div className="f-box purple">
              <span className="box-emoji">💡</span>
              <h3>{t('about.features.innovation.title')}</h3>
              <p>{t('about.features.innovation.desc')}</p>
            </div>
            {/* 02. TRUST - Blue */}
            <div className="f-box blue">
              <span className="box-emoji">🛡️</span>
              <h3>{t('about.features.trust.title')}</h3>
              <p>{t('about.features.trust.desc')}</p>
            </div>
          </div>

          <div className="manifesto-section">
            <h2>{t('about.manifesto.title')}</h2>
            <p>
              {t('about.manifesto.paragraph_1')}
            </p>
            <p className="sub-p">
              {t('about.manifesto.paragraph_2')}
            </p>
          </div>
        </section>

      </div>
    </main>
  );
};

export default AboutPage;