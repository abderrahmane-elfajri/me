import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const { t } = useLanguage();

  const filteredProjects =
    filter === 'all'
      ? t.projects.items
      : t.projects.items.filter((p) => p.category === filter);

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
          className={`filter-btn ${filter === 'prototype' ? 'active' : ''}`}
          onClick={() => setFilter('prototype')}
        >
          {t.projects.filterProto}
        </button>
        <button
          className={`filter-btn ${filter === 'app' ? 'active' : ''}`}
          onClick={() => setFilter('app')}
        >
          {t.projects.filterApp}
        </button>
      </div>

      <div className="project-list">
        {filteredProjects.map((project) => (
          <div className="project-item" key={project.id}>
            <div className="project-banner">
              <span className={`project-type-badge ${project.badgeClass}`}>{project.badgeText}</span>
              <i className={project.icon}></i>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag, tIdx) => (
                  <span className="project-tag" key={tIdx}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i> {project.liveText}
                  </a>
                ) : (
                  <Link to="/contact" className="btn btn-primary">
                    <i className="fa-solid fa-info-circle"></i> {t.projects.caseDetails}
                  </Link>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  <i className="fa-brands fa-github"></i> {t.projects.sourceCode}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
