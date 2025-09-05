import './IntroductionSection.css';
import phoneMockup from '@assets/logisty_app_iphone.png';
import { useTranslation } from '@hooks/useTranslations';

export default function IntroductionSection() {
  const { t } = useTranslation();
  const actionParts = t('introHeadlineAction').split(' '); // Split "Explore Logisity" into ["Explore", "Logisity"]
  const exploreText = actionParts[0] || t('introHeadlineAction'); // Fallback to full string if no split
  const logisityText = actionParts[1] || '';

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="intro-section">
      <div className="intro-content">
        <div className="intro-text">
          <h1 className="intro-headline">
            <span className="headline-prefix">{t('introHeadlinePrefix')}</span>{' '}
            <span className="headline-action">
              <span className="headline-action-bold">{exploreText}</span>{' '}
              <span className="headline-action-bold">{logisityText}</span>
            </span>
          </h1>
          <p className="intro-description">{t('introDescription')}</p>
          <div className="cta-buttons">
            <button  className="cta-button primary-button" onClick={() => handleScroll('explore')}>{t('getEarlyAccess')} </button>
          </div>
        </div>
        <div className="intro-image">
          <img
            src={phoneMockup}
            alt="Logisity App on Phone"
            className="phone-mockup"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}