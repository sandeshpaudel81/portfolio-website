export type Link = { label: string; url: string };

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  result?: string;
  links: Link[];
};

export type Publication = {
  year: string;
  title: string;
  authors: string;
  venue: string;
  type: string;
  links: Link[];
};

export const profile = {
  name: "Sandesh Prasad Paudel",
  shortName: "Sandesh Paudel",
  headline: "Data Scientist · Interpretable Machine Learning · Healthcare AI",
  location: "Sydney, Australia",
  email: "sandeshpaudel81@gmail.com",
  cv: "/Sandesh_Paudel_CV.pdf",
  bio:
    "I recently completed a Master of Information Technology at Charles Darwin University, after a Bachelor in Computer Engineering. I work on interpretable and leakage-safe machine learning for clinical data: longitudinal risk prediction with causal analysis, and radiomics-deep learning fusion for mammography. I am seeking a PhD in medical AI and health informatics.",
  photo: "/sandesh.png",
  links: {
    github: "https://github.com/sandeshpaudel81",
    linkedin: "https://www.linkedin.com/in/sandesh-paudel-601508149/",
    scholar: "https://scholar.google.com/citations?hl=en&user=xyNBkewAAAAJ",
  },
};

export const education = [
  {
    period: "2025–2026",
    degree: "Master of Data Science",
    institution: "Charles Darwin University",
  },
  {
    period: "2019–2024",
    degree: "Bachelor in Computer Engineering",
    institution: "Tribhuvan University, Institute of Engineering",
  },
];

export const researchInterests = [
  "Medical AI",
  "Interpretable Machine Learning",
  "Clinical Risk Prediction",
  "Medical Imaging",
];

export const projects: Project[] = [
  {
    id: "01",
    title: "Longitudinal ML and Causal Inference for CKD Risk in Diabetic Patients",
    subtitle: "Master's capstone · Lead contributor in a group of four · Supervisor: Dr Sami Azam · 2026",
    tags: ["XGBoost", "LSTM / BiLSTM-attention", "SHAP", "Causal inference", "Longitudinal data"],
    description:
      "Early prediction of chronic kidney disease from a public 10-year cohort of 400 diabetic patients, using five-year sliding windows and a patient-level, leakage-aware pipeline. Compared Random Forest, XGBoost, LSTM and BiLSTM-attention, explained predictions with SHAP, and estimated causal effects of risk factors with DAG-based adjustment and refutation tests.",
    result:
      "Class-weighted XGBoost performed best (ROC-AUC 0.874 with full history; 0.730 when prior CKD history is excluded). A high-BMI trajectory had the largest robust causal effect. Limits: small public cohort, no external validation.",
    links: [
      { label: "Code", url: "https://github.com/sandeshpaudel81/CKD-risk-prediction-ML-DL" },
      { label: "Presentation video", url: "https://youtu.be/K6LySGIY_ic" },
    ],
  },
  {
    id: "02",
    title: "Radiomics × Deep Learning Fusion for Breast Lesion Classification",
    subtitle: "Medical imaging research · CBIS-DDSM · 2026",
    tags: ["Radiomics", "DenseNet / Swin-T", "Feature fusion", "XGBoost", "Bootstrap CIs"],
    description:
      "Benign vs malignant classification of 2,437 CBIS-DDSM lesion ROIs, comparing PyRadiomics features, five frozen ImageNet backbones, partial fine-tuning, and early/late fusion. Leakage-safe protocol: patient-grouped train/test split, model selection by grouped CV on training patients only, and patient-level bootstrap confidence intervals.",
    result:
      "Deep features beat radiomics (DenseNet121 AUC 0.775 vs 0.736). Best model, DenseNet121 + radiomics: AUC 0.782 (95% CI 0.735–0.828). Early-fusion gains were small and not statistically significant.",
    links: [
      { label: "Code & results", url: "https://github.com/sandeshpaudel81/cbis-ddsm-radiomics-deep-learning" },
    ],
  },
  {
    id: "03",
    title: "Mero Nagarikta: Nepali Citizenship Card Data Extraction",
    subtitle: "B.E. final-year project · arXiv preprint · 2024",
    tags: ["YOLOv8", "OCR", "PyTesseract", "Low-resource language", "Flutter"],
    description:
      "A pipeline that detects text fields on Nepali citizenship cards with a fine-tuned YOLOv8 model, reads them with Nepali-optimised PyTesseract and post-correction, and serves results through a mobile app.",
    result: "Text-field detection mAP 99.1% (front) and 96.1% (back) on a 40-image validation set.",
    links: [{ label: "arXiv preprint", url: "https://arxiv.org/abs/2410.05721" }],
  },
  {
    id: "04",
    title: "Air Quality Anomaly Detection",
    subtitle: "Other project · AWS",
    tags: ["Time series", "Anomaly detection", "AWS"],
    description:
      "Detecting unusual air-quality patterns from environmental sensor data using temporal features, station-level baselines and multi-sensor relationships.",
    links: [],
  },
  {
    id: "05",
    title: "ASK-Appliance",
    subtitle: "Other project · RAG assistant",
    tags: ["RAG", "LLM", "LlamaIndex"],
    description:
      "A retrieval-augmented assistant that answers appliance troubleshooting questions grounded in manuals and technical documentation.",
    links: [],
  },
  {
    id: "06",
    title: "NSW Road Crash Analytics Dashboard",
    subtitle: "Other project · Power BI",
    tags: ["Power BI", "Data visualisation"],
    description:
      "A three-page interactive dashboard on NSW Government crash data, covering patterns by time, location, severity and contributing factors.",
    links: [],
  },
];

export const publications: Publication[] = [
  {
    year: "2024",
    title:
      "Mero Nagarikta: Advanced Nepali Citizenship Data Extractor with Deep Learning-Powered Text Detection and OCR",
    authors: "S. Dhakal, S. Sigdel, S. P. Paudel, S. K. Ranabhat, N. Lamichhane (equal contribution)",
    venue: "arXiv:2410.05721",
    type: "Preprint",
    links: [{ label: "Read preprint", url: "https://arxiv.org/abs/2410.05721" }],
  },
  {
    year: "2026",
    title:
      "Beyond Prediction: Longitudinal Machine Learning and Causal Inference for CKD Risk in Diabetic Patients",
    authors: "S. P. Paudel, S. K. Ranabhat, O. Shrestha, E. H. Samy · Supervisor: Dr Sami Azam",
    venue: "Master's capstone report, Charles Darwin University",
    type: "Thesis report",
    links: [
      { label: "Code", url: "https://github.com/sandeshpaudel81/CKD-risk-prediction-ML-DL" },
      { label: "Presentation video", url: "https://youtu.be/K6LySGIY_ic" },
    ],
  },
];

export const skills = [
  "Machine Learning",
  "Deep Learning",
  "Artificial Intelligence",
  "Large Language Models",
  "Generative AI",
  "Retrieval-Augmented Generation",
  "Natural Language Processing",
  "Computer Vision",
  "Medical Imaging",
  "Data Science",
  "Python",
  "SQL",
  "Data Analysis",
  "Data Visualisation",
  "MLOps",
  "Cloud & AWS",
];

export const experience: { role: string; organisation: string; period: string }[] = [];
