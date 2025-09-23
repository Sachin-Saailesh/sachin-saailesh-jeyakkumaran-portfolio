import React from "react";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">

        <div className="project">
          <h2>Real-Time Weapon Detection : YOLOv11 vs RT-DETR</h2>
          <p>
            Benchmarked YOLOv11 (CNN) against RT-DETR (transformer) on CCTV streams with AMP training.
            RT-DETR achieved mAP50 83.0 / mAP50–95 37.2 / Recall 76.2 vs YOLOv11 77.8 / 34.9 / 73.6,
            with latency 3.1ms vs 18.7ms. Shipped a Streamlit evaluation toolkit with PR curves and
            class-wise mAP; exported .pt / ONNX / TorchScript.
          </p>
        </div>

        <div className="project">
          <h2>Legal Judgment Prediction (LexGLUE - ECtHR Task B)</h2>
          <p>
            Built a long-document multi-label classifier with Legal-BERT using overlap-chunking and [SEP].
            Fine-tuned with AMP, AdamW, cosine LR with warmup, gradient accumulation ×4, and focal loss. Achieved F1 0.741
            (val 0.747) and Micro Accuracy 0.923 (≈ +2.9 F1 over BERT-base). Added attention heatmaps; segmentation and
            adaptive thresholds were pivotal.
          </p>
        </div>

        <div className="project">
          <h2>CityLearn - Multi-Agent Energy Control</h2>
          <p>
            Designed a forecast-aware controller for 18 buildings across 8,760 steps with a 173-D state and 6-step GRU forecasts,
            optimizing a unified cost, CO₂, peak, and comfort objective. Benchmarked DQN, PPO, and SAC; tuned DQN reached district reward
            −13,580 (~90% over RBC) with +15.5% uplift from forecasts; validated over 10 seeds with paired t-test α = 0.05.
          </p>
        </div>

        <div className="project">
          <h2>Autism Spectrum Disorder Detection - CNN Ensembles</h2>
          <p>
            Built an ensemble of VGG16, MobileNet, InceptionV3, and ResNet50 with transfer learning and fine-tuning for facial-expression classification.
            Applied class-imbalance handling with weighted loss and on-the-fly augmentation; evaluated with stratified k-fold, ROC-AUC, F1, and calibration curves.
            Added Grad-CAM for interpretability.
          </p>
        </div>

        <div className="project">
          <h2>COVID-19 Diagnosis from Chest X-Rays</h2>
          <p>
            Trained CNNs on pulmonary opacity patterns with lung-field preprocessing and intensity normalization to reduce domain shift.
            Reached 93.7% accuracy with sensitivity, specificity, and AUC reporting; implemented early stopping and learning-rate scheduling.
            Deployed a batch inference pipeline with configurable thresholds for precision-recall trade-offs.
          </p>
        </div>

        <div className="project">
          <h2>Intracranial Hemorrhage Detection on Head CT</h2>
          <p>
            Built a multi-type ICH classifier with windowing, artifact reduction, and lightweight skull-stripping.
            Achieved ~87% accuracy with per-subtype metrics and macro F1 for imbalance robustness; produced Grad-CAM heatmaps for clinician review.
            Shipped a Streamlit app to Heroku with a CPU-optimized model.
          </p>
        </div>

        <div className="project">
          <h2>SHUSSH! · Context-Aware Android App</h2>
          <p>
            Implemented geofencing and device-orientation logic to auto-silence devices in user zones using Flutter.
            Built secure auth and sync with Firebase Auth and Firestore; applied Provider for state management and Material design for UI.
            Integrated analytics, crash reporting, and a privacy-aware permissions flow.
          </p>
        </div>

        <div className="project">
          <h2>Autonomous Delivery Drone - Embedded Navigation</h2>
          <p>
            Configured Raspberry Pi flight control with PID-tuned stabilization using GPS and IMU telemetry for waypoint navigation.
            Prototyped mission planning and failsafe behaviors; logged telemetry for diagnostics and controller re-tuning.
            Structured real-time loops and basic sensor fusion for reliability.
          </p>
        </div>

        <div className="project">
          <h2>WeatherBot · Serverless Conversational AI on AWS</h2>
          <p>
            Built a task-oriented chatbot with Amazon Lex, Lambda backends in Python, and API Gateway for external weather APIs secured via IAM.
            Implemented an Amplify front end with Cognito authentication; added CloudWatch metrics and structured logs with retry and backoff logic.
            Designed intents and entities for robust NLP disambiguation of location, dates, and units.
          </p>
        </div>

        <div className="project">
          <h2>Tailor App · Vertical CRUD with SMS Ops</h2>
          <p>
            Delivered order tracking and billing with a normalized Firestore schema, offline-first caching, and role-based access.
            Automated Twilio SMS notifications using idempotent cloud functions with error telemetry.
            Added CSV export, search and filter, and incremental sync for operational reliability.
          </p>
        </div>

        <div className="project">
          <h2>3D Skeleton-Based Action Recognition</h2>
          <p>
            Processed UTD-MHAD skeleton streams and engineered kinematic features including joint angles, velocities, and pairwise distances for classic ML baselines.
            Explored an ST-GCN baseline to model spatiotemporal dependencies; compared accuracy and F1 across feature and graph approaches with temporal smoothing.
          </p>
        </div>

        <div className="project">
          <h2>Surviving Airplane Disasters - Unsupervised Analysis</h2>
          <p>
            Engineered features from weather, aircraft metadata, and route context; applied PCA and k-means with silhouette and elbow diagnostics.
            Interpreted clusters with partial-dependence style plots and SHAP-like heuristics to surface risk patterns for hypothesis generation.
          </p>
        </div>

        <div className="project">
          <h2>NIFTY50 Market Analysis - BI Dashboards</h2>
          <p>
            Built interactive Tableau dashboards for price and volume regimes with filters, relative returns, drawdowns, and sector aggregation.
            Implemented moving averages and volatility bands to highlight regime shifts; ensured data hygiene and trading-day alignment for consistent comparisons.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Project;
