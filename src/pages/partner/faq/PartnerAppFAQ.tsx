import { useState, type FC } from 'react';
import './PartnerAppFAQ.css';

const PartnerAppFAQ: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I become a Logisty Partner?",
      answer: "Start by joining our Courier Google Group. Once verified, you'll gain access to the Partner App on Google Play to complete your profile and start accepting delivery offers."
    },
    {
      question: "What vehicles are accepted?",
      answer: "Currently, we accept motorbikes for quick urban deliveries and cargo vans for larger shipments. Please note that all cargo van operators must provide a valid Transporters Licence. We plan to add support for heavy trucks in the near future."
    },
    {
      question: "Do I need a Transporters Licence?",
      answer: "If you are operating a cargo van, a professional Transporters Licence is mandatory to ensure compliance with logistics regulations. Motorbike couriers only require a standard valid driving permit."
    },
    {
      question: "When and how do I get paid?",
      answer: "Earnings are tracked in real-time within the app. You can request a payout to your registered bank account or mobile wallet every week."
    },
    {
      question: "Are there flexible working hours?",
      answer: "Absolutely. You choose when to go online and which delivery offers to accept. You are your own boss with total control over your schedule."
    }
  ];

  return (
    <section className="partner-brutal-faq-section">
      <div className="partner-brutal-container">
        <header className="partner-brutal-header">
          <h2 className="partner-brutal-title">Partner Support</h2>
          <div className="partner-brutal-divider"></div>
        </header>

        <div className="partner-brutal-faq-grid">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`partner-brutal-card ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className="partner-brutal-q-row">
                <span className="partner-brutal-q-text">{faq.question}</span>
                <span className="partner-brutal-q-icon">{activeIndex === index ? '−' : '+'}</span>
              </div>
              
              <div className={`partner-brutal-a-wrapper ${activeIndex === index ? 'open' : ''}`}>
                <div className="partner-brutal-a-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerAppFAQ;