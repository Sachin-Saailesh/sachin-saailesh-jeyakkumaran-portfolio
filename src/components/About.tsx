import React from "react";
import CodeIcon from '@mui/icons-material/Code';
import TuneIcon from '@mui/icons-material/Tune';
import SchoolIcon from '@mui/icons-material/School';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import '../assets/styles/About.scss';

function About() {
  return (
    <section className="bio-section" id="about">
      <div className="bio-inner">

        <div className="bio-left">
          <span className="section-eyebrow">Biography</span>
          <h2 className="bio-heading">The Architect of Intelligence</h2>
          <div className="bio-text">
            <p>
              AI Engineer with 3+ years building distributed AI systems, real-time inference
              pipelines, and production RAG platforms across edge and cloud. I've delivered AI
              systems across video analytics, healthcare AI, voice AI, and legal intelligence.
            </p>
            <p>
              Currently an AI Builder at <strong>Tabhi</strong>, running a voice agent that handles
              travel-disruption calls at <strong>500ms voice-to-voice latency</strong>. Before that:
              entitlement-aware RAG for enterprise HCM, <strong>100+ concurrent camera streams</strong> at
              sub-150ms latency, and multimodal healthcare AI at 99.5% uptime. My focus is AI that
              ships, scales, and stays explainable.
            </p>
            <p>
              M.S. in Artificial Intelligence from the University at Buffalo, where I researched at{' '}
              <strong>XLab</strong> under Prof. Dr. Jinjun Xiong, Institute for AI and Data Science.
            </p>
          </div>
        </div>

        <div className="bio-right">
          <div className="quick-facts-card">
            <span className="quick-facts-label">Quick Facts</span>
            <div className="fact-list">

              <div className="fact-item">
                <div className="fact-icon icon-primary">
                  <CodeIcon fontSize="small" />
                </div>
                <div className="fact-content">
                  <h4>Production Stack</h4>
                  <p>FastAPI · Docker · Kubernetes · Triton · AWS · GCP</p>
                </div>
              </div>

              <div className="fact-item">
                <div className="fact-icon icon-secondary">
                  <TuneIcon fontSize="small" />
                </div>
                <div className="fact-content">
                  <h4>Core Domains</h4>
                  <p>Voice AI · Multi-agent Systems · RAG · Video Analytics · Healthcare AI · MLOps</p>
                </div>
              </div>

              <div className="fact-item">
                <div className="fact-icon icon-tertiary">
                  <WorkOutlineIcon fontSize="small" />
                </div>
                <div className="fact-content">
                  <h4>Currently</h4>
                  <p>AI Builder · Tabhi</p>
                </div>
              </div>

              <div className="fact-item">
                <div className="fact-icon icon-primary">
                  <SchoolIcon fontSize="small" />
                </div>
                <div className="fact-content">
                  <h4>Education</h4>
                  <p>M.S. Artificial Intelligence · University at Buffalo, 2026</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
