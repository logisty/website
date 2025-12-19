import { HashRouter, Routes, Route } from 'react-router-dom'; // Fixed Imports
import Home from './pages/home/home';
import Footer from './components/footer/Footer';
import NavigationBar from './components/navigation/NavigationBar';
import ClientTerms from './pages/legal/ClientTerms';
import PartnerTerms from './pages/legal/PartnerTerms';
import PrivacyNotice from './pages/legal/PrivacyNotice';

function App() {
  return (
    <HashRouter> {/* Wrap everything in the Router */}
      <NavigationBar />
      <div style={{ paddingTop: 'var(--navbar-height)', minHeight: '100vh', boxSizing: 'border-box' }}>
        <Routes> {/* Routes stays here to handle the switching */}
          <Route path="/" element={<Home />} />
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