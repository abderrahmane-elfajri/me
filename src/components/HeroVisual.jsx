import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import developerPortraitWebp from '../assets/developer-portrait.webp';
import developerPortraitJpg from '../assets/developer-portrait.jpg';

const HeroVisual = () => {
  const { isRTL } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`hero-visual-wrapper ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Abderrahmane El Fajri - Interactive Developer Visual"
    >
      {/* Ambient Cyber Aura Glow */}
      <div className="hero-visual-glow"></div>

      {/* Outer Rotating Radar Rings */}
      <div className="radar-ring radar-ring-outer"></div>
      <div className="radar-ring radar-ring-middle"></div>
      <div className="radar-ring radar-ring-inner"></div>

      {/* Floating Tech Orbit Badges */}
      <div className="orbit-badge badge-react" title="Frontend Engineering">
        <i className="fa-brands fa-react"></i>
        <span>React</span>
      </div>

      <div className="orbit-badge badge-python" title="Backend & Automation">
        <i className="fa-brands fa-python"></i>
        <span>Python</span>
      </div>

      <div className="orbit-badge badge-laravel" title="Full-Stack Backend">
        <i className="fa-brands fa-laravel"></i>
        <span>Laravel</span>
      </div>

      <div className="orbit-badge badge-database" title="Relational Data Architecture">
        <i className="fa-solid fa-database"></i>
        <span>SQL</span>
      </div>

      {/* Floating Status Pill (Top) */}
      <div className="hero-status-pill">
        <span className="status-ping">
          <span className="status-ping-bubble"></span>
          <span className="status-ping-dot"></span>
        </span>
        <span className="status-text">
          {isRTL ? "متاح للتوظيف والمشاريع" : "Available for Hire & Freelance"}
        </span>
      </div>

      {/* Central High-Tech Developer Avatar Core */}
      <div className="developer-core">
        <div className="core-frame">
          {/* Cyber Corner HUD Brackets */}
          <span className="hud-corner top-left"></span>
          <span className="hud-corner top-right"></span>
          <span className="hud-corner bottom-left"></span>
          <span className="hud-corner bottom-right"></span>

          {/* Developer Photo Portrait & Code HUD */}
          <div className="core-inner">
            <picture className="dev-avatar-picture">
              <source srcSet={developerPortraitWebp} type="image/webp" />
              <img
                src={developerPortraitJpg}
                alt="Abderrahmane El Fajri - Full-Stack Web Developer"
                className="dev-avatar-img"
                width="700"
                height="700"
                loading="eager"
              />
            </picture>
            <div className="dev-avatar-overlay" aria-hidden="true"></div>

            {/* Glowing Code Monogram Tag */}
            <div className="core-code-badge">
              <span className="core-code-brackets">&lt;</span>
              <span className="core-code-name">Abderrahmane</span>
              <span className="core-code-slash">/</span>
              <span className="core-code-brackets">&gt;</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Engineering Badge (Bottom) */}
      <div className="hero-role-pill">
        <i className="fa-solid fa-code"></i>
        <span>Full-Stack Engineer</span>
      </div>
    </div>
  );
};

export default HeroVisual;
