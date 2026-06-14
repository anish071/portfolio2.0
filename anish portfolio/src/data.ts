import { Project, SkillCategory, TechIcon, ExperienceItem, EducationItem, ContactInfo } from './types';

export const HERO_DATA = {
  name: "Anish Kumar Tiwari",
  titleAndRoles: "AI Engineer • Full Stack Developer • Android Developer",
  description: "Building intelligent AI systems, scalable web applications, and innovative digital products powered by modern technologies.",
  avatarUrl: "https://github.com/anish071.png",
};

export const PROJECTS: Project[] = [
  {
    id: "secureurl-plus",
    title: "SecureURL+",
    description: "An AI-powered Android URL shortener that securely compresses and analyzes links before redirection, identifying phishing risks and providing instant domain meta-insights using on-device or cloud-based Large Language Models.",
    tech: ["Kotlin", "Gemini 2.5", "Jetpack Compose", "Room Database"],
    githubUrl: "https://github.com/anish071/SecureURL-Plus",
  },
  {
    id: "cropguard-ai",
    title: "CropGuard AI",
    description: "An intelligent crop health diagnosis and decision support system. Uses a hybrid Deep Learning approach of CNNs for rapid field diagnosis and LSTMs for forecasting localized crop diseases based on environmental trends.",
    tech: ["React", "FastAPI", "CNN", "LSTM", "PostgreSQL"],
    githubUrl: "https://github.com/anish071/CropGuard-AI",
  },
  {
    id: "multi-agent-orchestrator",
    title: "Multi-Agent Task Orchestrator",
    description: "An advanced workflow automation platform. Orchestrates multiple autonomous AI agents acting in parallel or sequential lanes to decompose complex business assignments, run background research, and produce formatted deliverables.",
    tech: ["Python", "LangChain", "Gemini 2.5 Pro", "FastAPI"],
    githubUrl: "https://github.com/anish071/Multi-Agent-Task-Orchestrator",
  }
];

export const TECH_ICONS: TechIcon[] = [
  { name: "React", iconName: "Atom" },
  { name: "Python", iconName: "Code2" },
  { name: "Kotlin", iconName: "Smartphone" },
  { name: "Java", iconName: "Coffee" },
  { name: "JavaScript", iconName: "FileCode" },
  { name: "Node.js", iconName: "Server" },
  { name: "FastAPI", iconName: "Zap" },
  { name: "PostgreSQL", iconName: "Database" },
  { name: "Git", iconName: "GitBranch" },
  { name: "LangChain", iconName: "Network" },
  { name: "Gemini AI", iconName: "Sparkles" }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AI & Machine Learning",
    description: "Building intelligent systems using Gemini, CNN, LSTM, and autonomous AI agents.",
    skillsList: ["Gemini 2.5 Pro", "LangChain", "CNN & LSTM Models", "Neural Networks", "FastAPI Deployments"]
  },
  {
    title: "Full Stack Development",
    description: "React, Node.js, standard REST APIs, complex databases, and lightweight authorization flows.",
    skillsList: ["React v19", "Node.js (Express)", "Tailwind CSS v4", "TypeScript", "PostgreSQL / SQLite"]
  },
  {
    title: "Android Development",
    description: "Modern modularized applications using Jetpack Compose, Kotlin, Room Database, and Retrofit.",
    skillsList: ["Kotlin & Java", "Jetpack Compose", "Coroutines & Flow", "Room DB / SQLite", "Retrofit API Integration"]
  },
  {
    title: "Cloud & Backend",
    description: "FastAPI, PostgreSQL, clean REST API layouts, containerized microservices, and asynchronous task execution.",
    skillsList: ["FastAPI", "PostgreSQL", "REST APIs", "Microservices", "Docker Containerization"]
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "tata-steel",
    role: "Full Stack Development Intern",
    company: "Tata Steel, West Bokaro",
    location: "West Bokaro, Jharkhand, India",
    period: "July 2025 – September 2025",
    points: [
      "Designed and deployed a highly operational full-stack web dashboard using React and Python backend to streamline key production lifecycle monitoring.",
      "Optimized query runtimes on local PostgreSQL relational databases, improving transactional retrieval speeds by over 35%.",
      "Integrated microservices utilizing RESTful APIs to feed live operations feedback curves into modern dashboard screens.",
      "Collaborated closely with site engineering groups to gather requirements, convert functional specs into robust database schemas, and deploy containerized, localized solutions."
    ]
  }
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: "usha-martin",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Usha Martin University",
    period: "2022 – Present",
  },
  {
    id: "higher-secondary",
    degree: "Higher Secondary (Class XII - Science)",
    institution: "State Board Federation",
    period: "2020 – 2022",
  },
  {
    id: "secondary",
    degree: "Secondary School Certificate (Class X)",
    institution: "State Board Federation",
    period: "2019 – 2020",
  }
];

export const CONTACT_INFO: ContactInfo = {
  phone: "+91 7762953029",
  email: "at4344958@gmail.com",
  location: "Ranchi, Jharkhand, India",
  github: "anish071",
  linkedin: "ANISH KUMAR TIWARI",
};
