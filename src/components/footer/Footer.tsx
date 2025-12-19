import { useTranslation } from '@hooks/useTranslations';
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
          <a href="/website/client-terms" className="legal-link">
            {t('footerClientTerms')}
          </a>
          <a href="/website/partner-terms" className="legal-link">
            {t('footerPartnerTerms')}
          </a>
          <a href="/website/privacy-notice" className="legal-link">
            {t('footerPrivacy')}
          </a>
        </nav>
      </div>
    </footer>
  );
}