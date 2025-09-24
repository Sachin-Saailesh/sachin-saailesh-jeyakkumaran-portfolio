import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avatar from "../assets/images/photo-icon.jpg";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        {/* Background caption on the hero image */}
        <span className="bg-caption">
          ▲ This image is a digital reinterpretation of Michelangelo’s “Creation of Adam”, rendered in ASCII.
          {/* Symbolizing innovation and creativity in the digital age. */}
        </span>

        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>

        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Sachin-Saailesh" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/sachinjeyakkumaran/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>

          <h1 className="title">Sachin Saailesh Jeyakkumaran</h1>
          <p>AI / ML Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Sachin-Saailesh" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/sachinjeyakkumaran/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
