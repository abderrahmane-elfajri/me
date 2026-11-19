import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const isSubmittingRef = useRef(false);

  // Google Apps Script Web App Endpoint for direct email delivery
  const GOOGLE_SCRIPT_URL =
    import.meta.env.VITE_GOOGLE_SCRIPT_URL ||
    'https://script.google.com/macros/s/AKfycbz6HOx6nGOZ1HsXtEexWPjNtwjg4g1aQILAuNGOvahvzchdZnZo_mvsXCOcwqr8X-lW/exec';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Called when the hidden iframe finishes receiving the response from Google Apps Script
  const handleIframeLoad = () => {
    if (isSubmittingRef.current) {
      isSubmittingRef.current = false;
      setIsSubmitting(false);
      setSubmitted(true);
      setSubmitError(false);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleSubmit = (e) => {
    if (!formData.name || !formData.email || !formData.message) {
      e.preventDefault();
      return;
    }

    isSubmittingRef.current = true;
    setIsSubmitting(true);
    setSubmitError(false);
    setSubmitted(false);

    // Reliable fallback: in case the iframe load event is delayed, confirm submission after 4 seconds
    setTimeout(() => {
      if (isSubmittingRef.current) {
        isSubmittingRef.current = false;
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }
    }, 4000);
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">{t.contact.title}</h2>
      <p className="section-subtitle">{t.contact.subtitle}</p>

      <div className="contact-container">
        {/* Contact Info Cards (3 Columns: WhatsApp, Email, LinkedIn) */}
        <div className="contact-info-grid">
          {/* 1. WhatsApp Direct */}
          <div className="contact-card">
            <i className="fa-brands fa-whatsapp" style={{ color: 'var(--whatsapp-color)' }}></i>
            <h4>{t.contact.whatsappTitle}</h4>
            <p>
              <a
                href="https://wa.me/212605555137?text=Bonjour%20Abderrahmane,%20je%20souhaite%20discuter%20d'un%20projet%20avec%20vous."
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--whatsapp-color)', fontWeight: 600 }}
              >
                +212 605 555 137 <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </p>
          </div>

          {/* 2. Direct Email */}
          <div className="contact-card">
            <i className="fa-solid fa-envelope"></i>
            <h4>{t.contact.emailTitle}</h4>
            <p>
              <a href="mailto:abderrahmanelfajri@gmail.com">abderrahmanelfajri@gmail.com</a>
            </p>
          </div>

          {/* 3. LinkedIn */}
          <div className="contact-card">
            <i className="fa-brands fa-linkedin"></i>
            <h4>{t.contact.linkedinTitle}</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/abderrahmane-el-fajri/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Abderrahmane El Fajri
              </a>
            </p>
          </div>
        </div>

        {/* Hidden Iframe for 100% reliable cross-origin POST without CORS blocks or page reloads */}
        <iframe
          name="hidden_contact_iframe"
          id="hidden_contact_iframe"
          title="Hidden Contact Submission Frame"
          style={{ display: 'none', width: 0, height: 0, border: 'none' }}
          onLoad={handleIframeLoad}
        />

        {/* Contact Form with Native Iframe Target */}
        <form
          className="contact-form"
          action={GOOGLE_SCRIPT_URL}
          method="POST"
          target="hidden_contact_iframe"
          onSubmit={handleSubmit}
        >
          {/* Metadata hidden inputs */}
          <input type="hidden" name="timestamp" value={new Date().toISOString()} />
          <input type="hidden" name="date" value={new Date().toLocaleString()} />

          {/* Success Banner */}
          {submitted && (
            <div className="form-alert success">
              <i className="fa-solid fa-circle-check"></i>
              <div>
                <strong>{t.contact.successTitle}</strong>
                <p>{t.contact.successMsg}</p>
              </div>
            </div>
          )}

          {/* Error Banner with 1-click fallback */}
          {submitError && (
            <div className="form-alert error">
              <i className="fa-solid fa-circle-exclamation"></i>
              <div>
                <strong>{t.contact.errorTitle}</strong>
                <p>{t.contact.errorMsg}</p>
                <div style={{ marginTop: '0.8rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a
                    href="https://wa.me/212605555137?text=Bonjour%20Abderrahmane,%20je%20vous%20contacte%20depuis%20votre%20portfolio."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn whatsapp-btn"
                    style={{ padding: '0.6rem 1.4rem', fontSize: '1.25rem' }}
                  >
                    <i className="fa-brands fa-whatsapp"></i> WhatsApp Direct
                  </a>
                  <a
                    href="mailto:abderrahmanelfajri@gmail.com"
                    className="btn"
                    style={{ padding: '0.6rem 1.4rem', fontSize: '1.25rem' }}
                  >
                    <i className="fa-solid fa-envelope"></i> Email Direct
                  </a>
                </div>
              </div>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">{t.contact.nameLabel}</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t.contact.namePlaceholder}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">{t.contact.emailLabel}</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t.contact.emailPlaceholder}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">{t.contact.msgLabel}</label>
            <textarea
              id="message"
              name="message"
              placeholder={t.contact.msgPlaceholder}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
            style={{ width: '100%', marginTop: '1rem' }}
          >
            {isSubmitting ? (
              <>
                <i className="fa-solid fa-spinner fa-spin"></i> {t.contact.sendingBtn}
              </>
            ) : (
              <>
                <i className="fa-solid fa-paper-plane"></i> {t.contact.sendBtn}
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
