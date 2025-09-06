import { useTranslation } from '@hooks/useTranslations';
import './ContactSection.css';

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">{t('contactTitle')}</h2>
        <p className="contact-description">{t('contactDescription')}</p>
        <div className="contact-grid">
          <div className="contact-card">
            <i className="fas fa-phone-alt contact-icon"></i>
            <span className="contact-label">{t('contactPhone')}</span>
            <a href="tel:+21655174942" className="contact-value">+216 55 174 942</a>
          </div>
          <div className="contact-card">
            <i className="fab fa-whatsapp contact-icon"></i>
            <span className="contact-label">{t('contactWhatsApp')}</span>
            <a href="https://wa.me/+21655174942" className="contact-value">+216 55 174 942</a>
          </div>
          <div className="contact-card">
            <i className="fas fa-envelope contact-icon"></i>
            <span className="contact-label">{t('contactEmail')}</span>
            <a href="mailto:logisty.tn@gmail.com" className="contact-value">logisty.tn@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}