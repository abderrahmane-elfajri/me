import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  // Google Apps Script Web App Endpoint
  // Users can set VITE_GOOGLE_SCRIPT_URL in .env, or replace the fallback URL below
  const GOOGLE_SCRIPT_URL =
    import.meta.env.VITE_GOOGLE_SCRIPT_URL ||
    'https://script.google.com/macros/s/AKfycbyN15O4w1pE8Q7R6s5t4u3v2w1x0y_placeholder/exec';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitError(false);
    setSubmitted(false);

    try {
      // Build URL-encoded parameters for Google Apps Script doPost(e)
      const formParams = new URLSearchParams();
      formParams.append('name', formData.name);
      formParams.append('email', formData.email);
      formParams.append('message', formData.message);
      formParams.append('timestamp', new Date().toISOString());
      formParams.append('date', new Date().toLocaleString());

      // POST to Google Apps Script Web App
      // mode: 'no-cors' is required by browsers because GAS responds with a 302 redirect
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: formParams.toString(),
      });

      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Google Script submission error:', err);
      setIsSubmitting(false);
      setSubmitError(true);
    }
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

        {/* Contact Form with Google Apps Script Integration */}
        <form className="contact-form" onSubmit={handleSubmit}>
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
