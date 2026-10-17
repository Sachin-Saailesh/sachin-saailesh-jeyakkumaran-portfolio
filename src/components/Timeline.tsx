import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

/* Shared card surface */
const workCardStyle   = { background: '#1a1c20', color: '#e2e2e8', border: '1px solid rgba(73,68,85,0.2)', boxShadow: 'none' };
const workArrowStyle  = { borderRight: '7px solid #1a1c20' };
const eduCardStyle    = { background: '#1a1c20', color: '#e2e2e8', border: '1px solid rgba(137,206,255,0.12)', boxShadow: 'none' };
const eduArrowStyle   = { borderRight: '7px solid #1a1c20' };

function Timeline() {
  return (
    <div id="history">
      <div className="items-container timeline-wrapper">
        <div className="timeline-header">
          <span className="section-eyebrow">Career Path</span>
          <h2 className="timeline-heading">Experience &amp; Education</h2>
        </div>

        <VerticalTimeline>

          {/* ── Tabhi ── */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={workCardStyle}
            contentArrowStyle={workArrowStyle}
            date="May 2026 – Present"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <span className="tl-badge tl-badge-work">AI Builder</span>
            <h3 className="tl-role">AI Builder</h3>
            <h4 className="tl-company">Tabhi</h4>
            <ul className="tl-bullets">
              <li>
                Launched <strong>TACO</strong> (Tabhi Agentic Call-CenterOps), a voice agent fielding
                travel-disruption calls over Twilio PSTN into LiveKit with Soniox STT, Gemini Flash,
                Cartesia TTS, and Google ADK orchestration at <strong>500ms voice-to-voice latency</strong>.
              </li>
              <li>
                Automated airline rebooking, ticket reissue, and hotel and restaurant reservations by
                resolving caller PNRs against airline GDS and partner APIs; idempotency keys and spoken
                confirmation gate every fare-difference charge.
              </li>
              <li>
                Provisioned GKE clusters, LiveKit media servers, and Twilio SIP trunks via{' '}
                <strong>Terraform</strong>; autoscaled ADK agent pods with graceful draining, sustaining{' '}
                <strong>100 concurrent calls</strong> at peak without dropped sessions.
              </li>
              <li>
                Instrumented Groundcover monitoring across STT→LLM→TTS spans; cascading TTS vendor failover
                and warm transfer to live agents cut abandoned calls <strong>18%</strong> during outages.
              </li>
              <li>
                Raised call containment from <strong>52% to 68%</strong> by mining failed-call transcripts
                weekly with ops; cut cost per resolved call <strong>21%</strong> via model routing and TTS
                caching of static turns.
              </li>
            </ul>
          </VerticalTimelineElement>

          {/* ── Rebecca Everlene Trust Company ── */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={workCardStyle}
            contentArrowStyle={workArrowStyle}
            date="Feb 2026 – May 2026"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <span className="tl-badge tl-badge-work">AI Engineer</span>
            <h3 className="tl-role">AI Engineer</h3>
            <h4 className="tl-company">Rebecca Everlene Trust Company</h4>
            <ul className="tl-bullets">
              <li>
                Owned end-to-end delivery of LLM features for enterprise HCM clients on FastAPI, Google ADK,
                and AWS Bedrock; shipped <strong>6+ workflows</strong> across 4 deployments, cutting manual
                processing <strong>35%</strong>.
              </li>
              <li>
                Engineered entitlement-aware RAG over HR, payroll, and compliance data with hybrid BM25/dense{' '}
                <strong>Pinecone</strong> retrieval, cross-encoder reranking, and jurisdiction and permission
                filters; lifted <strong>Recall@5 24%</strong> and cut ungrounded answers <strong>30%</strong>.
              </li>
              <li>
                Built agentic workflows in Google ADK with tool calling and <strong>MCP</strong> into AWS
                Lambda, S3, and client APIs, gating payroll writes behind human approval; idempotent retries
                and durable session state eliminated double-posting.
              </li>
              <li>
                Established an eval and traceability layer with Lumoz eval suites, LLM-as-judge groundedness
                scoring, and OpenTelemetry tracing; delivered per-decision audit trails under{' '}
                <strong>NYC LL 144</strong> and <strong>Illinois HB 3773</strong>.
              </li>
            </ul>
          </VerticalTimelineElement>

          {/* ── PiSence Technologies ── */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={workCardStyle}
            contentArrowStyle={workArrowStyle}
            date="Aug 2023 – Jul 2024 · Chennai"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <span className="tl-badge tl-badge-work">AI Engineer</span>
            <h3 className="tl-role">AI Engineer</h3>
            <h4 className="tl-company">PiSence Technologies</h4>
            <ul className="tl-bullets">
              <li>
                Architected an end-to-end distributed video analytics platform on <strong>AWS SageMaker</strong>,
                handling <strong>100+ concurrent camera streams</strong> at <strong>30 FPS</strong> with real-time
                edge deployment for activity recognition and compliance.
              </li>
              <li>
                Engineered an async FastAPI microservice backed by <strong>Triton Inference Server</strong>,
                sustaining <strong>sub-150ms latency</strong> with fallback routing and graceful degradation.
              </li>
              <li>
                Productionized predictive maintenance pipelines with <strong>LSTM</strong> and{' '}
                <strong>XGBoost</strong>, MLflow, and Evidently AI drift detection; delivered{' '}
                <strong>24–48h failure prediction</strong> and <strong>28%</strong> less downtime across
                10M+ daily sensor readings.
              </li>
              <li>
                Deployed anomaly and intrusion detection over <strong>50M+ daily logs</strong> using Isolation
                Forest and Autoencoders, with <strong>Prometheus/OpenTelemetry</strong> dashboards for drift,
                latency, and pipeline health.
              </li>
            </ul>
          </VerticalTimelineElement>

          {/* ── Calidad Healthcare ── */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={workCardStyle}
            contentArrowStyle={workArrowStyle}
            date="Jun 2022 – Jul 2023 · Chennai"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <span className="tl-badge tl-badge-work">AI/ML Engineer</span>
            <h3 className="tl-role">AI/ML Engineer</h3>
            <h4 className="tl-company">Calidad Healthcare · IIT Madras Research Park</h4>
            <ul className="tl-bullets">
              <li>
                Built a HIPAA-compliant multimodal AI platform across <strong>4 imaging modalities</strong> with
                Dockerized FastAPI, serving <strong>2K+ daily clinical predictions</strong> at{' '}
                <strong>99.5% uptime</strong> with full audit trails.
              </li>
              <li>
                Partnered with radiologists and clinical staff across <strong>3 hospital sites</strong> to turn
                clinical workflows into model eval criteria; cut diagnostic errors by <strong>35%</strong>.
              </li>
              <li>
                Trained CNN and transformer models in PyTorch/TensorFlow with focal loss, class balancing,
                and adaptive augmentation; governed experiments via MLflow for reproducible versioning.
              </li>
              <li>
                Translated <strong>Grad-CAM</strong> and <strong>SHAP</strong> outputs into plain narratives
                for clinical admins, speeding deployment approvals by <strong>3 weeks per site</strong>.
              </li>
            </ul>
          </VerticalTimelineElement>

          {/* ── Teaching Assistant ── */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={workCardStyle}
            contentArrowStyle={workArrowStyle}
            date="Feb 2023 – Jun 2023 · Chennai"
            iconStyle={{ background: '#333539', color: '#cbc3d8' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <span className="tl-badge tl-badge-ta">Teaching Assistant</span>
            <h3 className="tl-role">Teaching Assistant</h3>
            <h4 className="tl-company">Sri Ramachandra Institute of Higher Education</h4>
            <ul className="tl-bullets">
              <li>
                Delivered technical instruction to <strong>120+ students</strong> across Data Visualization,
                Computer Networks, and Ethical Hacking; designed hands-on labs using Pandas, Tableau, and Power BI.
              </li>
            </ul>
          </VerticalTimelineElement>

          {/* ── UB MS ── */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={eduCardStyle}
            contentArrowStyle={eduArrowStyle}
            date="2024 – 2026 · Buffalo, NY"
            iconStyle={{ background: '#0ea5e9', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <span className="tl-badge tl-badge-edu">Graduate</span>
            <h3 className="tl-role">M.S. Artificial Intelligence</h3>
            <h4 className="tl-company">University at Buffalo (SUNY) &nbsp;·&nbsp; GPA 3.3/4.0</h4>
            <p className="tl-body">
              Coursework: Machine Learning, Reinforcement Learning, Pattern Recognition, Computer Vision,
              Data Intensive Computing, Algorithms, and Data Modeling.
            </p>
            <p className="tl-body">
              Research at <strong>XLab @UB</strong> under Prof. Dr. Jinjun Xiong,
              Institute for Artificial Intelligence and Data Science.
            </p>
          </VerticalTimelineElement>

          {/* ── B.Tech ── */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={eduCardStyle}
            contentArrowStyle={eduArrowStyle}
            date="2019 – 2023 · Chennai, India"
            iconStyle={{ background: '#0ea5e9', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <span className="tl-badge tl-badge-edu">Undergraduate</span>
            <h3 className="tl-role">B.Tech. Computer Science Engineering (AI &amp; ML)</h3>
            <h4 className="tl-company">Sri Ramachandra Faculty of Engineering &amp; Technology &nbsp;·&nbsp; GPA 8.41/10</h4>
            <p className="tl-body">
              Specialization in AI/ML, Deep Learning, Computer Vision, NLP, and Reinforcement Learning.
              Additional coursework in Data Science, Probability &amp; Statistics, and Algorithms.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
