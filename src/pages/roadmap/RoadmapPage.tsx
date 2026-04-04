import React, { useEffect } from 'react';
import './RoadmapPage.css';
import logo from '@assets/logisty-full-logo.png'; 

const RoadmapPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="roadmap-page">
      <div className="roadmap-container">
        
        {/* MINIMALIST HEADER */}
        <header className="roadmap-header">
          <div className="brand-meta-top">
            <span className="serial-no">LOG-2026-BETA</span>
            <span className="loc-tag">TUNIS / GABES</span>
          </div>
          <img src={logo} alt="Logisty" className="roadmap-hero-logo" />
          <h1 className="roadmap-main-title">Development Roadmap</h1>
          <p className="roadmap-intro">
            A strategic timeline of our laboratory phase, from conceptual validation 
            to infrastructure scaling.
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
                <span className="m-date">JAN 2026</span>
                <div className="m-tags">
                  <span className="tag poc">POC</span>
                  <span className="tag-status">CLOSED</span>
                </div>
              </div>
              <h3>Alpha Architecture</h3>
              <p>Proof of Concept phase. Validation of real-time tracking logic and encrypted delivery receipts in a controlled environment.</p>
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
                <span className="m-date">FEB — MAR 2026</span>
                <div className="m-tags">
                  <span className="tag mvp">MVP</span>
                  <span className="tag-status">ACTIVE</span>
                </div>
              </div>
              <h3>Experimental Beta</h3>
              <p>Minimum Viable Product deployment. Live testing with 10 select partners to monitor logistics friction and API stability.</p>
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
                <span className="m-date">APR — JUN 2026</span>
                <div className="m-tags">
                  <span className="tag beta">BETA</span>
                  <span className="tag-status">UPCOMING</span>
                </div>
              </div>
              <h3>Official Beta</h3>
              <p>Scaling test. Opening the platform to authorized carriers to evaluate mass data handling and regional coverage.</p>
            </div>
          </div>

          {/* THE DECISION GATE - CLEAN & BOLD */}
          <div className="final-gate">
            <div className="gate-content">
              <div className="gate-header">
                <span className="gate-warning">CRITICAL DECISION POINT</span>
                <span className="gate-time">JUNE 2026</span>
              </div>
              <h2>Legal Incorporation Gate</h2>
              <p>
                Performance review of the MVP and Beta phases. Success triggers the transition 
                from a tech lab to an **Officially Incorporated Entity**.
              </p>
              <div className="gate-footer">
                STATUS: PENDING PERFORMANCE METRICS
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default RoadmapPage;