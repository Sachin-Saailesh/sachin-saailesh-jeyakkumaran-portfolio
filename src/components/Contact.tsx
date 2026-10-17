import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import '../assets/styles/Contact.scss';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">

        {/* Ambient glows */}
        <div className="contact-glow contact-glow-tr" aria-hidden="true" />
        <div className="contact-glow contact-glow-bl" aria-hidden="true" />

        <span className="section-eyebrow">Ready to collaborate?</span>
        <h2 className="contact-heading">Let's build something impactful.</h2>
        <p className="contact-sub">
          Roles, research partnerships, or quick questions — I'm one message away.
        </p>

        <div className="contact-actions">
          <a
            href="mailto:sachin.jeyy@gmail.com"
            className="contact-btn primary-action"
            aria-label="Email Sachin"
          >
            <EmailIcon fontSize="small" />
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/sachinjeyakkumaran/"
            target="_blank"
            rel="noreferrer"
            className="contact-btn ghost-action"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon fontSize="small" />
            LinkedIn
          </a>

          {/* TODO: replace href="#book" with your Calendly or booking link */}
          <a
            href="#book"
            className="contact-btn ghost-action"
            aria-label="Book a call"
          >
            <CalendarTodayIcon fontSize="small" />
            Book a Call
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;
