import React from 'react';
import './TrackingShowcase.css';
import trackingMap from "@assets/screen_order_tracking.png";

const TrackingShowcase: React.FC = () => {
  return (
    <section className="tracking-showcase">
      <div className="tracking-container">
        
        <div className="tracking-content">
          <header className="tracking-header">
            <span className="live-label">
              <span className="live-dot"></span> LIVE SYSTEM
            </span>
            <h2 className="tracking-title">Real-time <span className="marker">Tracking</span></h2>
            <p className="tracking-lead">
              Complete visibility from the hub to the doorstep. Monitor your package movement with live updates.
            </p>
          </header>

          <div className="tracking-details">
            <div className="detail-row">
              <div className="row-number">01</div>
              <div className="row-info">
                <h3>Live Map Interface</h3>
                <p>Track the transporter's exact path and speed on a high-precision map.</p>
              </div>
            </div>

            <div className="detail-row">
              <div className="row-number">02</div>
              <div className="row-info">
                <h3>Partner Identity</h3>
                <p>Know exactly who is handling your delivery with verified transporter profiles.</p>
              </div>
            </div>

            <div className="detail-row">
              <div className="row-number">03</div>
              <div className="row-info">
                <h3>Smart ETA</h3>
                <p>AI-calculated arrival times that adjust instantly based on traffic and location.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tracking-visual">
          <div className="tracking-image-box">
            <img src={trackingMap} alt="Logisty Live Tracking" className="tracking-asset-clean" />
            <div className="visual-offset-bg"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrackingShowcase;