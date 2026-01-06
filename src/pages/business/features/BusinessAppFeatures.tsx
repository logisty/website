import type { FC } from 'react';
import './BusinessAppFeatures.css';

const BusinessAppFeatures: FC = () => {
  const features = [
    {
      title: "Digital Catalog",
      desc: "List products or fast-food menus with high-res photos and real-time stock levels.",
      icon: "📦"
    },
    {
      title: "Visibility Control",
      desc: "Toggle your store's visibility based on your capacity. Define your delivery radius instantly.",
      icon: "📍"
    },
    {
      title: "Handout Management",
      desc: "Seamlessly transition from kitchen to courier. Manage pickup tokens and handout status.",
      icon: "🤝"
    }
  ];

  return (
    <section className="business-features">
      <div className="business-features-container">
        <div className="section-header-compact">
          <h2 className="feat-headline-small">Core Capabilities</h2>
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