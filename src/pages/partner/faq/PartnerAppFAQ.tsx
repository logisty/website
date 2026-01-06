import { useState, type FC } from 'react';
import './PartnerAppFAQ.css';
import { useTranslation } from '@hooks/useTranslations';

interface FAQItem {
  question: string;
  answer: string;
}

const PartnerAppFAQ: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const faqs: FAQItem[] = [
    {
      question: t("partnerFaqQ1"),
      answer: t("partnerFaqA1")
    },
    {
      question: t("partnerFaqQ2"),
      answer: t("partnerFaqA2")
    },
    {
      question: t("partnerFaqQ3"),
      answer: t("partnerFaqA3")
    },
    {
      question: t("partnerFaqQ4"),
      answer: t("partnerFaqA4")
    },
    {
      question: t("partnerFaqQ5"),
      answer: t("partnerFaqA5")
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="partner-faq-section">
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

export default PartnerAppFAQ;