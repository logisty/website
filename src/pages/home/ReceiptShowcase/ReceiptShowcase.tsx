import React from 'react';
import './ReceiptShowcase.css';

// Your import
import receiptScreen from "@assets/digital-receipt-phone.png";

const ReceiptShowcase: React.FC = () => {
  return (
    <section className="compact-showcase">
      <div className="compact-wrap">
        
        {/* LEFT: PHONE ASSET */}
        <div className="compact-visual">
          <div className="asset-box">
            <img 
              src={receiptScreen} 
              alt="Logisty Receipt" 
              className="phone-asset-img" 
            />
            <div className="yellow-backer"></div>
          </div>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="compact-info">
          <header className="mini-header">
            <span className="mini-tag">Protocol</span>
            <h2 className="mini-title">The Digital Receipt</h2>
            <p className="mini-lead">
              Foolproof, encrypted confirmation for every pickup and delivery.
            </p>
          </header>

          <div className="compact-steps">
            <div className="mini-step">
              <div className="step-top">
                <span className="step-idx">01</span>
                <h3>Pickup Scan</h3>
              </div>
              <p>The transporter scans your QR at the source to lock the handover into the ledger.</p>
            </div>

            <div className="mini-step">
              <div className="step-top">
                <span className="step-idx">02</span>
                <h3>Delivery Scan</h3>
              </div>
              <p>A second scan closes the loop, generating your verified proof of completion.</p>
            </div>
          </div>

          <div className="mini-utility">
            <div className="utility-badge">UTILITY</div>
            <p>Verified proof for <strong>workspace expenses</strong> or <strong>personal records</strong>.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ReceiptShowcase;