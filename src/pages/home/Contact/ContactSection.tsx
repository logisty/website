import { useTranslation } from '@hooks/useTranslations';
import { useContactStore } from '@store/contactStore';
import './ContactSection.css';

export default function ContactSection() {
  const { t } = useTranslation();
  const {
    name,
    email,
    message,
    status,
    isSubmitting,
    setName,
    setEmail,
    setMessage,
    sendEmail,
  } = useContactStore();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendEmail(t);
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">{t('contactTitle')}</h2>
      <p className="contact-description">{t('contactDescription')}</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder={t('contactNamePlaceholder')}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
          required
          minLength={2}
        />
        <input
          type="email"
          name="email"
          placeholder={t('contactEmailPlaceholder')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
          required
        />
        <textarea
          name="message"
          placeholder={t('contactMessagePlaceholder')}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="form-textarea"
          required
          minLength={10}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`submit-button ${isSubmitting ? 'disabled' : ''}`}
        >
          {t('contactSubmitButton')}
        </button>
        {status && <p className="status">{status}</p>}
      </form>
    </section>
  );
}