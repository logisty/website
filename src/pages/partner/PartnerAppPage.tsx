import { useEffect, type FC } from 'react';
import './PartnerAppPage.css';
import PartnerAppFAQ from './faq/PartnerAppFAQ';
import PartnerAppFeatures from './features/PartnerAppFeatures';
import PartnerAppHero from './hero/PartnerAppHero';

const PartnerAppPage: FC = () => {
  // Reset scroll on entry
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="partner-page-wrapper">
      {/* 1. Hero Section */}
      <PartnerAppHero />

      <div className="spacer-xl"></div>

      {/* 2. Features Section */}
      <div className="section-container">
        <PartnerAppFeatures />
      </div>

      <div className="spacer-xl"></div>

      {/* 3. FAQ Section */}
      <div className="section-container">
        <PartnerAppFAQ />
      </div>

      <div className="spacer-xl"></div>
    </main>
  );
};

export default PartnerAppPage;