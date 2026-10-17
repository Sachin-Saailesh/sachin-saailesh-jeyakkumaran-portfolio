import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">

        <div className="footer-brand">
          <span className="footer-wordmark">SACHIN SAAILESH JEYAKKUMARAN</span>
          <span className="footer-tagline">AI Engineer</span>
        </div>

        <div className="footer-links">
          <a href="https://github.com/Sachin-Saailesh" target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon fontSize="small" />
          </a>
          <a href="https://www.linkedin.com/in/sachinjeyakkumaran/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon fontSize="small" />
          </a>
          <a href="mailto:sachin.jeyy@gmail.com" aria-label="Email">
            <EmailIcon fontSize="small" />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Sachin Saailesh Jeyakkumaran
        </p>

      </div>
    </footer>
  );
}

export default Footer;
