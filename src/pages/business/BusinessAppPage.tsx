import type { FC } from 'react';
import './BusinessAppPage.css';
import PartnerAppInstall from './installation/BusinessAppInstall';
import BusinessAppFAQ from './faq/BusinessAppFAQ';
import BusinessAppFeatures from './features/BusinessAppFeatures';
import BusinessAppHero from './hero/BusinessAppHero';

const BusinessAppPage: FC = () => {
  return (
    <main className="business-page-wrapper">
      {/* 1. Hero Section - Merchant Focus */}
      <BusinessAppHero />

      <div className="section-divider">
        <div className="divider-line"></div>
      </div>

      {/* 2. Features - Listing, Visibility, Handouts */}
      <BusinessAppFeatures />

      {/* 3. Installation Guide - Direct APK Download */}
      <PartnerAppInstall />

      {/* 4. FAQ - Business Specifics */}
      <BusinessAppFAQ />
    </main>
  );
};

export default BusinessAppPage;