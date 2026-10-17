import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/Expertise.scss';

const aiml = [
  "PyTorch", "TensorFlow", "Transformers", "BERT", "LangGraph", "CrewAI",
  "Google ADK", "ReAct", "OpenAI", "Deepgram", "ElevenLabs",
  "LoRA / QLoRA", "RLHF / DPO", "Prompt Engineering", "Function / Tool Calling",
  "Pydantic", "Instructor"
];

const mlops = [
  "FastAPI", "Docker", "Kubernetes", "Airflow", "MLflow", "CI/CD",
  "NVIDIA Triton", "vLLM", "TensorRT", "Prometheus", "OpenTelemetry",
  "LLM-as-Judge", "LangSmith", "Ragas", "DeepEval", "A/B Testing",
  "Lumoz AI", "Groundcover"
];

const data = [
  "RAG", "Pinecone", "Qdrant", "ChromaDB", "Neo4j", "Cohere Rerank",
  "Dialogflow", "AWS (S3, Lambda, ECR, Bedrock)", "Azure", "GCP", "Vertex AI",
  "LiveKit", "Twilio", "Redis", "Kafka", "PostgreSQL", "Datadog", "Terraform",
  "Python", "C++", "SQL", "Java", "JavaScript", "Node.js", "Bash", "Git"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="expertise-section">

        <div className="expertise-header">
          <span className="section-eyebrow">Domain Mastery</span>
          <h2 className="expertise-heading">Core Expertise</h2>
        </div>

        <div className="expertise-grid">

          {/* Card 1 – AI/ML */}
          <div className="expertise-card">
            <div className="expertise-card-watermark" aria-hidden="true">
              <FontAwesomeIcon icon={faPython} />
            </div>
            <div className="expertise-card-icon icon-primary">
              <FontAwesomeIcon icon={faPython} />
            </div>
            <h3>AI / ML, LLMs &amp; Agents</h3>
            <p>
              Agentic and voice AI systems built on deep learning frameworks, LLM fine-tuning
              (LoRA, QLoRA, RLHF, DPO), and structured tool calling.
            </p>
            <div className="expertise-tags">
              {aiml.map((label, i) => (
                <span key={i} className="expertise-tag">{label}</span>
              ))}
            </div>
          </div>

          {/* Card 2 – MLOps */}
          <div className="expertise-card">
            <div className="expertise-card-watermark" aria-hidden="true">
              <FontAwesomeIcon icon={faDocker} />
            </div>
            <div className="expertise-card-icon icon-secondary">
              <FontAwesomeIcon icon={faDocker} />
            </div>
            <h3>MLOps, Deployment &amp; Evaluation</h3>
            <p>
              Containerized model serving on Docker/Kubernetes with Triton and vLLM, plus
              evaluation-driven optimization through LLM-as-judge scoring, tracing, and A/B tests.
            </p>
            <div className="expertise-tags">
              {mlops.map((label, i) => (
                <span key={i} className="expertise-tag">{label}</span>
              ))}
            </div>
          </div>

          {/* Card 3 – Data & Cloud */}
          <div className="expertise-card">
            <div className="expertise-card-watermark" aria-hidden="true">
              <FontAwesomeIcon icon={faAws} />
            </div>
            <div className="expertise-card-icon icon-tertiary">
              <FontAwesomeIcon icon={faAws} />
            </div>
            <h3>Retrieval, Cloud &amp; Data</h3>
            <p>
              Hybrid RAG over vector and graph stores, real-time voice infrastructure, and
              cloud-native systems across AWS, Azure, and GCP.
            </p>
            <div className="expertise-tags">
              {data.map((label, i) => (
                <span key={i} className="expertise-tag">{label}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Expertise;
