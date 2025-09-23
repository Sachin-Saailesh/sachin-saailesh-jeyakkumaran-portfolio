
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience & Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Mar 2023 – Mar 2024 · Chennai, India"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI/ML - Full Stack Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Calidad Healthcare · IIT Madras Research Park, Chennai</h4>
            <ul>
              <li>Built a multimodal telehealth pipeline (otoscopy video; anterior/fundus photos; CXR; intra-oral video) with clinician-verified labels, stratified k-fold, and QC-adding Grad-CAM/attention maps for interpretability.</li>
              <li>Trained disease-specific models: (2+1)D ResNet + U-Net (ear), MobileNetV3 (cataract), U-Net + ResNet50/DenseNet121 (glaucoma), EfficientNet-B0/DenseNet (TB), YOLOv8-s / RT-DETR + SORT (oral); best AUC 0.95, F1 0.94, mAP@.5:.95 0.58.</li>
              <li>Standardized training with focal loss, per-class thresholds (90% specificity), AMP, and early stopping-improving reliability and consistency.</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2023 – Jun 2023 · Chennai, India"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Teaching Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Sri Ramachandra Institute of Higher Education and Research, Chennai</h4>
            <ul>
              <li>Led recitations, office hours, grading, and proctoring across Data Visualization, Computer Networks, and Ethical Hacking.</li>
              <li>Designed hands‑on labs (pandas/NumPy/Matplotlib/Plotly/Tableau; Wireshark/Python sockets/Cisco Packet Tracer; Kali Linux with Nmap/Metasploit).</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2021 – Apr 2021 · Remote"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Mobile Application Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">AUSWEG Automation, Remote</h4>
            <ul>
              <li>Built a Flutter workforce app with background location (FusedLocationProvider, WorkManager), shift‑aware tracking, and offline‑first sync (SQLite + Firestore).</li>
              <li>Implemented real‑time operations console with Firestore, Cloud Functions, Google Maps; added on‑device OpenCV facial‑expression sentiment via lightweight CNN/SVM.</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2024 – 2026 · Buffalo, NY"
            iconStyle={{ background: '#0ea5e9', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">M.S. Artificial Intelligence</h3>
            <h4 className="vertical-timeline-element-subtitle">University at Buffalo (SUNY), New York</h4>
            <p>GPA: 3.22/4.0</p>
            <p>
              Core coursework in <strong>Machine Learning, Reinforcement Learning,
                Pattern Recognition, Computer Vision, Data Intensive Computing,
                Algorithms, and Data Modeling</strong>, complemented by
              <strong> AI & Robotics Integration</strong>.
            </p>
            <p>
              Currently working on an AI-based research project at
              <strong> XLab @UB</strong>, under the guidance of
              <strong> Prof. Dr. Jinjun Xiong</strong> from the Institute for
              Artificial Intelligence and Data Science.
            </p>
          </VerticalTimelineElement>



          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2019 – 2023 · Chennai, India"
            iconStyle={{ background: '#0ea5e9', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech. Computer Science Engineering (Specialized in AI & ML)</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Sri Ramachandra Faculty of Engineering & Technology
            </h4>
            <p>GPA: 8.41/10.0</p>
            <p>
              <strong>AI/ML:</strong> Artificial Intelligence & Machine Learning, Machine Learning I, Deep Learning,
              Reinforcement Learning, Natural Language Processing (NLP), Computer Vision (CV), TensorFlow & Tools in Healthcare
            </p>
            <p>
              <strong>Data Science:</strong> Data Science with R, Data Visualization Tools & Techniques, Data Mining,
              Data Science Professional Cert., Business Analytics
            </p>
            <p>
              <strong>Math/Stats:</strong> Probability & Statistics, Linear Algebra, Differential Equations,
              Advanced Statistics, Discrete Mathematics
            </p>
            <p>
              <strong>Foundations:</strong> Data Structures, Design & Analysis of Algorithms (DAA),
              Database Management Systems (DBMS), Advanced Python Programming
            </p>
          </VerticalTimelineElement>



          {/* B.Tech. Computer Science Engineering (Artificial Intelligence & Machine Learning) */}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
