import { useTranslation } from '@hooks/useTranslations';
import { Link } from 'react-router-dom';
import tnFlag from '@assets/flags/tn.png'; 
import logo from '@assets/logisty-full-logo.png'; // Use your logo here
import './Footer.css';

export default function Footer() {
  const { t, isRtl } = useTranslation();

  return (
    <footer className={`footer-flouci ${isRtl ? 'rtl-mode' : ''}`}>
      <div className="footer-container">
        
        {/* TOP SECTION: Branding and Quick Links */}
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} alt="Logisty" className="footer-logo" />
            <p className="brand-tagline">The future of logistics in Tunisia.</p>
          </div>
          
          <div className="footer-grid">
            <div className="footer-column">
              <h4>Product</h4>
              <Link to="/logisty-app">Logisty App</Link>
              <Link to="/partner-app">Partner App</Link>
              <Link to="/business-app">Business App</Link>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <Link to="/about">About Us</Link>
              <Link to="/roadmap">Roadmap</Link>
              <Link to="/investors">Investors</Link>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* BOTTOM SECTION: Legal, Origin, and Copyright */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span className="copyright-text">© LOGISTY 2026</span>
            <div className="origin-tag">
              <span>MADE IN</span>
              <img src={tnFlag} alt="Tunisia" />
              <span>TUNISIA</span>
            </div>
          </div>

          <nav className="footer-legal-links">
            <Link to="/client-terms">{t('footerClientTerms')}</Link>
            <Link to="/partner-terms">{t('footerPartnerTerms')}</Link>
            <Link to="/business-terms">{t('footerBusinessTerms')}</Link>
            <Link to="/privacy-notice">{t('footerPrivacy')}</Link>
          </nav>
        </div>

        {/* DISCLAIMER (Similar to Flouci's financial disclaimer) */}
        <div className="footer-disclaimer">
          <p>
            Logisty is a logistics technology platform. Services are provided in partnership with 
            authorized local carriers and administrative bodies in Tunisia.
          </p>
        </div>
      </div>
    </footer>
  );
}