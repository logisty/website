import type { FC } from 'react';
import './PartnerAppFeatures.css';
import { useTranslation } from '@hooks/useTranslations';

const PartnerAppFeatures: FC = () => {
  const { t } = useTranslation();

  const partnerFeatures = [
    { icon: "🗺️", title: t("pFeatVrpTitle"), desc: t("pFeatVrpDesc") },
    { icon: "📦", title: t("pFeatMultiTitle"), desc: t("pFeatMultiDesc") },
    { icon: "🔔", title: t("pFeatOffersTitle"), desc: t("pFeatOffersDesc") },
    { icon: "⛽", title: t("pFeatFuelTitle"), desc: t("pFeatFuelDesc") },
    { icon: "🚛", title: t("pFeatFleetTitle"), desc: t("pFeatFleetDesc") },
    { icon: "💰", title: t("pFeatEarnTitle"), desc: t("pFeatEarnDesc") }
  ];

  return (
    <section className="partner-features-section">
      <div className="partner-features-container">
        <div className="partner-features-header-left">
          <span className="partner-features-label">{t("transporterTools")}</span>
          <h2 className="partner-features-main-title">{t("optimizedLogistics")}</h2>
          <div className="partner-features-accent-line"></div>
        </div>
        
        <div className="partner-features-clean-grid">
          {partnerFeatures.map((item, index) => (
            <div className="partner-feature-v-card" key={index}>
              <div className="partner-card-icon-wrapper">
                <span className="partner-emoji-icon">{item.icon}</span>
              </div>
              <div className="partner-card-body">
                <h3 className="partner-card-title-refined">{item.title}</h3>
                <p className="partner-card-desc-refined">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerAppFeatures;