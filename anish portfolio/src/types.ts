export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skillsList: string[];
}

export interface TechIcon {
  name: string;
  iconName: string; // Lucide icon reference name
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
}
