import React from 'react';
import { useTranslation } from '@hooks/useTranslations';
import './LegalPage.css';

const ClientTerms: React.FC = () => {
  // We extract isRtl directly from the updated hook
  const { t, isRtl } = useTranslation();

  return (
    /* The hook handles the global <html> dir, but we keep the class 
       for specific CSS overrides if needed */
    <div className={`legal-page ${isRtl ? 'rtl-mode' : ''}`}>
      <div className="legal-container">
        <header className="legal-header">
          <h1>{t('clientTermsTitle')}</h1>
          <p className="last-updated">{t('lastUpdatedDate')}</p>
        </header>

        <div className="legal-warning">
          <p><strong>{t('important')}:</strong> {t('clientTermsWarning')}</p>
        </div>

        {/* Section 1 */}
        <article className="legal-section">
          <h2>{t('betaServiceTitle')}</h2>
          <div className="section-content">
            <p><strong>1.1 {t('experimentalNature')}:</strong> {t('experimentalNatureDesc')}</p>
            <p><strong>1.2 {t('preIncStatus')}:</strong> {t('preIncStatusDesc')}</p>
          </div>
        </article>

        {/* Section 2 */}
        <article className="legal-section">
          <h2>{t('roleOfLogistyTitle')}</h2>
          <div className="section-content">
            <p><strong>2.1 {t('platformOnly')}:</strong> {t('platformOnlyDesc')}</p>
            <p><strong>2.2 {t('noCarrier')}:</strong> {t('noCarrierDesc')}</p>
            <p><strong>2.3 {t('indContractors')}:</strong> {t('indContractorsDesc')}</p>
          </div>
        </article>

        {/* Section 3 */}
        <article className="legal-section">
          <h2>{t('accountsPrivacyTitle')}</h2>
          <div className="section-content">
            <p><strong>3.1 {t('googleSignIn')}:</strong> {t('googleSignInDesc')}</p>
            <p><strong>3.2 {t('dataAccuracy')}:</strong> {t('dataAccuracyDesc')}</p>
          </div>
        </article>

        {/* Section 4 */}
        <article className="legal-section">
          <h2>{t('prohibitedItemsTitle')}</h2>
          <div className="section-content">
            <p>{t('prohibitedItemsDesc')}</p>
            <ul>
              <li>{t('itemDrugs')}</li>
              <li>{t('itemWeapons')}</li>
              <li>{t('itemHazmat')}</li>
              <li>{t('itemCash')}</li>
              <li>{t('itemAnimals')}</li>
              <li>{t('itemLaw')}</li>
            </ul>
            <p>{t('refusalRight')}</p>
          </div>
        </article>

        {/* Section 5 */}
        <article className="legal-section">
          <h2>{t('opsQrTitle')}</h2>
          <div className="section-content">
            <p><strong>5.1 {t('pickupQr')}:</strong> {t('pickupQrDesc')}</p>
            <p><strong>5.2 {t('deliveryQr')}:</strong> {t('deliveryQrDesc')}</p>
            <p><strong>5.3 {t('liabilityTransfer')}:</strong> {t('liabilityTransferDesc')}</p>
          </div>
        </article>

        {/* Section 6 */}
        <article className="legal-section">
          <h2>{t('paymentTermsTitle')}</h2>
          <div className="section-content">
            <p><strong>6.1 {t('codTitle')}:</strong> {t('codDesc')}</p>
            <p><strong>6.2 {t('pricingTitle')}:</strong> {t('pricingDesc')}</p>
            <p><strong>6.3 {t('refusalPaymentTitle')}:</strong> {t('refusalPaymentDesc')}</p>
          </div>
        </article>

        {/* Section 7 */}
        <article className="legal-section">
          <h2>{t('limitationLiabilityTitle')}</h2>
          <div className="section-content">
            <p><strong>7.1 {t('asIsTitle')}:</strong> {t('asIsDesc')}</p>
            <p><strong>7.2 {t('damageLossTitle')}:</strong> {t('damageLossDesc')}</p>
          </div>
        </article>

        {/* Section 8 */}
        <article className="legal-section">
          <h2>{t('userConductTitle')}</h2>
          <div className="section-content">
            <p><strong>8.1 {t('abuseTitle')}:</strong> {t('abuseDesc')}</p>
            <p><strong>8.2 {t('bypassingTitle')}:</strong> {t('bypassingDesc')}</p>
          </div>
        </article>

        {/* Section 9 */}
        <article className="legal-section">
          <h2>{t('govLawTitle')}</h2>
          <div className="section-content">
            <p>{t('govLawDesc')}</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ClientTerms;