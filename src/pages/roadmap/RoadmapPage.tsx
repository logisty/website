import React, { useEffect } from 'react';
import './RoadmapPage.css';
import logo from '@assets/logisty-full-logo.png'; 
import { useTranslation } from '@hooks/useTranslations';

const RoadmapPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, []);

  return (
    <main className="roadmap-page">
      <div className="roadmap-container">
        
        {/* MINIMALIST HEADER */}
        <header className="roadmap-header">
          <div className="brand-meta-top">
            <span className="serial-no">LOG-2026-BETA</span>
            <span className="loc-tag">{t('roadmap.location_tag')}</span>
          </div>
          <img src={logo} alt="Logisty" className="roadmap-hero-logo" />
          <h1 className="roadmap-main-title">{t('roadmap.main_title')}</h1>
          <p className="roadmap-intro">
            {t('roadmap.intro')}
          </p>
        </header>

        {/* REFINED STEP SYSTEM */}
        <div className="timeline-flow">
          
          {/* STEP 1 */}
          <div className="milestone past">
            <div className="milestone-sidebar">
              <span className="m-digit">01</span>
              <div className="m-line"></div>
            </div>
            <div className="milestone-body">
              <div className="m-header">
                <span className="m-date">{t('roadmap.step1.date')}</span>
                <div className="m-tags">
                  <span className="tag poc">{t('roadmap.tags.poc')}</span>
                  <span className="tag-status">{t('roadmap.status.closed')}</span>
                </div>
              </div>
              <h3>{t('roadmap.step1.title')}</h3>
              <p>{t('roadmap.step1.description')}</p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="milestone active">
            <div className="milestone-sidebar">
              <span className="m-digit">02</span>
              <div className="m-line"></div>
            </div>
            <div className="milestone-body">
              <div className="m-header">
                <span className="m-date">{t('roadmap.step2.date')}</span>
                <div className="m-tags">
                  <span className="tag mvp">{t('roadmap.tags.mvp')}</span>
                  <span className="tag-status">{t('roadmap.status.active')}</span>
                </div>
              </div>
              <h3>{t('roadmap.step2.title')}</h3>
              <p>{t('roadmap.step2.description')}</p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="milestone upcoming">
            <div className="milestone-sidebar">
              <span className="m-digit">03</span>
              <div className="m-line"></div>
            </div>
            <div className="milestone-body">
              <div className="m-header">
                <span className="m-date">{t('roadmap.step3.date')}</span>
                <div className="m-tags">
                  <span className="tag beta">{t('roadmap.tags.beta')}</span>
                  <span className="tag-status">{t('roadmap.status.upcoming')}</span>
                </div>
              </div>
              <h3>{t('roadmap.step3.title')}</h3>
              <p>{t('roadmap.step3.description')}</p>
            </div>
          </div>

          {/* THE DECISION GATE - CLEAN & BOLD */}
          <div className="final-gate">
            <div className="gate-content">
              <div className="gate-header">
                <span className="gate-warning">{t('roadmap.gate.warning')}</span>
                <span className="gate-time">{t('roadmap.gate.date')}</span>
              </div>
              <h2>{t('roadmap.gate.title')}</h2>
              <p>
                {t('roadmap.gate.description')}
              </p>
              <div className="gate-footer">
                {t('roadmap.gate.status')}
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default RoadmapPage;