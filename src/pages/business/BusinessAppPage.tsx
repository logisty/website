import { useEffect, type FC } from 'react';
import './BusinessAppPage.css';
import BusinessAppFAQ from './faq/BusinessAppFAQ';
import BusinessAppFeatures from './features/BusinessAppFeatures';
import BusinessAppHero from './hero/BusinessAppHero';

const BusinessAppPage: FC = () => {
  // Ensure the user starts at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="business-page-wrapper">
      {/* 1. Hero Section */}
      <BusinessAppHero />

      <div className="spacer-xl"></div>

      {/* 2. Features Section */}
      <div className="section-container">
        <BusinessAppFeatures />
      </div>

      <div className="spacer-xl"></div>

      {/* 3. FAQ Section */}
      <div className="section-container">
        <BusinessAppFAQ />
      </div>

      <div className="spacer-xl"></div>
    </main>
  );
};

export default BusinessAppPage;