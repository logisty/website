import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Footer from './components/footer/Footer';
import NavigationBar from './components/navigation/NavigationBar';
import ClientTerms from './pages/legal/ClientTerms';
import PartnerTerms from './pages/legal/PartnerTerms';
import PrivacyNotice from './pages/legal/PrivacyNotice';

function App() {
  return (
    <>
      <NavigationBar />
      <div style={{ paddingTop: 'var(--navbar-height)', minHeight: '100vh', boxSizing: 'border-box' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/blog" element={<BlogListingPage />} />
        <Route path="/blog/:articleId" element={<ArticleDetailPage />} /> */}
        {/* <Route path="/invest" element={<InvestorPage />} /> */}
        <Route path="/client-terms" element={<ClientTerms />} />
                <Route path="/partner-terms" element={<PartnerTerms />} />
<Route path="/privacy-notice" element={<PrivacyNotice />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
