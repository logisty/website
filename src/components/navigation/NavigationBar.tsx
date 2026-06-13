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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      if (!isVisible) setMobileMenuOpen(false);
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
    <>
      <nav className={`navigation-bar ${!visible ? "navigation-bar--hidden" : ""}`}>
        <div className="navigation-bar__container">
          
          <div className="navigation-bar__left">
            <Link to="/" className="navigation-bar__logo-link" onClick={() => setMobileMenuOpen(false)}>
              <img src={logo} alt="Logisty Logo" className="navigation-bar__logo-image" />
            </Link>
            
            {/* Desktop Link Array */}
            <div className="navigation-bar__strategic-links">
              <NavLink to="/ecosystem" className="strat-link">{t("nav.ecosystem")}</NavLink>
              <NavLink to="/investors" className="strat-link">{t("nav.investors")}</NavLink>
              <NavLink to="/backers" className="strat-link">{t("nav.backers")}</NavLink>
              <NavLink to="/roadmap" className="strat-link">{t("nav.roadmap")}</NavLink>
              <NavLink to="/about" className="strat-link">{t("nav.about")}</NavLink>
            </div>
          </div>

          <div className="navigation-bar__actions">
            <div className="navigation-bar__product-btns">
              <Link to="/logisty-app" className="nav-btn btn-app">
                <img src={appIcon} alt="" className="nav-btn-png" />
                <span className="btn-text">{t("nav.products.logisty")}</span>
              </Link>

              <Link to="/partner-app" className="nav-btn btn-partner">
                <img src={partnerIcon} alt="" className="nav-btn-png" />
                <span className="btn-text">{t("nav.products.partner")}</span>
              </Link>
              
              <Link to="/business-app" className="nav-btn btn-business">
                <img src={businessIcon} alt="" className="nav-btn-png" />
                <span className="btn-text">{t("nav.products.business")}</span>
              </Link>

              {/* Language Selector Selector Component */}
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

            {/* Micro Smartphone View Switcher Button */}
            <button 
              className="mobile-menu-toggle" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
                {mobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </nav>

      {/* Slide Drawer for Navigation Links on Smartphone Layouts */}
      <div className={`mobile-drawer ${mobileMenuOpen && visible ? "mobile-drawer--open" : ""}`}>
        <NavLink to="/ecosystem" className="strat-link" onClick={() => setMobileMenuOpen(false)}>{t("nav.ecosystem")}</NavLink>
        <NavLink to="/investors" className="strat-link" onClick={() => setMobileMenuOpen(false)}>{t("nav.investors")}</NavLink>
        <NavLink to="/backers" className="strat-link" onClick={() => setMobileMenuOpen(false)}>{t("nav.backers")}</NavLink>
        <NavLink to="/roadmap" className="strat-link" onClick={() => setMobileMenuOpen(false)}>{t("nav.roadmap")}</NavLink>
        <NavLink to="/about" className="strat-link" onClick={() => setMobileMenuOpen(false)}>{t("nav.about")}</NavLink>
      </div>
    </>
  );
}