import { useState, type FC } from 'react';
import './LogistyAppFAQ.css';
import { useTranslation } from '@hooks/useTranslations';

interface FAQItem {
  question: string;
  answer: string;
}

const LogistyAppFAQ: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const faqs: FAQItem[] = [
    {
      question: t("userFaqQ1"),
      answer: t("userFaqA1")
    },
    {
      question: t("userFaqQ2"),
      answer: t("userFaqA2")
    },
    {
      question: t("userFaqQ3"),
      answer: t("userFaqA3")
    },
    {
      question: t("userFaqQ4"),
      answer: t("userFaqA4")
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="app-faq-section">
      <div className="section-header-compact">
        <h2 className="faq-headline-small">{t("commonQuestions")}</h2>
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