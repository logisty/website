import type { FC } from 'react';
import './LogistyAppFeatures.css';
import { useTranslation } from '@hooks/useTranslations';

const LogistyAppFeatures: FC = () => {
  const { t } = useTranslation();

  const features = [
    { icon: "🛍️", title: t("featMarketTitle"), desc: t("featMarketDesc") },
    { icon: "🍔", title: t("featFoodTitle"), desc: t("featFoodDesc") },
    { icon: "📍", title: t("featGpsTitle"), desc: t("featGpsDesc") },
    { icon: "🛡️", title: t("featVerifyTitle"), desc: t("featVerifyDesc") },
    { icon: "🧾", title: t("featReceiptTitle"), desc: t("featReceiptDesc") },
    { icon: "⏱️", title: t("featArrivalTitle"), desc: t("featArrivalDesc") }
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
            <div className="feature-v-card" key={index}>
              <div className="card-icon-wrapper">
                <span className="emoji-icon">{item.icon}</span>
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