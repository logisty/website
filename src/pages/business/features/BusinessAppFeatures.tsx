import type { FC } from 'react';
import './BusinessAppFeatures.css';
import { useTranslation } from '@hooks/useTranslations';

const BusinessAppFeatures: FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t("featCatalogTitle"),
      desc: t("featCatalogDesc"),
      icon: "📦"
    },
    {
      title: t("featVisibilityTitle"),
      desc: t("featVisibilityDesc"),
      icon: "📍"
    },
    {
      title: t("featHandoutTitle"),
      desc: t("featHandoutDesc"),
      icon: "🤝"
    }
  ];

  return (
    <section className="business-features">
      <div className="business-features-container">
        <div className="section-header-compact">
          <h2 className="feat-headline-small">{t("coreCapabilities")}</h2>
          <div className="headline-line blue"></div>
        </div>
        <div className="business-features-grid">
          {features.map((f, i) => (
            <div key={i} className="business-feat-card">
              <div className="feat-icon-box">{f.icon}</div>
              <h3 className="feat-title">{f.title}</h3>
              <p className="feat-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessAppFeatures;