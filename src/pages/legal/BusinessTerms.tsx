import React from 'react';
import { useTranslation } from '@hooks/useTranslations';
import './LegalPage.css';

const BusinessTerms: React.FC = () => {
  const { t, isRtl } = useTranslation();

  return (
    <div className={`legal-page ${isRtl ? 'rtl-mode' : ''}`}>
      <div className="legal-container">
        <header className="legal-header">
          <h1>{t('businessTermsTitle')}</h1>
          <p className="last-updated">{t('lastUpdatedDate')}</p>
        </header>

        <div className="legal-warning">
          <p><strong>{t('important')}:</strong> {t('businessTermsWarning')}</p>
        </div>

        <article className="legal-section">
          <h2>1. {t('platformNatureTitle')}</h2>
          <div className="section-content">
            <p><strong>1.1 {t('theHub')}:</strong> {t('theHubDesc')}</p>
            <p><strong>1.2 {t('freeListing')}:</strong> {t('freeListingDesc')}</p>
            <p><strong>1.3 {t('logisticsInteg')}:</strong> {t('logisticsIntegDesc')}</p>
          </div>
        </article>

        <article className="legal-section">
          <h2>2. {t('eligibilityTitle')}</h2>
          <div className="section-content">
            <p><strong>2.1 {t('taxId')}:</strong> {t('taxIdDesc')}</p>
            <p><strong>2.2 {t('prohibitedItems')}:</strong> {t('prohibitedDesc')}</p>
            <p><strong>2.3 {t('productResp')}:</strong> {t('productRespDesc')}</p>
          </div>
        </article>

        <article className="legal-section">
          <h2>3. {t('orderMgmtTitle')}</h2>
          <div className="section-content">
            <p><strong>3.1 {t('orderAccuracy')}:</strong> {t('orderAccuracyDesc')}</p>
            <p><strong>3.2 {t('theHandover')}:</strong> {t('theHandoverDesc')}</p>
          </div>
        </article>

        <article className="legal-section">
          <h2>4. {t('financialTitle')}</h2>
          <div className="section-content">
            <p><strong>4.1 {t('settlement')}:</strong> {t('settlementDesc')}</p>
          </div>
        </article>

        <article className="legal-section">
          <h2>5. {t('safetyTitle')}</h2>
          <div className="section-content">
            <p><strong>5.1 {t('packaging')}:</strong> {t('packagingDesc')}</p>
          </div>
        </article>

        <article className="legal-section">
          <h2>6. {t('businessBanTitle')}</h2>
          <div className="section-content">
            <p><strong>6.1 {t('compliance')}:</strong> {t('complianceDesc')}</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BusinessTerms;