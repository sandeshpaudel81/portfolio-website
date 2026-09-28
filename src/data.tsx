export type Project = {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  link: string | null;
};

export type Publication = {
  year: string;
  title: string;
  authors: string;
  venue: string;
  type: string;
  link: string | null;
};

export const profile = {
  name: "Sandesh Prasad Paudel",
  shortName: "Sandesh Paudel",
  headline: "Artificial Intelligence · Data Science · Health Informatics",
  location: "Sydney, Australia",
  email: "sandeshpaudel81@gmail.com",
  bio:
    "I am a Master of Data Science student at Charles Darwin University with a background in Computer Engineering. My research interests focus on artificial intelligence and data-driven methods for real-world problems, particularly healthcare, medical data, and intelligent information systems.",
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
  "Artificial Intelligence",
  "Health Informatics",
  "Machine Learning",
  "Medical AI",
  "Large Language Models",
  "Computer Vision",
];

export const projects: Project[] = [
  {
    id: "01",
    title: "CKD Progression Prediction",
    subtitle: "Masters Thesis — Current",
    tags: ["LSTM", "XGBoost", "SHAP", "PyTorch", "Clinical AI"],
    description:
      "Predicting Chronic Kidney Disease progression using 10-year longitudinal patient records. Employs LSTM for temporal sequence modelling, XGBoost for baseline comparisons, and SHAP values for clinical interpretability — making the model transparent enough for medical decision support.",
    link: null,
  },
  {
    id: "02",
    title: "Nepali Citizenship OCR System",
    subtitle: "Major Project — B.E. Final Year",
    tags: ["YOLOv5", "OCR", "Computer Vision", "Python", "Deep Learning"],
    description:
      "An AI pipeline to extract structured text data from Nepali citizenship documents using YOLOv5 for field detection and OCR for text extraction. Addresses the challenge of low-resource language document processing. Research preprint published on arXiv.",
    link: "https://arxiv.org/pdf/2410.05721",
  },
  {
    id: "03",
    title: "Mammographic Radiomics & Deep Learning",
    subtitle: "Medical Imaging Research",
    tags: ["Radiomics", "Deep Learning", "Medical Imaging", "Computer Vision", "PyTorch"],
    description:
      "Exploring radiomics and deep learning approaches for analysing mammographic medical images. The project investigates how handcrafted radiomic features and learned image representations can support computer-aided analysis of breast imaging data.",
    link: null,
  },
  {
    id: "04",
    title: "Air Quality Anomaly Detection",
    subtitle: "AWS Data Science Project",
    tags: ["Python", "AWS", "Time Series", "Anomaly Detection", "Machine Learning"],
    description:
      "A data-driven system for detecting unusual air-quality patterns from environmental sensor data. The project explores temporal features, station-level baselines, multi-sensor relationships, and anomaly detection techniques to identify potentially significant pollution events.",
    link: null,
  },
  {
    id: "05",
    title: "ASK-Appliance",
    subtitle: "RAG-Based AI Assistant",
    tags: ["RAG", "LLM", "NLP", "LlamaIndex", "Vector Database", "Generative AI"],
    description:
      "A conversational AI application designed to help users troubleshoot and understand home appliances. The system uses a Retrieval-Augmented Generation pipeline to retrieve relevant information from appliance manuals and technical documentation before generating grounded responses.",
    link: null,
  },
  {
    id: "06",
    title: "NSW Road Crash Analytics Dashboard",
    subtitle: "Data Analytics — Power BI",
    tags: ["Power BI", "Data Analytics", "NSW Government Data", "Visualisation"],
    description:
      "A 3-page interactive Power BI dashboard built on real NSW Government crash datasets. Provides granular insights into crash patterns by time, location, severity, and contributing factors — demonstrating end-to-end analytics capability from raw data to executive-level reporting.",
    link: null,
  },
];

export const publications: Publication[] = [
    {
        year: "2026",
        title: "CKD Risk Prediction using 10 years Longitudinal Data",
        authors: "Sandesh Prasad Paudel",
        venue: "Submitted to CDU",
        type: "Report",
        link: null
    },

  {
    year: "2024",
    title: "Nepali Citizenship OCR System",
    authors: "Sandesh Prasad Paudel et al.",
    venue: "arXiv preprint",
    type: "Preprint",
    link: "https://arxiv.org/pdf/2410.05721",
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
