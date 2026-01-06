import type { FC } from 'react';
import './BusinessAppFeatures.css';
import { useTranslation } from '@hooks/useTranslations';

const BusinessAppFeatures: FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t("featCatalogTitle"),
      desc: t("featCatalogDesc"),
      icon: "📦",
      color: "#3B82F6" // Business Blue
    },
    {
      title: t("featVisibilityTitle"),
      desc: t("featVisibilityDesc"),
      icon: "📍",
      color: "#10B981" // Success Green
    },
    {
      title: t("featHandoutTitle"),
      desc: t("featHandoutDesc"),
      icon: "🤝",
      color: "#F59E0B" // Warning Amber
    }
  ];

  return (
    <section className="business-features-section">
      <div className="business-features-container">
        {/* Updated Left-Aligned Header */}
        <div className="business-features-header">
          <span className="business-features-label">{t("coreCapabilities")}</span>
          <h2 className="business-features-title">{t("optimizedLogistics") || "Enterprise Power"}</h2>
          <div className="business-features-line"></div>
        </div>
        
        <div className="business-features-grid">
          {features.map((item, index) => (
            <div 
              className="business-feature-card" 
              key={index}
              style={{ '--hover-accent': item.color } as React.CSSProperties}
            >
              <div className="business-card-icon">
                {item.icon}
              </div>
              <div className="business-card-text">
                <h3 className="business-card-title">{item.title}</h3>
                <p className="business-card-desc">{item.desc}</p>
              </div>
              {/* Top hover indicator */}
              <div className="business-card-indicator" style={{ backgroundColor: item.color }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessAppFeatures;