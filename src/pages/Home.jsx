import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from '../components/Typewriter';
import HeroVisual from '../components/HeroVisual';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { t } = useLanguage();
  const cvPath = `${import.meta.env.BASE_URL}Abderrahmane_El_Fajri_CV.pdf`;

  return (
    <section className="home" id="home">
      <div className="home-visual-area">
        <HeroVisual />
      </div>
      <div className="home-content">
        {/* Recruiter Quick Status Ribbon */}
        <div className="hero-status-ribbon">
          <span className="status-badge open-badge">
            <span className="status-ping-dot"></span>
            {t.home.openToWork}
          </span>
          <span className="status-badge">
            <i className="fa-solid fa-briefcase"></i> {t.home.jobType}
          </span>
          <span className="status-badge">
            <i className="fa-solid fa-location-dot"></i> {t.home.locationStatus}
          </span>
        </div>

        <h1>
          {t.home.greeting} <span>{t.home.name}</span>
        </h1>
        <h3 className="typing-text">
          <span className="role-prefix">{t.home.rolePrefix}</span>{' '}
          <Typewriter roles={t.home.roles} />
        </h3>
        <p className="hero-bio">{t.home.bio}</p>

        <div className="hero-highlights">
          <span className="highlight-badge">
            <i className="fa-solid fa-laptop-code"></i> Full-Stack Web Development
          </span>
          <span className="highlight-badge">
            <i className="fa-solid fa-layer-group"></i> React & Laravel / SQL
          </span>
          <span className="highlight-badge">
            <i className="fa-solid fa-globe"></i> {t.home.languages}
          </span>
        </div>

        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/abderrahmane-el-fajri/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/abderrahmane-elfajri"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            title="GitHub Profile"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://x.com/Abderrahma58440"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter) Profile"
            title="X (Twitter) Profile"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/abderrahmanfajri"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            title="Instagram Profile"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>

        <div className="home-buttons">
          <a
            href={cvPath}
            download="Abderrahmane_El_Fajri_CV.pdf"
            className="btn btn-cv"
            title="Download Professional CV (PDF)"
          >
            <i className="fa-solid fa-file-arrow-down"></i> {t.home.downloadCv}
          </a>
          <Link to="/projects" className="btn btn-primary">
            <i className="fa-solid fa-laptop-code"></i> {t.home.viewProjects}
          </Link>
          <Link to="/contact" className="btn">
            <i className="fa-solid fa-paper-plane"></i> {t.home.contactMe}
          </Link>
          <a
            href="https://wa.me/212605555137?text=Bonjour%20Abderrahmane,%20j'ai%20consult%C3%A9%20votre%20portfolio..."
            className="btn whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
            title="Chat directly on WhatsApp"
          >
            <i className="fa-brands fa-whatsapp"></i> {t.home.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
