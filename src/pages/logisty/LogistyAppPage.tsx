import NavigationBar from '@components/navigation/NavigationBar';
import LogistyAppHero from './hero/LogistyAppHero';
import LogistyAppFeatures from './features/LogistyAppFeatures';
import LogistyAppFAQ from './faq/LogistyAppFAQ';
import './LogistyAppPage.css';
import type { FC } from 'react';
import LogistyAppInstall from './installation/LogistyAppInstall';

const LogistyAppPage: FC = () => {
  return (
    <div className="logisty-app-page-wrapper">
      <NavigationBar />
      
      {/* 1. Hero Section - No longer wrapped in 'logisty-app-content' */}
      <LogistyAppHero />

      <div className="section-divider">
        <div className="divider-line"></div>
      </div>

      {/* 2. Features */}
      <LogistyAppFeatures />

      {/* 3. Installation */}
      <LogistyAppInstall />

      {/* 4. FAQ */}
      <LogistyAppFAQ />
    </div>
  );
};

export default LogistyAppPage;