import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "./NavigationBar.css";
import logo from "@assets/logisty-full-logo.png";
import usFlag from "@assets/flags/us.png";
import frFlag from "@assets/flags/fr.png";
import tnFlag from "@assets/flags/tn.png";
import useLanguageStore from "@store/useLanguageStore";
import { useTranslation } from "@hooks/useTranslations";



export default function NavigationBar() {
  const { language, setLanguage } = useLanguageStore();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { t } = useTranslation(); // Get the t function

  const languages = [
    { code: "us", label: "English", flag: usFlag },
    { code: "fr", label: "Français", flag: frFlag },
    { code: "tn", label: "العربية", flag: tnFlag },
  ];

  const toggleDropdown = () => setOpen((prev) => !prev);

  const handleLanguageChange = (code: "us" | "fr" | "tn") => {
    setLanguage(code);
    setOpen(false);
  };

  // Close dropdown when clicking outside
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
      {/* Logo */}
      <div className="navigation-bar__logo">
        <Link to="/">
          <img src={logo} alt="Logisty Logo" className="navigation-bar__logo-image" />
        </Link>
      </div>

      {/* Links */}
      {/* <div className="navigation-bar__links">
        <Link to="/invest">{t("investorProgram")}</Link>
        <Link to="/preorder">{t("preOrderProgram")}</Link>
      </div> */}

      {/* CTA + Language Selector */}
      <div className="navigation-bar__cta">
        <button className="cta-button">{t("getEarlyAccess")}</button>

        <div className="language-dropdown" ref={dropdownRef}>
          <button
            className="language-button"
            onClick={toggleDropdown}
            aria-label={`Select language, current: ${currentLanguage?.label}`}
            aria-expanded={open}
          >
            <img
              src={currentLanguage?.flag}
              alt={`${currentLanguage?.label} flag`}
              className="language-flag"
            />
            {/* <span className="language-label">{currentLanguage?.label}</span> */}
            <svg
              className={`dropdown-icon ${open ? "open" : ""}`}
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 4L6 8L10 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {open && (
            <ul className="language-options" role="menu">
              {languages.map((l) => (
                <li
                  key={l.code}
                  onClick={() => handleLanguageChange(l.code as "us" | "fr" | "tn")}
                  className={`language-option ${l.code === language ? "selected" : ""}`}
                  role="menuitem"
                  aria-label={`Select ${l.label}`}
                >
                  <img src={l.flag} alt={`${l.label} flag`} className="language-flag" />
                  <span>{l.label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}