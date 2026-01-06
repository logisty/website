import { useState, type FC } from 'react';
import './BusinessAppFAQ.css';
import { useTranslation } from '@hooks/useTranslations'; // Adjust path based on your folder structure

const BusinessAppFAQ: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  // Mapping the FAQ data to the translation keys
  const faqs = [
    {
      question: t("faqQ1"),
      answer: t("faqA1")
    },
    {
      question: t("faqQ2"),
      answer: t("faqA2")
    },
    {
      question: t("faqQ3"),
      answer: t("faqA3")
    }
  ];

  return (
    <section className="app-faq-section">
      <div className="section-header-compact">
        <h2 className="faq-headline-small">{t("businessSupport")}</h2>
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