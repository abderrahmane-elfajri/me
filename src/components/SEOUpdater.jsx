import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const SEOUpdater = () => {
  const location = useLocation();
  const { language, t } = useLanguage();

  useEffect(() => {
    const pathname = location.pathname;

    let pageTitle = '';
    let pageDesc = '';

    const baseTitle = 'Abderrahmane El Fajri';

    switch (pathname) {
      case '/services':
        pageTitle = `${t.nav.services} | ${baseTitle}`;
        pageDesc = t.services?.subtitle || 'Explore web development services and solutions offered by Abderrahmane El Fajri in Casablanca, Morocco.';
        break;
      case '/skills':
        pageTitle = `${t.nav.skills} | ${baseTitle}`;
        pageDesc = t.skills?.subtitle || 'Technical stack, frameworks, tools, and proficiencies in React, Laravel, Python, and SQL.';
        break;
      case '/education':
        pageTitle = `${t.nav.education} & Certifications | ${baseTitle}`;
        pageDesc = t.education?.subtitle || 'Academic degrees, university education, and verified technical certifications.';
        break;
      case '/experience':
        pageTitle = `${t.nav.experience} | ${baseTitle}`;
        pageDesc = t.experience?.subtitle || 'Professional work experience and verified software engineering track record.';
        break;
      case '/projects':
        pageTitle = `${t.nav.projects} & Case Studies | ${baseTitle}`;
        pageDesc = t.projects?.subtitle || 'Featured real-world web applications, client solutions, and interactive platforms.';
        break;
      case '/contact':
        pageTitle = `${t.nav.contact} | ${baseTitle}`;
        pageDesc = t.contact?.subtitle || 'Get in touch for freelance projects, full-time opportunities, or web development inquiries.';
        break;
      default:
        pageTitle = `${baseTitle} | Full-Stack Developer & Digital Growth Specialist`;
        pageDesc = t.home?.bio || 'Full-Stack Developer based in Casablanca, Morocco. Specialized in React, Laravel, Python, and modern web solutions.';
        break;
    }

    document.title = pageTitle;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', pageDesc);
    }

    // Update OpenGraph Title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', pageTitle);
    }

    // Update OpenGraph Description
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', pageDesc);
    }

    // Update Twitter Title
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) {
      twTitle.setAttribute('content', pageTitle);
    }
  }, [location.pathname, language, t]);

  return null;
};

export default SEOUpdater;
