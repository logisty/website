import ContactSection from './Contact/ContactSection';
import IntroductionSection from './Introduction/IntroductionSection';
import InvestorSection from './Investor/InvestorSection';
import PreOrderSection from './Preorder/PreOrderSection';
import WhatsNewSection from './WhatsNewSection/WhatsNewSection';

export default function Home() {
  return (
    <main>
      <IntroductionSection />
      <WhatsNewSection />
      <PreOrderSection />
      <InvestorSection />
      <ContactSection />
    </main>
  );
}
