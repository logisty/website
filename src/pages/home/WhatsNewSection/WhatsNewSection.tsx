import './WhatsNewSection.css';

import featureImage1 from '../../../assets/1.png'; // Assuming these paths are correct
import featureImage2 from '../../../assets/2.png';
import featureImage3 from '../../../assets/3.png';
import featureImage4 from '../../../assets/4.png';

const features = [
  {
    title: 'Real-time Scheduling of Pickup',
    bullets: [
      { text: 'Instantly schedule pickups', icon: '⚡' },
      { text: 'Reduce waiting times', icon: '⏱️' },
      { text: 'Improve delivery speed', icon: '🚀' },
    ],
    imageUrl: featureImage1,
  },
  {
    title: 'Peer-to-Peer Network',
    bullets: [
      { text: 'Connect senders directly', icon: '🤝' },
      { text: 'Nearby transporters', icon: '📍' },
      { text: 'Faster & more flexible', icon: '💨' },
    ],
    imageUrl: featureImage2,
  },
  {
    title: 'Freelance Transporters Network',
    bullets: [
      { text: 'Leverage community drivers', icon: '👥' },
      { text: 'Increase capacity', icon: '📈' },
      { text: 'Wider coverage', icon: '🗺️' },
    ],
    imageUrl: featureImage3,
  },
  {
    title: 'Smart Route Suggestions & Tracking',
    bullets: [
      { text: 'AI-powered optimization', icon: '🧠' },
      { text: 'Fastest paths suggested', icon: '🛣️' },
      { text: 'Real-time parcel updates', icon: '🛰️' },
    ],
    imageUrl: featureImage4,
  },
];

export default function WhatsNewSection() {
  return (
    <section id="whats-new" className="whats-new-section">
      {/* This div will create the top-down yellow glow effect */}
      <div className="section-top-glow-effect"></div>

      <h2 className="section-title">What’s New & Different</h2>
      <div className="features-grid">
        {features.map(({ title, bullets, imageUrl }) => (
          <div key={title} className="feature-card">
            <div className="card-image-wrapper">
              <img src={imageUrl} alt={title} className="card-image" />
            </div>
            <div className="card-content">
              <h3 className="card-title">{title}</h3>
              <ul className="bullet-list">
                {bullets.map((item, index) => (
                  <li key={index} className="bullet-item">
                    <span className="bullet-icon">{item.icon}</span> {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}