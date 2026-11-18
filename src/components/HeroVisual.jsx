import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

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

          {/* Developer Illustration & Code HUD */}
          <div className="core-inner">
            <svg
              className="dev-avatar-svg"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="cyberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00eeff" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#e05353" />
                </linearGradient>
                <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d4a373" />
                  <stop offset="100%" stopColor="#bc6c25" />
                </linearGradient>
                <linearGradient id="hoodieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e293b" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
                <radialGradient id="codeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(0, 238, 255, 0.4)" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>

              {/* Background circular grid */}
              <circle cx="100" cy="100" r="92" fill="#0b1120" stroke="url(#cyberGrad)" strokeWidth="2.5" />
              <circle cx="100" cy="100" r="85" fill="none" stroke="rgba(0, 238, 255, 0.15)" strokeDasharray="4 4" />
              <circle cx="100" cy="100" r="60" fill="url(#codeGlow)" />

              {/* Shoulders & Hoodie */}
              <path
                d="M40 188 C40 148, 62 135, 100 135 C138 135, 160 148, 160 188 Z"
                fill="url(#hoodieGrad)"
                stroke="rgba(0, 238, 255, 0.3)"
                strokeWidth="1.5"
              />

              {/* Hoodie Collar V */}
              <path d="M85 135 L100 156 L115 135" fill="none" stroke="#00eeff" strokeWidth="2" />

              {/* Neck */}
              <rect x="91" y="112" width="18" height="26" rx="4" fill="url(#skinGrad)" />

              {/* Head / Face */}
              <ellipse cx="100" cy="92" rx="30" ry="34" fill="url(#skinGrad)" />

              {/* Modern Dark Hair Style */}
              <path
                d="M68 85 C68 55, 80 48, 100 48 C120 48, 134 56, 132 86 C124 76, 115 75, 105 78 C95 80, 85 75, 78 84 Z"
                fill="#18181b"
              />

              {/* Modern Developer Glasses */}
              <rect x="76" y="85" width="20" height="13" rx="3" fill="rgba(0, 238, 255, 0.15)" stroke="#00eeff" strokeWidth="2" />
              <rect x="104" y="85" width="20" height="13" rx="3" fill="rgba(0, 238, 255, 0.15)" stroke="#00eeff" strokeWidth="2" />
              <line x1="96" y1="91" x2="104" y2="91" stroke="#00eeff" strokeWidth="2" />

              {/* Friendly smile */}
              <path d="M92 110 Q100 116 108 110" fill="none" stroke="#78350f" strokeWidth="2" strokeLinecap="round" />

              {/* Sleek Over-Ear Headphones */}
              <path d="M68 82 C64 82, 60 88, 60 96 C60 104, 64 110, 68 110" fill="#3b82f6" stroke="#00eeff" strokeWidth="1.5" />
              <path d="M132 82 C136 82, 140 88, 140 96 C140 104, 136 110, 132 110" fill="#3b82f6" stroke="#00eeff" strokeWidth="1.5" />
              <path d="M68 82 C68 54, 132 54, 132 82" fill="none" stroke="#3b82f6" strokeWidth="3" />

              {/* Laptop screen glow at bottom */}
              <path d="M65 178 L135 178 L126 156 L74 156 Z" fill="rgba(0, 238, 255, 0.2)" stroke="#00eeff" strokeWidth="1.5" />
              <rect x="80" y="160" width="40" height="12" rx="2" fill="#0f172a" />
              <text x="100" y="169" textAnchor="middle" fill="#00eeff" fontSize="8" fontFamily="monospace" fontWeight="bold">
                &lt;CODE /&gt;
              </text>
            </svg>

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
