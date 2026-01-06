import type { FC } from 'react';
import './PartnerAppPage.css';
import PartnerAppFAQ from './faq/PartnerAppFAQ';
import PartnerAppFeatures from './features/PartnerAppFeatures';
import PartnerAppHero from './hero/PartnerAppHero';
import PartnerAppInstall from './installation/PartnerAppInstall';

const PartnerAppPage: FC = () => {
  return (
    <main className="partner-page-wrapper">
      {/* 1. Hero Section - The First Impression */}
      <PartnerAppHero />

      {/* 2. Visual Break / Divider */}
      <div className="section-divider">
        <div className="divider-line"></div>
      </div>

      {/* 3. Features Section - The Technical Value */}
      <PartnerAppFeatures />

      {/* 4. Installation Guide - Converting the User */}
      <PartnerAppInstall />

      {/* 5. FAQ - Handling Objections */}
      <PartnerAppFAQ />
    </main>
  );
};

export default PartnerAppPage;