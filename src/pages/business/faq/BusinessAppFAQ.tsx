import { useState, type FC } from 'react';
import './BusinessAppFAQ.css';

const BusinessAppFAQ: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I set my store location?",
      answer: "Within the 'Store Settings', you can drop a pin or enter coordinates. Our VRP engine uses this exact location to route couriers to your doorstep for handouts."
    },
    {
      question: "Can I manage multiple branch visibility?",
      answer: "Yes. The app supports multi-location management. You can toggle visibility for individual branches depending on their current order volume."
    },
    {
      question: "What is the 'Handout' system?",
      answer: "Once an order is ready, you mark it as 'Awaiting Handout'. The app generates a secure token that the Logisty Partner must scan to verify they are picking up the correct items."
    }
  ];

  return (
    <section className="app-faq-section">
      <div className="section-header-compact">
        <h2 className="faq-headline-small">Business Support</h2>
        <div className="headline-line blue"></div>
      </div>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active-blue' : ''}`}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <div className="faq-icon">{activeIndex === index ? '−' : '+'}</div>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessAppFAQ;