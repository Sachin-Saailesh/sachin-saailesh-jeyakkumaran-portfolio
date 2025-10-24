import React from "react";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">

        {/* ==================== NEW PROJECTS ==================== */}

        <div className="project">
          <h2>Long-Context Codebase Analysis with Hybrid RAG + LLM Tools</h2>
          <p>
            Built a long-context Retrieval-Augmented Generation (RAG) system for million-token codebases by combining
            dense (<b>Qdrant</b>) and lexical (<b>BM25</b>) retrieval with <b>Cohere Rerank</b> for hybrid context fusion.
            Implemented <b>AST-based chunking</b> for efficient retrieval and reduced redundancy.
            Integrated <b>GPT-4o-mini</b> with <b>FastAPI</b> and <b>Redis</b> for LLM-driven code summarization and dependency tracing.
            Added <b>Prometheus</b> monitoring and adaptive caching for stable latency across long-context inference.
          </p>
          <p className="tags">
            #RAG #LLM #Qdrant #BM25 #Cohere #AST #FastAPI #Redis #Prometheus #Caching #CodeAnalysis
          </p>
        </div>

        <div className="project">
          <h2>Distributed Data Pipeline for LinkedIn Job Market Analytics</h2>
          <p>
            Engineered a distributed ETL pipeline to process 1.3 M LinkedIn job postings using <b>Apache Hadoop</b> and <b>PySpark</b> on <b>Google Dataproc</b>.
            Designed scalable ingestion and transformation workflows with <b>HDFS</b>, <b>MapReduce</b>, and <b>Parquet</b> serialization.
            Built preprocessing and feature engineering modules for ML-ready datasets supporting trend prediction and clustering.
            Optimized throughput with <b>YARN</b> tuning and batch-level parallelism for 3× faster execution.
          </p>
          <p className="tags">
            #DataEngineering #PySpark #Hadoop #HDFS #ETL #Dataproc #MapReduce #Parquet #YARN #BigData
          </p>
        </div>

        <div className="project">
          <h2>Relational Data Modeling for EV Adoption Analysis</h2>
          <p>
            Designed a <b>PostgreSQL</b> database for EV registration data with normalized schema and referential integrity.
            Implemented <b>ETL pipelines</b> for CSV ingestion with <b>PL/pgSQL</b> procedures and validation triggers.
            Indexed key attributes to improve query performance by &gt; 50%.
            Applied <b>EXPLAIN ANALYZE</b> for query optimization and geospatial trend analytics.
          </p>
          <p className="tags">
            #PostgreSQL #SQL #DatabaseDesign #PLpgSQL #ETL #Indexing #QueryOptimization #DataModeling
          </p>
        </div>

        {/* ==================== EXISTING PROJECTS ==================== */}

        <div className="project">
          <h2>Real-Time Weapon Detection : YOLOv11 vs RT-DETR</h2>
          <p>
            Benchmarked <b>YOLOv11 (CNN)</b> vs <b>RT-DETR (Transformer)</b> on CCTV streams with AMP training.
            RT-DETR achieved mAP50 83.0 / mAP50–95 37.2 / Recall 76.2 vs YOLOv11 77.8 / 34.9 / 73.6, latency 3.1 ms vs 18.7 ms.
            Delivered a <b>Streamlit</b> evaluation toolkit with PR curves and class-wise mAP; exported .pt / ONNX / TorchScript.
          </p>
          <p className="tags">
            #YOLOv11 #RTDETR #ComputerVision #ObjectDetection #Transformer #ONNX #TorchScript #Streamlit
          </p>
        </div>

        <div className="project">
          <h2>Legal Judgment Prediction (LexGLUE – ECtHR Task B)</h2>
          <p>
            Built a long-document multi-label classifier with <b>Legal-BERT</b> using overlap-chunking and [SEP].
            Fine-tuned with <b>AdamW</b>, cosine LR schedule, gradient accumulation ×4, and focal loss.
            Achieved F1 0.741 (val 0.747) and Micro Accuracy 0.923 (+2.9 F1 over BERT-base).
            Added attention heatmaps and adaptive thresholding for interpretability.
          </p>
          <p className="tags">
            #BERT #LegalBERT #NLP #TextClassification #HuggingFace #FocalLoss #Transformer #Explainability
          </p>
        </div>

        <div className="project">
          <h2>CityLearn – Multi-Agent Energy Control</h2>
          <p>
            Designed a forecast-aware controller for 18 buildings over 8,760 steps using <b>GRU</b> forecasts.
            Optimized a multi-objective cost combining CO₂, peak load, and comfort.
            Benchmarked <b>DQN</b>, <b>PPO</b>, and <b>SAC</b>; best model achieved −13,580 reward (~90 % over RBC) with +15.5 % uplift from forecasts.
          </p>
          <p className="tags">
            #ReinforcementLearning #A2C #PPO #DQN #SAC #EnergyOptimization #GRU #MultiAgentRL
          </p>
        </div>

        <div className="project">
          <h2>Autism Spectrum Disorder Detection – CNN Ensembles</h2>
          <p>
            Built an ensemble of <b>VGG16</b>, <b>MobileNet</b>, <b>InceptionV3</b>, and <b>ResNet50</b> for facial-expression classification.
            Applied class-imbalance handling, augmentation, and Grad-CAM visualization for explainability.
          </p>
          <p className="tags">
            #CNN #TransferLearning #EnsembleLearning #ComputerVision #GradCAM #DeepLearning
          </p>
        </div>

        <div className="project">
          <h2>COVID-19 Diagnosis from Chest X-Rays</h2>
          <p>
            Trained CNNs on lung-segmented CXR images with intensity normalization.
            Achieved 93.7 % accuracy with AUC and F1 reporting; deployed batch inference pipeline with threshold tuning.
          </p>
          <p className="tags">
            #CNN #MedicalImaging #ChestXRay #DeepLearning #AUC #DataPreprocessing
          </p>
        </div>

        <div className="project">
          <h2>Intracranial Hemorrhage Detection on Head CT</h2>
          <p>
            Developed multi-type ICH classifier with windowing and artifact reduction.
            Achieved ~87 % accuracy with macro F1; visualized Grad-CAM heatmaps for clinical review. Deployed to Heroku.
          </p>
          <p className="tags">
            #CTScan #MedicalAI #DeepLearning #GradCAM #Classification #HealthcareAI
          </p>
        </div>

        <div className="project">
          <h2>SHUSSH! · Context-Aware Android App</h2>
          <p>
            Implemented geofencing and orientation-based auto-silencing using <b>Flutter</b>.
            Integrated <b>Firebase Auth</b> + <b>Firestore</b> for sync and analytics; used Provider for state management.
          </p>
          <p className="tags">
            #Flutter #Firebase #Firestore #Geofencing #MobileApp #ContextAwareAI
          </p>
        </div>

        <div className="project">
          <h2>Autonomous Delivery Drone – Embedded Navigation</h2>
          <p>
            Configured <b>Raspberry Pi</b> flight control with PID-tuned stabilization using GPS and IMU telemetry.
            Implemented mission planning and failsafe loops for robust autonomous flight.
          </p>
          <p className="tags">
            #EmbeddedSystems #PID #Navigation #DroneAI #IoT #Autonomy
          </p>
        </div>

        <div className="project">
          <h2>WeatherBot · Serverless Conversational AI on AWS</h2>
          <p>
            Built a task-oriented chatbot with <b>Amazon Lex</b> and <b>Lambda</b> (Python) secured via IAM and API Gateway.
            Integrated <b>Amplify</b> frontend with <b>Cognito</b> auth and <b>CloudWatch</b> logging.
          </p>
          <p className="tags">
            #AWS #Lex #Lambda #Cognito #Amplify #Serverless #Chatbot #NLP
          </p>
        </div>

        <div className="project">
          <h2>Tailor App · Vertical CRUD with SMS Ops</h2>
          <p>
            Delivered order tracking and billing with normalized Firestore schema and offline-first caching.
            Automated <b>Twilio</b> SMS notifications via cloud functions with telemetry; added CSV export and search.
          </p>
          <p className="tags">
            #Firestore #Twilio #CloudFunctions #CRUD #Firebase #OfflineFirst
          </p>
        </div>

        <div className="project">
          <h2>3D Skeleton-Based Action Recognition</h2>
          <p>
            Processed UTD-MHAD skeleton streams and engineered kinematic features for ML baselines.
            Evaluated <b>ST-GCN</b> for spatiotemporal dependencies and benchmarked accuracy vs feature models.
          </p>
          <p className="tags">
            #ActionRecognition #SkeletonData #GraphNeuralNetwork #STGCN #MachineLearning
          </p>
        </div>

        <div className="project">
          <h2>Surviving Airplane Disasters – Unsupervised Analysis</h2>
          <p>
            Engineered features from weather and route context; applied <b>PCA</b> and <b>K-Means</b> with silhouette 0.83.
            Interpreted clusters using partial-dependence plots for risk pattern analysis.
          </p>
          <p className="tags">
            #UnsupervisedLearning #PCA #KMeans #Clustering #FeatureEngineering #DataScience
          </p>
        </div>

        <div className="project">
          <h2>NIFTY50 Market Analysis – BI Dashboards</h2>
          <p>
            Built interactive <b>Tableau</b> dashboards for price/volume regimes with filters and sector aggregation.
            Applied volatility bands and moving averages to highlight market regime shifts.
          </p>
          <p className="tags">
            #DataVisualization #Tableau #Finance #BI #Analytics
          </p>
        </div>

      </div>
    </div>
  );
}

export default Project;
