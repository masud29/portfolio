export type SkillCategory = 'Backend' | 'Frontend' | 'Database' | 'AI & Tools' | 'DevOps';

export interface Skill {
  name: string;
  category: SkillCategory;
  tier: 'Core Stack' | 'Proficient' | 'Familiar';
  tag?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  domain: string;
  liveUrl: string;
  category: 'Full Stack' | 'Visa & Edu' | 'Streaming' | 'E-Commerce' | 'Financial Services' | 'Healthcare';
  description: string;
  highlights: string[];
  technologies: string[];
  featured: boolean;
  role: string;
  architectureNotes?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  responsibilities: string[];
  techUsed: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period?: string;
  details?: string;
}

export interface Certification {
  id: string;
  title: string;
  provider: string;
  duration: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
