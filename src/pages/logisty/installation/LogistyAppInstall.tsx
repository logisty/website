import type { FC } from 'react';
import './LogistyAppInstall.css';
import { useTranslation } from '@hooks/useTranslations';

const LogistyAppInstall: FC = () => {
  const { t } = useTranslation();

  const steps = [
    {
      title: t("uStep1Title"),
      desc: t("uStep1Desc"),
      placeholderLabel: t("uStep1Label")
    },
    {
      title: t("uStep2Title"),
      desc: t("uStep2Desc"),
      placeholderLabel: t("uStep2Label")
    },
    {
      title: t("uStep3Title"),
      desc: t("uStep3Desc"),
      placeholderLabel: t("uStep3Label")
    },
    {
      title: t("uStep4Title"),
      desc: t("uStep4Desc"),
      placeholderLabel: t("uStep4Label")
    }
  ];

  return (
    <section className="app-install-section">
      <div className="section-header-compact">
        <h2 className="install-headline-small">{t("userInstallationGuide")}</h2>
        <div className="headline-line"></div>
      </div>

      <div className="install-grid">
        {steps.map((step, index) => (
          <div className="install-step-card" key={index}>
            {/* Visual Placeholder */}
            <div className="step-visual-container placeholder-bg">
              <div className="placeholder-content">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ddd" strokeWidth="1">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
                <span className="placeholder-label">{step.placeholderLabel} GIF</span>
              </div>
              <div className="step-badge">{index + 1}</div>
            </div>
            
            <div className="step-content">
              <h3 className="step-title">{step.title}</h3>
              <p className="step-text">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="security-note">
        <div className="security-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <p><strong>{t("userSecurityNoteTitle")}</strong> {t("userSecurityNoteBody")}</p>
      </div>
    </section>
  );
};

export default LogistyAppInstall;