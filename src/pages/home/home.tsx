import ContactSection from './Contact/ContactSection';
import IntroductionSection from './Introduction/IntroductionSection';
import ReceiptShowcase from './ReceiptShowcase/ReceiptShowcase';
import ServiceSelection from './ServiceSelection/ServiceSelection';
import TrackingShowcase from './TrackingShowcase/TrackingShowcase';
import WhyLogistySection from './WhyLogisty/WhyLogistySection';

export default function Home() {
  return (
    <main>
      <IntroductionSection />
      <WhyLogistySection/>
      <ReceiptShowcase/>
      <TrackingShowcase/>
      <ServiceSelection/>
      <ContactSection />
    </main>
  );
}
