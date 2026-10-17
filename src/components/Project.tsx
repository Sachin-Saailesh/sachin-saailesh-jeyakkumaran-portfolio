import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import "../assets/styles/Project.scss";

interface Metric { label: string; value: string; }

interface ProjectCardProps {
  title: string;
  description: React.ReactNode;
  tags: string[];
  metrics: [Metric, Metric];
  github?: string;
  demo?: string;
}

function ProjectCard({ title, description, tags, metrics, github, demo }: ProjectCardProps) {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p className="project-description">{description}</p>

      {/* Tech tags */}
      <div className="project-tag-list">
        {tags.map((t, i) => <span key={i} className="project-tag">{t}</span>)}
      </div>

      {/* Impact metrics */}
      <div className="project-metrics">
        {metrics.map((m, i) => (
          <div key={i} className="metric-item">
            <span className="metric-label">{m.label}</span>
            <span className="metric-value">{m.value}</span>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="project-links">
        {github && (
          <a href={github} target="_blank" rel="noreferrer" className="project-link-btn github-btn">
            <GitHubIcon sx={{ fontSize: '0.95rem' }} /> GitHub
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noreferrer" className="project-link-btn demo-btn">
            <LaunchIcon sx={{ fontSize: '0.95rem' }} /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

function Project() {
  return (
    <div className="projects-container" id="projects">
      <div className="projects-header">
        <div>
          <span className="section-eyebrow">Portfolio</span>
          <h1 className="projects-heading">Technical Projects</h1>
        </div>
        <p className="projects-subtext">
          Voice agents, multi-agent systems, and AI/ML platforms built for production, research, and edge deployment.
        </p>
      </div>

      <div className="projects-grid">

        <ProjectCard
          title="Maya: Real-Time Voice AI Event Planner"
          description={<>Multi-step voice agent on <b>LiveKit</b> + <b>Whisper</b> resolving 12 conversation slots with &lt;2% slot-fill error. <b>ChromaDB</b> RAG, semantic caching, and LLM-as-judge eval cut hallucinations 43% and API calls 38% at &lt;1.6s end-to-end latency; a 38-scenario QA lab tracks STT→LLM→TTS regressions.</>}
          tags={["Voice AI", "LiveKit", "Whisper", "FastAPI", "ChromaDB", "LangSmith", "React"]}
          metrics={[
            { label: "Intent Accuracy", value: "91%" },
            { label: "Hallucinations", value: "−43%" },
          ]}
          github="https://github.com/Sachin-Saailesh/maya-event-planning-agent"
        />

        <ProjectCard
          title="LexMind: Multi-Agent Legal Intelligence"
          description={<><b>LangGraph</b> orchestrator coordinating 5 specialist agents (contract, compliance, litigation, drafting, research) over 4-stage hybrid RAG (<b>Qdrant</b> + BM25 via RRF). A Hallucination Guard routes GPT-4o outputs under 70% confidence to human review, and attorney corrections feed back into retrieval.</>}
          tags={["LangGraph", "Multi-Agent", "Qdrant", "Neo4j", "Azure OpenAI", "Ragas", "Next.js"]}
          metrics={[
            { label: "Review Time", value: "−60%" },
            { label: "Eval Cases", value: "80+" },
          ]}
          github="https://github.com/Sachin-Saailesh/legal-intelligence-platform"
        />

        <ProjectCard
          title="AI Codebase Intelligence Platform"
          description={<>Multi-tenant production RAG system with AST-aware chunking via <b>Tree-sitter</b>, hybrid retrieval (<b>Qdrant</b> + BM25 + Cohere reranking), and fault-tolerant orchestration. React/Vite SSE streaming UI with Redis semantic caching.</>}
          tags={["RAG", "FastAPI", "Qdrant", "OpenAI", "Redis", "Tree-sitter", "React"]}
          metrics={[
            { label: "Scale", value: "10K+ file repos" },
            { label: "Memory", value: "Flat scaling" },
          ]}
          // TODO: replace with your actual repo URL
          github="https://github.com/Sachin-Saailesh/production-rag-code-intelligence-system"
        />

        <ProjectCard
          title="Edge AI Vision Security Platform"
          description={<>End-to-end edge vision AI pipeline for degraded CCTV streams using <b>YOLOv8</b> with hard-negative mining (22K+ samples). ONNX-optimized inference with async <b>FastAPI</b> streaming and <b>Prometheus</b> telemetry.</>}
          tags={["YOLOv8", "ONNX", "FastAPI", "Prometheus", "Edge AI", "Python"]}
          metrics={[
            { label: "HN Samples", value: "22K+" },
            { label: "Deployment", value: "Multi-camera" },
          ]}
          // TODO: replace with your actual repo URL
          github="https://github.com/Sachin-Saailesh/weapon-detection"
        />

        <ProjectCard
          title="Real-Time Weapon Detection: YOLOv11 vs RT-DETR"
          description={<>Benchmarked <b>YOLOv11 (CNN)</b> vs <b>RT-DETR (Transformer)</b> on CCTV streams with AMP training. Streamlit evaluation toolkit with PR curves; exports in .pt / ONNX / TorchScript.</>}
          tags={["YOLOv11", "RT-DETR", "ONNX", "TorchScript", "Streamlit", "CV"]}
          metrics={[
            { label: "RT-DETR mAP50", value: "83.0" },
            { label: "Latency", value: "3.1 ms" },
          ]}
          github="https://github.com/Sachin-Saailesh/real-time-weapon-detection-benchmark"
        />

        <ProjectCard
          title="Legal Judgment Prediction (LexGLUE)"
          description={<>Long-document multi-label classifier with <b>Legal-BERT</b>, overlap chunking, and focal loss. Attention heatmaps and adaptive thresholding for interpretability on ECtHR Task B.</>}
          tags={["Legal-BERT", "HuggingFace", "NLP", "Focal Loss", "Transformers"]}
          metrics={[
            { label: "F1", value: "0.741" },
            { label: "Micro Acc", value: "0.923" },
          ]}
        />

        <ProjectCard
          title="CityLearn – Multi-Agent Energy Control"
          description={<>Forecast-aware <b>GRU</b> controller for 18 buildings over 8,760 steps optimizing CO₂, peak load, and comfort. Benchmarked DQN, PPO, and SAC; GRU forecasts added +15.5% uplift.</>}
          tags={["RL", "GRU", "PPO", "SAC", "DQN", "Multi-Agent", "Energy"]}
          metrics={[
            { label: "Over RBC", value: "~90%" },
            { label: "GRU Uplift", value: "+15.5%" },
          ]}
        />

        <ProjectCard
          title="Distributed Data Pipeline – LinkedIn Job Analytics"
          description={<>ETL pipeline for 1.3M LinkedIn postings using <b>Apache Hadoop</b> and <b>PySpark</b> on <b>Google Dataproc</b>. HDFS + MapReduce + Parquet; YARN-tuned for 3× faster execution.</>}
          tags={["PySpark", "Hadoop", "Dataproc", "ETL", "HDFS", "Parquet", "BigData"]}
          metrics={[
            { label: "Postings", value: "1.3M" },
            { label: "Throughput", value: "3× faster" },
          ]}
        />

        <ProjectCard
          title="Autism Spectrum Disorder Detection"
          description={<>Ensemble of <b>VGG16</b>, <b>MobileNet</b>, <b>InceptionV3</b>, and <b>ResNet50</b> for facial-expression-based ASD classification. Class-imbalance handling and Grad-CAM visualization for clinical explainability.</>}
          tags={["CNN", "Transfer Learning", "Ensemble", "Grad-CAM", "HealthcareAI"]}
          metrics={[
            { label: "Architectures", value: "4 CNNs" },
            { label: "Explainability", value: "Grad-CAM" },
          ]}
        />

        <ProjectCard
          title="COVID-19 Diagnosis from Chest X-Rays"
          description={<>CNNs trained on lung-segmented CXR images with intensity normalization. Batch inference pipeline with threshold tuning for clinical deployment, reported with AUC and F1 scoring.</>}
          tags={["CNN", "Medical Imaging", "CXR", "Deep Learning", "AUC"]}
          metrics={[
            { label: "Accuracy", value: "93.7%" },
            { label: "Modality", value: "Chest X-Ray" },
          ]}
        />

      </div>
    </div>
  );
}

export default Project;
