import ContactSection from './Contact/ContactSection';
import ExplorePlatformSection from './ExplorePlatform/ExplorePlatformSection';
import IntroductionSection from './Introduction/IntroductionSection';

export default function Home() {
  return (
    <main>
      <IntroductionSection />
      <ExplorePlatformSection/>
      <ContactSection />
    </main>
  );
}
