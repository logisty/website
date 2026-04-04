import { Link, NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "./NavigationBar.css";

// Assets
import logo from "@assets/logisty-full-logo.png";
import partnerIcon from "@assets/logisty-partner.png";
import businessIcon from "@assets/logisty-business.png";
import appIcon from "@assets/logisty_app.png";
import ukFlag from "@assets/flags/gb.png"; 
import frFlag from "@assets/flags/fr.png";
import tnFlag from "@assets/flags/tn.png";

// Hooks & Store
import useLanguageStore from "@store/useLanguageStore";
import { useTranslation } from "@hooks/useTranslations";

export default function NavigationBar() {
  const { language, setLanguage } = useLanguageStore();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { t } = useTranslation();

  const languages = [
    { code: "en", label: "English", flag: ukFlag }, 
    { code: "fr", label: "Français", flag: frFlag },
    { code: "tn", label: "العربية", flag: tnFlag },
  ];

  const handleLanguageChange = (code: string) => {
    setLanguage(code as any);
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLanguage = languages.find((l) => l.code === language);

  return (
    <nav className={`navigation-bar ${!visible ? "navigation-bar--hidden" : ""}`}>
      <div className="navigation-bar__container">
        
        <div className="navigation-bar__left">
          <Link to="/" className="navigation-bar__logo-link">
            <img src={logo} alt="Logisty Logo" className="navigation-bar__logo-image" />
          </Link>
          
          <div className="navigation-bar__strategic-links">
            <NavLink to="/ecosystem" className="strat-link">{t("ecosystem") || "Ecosystem"}</NavLink>
            <NavLink to="/investors" className="strat-link">{t("investors") || "Investors"}</NavLink>
            <NavLink to="/backers" className="strat-link">{t("backers") || "Backers"}</NavLink>
            <NavLink to="/roadmap" className="strat-link">{t("roadmap") || "Roadmap"}</NavLink>
            <NavLink to="/about" className="strat-link">{t("about") || "About"}</NavLink>
          </div>
        </div>

        <div className="navigation-bar__actions">
          <div className="navigation-bar__product-btns">
            <Link to="/logisty-app" className="nav-btn btn-app">
              <img src={appIcon} alt="" className="nav-btn-png" />
              <span className="btn-text">{t("logisty") || "Logisty"}</span>
            </Link>

            <Link to="/partner-app" className="nav-btn btn-partner">
              <img src={partnerIcon} alt="" className="nav-btn-png" />
              <span className="btn-text">{t("partner") || "Partner"}</span>
            </Link>
            
            <Link to="/business-app" className="nav-btn btn-business">
              <img src={businessIcon} alt="" className="nav-btn-png" />
              <span className="btn-text">{t("business") || "Business"}</span>
            </Link>

            {/* COMPACT BRUTALIST LANGUAGE SELECTOR */}
            <div className="language-dropdown-wrapper" ref={dropdownRef}>
              <button 
                className={`nav-btn btn-lang ${open ? 'active-dropdown' : ''}`} 
                onClick={() => setOpen(!open)}
              >
                <div className="flag-container-compact">
                   <img src={currentLanguage?.flag} alt="" className="lang-flag-fixed" />
                </div>
                <span className="btn-text">{language.toUpperCase()}</span>
                <svg 
                  className={`dropdown-chevron ${open ? "open" : ""}`} 
                  width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              
              {open && (
                <ul className="brutalist-dropdown-menu compact-menu">
                  {languages.map((l) => (
                    <li
                      key={l.code}
                      onClick={() => handleLanguageChange(l.code)}
                      className={`brutalist-dropdown-item-compact ${l.code === language ? "selected" : ""}`}
                    >
                      <div className="flag-container-compact">
                        <img src={l.flag} alt="" className="lang-flag-fixed" />
                      </div>
                      <span className="item-label-compact">{l.label}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
}