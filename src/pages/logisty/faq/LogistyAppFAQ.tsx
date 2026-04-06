import { useState, type FC } from 'react';
import './LogistyAppFAQ.css';
import { useTranslation } from '@hooks/useTranslations';

const LogistyAppFAQ: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const { t } = useTranslation();

  const faqs = [
    {
      question: "How do I get the Android Beta?",
      answer: "Logisty is currently in Closed Testing. Simply join our Google Group (Step 1). Once you're a member, Google Play will recognize your email and allow you to download the app via the 'Get it on Google Play' link."
    },
    { 
      question: "Is the app available on iOS yet?", 
      answer: "The iOS version is currently in development. We are focusing on perfecting the Android experience first, but you can join the mailing list to be notified as soon as the TestFlight beta opens." 
    },
    { 
      question: "Do I need an invite code?", 
      answer: "No invite code is needed! Membership in the Google Group acts as your 'key' to unlock the download on the Play Store." 
    },
    { 
      question: "What should I do if the link says 'App not available'?", 
      answer: "Make sure you are logged into the Google Play Store with the same email address you used to join the Google Group. It may take a few minutes for the permissions to sync." 
    }
  ];

  return (
    <section className="brutal-faq-section">
      <div className="brutal-container">
        <header className="brutal-header">
          <h2 className="brutal-title">Questions?</h2>
          <div className="brutal-divider"></div>
        </header>

        <div className="brutal-faq-grid">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`brutal-card ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className="brutal-q-row">
                <span className="brutal-q-text">{faq.question}</span>
                <span className="brutal-q-icon">{activeIndex === index ? '×' : '+'}</span>
              </div>
              
              <div className={`brutal-a-wrapper ${activeIndex === index ? 'open' : ''}`}>
                <div className="brutal-a-content">
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

export default LogistyAppFAQ;