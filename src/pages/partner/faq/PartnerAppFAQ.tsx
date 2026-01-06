import { useState, type FC } from 'react';
import './PartnerAppFAQ.css';

interface FAQItem {
  question: string;
  answer: string;
}

const PartnerAppFAQ: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What exactly is the VRP Solver?",
      answer: "VRP stands for Vehicle Routing Problem. Our solver is an AI engine that takes all your active delivery points and calculates the most fuel-efficient sequence to visit them. It minimizes your total distance while ensuring all packages are delivered on time."
    },
    {
      question: "Can I combine food and package deliveries?",
      answer: "Yes. The Logisty Partner App is designed for multi-modality. You can accept a food order and a package shipment simultaneously. The system will route you to the nearest pickup and ensure food items are prioritized to maintain freshness."
    },
    {
      question: "How do I install the Partner App on Android?",
      answer: "Since we are in an experimental beta phase, the app is distributed via a direct APK download. Simply click the download button in the hero section, allow 'Install from Unknown Sources' in your Android settings, and run the installer."
    },
    {
      question: "Are there any vehicle requirements?",
      answer: "Logisty is vehicle-agnostic. Whether you have a bicycle, motorcycle, car, or van, the VRP solver adjusts its logic based on your vehicle type to provide realistic arrival times and optimized routes."
    },
    {
      question: "How do earnings and payments work?",
      answer: "Earnings are calculated per completed delivery and distance covered. All payments are tracked in real-time within the app interface. During the beta phase, payouts are processed weekly to your linked account."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="partner-faq-section">
      <div className="section-header-compact">
        <h2 className="faq-headline-small">Common Questions</h2>
        <div className="headline-line"></div>
      </div>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <div className="faq-icon">
                {activeIndex === index ? '−' : '+'}
              </div>
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

export default PartnerAppFAQ;