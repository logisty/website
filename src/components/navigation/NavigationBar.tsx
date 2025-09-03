import { Link } from 'react-router-dom';
import './NavigationBar.css';
import logo from '../../assets/logisty-full-logo.png';

export default function NavigationBar() {
  return (
    <nav className="navigation-bar">
      {/* Logo Section - Now clickable and links to home */}
      <div className="navigation-bar__logo">
        <Link to="/"> {/* Use Link component to make logo clickable and navigate to the home route */}
          <img src={logo} alt="Logisty Logo" className="navigation-bar__logo-image" />
        </Link>
      </div>

      {/* Center Links */}
      <div className="navigation-bar__links">
        <Link to="/invest">Investor Program</Link>
        <Link to="/preorder">Pre-Order Program</Link>
        {/* <Link to="/blog">Blog</Link> */}
      </div>

      {/* Right CTA */}
      <div className="navigation-bar__cta">
        <button className="cta-button">Get Started</button>
      </div>
    </nav>
  );
}