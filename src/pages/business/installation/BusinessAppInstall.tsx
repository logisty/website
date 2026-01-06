import type { FC } from 'react';
import './BusinessAppInstall.css';
import { useTranslation } from '@hooks/useTranslations';

const BusinessAppInstall: FC = () => {
  const { t } = useTranslation();

  const steps = [
    {
      title: t("step1Title"),
      desc: t("step1Desc"),
      placeholderLabel: t("step1Label")
    },
    {
      title: t("step2Title"),
      desc: t("step2Desc"),
      placeholderLabel: t("step2Label")
    },
    {
      title: t("step3Title"),
      desc: t("step3Desc"),
      placeholderLabel: t("step3Label")
    },
    {
      title: t("step4Title"),
      desc: t("step4Desc"),
      placeholderLabel: t("step4Label")
    }
  ];

  return (
    <section className="business-install-section">
      <div className="business-install-container">
        
        {/* Header - Industrial Alignment */}
        <div className="business-install-header">
          <span className="install-label">{t("operations")}</span>
          <h2 className="install-main-title">{t("businessSetupGuide")}</h2>
          <div className="install-accent-line"></div>
        </div>

        <div className="business-install-grid">
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

        <div className="business-security-notice">
          <div className="security-notice-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <div className="security-notice-text">
            <strong>{t("securityProtocol")}</strong> {t("securityNoticeBody")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessAppInstall;