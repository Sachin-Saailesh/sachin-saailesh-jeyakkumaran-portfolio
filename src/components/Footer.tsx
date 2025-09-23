
import React from "react";
import MailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="mailto:sjeyakku@buffalo.edu" aria-label="Email"><MailIcon /></a>
        <a href="https://www.linkedin.com/in/sachinjeyakkumaran/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
      </div>
      <p>© {new Date().getFullYear()} Sachin Saailesh Jeyakkumaran · Built with React & MUI · Deployed for good vibes ❤️</p>
    </footer>
  );
}

export default Footer;
