import './IntroductionSection.css';
import androidLogo from '@assets/android.png';
import { useTranslation } from '@hooks/useTranslations';
import { Link } from 'react-router-dom';
import type { FC } from 'react';

const IntroductionSection: FC = () => {
  const { t } = useTranslation();
  
  const actionParts = t('introHeadlineAction').split(' ');
  const exploreText = actionParts[0] || t('introHeadlineAction');
  const logisityText = actionParts[1] || '';

  return (
    <section className="intro-section">
      {/* Decorative background element for aesthetic depth */}
      <div className="aesthetic-aura"></div>
      
      <div className="intro-container">
        <div className="intro-content-centered">
          
          {/* Minimalist Beta Tag */}
          <div className="hero-beta-tag">
            <span className="beta-dot"></span>
            <span className="beta-text">EXPERIMENTAL BETA — EARLY 2026</span>
          </div>

          <h1 className="intro-headline-aesthetic">
            <span className="headline-top">{t('introHeadlinePrefix')}</span>
            <div className="headline-main">
              {exploreText} 
              <span className="logisty-brand-aesthetic">
                {logisityText}
                <svg className="brand-underline" viewBox="0 0 400 20" preserveAspectRatio="none">
                  <path d="M0,10 Q100,20 200,10 T400,10" stroke="#FFCF00" strokeWidth="8" fill="transparent" strokeLinecap="round" />
                </svg>
              </span>
            </div>
          </h1>
          
          <p className="intro-subtext">
            {t('introDescription')}
          </p>

          <div className="cta-wrapper">
            <Link to="/logisty-app" className="aesthetic-button">
              <img src={androidLogo} alt="" className="btn-icon" />
              <div className="btn-text">
                <span className="btn-label">{t('downloadItOn')}</span>
                <span className="btn-title">Android</span>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;