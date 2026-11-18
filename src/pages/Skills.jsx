import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section className="skills" id="skills">
      <h2 className="section-title">{t.skills.title}</h2>
      <p className="section-subtitle">{t.skills.subtitle}</p>

      {t.skills.categories.map((cat, idx) => (
        <div className="skills-category" key={idx}>
          <h3 className="category-title">
            <i className={cat.icon}></i> {cat.title}
          </h3>
          <div className="skills-grid">
            {cat.skills.map((skill, sIdx) => (
              <div className="skill-box" key={sIdx}>
                <div className="skill-header">
                  <h3>
                    <i className={skill.icon}></i> {skill.name}
                  </h3>
                  <span className="skill-percentage-text">{skill.level}</span>
                </div>
                <div className="skill-bar">
                  <span className={`skill-fill ${skill.className}`}></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
