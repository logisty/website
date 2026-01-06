import { useEffect, type FC } from 'react';
import './BusinessAppPage.css';
import BusinessAppInstall from './installation/BusinessAppInstall';
import BusinessAppFAQ from './faq/BusinessAppFAQ';
import BusinessAppFeatures from './features/BusinessAppFeatures';
import BusinessAppHero from './hero/BusinessAppHero';

const BusinessAppPage: FC = () => {
  // Ensure the user starts at the top of the page when navigating to Business section
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="business-page-wrapper">
      {/* 1. Hero Section - Merchant Focus & Dynamic Versioning */}
      <BusinessAppHero />

      <div className="section-divider">
        <div className="divider-line"></div>
      </div>

      {/* 2. Features - Listing, Visibility, Handouts (Premium Cards Design) */}
      <BusinessAppFeatures />

      <div className="section-divider">
        <div className="divider-line"></div>
      </div>

      {/* 3. Installation Guide - Merchant specific APK instructions */}
      <BusinessAppInstall />

      <div className="section-divider">
        <div className="divider-line"></div>
      </div>

      {/* 4. FAQ - Business & Tax specific details */}
      <BusinessAppFAQ />
    </main>
  );
};

export default BusinessAppPage;