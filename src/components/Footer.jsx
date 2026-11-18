import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer>
      <div className="footer-text">
        <p>&copy; 2026 Abderrahmane El Fajri. {t.footer.rights}</p>
      </div>
      <div className="footer-social">
        <a
          href="https://www.linkedin.com/in/abderrahmane-el-fajri/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a
          href="https://github.com/abderrahmane-elfajri"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://wa.me/212605555137"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
