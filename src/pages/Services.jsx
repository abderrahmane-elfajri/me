import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const serviceIcons = [
    'fa-solid fa-code',
    'fa-solid fa-laptop-code',
    'fa-solid fa-network-wired',
    'fa-solid fa-hashtag',
    'fa-solid fa-bullhorn',
    'fa-solid fa-wand-magic-sparkles',
  ];

  return (
    <section className="services" id="services">
      <h2 className="section-title">{t.services.title}</h2>
      <p className="section-subtitle">{t.services.subtitle}</p>

      <div className="services-container">
        {t.services.items.map((service, idx) => (
          <div className="service-box" key={idx}>
            <i className={serviceIcons[idx]}></i>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>

      <div className="process-section">
        <h2 className="section-title" style={{ marginTop: '6rem' }}>
          {t.services.processTitle}
        </h2>
        <p className="section-subtitle">{t.services.processSubtitle}</p>

        <div className="process-container">
          {t.services.steps.map((step, idx) => (
            <div className="process-step" key={idx}>
              <span className="process-number">{step.num}</span>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
