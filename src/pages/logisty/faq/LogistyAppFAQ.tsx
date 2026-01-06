import { useState, type FC } from 'react';
import './LogistyAppFAQ.css';

interface FAQItem {
  question: string;
  answer: string;
}

const LogistyAppFAQ: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Why is the app not in the Play Store?",
      answer: "We are currently in an experimental Beta phase. To ensure the highest quality of service, we are limiting access to a few specific geolocations before our global rollout. Sideloading the APK allows us to push critical updates instantly to our test users."
    },
    {
      question: "Is it available on iOS?",
      answer: "Not yet. We are focused on perfecting the Android experience during our Beta. An iOS version is currently in development and will be available upon our full official launch."
    },
    {
      question: "Why choose Logisty over other options?",
      answer: "Traditional logistics companies don't offer true peer-to-peer (P2P) doorstep-to-doorstep shipping. Logisty bridges the gap by letting you ship anything directly through our app, using local couriers who are already in your area, reducing costs and delivery times significantly."
    },
    {
      question: "How do I know my shipment is safe?",
      answer: "Every transaction is backed by our secure QR code verification system. The courier cannot mark a package as picked up or delivered without scanning your unique digital token, ensuring total accountability."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="app-faq-section">
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

export default LogistyAppFAQ;