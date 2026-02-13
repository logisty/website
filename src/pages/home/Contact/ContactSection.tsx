import { useTranslation } from '@hooks/useTranslations';
import './ContactSection.css';

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">{t('contactTitle')}</h2>
        <div className="contact-description-container">
          <p className="contact-description">{t('contactDescription')}</p>
        </div>
        
        <div className="contact-grid">
          {/* Phone Card */}
          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <span className="contact-label">{t('contactPhone')}</span>
            <a href="tel:+21655174942" className="contact-value">+216 55 174 942</a>
          </div>

          {/* WhatsApp Card */}
          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.9 1.1L22 4l-1.5 6.5Z"/>
                <path d="M10 14h.01M14 10h.01"/>
              </svg>
            </div>
            <span className="contact-label">{t('contactWhatsApp')}</span>
            <a href="https://wa.me/+21655174942" className="contact-value">+216 55 174 942</a>
          </div>

          {/* Email Card */}
          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <span className="contact-label">{t('contactEmail')}</span>
            <a href="mailto:contact@logisty.tn" className="contact-value">contact@logisty.tn</a>
          </div>
        </div>
      </div>
    </section>
  );
}