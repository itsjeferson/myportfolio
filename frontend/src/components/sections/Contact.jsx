import { FiMail, FiGithub, FiLink } from 'react-icons/fi';
import { profile } from '../../data/profile.js';
import { Button } from '../ui/index.js';
import { useContactForm } from '../../hooks/useContactForm.js';
import './Contact.css';

export const Contact = () => {
  const { values, status, errorMessage, handleChange, handleSubmit } = useContactForm();

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__card">
          <h2 className="contact__title">
            Let&apos;s Build <span className="contact__title-accent">Together</span>
          </h2>
          <p className="contact__subtitle">Available for collaborations and technical consultations.</p>

          <a href={profile.socials.email} className="contact__email-btn">
            <FiMail aria-hidden="true" /> {profile.email}
          </a>

          <div className="contact__icon-row">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="contact__icon-btn"
              aria-label="GitHub"
            >
              <FiGithub aria-hidden="true" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact__icon-btn"
              aria-label="LinkedIn"
            >
              <FiLink aria-hidden="true" />
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <p className="contact__form-heading">Or send a message directly</p>

          <div className="contact__field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              minLength={2}
              value={values.name}
              onChange={handleChange}
              autoComplete="name"
            />
          </div>

          <div className="contact__field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={values.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>

          <div className="contact__field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              minLength={10}
              value={values.message}
              onChange={handleChange}
            />
          </div>

          {/* Honeypot field — hidden from real users, catches simple bots */}
          <input
            type="text"
            name="honeypot"
            value={values.honeypot}
            onChange={handleChange}
            className="visually-hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <Button type="submit" variant="primary" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Send Message'}
          </Button>

          {status === 'success' && (
            <p className="contact__feedback contact__feedback--success" role="status">
              Thanks for reaching out! I&apos;ll get back to you soon.
            </p>
          )}

          {status === 'error' && (
            <p className="contact__feedback contact__feedback--error" role="alert">
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
