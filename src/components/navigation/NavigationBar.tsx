import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "./NavigationBar.css";
import logo from "@assets/logisty-full-logo.png";
import partnerIcon from "@assets/logisty-partner.png";
import businessIcon from "@assets/logisty-business.png";
import usFlag from "@assets/flags/us.png";
import frFlag from "@assets/flags/fr.png";
import tnFlag from "@assets/flags/tn.png";
import useLanguageStore from "@store/useLanguageStore";
import { useTranslation } from "@hooks/useTranslations";

export default function NavigationBar() {
  const { language, setLanguage } = useLanguageStore();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { t } = useTranslation();

  const languages = [
    { code: "us", label: "English", flag: usFlag },
    { code: "fr", label: "Français", flag: frFlag },
    { code: "tn", label: "العربية", flag: tnFlag },
  ];

  const handleLanguageChange = (code: "us" | "fr" | "tn") => {
    setLanguage(code);
    setOpen(false);
  };

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
    <nav className="navigation-bar">
      <div className="navigation-bar__container">
        <div className="navigation-bar__logo-container">
          <Link to="/" className="navigation-bar__logo-link">
            <img src={logo} alt="Logisty Logo" className="navigation-bar__logo-image" />
          </Link>
        </div>

        <div className="navigation-bar__actions">
          {/* Partner Link */}
          <Link to="/partner-app" className="nav-btn btn-partner">
            <img src={partnerIcon} alt="" className="nav-btn-png" />
            <span className="btn-text">{t("partner") || "Partner"}</span>
          </Link>
          
          {/* Business Link */}
          <Link to="/business-app" className="nav-btn btn-business">
            <img src={businessIcon} alt="" className="nav-btn-png" />
            <span className="btn-text">{t("business") || "Business"}</span>
          </Link>

          <div className="language-dropdown" ref={dropdownRef}>
            <button
              className="language-button-refined"
              onClick={() => setOpen(!open)}
            >
              <img src={currentLanguage?.flag} alt="" className="language-flag-clean" />
              <span className="lang-code-text">{language.toUpperCase()}</span>
              <svg className={`dropdown-icon-minimal ${open ? "open" : ""}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            
            {open && (
              <ul className="language-options-refined">
                {languages.map((l) => (
                  <li
                    key={l.code}
                    onClick={() => handleLanguageChange(l.code as "us" | "fr" | "tn")}
                    className={`language-option-refined ${l.code === language ? "selected" : ""}`}
                  >
                    <img src={l.flag} alt="" className="language-flag-clean" />
                    <span>{l.label}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}