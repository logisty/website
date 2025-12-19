import { useTranslation } from '@hooks/useTranslations';
import { Link } from 'react-router-dom'; // 1. Import Link
import './Footer.css';

export default function Footer() {
  const { t, isRtl } = useTranslation();

  return (
    <footer className={`footer ${isRtl ? 'rtl-mode' : ''}`}>
      <div className="footer-container">
        <div className="footer-copyright">
          <p>© Logisty 2025</p>
        </div>
        
        <nav className="footer-legal">
          {/* 2. Use Link component and remove /website/ prefix */}
          <Link to="/client-terms" className="legal-link">
            {t('footerClientTerms')}
          </Link>
          <Link to="/partner-terms" className="legal-link">
            {t('footerPartnerTerms')}
          </Link>
          <Link to="/privacy-notice" className="legal-link">
            {t('footerPrivacy')}
          </Link>
        </nav>
      </div>
    </footer>
  );
}