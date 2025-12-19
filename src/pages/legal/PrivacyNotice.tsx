import React from 'react';
import { useTranslation } from '@hooks/useTranslations';
import './LegalPage.css';

const PrivacyNotice: React.FC = () => {
  // Pulling t and isRtl from the optimized hook
  const { t, isRtl } = useTranslation();

  return (
    <div className={`legal-page ${isRtl ? 'rtl-mode' : ''}`}>
      <div className="legal-container">
        <header className="legal-header">
          <h1>{t('privacyTitle')}</h1>
          <p className="last-updated">{t('lastUpdated')}</p>
          <p className="legal-subtext">{t('tunisianLawCompliance')}</p>
        </header>

        <div className="legal-warning">
          <p>{t('privacyWarning')}</p>
        </div>

        <article className="legal-section">
          <h2>{t('dataController')}</h2>
          <div className="section-content">
            <p>{t('dataControllerDesc')}</p>
          </div>
        </article>

        <article className="legal-section">
          <h2>{t('dataWeCollect')}</h2>
          <div className="section-content">
            <p>{t('dataWeCollectDesc')}</p>
            <ul>
              <li>{t('identData')}</li>
              <li>{t('contactData')}</li>
              <li>{t('locationData')}</li>
              <li>{t('transactData')}</li>
            </ul>
          </div>
        </article>

        <article className="legal-section">
          <h2>{t('purposeTitle')}</h2>
          <div className="section-content">
            <p>{t('purposeOfProcessingDesc')}</p>
          </div>
        </article>

        <article className="legal-section">
          <h2>{t('recipientsTitle')}</h2>
          <div className="section-content">
            <p>{t('dataRecipientsDesc')}</p>
          </div>
        </article>

        <article className="legal-section">
          <h2>{t('storageTitle')}</h2>
          <div className="section-content">
             <p>{t('storageAndSecurityDesc')}</p>
          </div>
        </article>

        <article className="legal-section">
          <h2>{t('rightsTitle')}</h2>
          <div className="section-content">
            <p>{t('yourRightsDesc')}</p>
          </div>
        </article>

        <article className="legal-section">
          <h2>{t('consentTitle')}</h2>
          <div className="section-content">
            <p>{t('consentDesc')}</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PrivacyNotice;