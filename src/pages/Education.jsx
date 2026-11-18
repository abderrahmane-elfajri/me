import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Education = () => {
  const { t, isRTL } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [activeModalCert, setActiveModalCert] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const baseUrl = import.meta.env.BASE_URL;

  const getFileUrl = (fileName) => {
    // Ensure clean URL joining
    const base = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    return `${base}certificates/${fileName}`;
  };

  const handleCopyId = (credentialId) => {
    if (!credentialId) return;
    navigator.clipboard.writeText(credentialId).then(() => {
      setCopiedId(credentialId);
      setTimeout(() => setCopiedId(null), 2000);
    }).catch(() => {
      // Fallback
      setCopiedId(credentialId);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalCert(null);
      }
    };
    if (activeModalCert) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeModalCert]);

  const filteredCerts = filter === 'all'
    ? t.education.certifications
    : t.education.certifications.filter((c) => c.category === filter);

  return (
    <section className="education" id="education">
      <h2 className="section-title">{t.education.title}</h2>
      <p className="section-subtitle">{t.education.subtitle}</p>

      {/* Degrees Timeline */}
      <div className="timeline">
        {t.education.degrees.map((item, idx) => (
          <div className="timeline-item" key={idx}>
            <span className="timeline-badge">{item.badge}</span>
            <h4>{item.title}</h4>
            <p className="timeline-location">
              <i className={item.icon}></i> {item.location}
            </p>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Professional Certifications Section */}
      <div className="certifications-section">
        <h2 className="section-title" style={{ marginTop: '5rem' }}>
          {t.education.certTitle}
        </h2>
        <p className="section-subtitle">{t.education.certSubtitle}</p>

        {/* Category Filters */}
        <div className="cert-filter-tabs">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            {t.education.filterAll} ({t.education.certifications.length})
          </button>
          <button
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            <i className="fa-brands fa-react"></i> {t.education.filterWeb}
          </button>
          <button
            className={`filter-btn ${filter === 'ai' ? 'active' : ''}`}
            onClick={() => setFilter('ai')}
          >
            <i className="fa-solid fa-brain"></i> {t.education.filterAI}
          </button>
          <button
            className={`filter-btn ${filter === 'data' ? 'active' : ''}`}
            onClick={() => setFilter('data')}
          >
            <i className="fa-brands fa-python"></i> {t.education.filterData}
          </button>
          <button
            className={`filter-btn ${filter === 'tools' ? 'active' : ''}`}
            onClick={() => setFilter('tools')}
          >
            <i className="fa-solid fa-code-branch"></i> {t.education.filterTools}
          </button>
        </div>

        {/* Certifications Cards Grid */}
        <div className="cert-grid-v2">
          {filteredCerts.map((cert) => {
            const fileUrl = getFileUrl(cert.file);
            const isCopied = copiedId === cert.credentialId;

            return (
              <div className="cert-card-v2" key={cert.id}>
                {/* Header: Icon & Badges */}
                <div className="cert-header">
                  <div className="cert-icon-wrapper">
                    <i className={cert.icon}></i>
                  </div>
                  <div className="cert-issuer-meta">
                    <span className="cert-issuer-tag">{cert.issuer}</span>
                    <span className="cert-date-tag">
                      <i className="fa-regular fa-calendar-check"></i> {cert.date}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h4 className="cert-title">{cert.title}</h4>

                {/* Topics / Skills Tags */}
                {cert.topics && cert.topics.length > 0 && (
                  <div className="cert-tags">
                    {cert.topics.map((tag, tIdx) => (
                      <span className="cert-tag" key={tIdx}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Credential Reference Box */}
                <div className="cert-credential-box">
                  <div className="cert-credential-header">
                    <span className="cert-ref-label">
                      <i className="fa-solid fa-fingerprint"></i> {t.education.credentialLabel}
                    </span>
                    <button
                      type="button"
                      className={`cert-copy-btn ${isCopied ? 'copied' : ''}`}
                      onClick={() => handleCopyId(cert.credentialId)}
                      title={t.education.copyId}
                      aria-label={t.education.copyId}
                    >
                      <i className={isCopied ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
                      <span>{isCopied ? t.education.copied : t.education.copyId}</span>
                    </button>
                  </div>
                  <code className="cert-ref-code">{cert.credentialId}</code>
                </div>

                {/* Action Buttons */}
                <div className="cert-actions">
                  {/* Quick Preview modal button */}
                  <button
                    type="button"
                    className="btn-cert-preview"
                    onClick={() => setActiveModalCert(cert)}
                    title="Quick Preview"
                  >
                    <i className={cert.isImage ? "fa-regular fa-image" : "fa-regular fa-eye"}></i>
                    <span>{cert.isImage ? "Aperçu Image" : (isRTL ? "معاينة المستند" : "Quick Preview")}</span>
                  </button>

                  {/* Direct PDF / Document link */}
                  <a
                    href={fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cert-doc"
                    title={t.education.viewDoc}
                  >
                    <i className={cert.isImage ? "fa-solid fa-file-image" : "fa-solid fa-file-pdf"}></i>
                    <span>{cert.isImage ? "Image HD" : "PDF"}</span>
                  </a>

                  {/* Online Verification Link (if available) */}
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-cert-verify"
                      title={t.education.verifyOnline}
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      <span>{t.education.verifyOnline}</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Preview Modal */}
      {activeModalCert && (
        <div
          className="cert-modal-backdrop"
          onClick={() => setActiveModalCert(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
        >
          <div
            className="cert-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="cert-modal-header">
              <div className="cert-modal-info">
                <h3 id="cert-modal-title" className="cert-modal-title">
                  <i className={activeModalCert.icon}></i> {activeModalCert.title}
                </h3>
                <p className="cert-modal-meta">
                  <strong>{activeModalCert.issuer}</strong> &bull; {activeModalCert.date} &bull; ID: <code>{activeModalCert.credentialId}</code>
                </p>
              </div>
              <div className="cert-modal-header-actions">
                <a
                  href={getFileUrl(activeModalCert.file)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-modal-action-btn"
                  title={t.education.modalOpenNewTab}
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  <span>{t.education.modalOpenNewTab}</span>
                </a>
                <button
                  type="button"
                  className="cert-modal-close-btn"
                  onClick={() => setActiveModalCert(null)}
                  title={t.education.modalClose}
                  aria-label={t.education.modalClose}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>

            {/* Modal Body: PDF iframe or Image */}
            <div className="cert-modal-body">
              {activeModalCert.isImage ? (
                <div className="cert-modal-img-container">
                  <img
                    src={getFileUrl(activeModalCert.file)}
                    alt={activeModalCert.title}
                    className="cert-modal-img"
                  />
                </div>
              ) : (
                <iframe
                  src={getFileUrl(activeModalCert.file)}
                  title={activeModalCert.title}
                  className="cert-modal-iframe"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;
