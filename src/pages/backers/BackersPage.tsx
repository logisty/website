import React, { useEffect } from 'react';
import './BackersPage.css';
import logo from '@assets/logo.png';
import { useTranslation } from '@hooks/useTranslations';

const BackersPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, []);

  const backers = [
    { name: "Sami Ben Hassine", roleKey: "backers.roles.early_adopter" },
    { name: "Fatma Mansour", roleKey: "backers.roles.logistics_advisor" },
    { name: "The Bizerte Innovation Lab", roleKey: "backers.roles.foundational_supporter" },
    { name: "Yassine Kallel", roleKey: "backers.roles.beta_tester" },
    { name: "Zied Aloui", roleKey: "backers.roles.individual_backer" },
  ];

  return (
    <main className="backers-page">
      {/* Subtle backer text pattern in the background */}
      <div className="backers-watermark-bg">
        SAMI BEN HASSINE FATMA MANSOUR THE BIZERTE INNOVATION LAB YASSINE KALLEL ZIED ALOUI 
        SAMI BEN HASSINE FATMA MANSOUR THE BIZERTE INNOVATION LAB YASSINE KALLEL ZIED ALOUI
        SAMI BEN HASSINE FATMA MANSOUR THE BIZERTE INNOVATION LAB YASSINE KALLEL ZIED ALOUI
      </div>

      <div className="backers-container">
        
        {/* HEADER SECTION */}
        <header className="backers-header">
          <div className="header-label">{t('backers.header_label')}</div>
          <h1 className="backers-title">
            {t('backers.title_prefix')} <span className="text-highlight">{t('backers.title_highlight')}</span>
          </h1>
          <p className="backers-subtitle">
            {t('backers.subtitle')}
          </p>
        </header>

        <div className="backers-main-grid">
          
          {/* LEFT: THE FOUNDER CARD ILLUSTRATION */}
          <section className="card-promo-section">
            <div className="founder-card">
              {/* Full logo watermark in the background */}
              <img src={logo} alt="" className="card-bg-watermark" />
              
              <div className="card-top">
                <img src={logo} alt="Logisty" className="card-mini-logo" />
                <span className="card-edition">{t('backers.card.edition')}</span>
              </div>
              
              <div className="card-middle">
                <div className="card-label">{t('backers.card.label')}</div>
                <div className="card-value">{t('backers.card.value')}</div>
              </div>
              
              <div className="card-bottom">
                <span className="card-serial">LOG-BETA-2026</span>
                <span className="card-credit">{t('backers.card.credit')}</span>
              </div>
              <div className="card-shimmer"></div>
            </div>
            
            <div className="promo-details">
              <h3>{t('backers.promo.title')}</h3>
              <p>{t('backers.promo.description')}</p>
              <div className="promo-actions">
                <a href="mailto:sales@logisty.tn" className="backer-btn-primary">
                  {t('backers.promo.btn')}
                </a>
              </div>
            </div>
          </section>

          {/* RIGHT: THE WALL OF NAMES */}
          <section className="backers-list-section">
            <h2 className="list-title">{t('backers.list_title')}</h2>
            <div className="names-grid">
              {backers.map((backer, index) => (
                <div key={index} className="backer-item">
                  <span className="backer-name">{backer.name}</span>
                  <span className="backer-role">{t(backer.roleKey)}</span>
                </div>
              ))}
              {/* Dynamic Placeholder for the next person */}
              <div className="backer-item placeholder">
                <span className="backer-name">{t('backers.placeholder.name')}</span>
                <span className="backer-role">{t('backers.placeholder.role')}</span>
              </div>
            </div>
          </section>
        </div>

      </div>
    </main>
  );
};

export default BackersPage;