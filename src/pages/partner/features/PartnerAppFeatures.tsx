import type { FC } from 'react';
import './PartnerAppFeatures.css';
import { useTranslation } from '@hooks/useTranslations';

const PartnerAppFeatures: FC = () => {
  const { t } = useTranslation();

  const partnerFeatures = [
    {
      icon: "🗺️",
      title: t("pFeatVrpTitle"),
      desc: t("pFeatVrpDesc"),
      color: "#5F9FFF"
    },
    {
      icon: "📦",
      title: t("pFeatMultiTitle"),
      desc: t("pFeatMultiDesc"),
      color: "#FFCF00"
    },
    {
      icon: "🔔",
      title: t("pFeatOffersTitle"),
      desc: t("pFeatOffersDesc"),
      color: "#4CAF50"
    },
    {
      icon: "⛽",
      title: t("pFeatFuelTitle"),
      desc: t("pFeatFuelDesc"),
      color: "#FF5F5F"
    },
    {
      icon: "🚛",
      title: t("pFeatFleetTitle"),
      desc: t("pFeatFleetDesc"),
      color: "#A061FF"
    },
    {
      icon: "💰",
      title: t("pFeatEarnTitle"),
      desc: t("pFeatEarnDesc"),
      color: "#FF9A3E"
    }
  ];

  return (
    <section className="partner-features-section">
      <div className="partner-features-container">
        <div className="partner-features-header">
          <span className="partner-features-label">{t("transporterTools")}</span>
          <h2 className="partner-features-title">{t("optimizedLogistics")}</h2>
          <div className="partner-features-line"></div>
        </div>
        
        <div className="partner-features-grid">
          {partnerFeatures.map((item, index) => (
            <div 
              className="partner-feature-card" 
              key={index}
              style={{ '--hover-accent': item.color } as React.CSSProperties}
            >
              <div className="partner-card-icon">
                {item.icon}
              </div>
              <div className="partner-card-text">
                <h3 className="partner-card-title">{item.title}</h3>
                <p className="partner-card-desc">{item.desc}</p>
              </div>
              <div className="partner-card-indicator" style={{ backgroundColor: item.color }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerAppFeatures;