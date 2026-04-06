import type { FC } from 'react';
import './BusinessAppFeatures.css';
import { useTranslation } from '@hooks/useTranslations';

const BusinessAppFeatures: FC = () => {
  const { t } = useTranslation();

  const features = [
    { 
      icon: "💳", 
      title: "Digital Payments", 
      desc: "Receive and manage payments directly through the platform with secure online settlement." 
    },
    { 
      icon: "🌐", 
      title: "Nationwide Reach", 
      desc: "Boost your store's discoverability and sell to customers across the entire country." 
    },
    { 
      icon: "🚛", 
      title: "Reliable Logistics", 
      desc: "Access a professional delivery network to ensure your orders reach customers on time." 
    },
    { 
      icon: "📡", 
      title: "Live Visibility", 
      desc: "Broadcast your store status in real-time to nearby customers looking for your services." 
    },
    { 
      icon: "📦", 
      title: "Catalog Management", 
      desc: "Easily organize products, update stock levels, and manage your storefront in real-time." 
    },
    { 
      icon: "📈", 
      title: "Merchant Growth", 
      desc: "Dedicated tools and analytics designed specifically to help store owners scale efficiently." 
    }
  ];

  return (
    <section className="business-features-section">
      <div className="business-features-container">
        <div className="business-features-header-left">
          <span className="business-features-label">{t("coreCapabilities")}</span>
          <h2 className="business-features-main-title">{t("optimizedLogistics")}</h2>
          <div className="business-features-accent-line"></div>
        </div>
        
        <div className="business-features-clean-grid">
          {features.map((item, index) => (
            <div className="business-feature-v-card" key={index}>
              <div className="business-card-icon-wrapper">
                <span className="business-emoji-icon">{item.icon}</span>
              </div>
              <div className="business-card-body">
                <h3 className="business-card-title-refined">{item.title}</h3>
                <p className="business-card-desc-refined">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessAppFeatures;