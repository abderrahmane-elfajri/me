import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section className="experience" id="experience">
      <h2 className="section-title">{t.experience.title}</h2>
      <p className="section-subtitle">{t.experience.subtitle}</p>

      {/* Subsection 1: Professional Work Experience */}
      <div className="experience-subsection">
        <div className="subsection-header">
          <span className="subsection-icon-badge">
            <i className="fa-solid fa-briefcase"></i>
          </span>
          <div className="subsection-header-text">
            <h3 className="subsection-title">
              {t.experience.professionalTitle || 'Professional Work Experience'}
            </h3>
            <p className="subsection-desc">
              {t.experience.professionalSubtitle ||
                'Verified track record in commercial web development and technical operations.'}
            </p>
          </div>
        </div>

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
      </div>

      {/* Subsection 2: Applied Academic & Capstone Experience */}
      {t.experience.academicItems && t.experience.academicItems.length > 0 && (
        <div className="experience-subsection academic-subsection">
          <div className="subsection-header">
            <span className="subsection-icon-badge academic-icon-badge">
              <i className="fa-solid fa-graduation-cap"></i>
            </span>
            <div className="subsection-header-text">
              <h3 className="subsection-title">
                {t.experience.academicTitle || 'Applied Academic & Capstone Engineering'}
              </h3>
              <p className="subsection-desc">
                {t.experience.academicSubtitle ||
                  'End-to-end software systems architected and delivered during formal curriculum.'}
              </p>
            </div>
          </div>

          <div className="timeline academic-timeline">
            {t.experience.academicItems.map((exp, idx) => (
              <div className="timeline-item academic-timeline-item" key={idx}>
                <div className="timeline-top-row">
                  <span className="timeline-badge academic-badge">{exp.badge}</span>
                  <span className="timeline-location">
                    <i className={exp.icon}></i> {exp.location}
                  </span>
                </div>
                <h4>{exp.title}</h4>
                <p className="timeline-desc">{exp.desc}</p>
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <ul className="timeline-responsibilities academic-responsibilities">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx}>
                        <i className="fa-solid fa-code-commit"></i>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
