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
      
      <main className="logisty-app-content">
        <LogistyAppHero />
        
        <LogistyAppFeatures />

        <LogistyAppInstall />

        <LogistyAppFAQ />
      </main>
    </div>
  );
};

export default LogistyAppPage;