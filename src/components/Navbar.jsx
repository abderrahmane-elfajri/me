import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={isScrolled ? 'header-scrolled' : ''}>
      <Link to="/" className="logo">
        ABDO<span>.</span>
      </Link>

      <nav className={isOpen ? 'active' : ''}>
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
          {t.nav.home}
        </NavLink>
        <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
          {t.nav.services}
        </NavLink>
        <NavLink to="/skills" className={({ isActive }) => (isActive ? 'active' : '')}>
          {t.nav.skills}
        </NavLink>
        <NavLink to="/education" className={({ isActive }) => (isActive ? 'active' : '')}>
          {t.nav.education}
        </NavLink>
        <NavLink to="/experience" className={({ isActive }) => (isActive ? 'active' : '')}>
          {t.nav.experience}
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
          {t.nav.projects}
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
          {t.nav.contact}
        </NavLink>
      </nav>

      <div className="header-actions">
        <div className="lang-switcher">
          <button
            type="button"
            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
            onClick={() => setLanguage('en')}
            aria-label="Switch to English"
          >
            EN
          </button>
          <button
            type="button"
            className={`lang-btn ${language === 'fr' ? 'active' : ''}`}
            onClick={() => setLanguage('fr')}
            aria-label="Passer au Français"
          >
            FR
          </button>
          <button
            type="button"
            className={`lang-btn ${language === 'ar' ? 'active' : ''}`}
            onClick={() => setLanguage('ar')}
            aria-label="التحويل إلى العربية"
          >
            عربي
          </button>
        </div>

        <i
          className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}
          id="menu-icon"
          aria-label="Toggle Navigation Menu"
          onClick={() => setIsOpen(!isOpen)}
        ></i>
      </div>
    </header>
  );
};

export default Navbar;
