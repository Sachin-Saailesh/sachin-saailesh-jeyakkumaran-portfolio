
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const aiml = [
  "PyTorch", "TensorFlow", "Keras", "scikit-learn", "XGBoost", "LightGBM",
  "YOLO", "RT-DETR", "FaceNet", "ResNet", "EfficientNet", "BERT", "Transformers",
  "LSTM", "3D CNNs", "Computer Vision", "NLP", "Time-Series Forecasting"
];

const mlops = [
  "Docker", "Kubernetes", "MLflow", "TensorFlow Lite", "ONNX", "TensorRT", "TorchScript",
  "Model Quantization (INT8/FP16)", "NVIDIA Jetson", "CI/CD", "A/B Testing",
  "FastAPI", "REST APIs", "Grad-CAM", "SHAP"
];

const data = [
  "Python", "C++", "SQL", "Bash", "Pandas", "NumPy", "Apache Spark",
  "PostgreSQL", "MySQL", "Redis", "Kafka", "Prometheus", "Grafana", "Tableau",
  "Power BI", "Qdrant"
];

const cloud = [
  "AWS (EC2, S3, Lambda, SageMaker)", "Azure", "GCP", "Linux", "Git"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>

        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>AI/ML & Deep Learning</h3>
            <p>
              Expert in production AI systems: computer vision, NLP, time-series forecasting, and anomaly detection. I build reliable training pipelines, optimize for edge deployment, and deliver explainable AI solutions.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech Stack:</span>
              {aiml.map((label, i) => <Chip key={i} className='chip' label={label} />)}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>MLOps & Production Deployment</h3>
            <p>
              Scalable ML deployment with Docker/Kubernetes, model optimization (quantization, ONNX, TensorRT), real-time inference APIs, and comprehensive monitoring. Edge AI expertise with NVIDIA Jetson.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Ecosystem:</span>
              {mlops.map((label, i) => <Chip key={i} className='chip' label={label} />)}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Data Engineering & Cloud</h3>
            <p>
              End-to-end data pipelines with Apache Spark, distributed processing, vector databases, and cloud platforms. Strong foundation in programming (Python, C++, SQL) and BI tools (Tableau, Power BI).
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tools:</span>
              {data.map((label, i) => <Chip key={i} className='chip' label={label} />)}
            </div>
            <div className="flex-chips">
              <span className="chip-title">Cloud & DevOps:</span>
              {cloud.map((label, i) => <Chip key={i} className='chip' label={label} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
