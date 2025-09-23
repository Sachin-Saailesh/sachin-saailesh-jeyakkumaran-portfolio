
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const modeling = ["LLM", "Computer Vision", "Natural Language Processing", "Reinforcement Learning",
  "Python", "PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "NLTK", "Seaborn"
];
const web = [
  "MERN", "React", "Flutter", "JavaScript", "HTML", "CSS", "Firebase", "Streamlit"
];
const dataCloud = ["Azure", "AWS (EC2, S3, Lambda, Cognito)", "Linux", "Git", "Docker", "PySpark", "IBM SPSS", "Hadoop",
  "SQL", "MySQL", "Oracle", "PostgreSQL", "Tableau", "Excel",
  "Power BI",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>

        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>AI/ML Engineering</h3>
            <p>
              From classical ML to deep learning, I build reliable training loops, fair evaluations,
              and explainable outputs (Grad‑CAM, attention maps) that teams can trust.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tooling:</span>
              {modeling.map((label, i) => <Chip key={i} className='chip' label={label} />)}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Web & App Development</h3>
            <p>
              I prototype fast and ship usable interfaces—dashboards, demos, and integrations—to surface model value
              with clean UX.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Stack:</span>
              {web.map((label, i) => <Chip key={i} className='chip' label={label} />)}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>Data, Cloud & Ops</h3>
            <p>
              Solid data foundations and reproducibility: versioned datasets, scripted pipelines, and cloud‑ready
              deployments that scale.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Ecosystem:</span>
              {dataCloud.map((label, i) => <Chip key={i} className='chip' label={label} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
