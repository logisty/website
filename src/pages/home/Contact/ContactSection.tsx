import './ContactSection.css';
import { useTranslation } from '@hooks/useTranslations';

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">{t('contactTitle')}</h2>
      <p className="contact-description">{t('contactDescription')}</p>
      <form className="contact-form">
        <input
          type="text"
          placeholder={t('contactNamePlaceholder')}
          className="form-input"
        />
        <input
          type="email"
          placeholder={t('contactEmailPlaceholder')}
          className="form-input"
        />
        <textarea
          placeholder={t('contactMessagePlaceholder')}
          rows={5}
          className="form-textarea"
        />
        <button type="submit" className="submit-button">
          {t('contactSubmitButton')}
        </button>
      </form>
    </section>
  );
}