import { useState, type FC } from 'react';
import './BusinessAppFAQ.css';

const BusinessAppFAQ: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I register my store for the Beta?",
      answer: "Business access is currently via our Merchant Google Group. Once you join, the 'Business Console' link on the Play Store will be authorized for your account."
    },
    {
      question: "How do I receive payments from customers?",
      answer: "Logisty integrates directly with local payment gateways. Funds are settled into your business wallet and can be withdrawn to your linked bank account daily."
    },
    {
      question: "Is there a monthly fee for businesses?",
      answer: "During the closed testing phase, there are no subscription fees. We want your feedback to help us build the best tools for your growth."
    },
    {
      question: "How does the delivery service work?",
      answer: "Once an order is confirmed, you can request a Logisty courier through the app. Our reliable network handles the pickup from your store and delivery to the customer's door."
    }
  ];

  return (
    <section className="biz-brutal-faq-section">
      <div className="biz-brutal-container">
        <header className="biz-brutal-header">
          <h2 className="biz-brutal-title">Business Support</h2>
          <div className="biz-brutal-divider"></div>
        </header>

        <div className="biz-brutal-faq-grid">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`biz-brutal-card ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className="biz-brutal-q-row">
                <span className="biz-brutal-q-text">{faq.question}</span>
                <span className="biz-brutal-q-icon">{activeIndex === index ? '−' : '+'}</span>
              </div>
              
              <div className={`biz-brutal-a-wrapper ${activeIndex === index ? 'open' : ''}`}>
                <div className="biz-brutal-a-content">
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

export default BusinessAppFAQ;