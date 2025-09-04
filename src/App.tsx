import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Footer from './components/footer/Footer';
import NavigationBar from './components/navigation/NavigationBar';

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
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
