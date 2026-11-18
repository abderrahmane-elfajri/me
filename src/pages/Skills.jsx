import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const getBadgeClass = (level) => {
    const l = (level || '').toLowerCase();
    if (l.includes('production') || l.includes('production ready') || l.includes('prêt') || l.includes('إنتاج')) {
      return 'badge-level-production';
    }
    if (l.includes('certif') || l.includes('معتمد')) {
      return 'badge-level-certified';
    }
    if (l.includes('advanced') || l.includes('avancé') || l.includes('متقدم')) {
      return 'badge-level-advanced';
    }
    if (l.includes('daily') || l.includes('quotidien') || l.includes('يومي')) {
      return 'badge-level-daily';
    }
    return 'badge-level-proficient';
  };

  return (
    <section className="skills" id="skills">
      <h2 className="section-title">{t.skills.title}</h2>
      <p className="section-subtitle">{t.skills.subtitle}</p>

      <div className="skills-categories-container">
        {t.skills.categories.map((cat, idx) => (
          <div className="skills-category-card" key={idx}>
            <div className="category-header">
              <div className="category-header-title">
                <i className={cat.icon}></i>
                <h3>{cat.title}</h3>
              </div>
              {cat.badge && <span className="category-badge">{cat.badge}</span>}
            </div>

            <div className="skills-items-grid">
              {cat.skills.map((skill, sIdx) => (
                <div className="skill-item-card" key={sIdx}>
                  <div className="skill-main-info">
                    <div className="skill-icon-wrapper">
                      <i className={skill.icon}></i>
                    </div>
                    <span className="skill-item-name">{skill.name}</span>
                  </div>
                  <span className={`skill-level-badge ${getBadgeClass(skill.level)}`}>
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
