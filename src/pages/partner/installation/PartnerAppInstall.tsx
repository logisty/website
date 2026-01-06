import type { FC } from 'react';
import './PartnerAppInstall.css';
import { useTranslation } from '@hooks/useTranslations';

const PartnerAppInstall: FC = () => {
  const { t } = useTranslation();

  const steps = [
    {
      title: t("pStep1Title"),
      desc: t("pStep1Desc"),
      placeholderLabel: t("pStep1Label")
    },
    {
      title: t("pStep2Title"),
      desc: t("pStep2Desc"),
      placeholderLabel: t("pStep2Label")
    },
    {
      title: t("pStep3Title"),
      desc: t("pStep3Desc"),
      placeholderLabel: t("pStep3Label")
    },
    {
      title: t("pStep4Title"),
      desc: t("pStep4Desc"),
      placeholderLabel: t("pStep4Label")
    }
  ];

  return (
    <section className="partner-install-section">
      <div className="partner-install-container">
        
        {/* Header - Aligned with the rest of the layout */}
        <div className="partner-install-header">
          <span className="install-label">{t("getStarted")}</span>
          <h2 className="install-main-title">{t("installationGuide")}</h2>
          <div className="install-accent-line"></div>
        </div>

        <div className="partner-install-grid">
          {steps.map((step, index) => (
            <div className="install-step-card" key={index}>
              {/* Visual Placeholder */}
              <div className="step-visual-container placeholder-bg">
                <div className="placeholder-content">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                  <span className="placeholder-label">{step.placeholderLabel}</span>
                </div>
                <div className="step-count-badge">{index + 1}</div>
              </div>
              
              <div className="step-text-body">
                <h3 className="step-title-text">{step.title}</h3>
                <p className="step-description-text">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="partner-security-notice">
          <div className="security-notice-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <div className="security-notice-text">
            <strong>{t("partnerSecurityProtocol")}</strong> {t("partnerSecurityNotice")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerAppInstall;