import React from 'react';
import './ServiceSelection.css';

// Your service selection screen asset
import selectionScreen from "@assets/service-selection-phone.png";

const ServiceSelection: React.FC = () => {
  return (
    <section className="service-showcase">
      <div className="service-wrap">
        
        {/* LEFT: THE APP SCREEN */}
        <div className="service-visual">
          <div className="phone-container">
            <img 
              src={selectionScreen} 
              alt="Logisty Service Selection" 
              className="selection-asset" 
            />
            <div className="bg-accent-square"></div>
          </div>
        </div>

        {/* RIGHT: THE LOGIC */}
        <div className="service-content">
          <header className="service-header">
            <span className="category-tag">Versatile Logistics</span>
            <h2 className="service-title">Choose your <span className="highlight">Service</span></h2>
            <p className="service-lead">
              From a single envelope to a full wardrobe. Select the mode that fits your cargo and your timeline.
            </p>
          </header>

          <div className="service-options">
            {/* Option 1 */}
            <div className="option-card express">
              <div className="option-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <div className="option-info">
                <h3>City Express</h3>
                <p>Ideal for <strong>documents, parcels, or clothing</strong>. Fast, nimble transport designed for the inner-city pulse.</p>
              </div>
            </div>

            {/* Option 2 */}
            <div className="option-card ride">
              <div className="option-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
              </div>
              <div className="option-info">
                <h3>Ridesharing</h3>
                <p>For <strong>larger packages or boxes</strong>. Leverage the existing network of travelers to move bulkier items across regions.</p>
              </div>
            </div>
          </div>

          <div className="service-footer">
            <p>Integrated AI suggests the best route and vehicle type based on your package dimensions.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceSelection;