import NavigationBar from '@components/navigation/NavigationBar';
import LogistyAppHero from './hero/LogistyAppHero';
import LogistyAppFeatures from './features/LogistyAppFeatures';
import LogistyAppFAQ from './faq/LogistyAppFAQ';
import './LogistyAppPage.css';
import type { FC } from 'react';

const LogistyAppPage: FC = () => {
  return (
    <div className="logisty-app-page-wrapper">
      <NavigationBar />
      
      {/* 1. Hero Section */}
      <LogistyAppHero />

      <div className="spacer-xl"></div>

      {/* 2. Features */}
      <div className="section-container">
        <LogistyAppFeatures />
      </div>

      <div className="spacer-xl"></div>

      {/* 3. FAQ */}
      <div className="section-container">
        <LogistyAppFAQ />
      </div>
      
      {/* Optional Footer Spacer */}
      <div className="spacer-xl"></div>
    </div>
  );
};

export default LogistyAppPage;