import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section className="experience" id="experience">
      <h2 className="section-title">{t.experience.title}</h2>
      <p className="section-subtitle">{t.experience.subtitle}</p>

      <div className="timeline">
        {t.experience.items.map((exp, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-top-row">
              <span className="timeline-badge">{exp.badge}</span>
              <span className="timeline-location">
                <i className={exp.icon}></i> {exp.location}
              </span>
            </div>
            <h4>{exp.title}</h4>
            <p className="timeline-desc">{exp.desc}</p>
            {exp.responsibilities && exp.responsibilities.length > 0 && (
              <ul className="timeline-responsibilities">
                {exp.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx}>
                    <i className="fa-solid fa-check"></i>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
