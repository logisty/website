import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import LogistyAppPage from './pages/logisty/LogistyAppPage'; 
import Footer from './components/footer/Footer';
import NavigationBar from './components/navigation/NavigationBar';
import ClientTerms from './pages/legal/ClientTerms';
import PartnerTerms from './pages/legal/PartnerTerms';
import PrivacyNotice from './pages/legal/PrivacyNotice';
import PartnerAppPage from './pages/partner/PartnerAppPage';
import BusinessAppPage from './pages/business/BusinessAppPage';
import BusinessTerms from './pages/legal/BusinessTerms';
import AboutPage from './pages/about/AboutPage';

function App() {
  return (
    <HashRouter>
      <NavigationBar />
      
      {/* Using a standard main tag. 
          The padding-top ensures that the Hero section isn't hidden 
          behind the fixed navbar when the page first loads.
      */}
      <main style={{ 
        paddingTop: 'var(--nav-height)', 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/logisty-app" element={<LogistyAppPage />} />
            <Route path="/partner-app" element={<PartnerAppPage />} />
            <Route path="/business-app" element={<BusinessAppPage />} />
            <Route path="/client-terms" element={<ClientTerms />} />
            <Route path="/business-terms" element={<BusinessTerms />} />
            <Route path="/partner-terms" element={<PartnerTerms />} />
            <Route path="/privacy-notice" element={<PrivacyNotice />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </HashRouter>
  );
}

export default App;