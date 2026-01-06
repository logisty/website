import type { FC } from 'react';
import './LogistyAppFeatures.css';
import { useTranslation } from '@hooks/useTranslations';

const LogistyAppFeatures: FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: "🛍️",
      title: t("featMarketTitle"),
      desc: t("featMarketDesc"),
      color: "#FFCF00"
    },
    {
      icon: "🍔",
      title: t("featFoodTitle"),
      desc: t("featFoodDesc"),
      color: "#FF5F5F"
    },
    {
      icon: "📍",
      title: t("featGpsTitle"),
      desc: t("featGpsDesc"),
      color: "#5F9FFF"
    },
    {
      icon: "🛡️",
      title: t("featVerifyTitle"),
      desc: t("featVerifyDesc"),
      color: "#4CAF50"
    },
    {
      icon: "🧾",
      title: t("featReceiptTitle"),
      desc: t("featReceiptDesc"),
      color: "#A061FF"
    },
    {
      icon: "⏱️",
      title: t("featArrivalTitle"),
      desc: t("featArrivalDesc"),
      color: "#FF9A3E"
    }
  ];

  return (
    <section className="app-features-section">
      <div className="features-container">
        <div className="features-header-left">
          <span className="features-label">{t("userFeaturesLabel")}</span>
          <h2 className="features-main-title">{t("userFeaturesTitle")}</h2>
          <div className="features-accent-line"></div>
        </div>
        
        <div className="features-clean-grid">
          {features.map((item, index) => (
            <div 
              className="feature-v-card" 
              key={index}
              style={{ '--accent-color': item.color } as React.CSSProperties}
            >
              <div className="card-top-row">
                <div className="card-icon-wrapper">
                  <span className="emoji-icon">{item.icon}</span>
                </div>
                <div className="card-dot" style={{ backgroundColor: item.color }}></div>
              </div>
              <div className="card-body">
                <h3 className="card-title-refined">{item.title}</h3>
                <p className="card-desc-refined">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogistyAppFeatures;