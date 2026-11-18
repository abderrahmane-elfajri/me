import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  const { t } = useLanguage();

  const filteredProjects =
    filter === 'all'
      ? t.projects.items
      : t.projects.items.filter((p) => p.category === filter);

  const openCaseStudy = (project) => {
    setActiveCaseStudy(project);
    document.body.style.overflow = 'hidden';
  };

  const closeCaseStudy = () => {
    setActiveCaseStudy(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">{t.projects.title}</h2>
      <p className="section-subtitle">{t.projects.subtitle}</p>

      {/* Filter Tabs */}
      <div className="project-filter-tabs">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          {t.projects.filterAll} ({t.projects.items.length})
        </button>
        <button
          className={`filter-btn ${filter === 'live' ? 'active' : ''}`}
          onClick={() => setFilter('live')}
        >
          {t.projects.filterLive}
        </button>
        <button
          className={`filter-btn ${filter === 'app' ? 'active' : ''}`}
          onClick={() => setFilter('app')}
        >
          {t.projects.filterApp}
        </button>
        <button
          className={`filter-btn ${filter === 'prototype' ? 'active' : ''}`}
          onClick={() => setFilter('prototype')}
        >
          {t.projects.filterProto}
        </button>
      </div>

      <div className="project-list">
        {filteredProjects.map((project) => (
          <div className="project-item" key={project.id}>
            <div className="project-banner">
              <span className={`project-type-badge ${project.badgeClass}`}>
                {project.badgeText}
              </span>
              <i className={project.icon}></i>
            </div>
            <div className="project-content">
              {project.typeLabel && (
                <span className="project-sub-type">{project.typeLabel}</span>
              )}
              <h3>{project.title}</h3>
              {project.role && (
                <p className="project-role-tag">
                  <i className="fa-solid fa-user-gear"></i> {project.role}
                </p>
              )}
              <p className="project-desc">{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag, tIdx) => (
                  <span className="project-tag" key={tIdx}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i> {project.liveText || t.projects.liveSite}
                  </a>
                )}
                <button
                  type="button"
                  className="btn btn-case-study"
                  onClick={() => openCaseStudy(project)}
                >
                  <i className="fa-solid fa-layer-group"></i> {t.projects.caseDetails}
                </button>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-code"
                  >
                    <i className="fa-brands fa-github"></i> {t.projects.sourceCode}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Case Study Modal */}
      {activeCaseStudy && (
        <div className="case-modal-overlay" onClick={closeCaseStudy}>
          <div
            className="case-modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="case-modal-header">
              <div className="case-modal-header-info">
                <span className={`project-type-badge ${activeCaseStudy.badgeClass}`}>
                  {activeCaseStudy.badgeText}
                </span>
                <h2>{activeCaseStudy.title}</h2>
                {activeCaseStudy.role && (
                  <p className="case-modal-role">
                    <i className="fa-solid fa-user-tag"></i> {activeCaseStudy.role}
                  </p>
                )}
              </div>
              <button
                type="button"
                className="case-modal-close"
                onClick={closeCaseStudy}
                aria-label="Close Case Study"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div className="case-modal-body">
              <div className="case-modal-section">
                <h4>
                  <i className="fa-solid fa-align-left"></i> Project Overview
                </h4>
                <p>{activeCaseStudy.desc}</p>
              </div>

              {activeCaseStudy.architecture && (
                <div className="case-modal-section">
                  <h4>
                    <i className="fa-solid fa-sitemap"></i> {t.projects.modalArchitecture || 'Engineering Architecture'}
                  </h4>
                  <p className="case-architecture-text">{activeCaseStudy.architecture}</p>
                </div>
              )}

              {activeCaseStudy.features && activeCaseStudy.features.length > 0 && (
                <div className="case-modal-section">
                  <h4>
                    <i className="fa-solid fa-list-check"></i> {t.projects.modalKeyFeatures || 'Key Deliverables & Features'}
                  </h4>
                  <ul className="case-features-list">
                    {activeCaseStudy.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <i className="fa-solid fa-circle-check"></i>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="case-modal-section">
                <h4>
                  <i className="fa-solid fa-code"></i> {t.projects.modalTechStack || 'Tech Stack'}
                </h4>
                <div className="case-tags-grid">
                  {activeCaseStudy.tags.map((tag, tgIdx) => (
                    <span className="project-tag" key={tgIdx}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="case-modal-footer">
              {activeCaseStudy.liveUrl && (
                <a
                  href={activeCaseStudy.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> {activeCaseStudy.liveText || t.projects.liveSite}
                </a>
              )}
              {activeCaseStudy.githubUrl && (
                <a
                  href={activeCaseStudy.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  <i className="fa-brands fa-github"></i> {t.projects.sourceCode}
                </a>
              )}
              <button type="button" className="btn btn-close" onClick={closeCaseStudy}>
                {t.projects.closeModal || 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
