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

function App() {
  return (
    <HashRouter>
      <NavigationBar />
      <div style={{ paddingTop: '75px', minHeight: '100vh', boxSizing: 'border-box' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logisty-app" element={<LogistyAppPage />} />
          <Route path="/partner-app" element={<PartnerAppPage />} />
          <Route path="/business-app" element={<BusinessAppPage />} />
          <Route path="/client-terms" element={<ClientTerms />} />
          <Route path="/partner-terms" element={<PartnerTerms />} />
          <Route path="/privacy-notice" element={<PrivacyNotice />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;