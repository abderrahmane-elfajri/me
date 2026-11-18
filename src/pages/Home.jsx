import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from '../components/Typewriter';
import HeroVisual from '../components/HeroVisual';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { t } = useLanguage();

  return (
    <section className="home" id="home">
      <div className="home-visual-area">
        <HeroVisual />
      </div>
      <div className="home-content">
        <h1>
          {t.home.greeting} <span>{t.home.name}</span>
        </h1>
        <h3 className="typing-text">
          <span className="role-prefix">{t.home.rolePrefix}</span>{' '}
          <Typewriter roles={t.home.roles} />
        </h3>
        <p>{t.home.bio}</p>

        <div className="hero-highlights">
          <span className="highlight-badge">
            <i className="fa-solid fa-location-dot"></i> {t.home.location}
          </span>
          <span className="highlight-badge">
            <i className="fa-solid fa-briefcase"></i> {t.home.availability}
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
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/abderrahmane-elfajri"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://x.com/Abderrahma58440"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter) Profile"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/abderrahmanfajri"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>

        <div className="home-buttons">
          <Link to="/projects" className="btn btn-primary">
            <i className="fa-solid fa-laptop-code"></i> {t.home.viewWork}
          </Link>
          <a
            href="https://wa.me/212605555137?text=Bonjour%20Abderrahmane,%20j'ai%20consult%C3%A9%20votre%20portfolio..."
            className="btn whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-whatsapp"></i> {t.home.whatsapp}
          </a>
          <Link to="/contact" className="btn">
            <i className="fa-solid fa-paper-plane"></i> {t.home.contact}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
