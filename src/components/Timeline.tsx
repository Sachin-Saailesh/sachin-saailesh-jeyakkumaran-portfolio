
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
            date="Aug 2023 – Jul 2024 · Chennai, India"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Pisence Technologies, Chennai</h4>
            <ul>
              <li>Developed computer vision system using <strong>YOLOv8</strong> and <strong>FaceNet</strong> achieving <strong>99.2% accuracy</strong>, processing 100+ concurrent camera streams with &lt;150ms latency; built activity recognition with 3D CNNs deployed on <strong>NVIDIA Jetson</strong> edge devices at 30 FPS.</li>
              <li>Engineered predictive maintenance models using <strong>XGBoost</strong> and <strong>LSTM</strong> achieving <strong>87% failure prediction accuracy</strong> 24-48 hours in advance, reducing downtime by 28%; designed time-series forecasting pipeline processing 10M+ sensor readings daily, improving OEE by 18%.</li>
              <li>Implemented CNN defect detection (<strong>ResNet</strong>, <strong>EfficientNet</strong>) achieving <strong>94% accuracy</strong>, reducing manual inspection by 60% on 5TB+ imagery; developed energy forecasting using <strong>SARIMA</strong> with &lt;8% MAPE, achieving 22% cost savings and 27% waste reduction.</li>
              <li>Built ML intrusion detection using <strong>Isolation Forest</strong> and <strong>Autoencoders</strong> achieving <strong>96% accuracy</strong> with &lt;2% false positives on 50M+ daily logs; developed <strong>BERT-based</strong> phishing detection with 98% accuracy, reducing detection time from 45 to 8 minutes.</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jun 2022 – Jul 2023 · Chennai, India"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI/ML Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Calidad Healthcare · IIT Madras Research Park, Chennai</h4>
            <ul>
              <li>Architected production-grade multimodal AI/ML pipeline for 4 medical imaging modalities; implemented clinician-in-the-loop labeling with stratified k-fold validation, reducing diagnostic errors by <strong>35%</strong> and achieving <strong>95% AUC</strong>, F1 0.94, mAP 0.58.</li>
              <li>Engineered 5 deep learning architectures combining CNN/transformer models in <strong>PyTorch</strong> and <strong>TensorFlow</strong>; optimized with focal loss, class balancing, and adaptive augmentation, demonstrating strong problem-solving skills in AI research.</li>
              <li>Deployed scalable <strong>MLOps</strong> infrastructure using <strong>Docker</strong> microservices, <strong>FastAPI</strong> REST APIs, <strong>MLflow</strong> tracking, CI/CD pipelines, and A/B testing; serving 10K+ daily predictions with <strong>99.5% uptime</strong>, providing technical guidance to development teams.</li>
              <li>Optimized AI/ML models for edge deployment via INT8/FP16 quantization and <strong>TFLite</strong>, reducing inference time by 60% and model size by 4x; integrated <strong>Grad-CAM/SHAP</strong> for explainable AI and regulatory compliance.</li>
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
              <li>Led technical instruction for <strong>120+ students</strong> in Data Visualization, Computer Networks, and Ethical Hacking; designed 15+ hands-on labs using <strong>Pandas</strong>, <strong>NumPy</strong>, <strong>Tableau</strong>, <strong>Power BI</strong>, demonstrating strong communication skills and collaboration across diverse teams.</li>
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
