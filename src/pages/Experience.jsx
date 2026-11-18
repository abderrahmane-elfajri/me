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
            <span className="timeline-badge">{exp.badge}</span>
            <h4>{exp.title}</h4>
            <p className="timeline-location">
              <i className={exp.icon}></i> {exp.location}
            </p>
            <p>{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
