import React from 'react';
import { useTranslation } from '@hooks/useTranslations';
import './LegalPage.css';

const PartnerTerms: React.FC = () => {
  // Pulling t and isRtl from the hook we optimized
  const { t, isRtl } = useTranslation();

  return (
    <div className={`legal-page ${isRtl ? 'rtl-mode' : ''}`}>
      <div className="legal-container">
        <header className="legal-header">
          <h1>{t('partnerTermsTitle')}</h1>
          <p className="last-updated">{t('lastUpdatedDate')}</p>
        </header>

        <div className="legal-warning">
          <p><strong>{t('important')}:</strong> {t('partnerTermsWarning')}</p>
        </div>

        <article className="legal-section">
          <h2>1. {t('indStatusTitle')}</h2>
          <div className="section-content">
            <p><strong>1.1 {t('nonEmployment')}:</strong> {t('nonEmploymentDesc')}</p>
            <p><strong>1.2 {t('autonomy')}:</strong> {t('autonomyDesc')}</p>
            <p><strong>1.3 {t('equipment')}:</strong> {t('equipmentDesc')}</p>
          </div>
        </article>

        <article className="legal-section">
          <h2>2. {t('partnerRegTitle')}</h2>
          <div className="section-content">
            <p><strong>2.1 {t('partnerGoogleSignIn')}:</strong> {t('partnerGoogleSignInDesc')}</p>
            <p><strong>2.2 {t('partnerAccuracy')}:</strong> {t('partnerAccuracyDesc')}</p>
          </div>
        </article>

        <article className="legal-section">
          <h2>3. {t('partnerOpsTitle')}</h2>
          <div className="section-content">
            <p><strong>3.1 {t('partnerPickup')}:</strong> {t('partnerPickupDesc')}</p>
            <p><strong>3.2 {t('partnerDelivery')}:</strong> {t('partnerDeliveryDesc')}</p>
            <p><strong>3.3 {t('partnerCash')}:</strong> {t('partnerCashDesc')}</p>
          </div>
        </article>

        <article className="legal-section">
          <h2>4. {t('failedTasksTitle')}</h2>
          <div className="section-content">
            <p><strong>4.1 {t('investigationPolicy')}:</strong> {t('investigationPolicyDesc')}</p>
            <p><strong>4.2 {t('toleratedCirc')}:</strong> {t('toleratedCircDesc')}</p>
            <p><strong>4.3 {t('permBan')}:</strong> {t('permBanDesc')}</p>
          </div>
        </article>

        <article className="legal-section">
          <h2>5. {t('commissionTitle')}</h2>
          <div className="section-content">
            <p><strong>5.1 {t('commissionRate')}:</strong> {t('commissionRateDesc')}</p>
            <p><strong>5.2 {t('paymentMethodsTitle')}:</strong> {t('paymentMethodsDesc')}</p>
            <ul>
              <li>RIB (Bank Transfer)</li>
              <li>D17 (Poste Tunisienne)</li>
              <li>Flouci</li>
              <li>{t('cashAgent')}</li>
            </ul>
            <p><strong>5.3 {t('frequency')}:</strong> {t('frequencyDesc')}</p>
            <p><strong>5.4 {t('lockOutRule')}:</strong> {t('lockOutRuleDesc')}</p>
          </div>
        </article>

        <article className="legal-section">
          <h2>6. {t('partnerConductTitle')}</h2>
          <div className="section-content">
            <p><strong>6.1 {t('platformIntegrity')}:</strong> {t('platformIntegrityDesc')}</p>
            <p><strong>6.2 {t('partnerSafety')}:</strong> {t('partnerSafetyDesc')}</p>
            <p><strong>6.3 {t('taxLiability')}:</strong> {t('taxLiabilityDesc')}</p>
          </div>
        </article>

        <article className="legal-section">
          <h2>7. {t('insuranceTitle')}</h2>
          <div className="section-content">
            <p><strong>7.1 {t('vehicleInsurance')}:</strong> {t('vehicleInsuranceDesc')}</p>
          </div>
        </article>

        <article className="legal-section">
          <h2>8. {t('modTermTitle')}</h2>
          <div className="section-content">
            <p><strong>8.1 {t('rightSuspend')}:</strong> {t('rightSuspendDesc')}</p>
            <p><strong>8.2 {t('updates')}:</strong> {t('updatesDesc')}</p>
          </div>
        </article>

        <article className="legal-section">
          <h2>9. {t('partnerGovLawTitle')}</h2>
          <div className="section-content">
            <p>{t('partnerGovLawDesc')}</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PartnerTerms;