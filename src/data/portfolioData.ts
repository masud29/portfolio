import { Project, Skill, Experience, Education, Certification } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'MASUD RANA',
  title: 'Full Stack Software Engineer',
  subTitle: 'Laravel & React / TypeScript Specialist',
  location: 'Mirpur 2, Dhaka-1216, Bangladesh',
  phone: '+880 1737-191929',
  email: 'masudrana06013@gmail.com',
  github: 'https://github.com/masud29',
  linkedin: 'https://linkedin.com/in/masud29',
  summary: `Full Stack Developer with 2+ years of experience building scalable web applications, REST APIs, and admin dashboards using Laravel, React, TypeScript, and modern JavaScript tooling. Skilled at designing efficient database structures, integrating third-party and AI-powered tools (GitHub Copilot, Cursor AI, OpenAI API) to accelerate development and optimize performance. Proven track record delivering multi-role platforms (admin, agent, customer, student) end-to-end — from architecture to production deployment.`,
  stats: [
    { label: 'Years Experience', value: '2+' },
    { label: 'Production Platforms', value: '4+' },
    { label: 'Core Tech Stack', value: 'Laravel & React/TS' },
    { label: 'AI Code Velocity', value: '3x Faster' }
  ]
};

export const SKILLS: Skill[] = [
  // Backend
  { name: 'PHP', category: 'Backend', level: 92, tag: 'Core', featured: true },
  { name: 'Laravel Framework', category: 'Backend', level: 95, tag: 'Expert', featured: true },
  { name: 'RESTful API Development', category: 'Backend', level: 94, tag: 'Expert', featured: true },
  { name: 'Role-Based Access Control (RBAC)', category: 'Backend', level: 90, tag: 'Security', featured: true },
  { name: 'Payment Gateway Integration', category: 'Backend', level: 88, tag: 'Fintech' },
  { name: 'WebSockets', category: 'Backend', level: 82, tag: 'Realtime' },
  { name: 'Queue & Job Scheduling', category: 'Backend', level: 86, tag: 'Async' },

  // Frontend
  { name: 'TypeScript', category: 'Frontend', level: 88, tag: 'In Demand', featured: true },
  { name: 'React.js', category: 'Frontend', level: 90, tag: 'Frontend', featured: true },
  { name: 'Next.js', category: 'Frontend', level: 84, tag: 'SSR/SSG', featured: true },
  { name: 'JavaScript (ES6+)', category: 'Frontend', level: 92, tag: 'Core', featured: true },
  { name: 'Tailwind CSS', category: 'Frontend', level: 90, tag: 'Styling', featured: true },
  { name: 'HTML5 & CSS3', category: 'Frontend', level: 95, tag: 'Web' },
  { name: 'Bootstrap & jQuery', category: 'Frontend', level: 85, tag: 'UI' },

  // Database
  { name: 'MySQL', category: 'Database', level: 90, tag: 'Relational', featured: true },
  { name: 'SQL Schema Design', category: 'Database', level: 92, tag: 'Architecture', featured: true },
  { name: 'Redis Caching', category: 'Database', level: 82, tag: 'In-Memory', featured: true },

  // AI & Tools
  { name: 'Cursor AI & GitHub Copilot', category: 'AI & Tools', level: 95, tag: 'AI Velocity', featured: true },
  { name: 'OpenAI API Integration', category: 'AI & Tools', level: 88, tag: 'GenAI', featured: true },
  { name: 'ChatGPT & Claude Workflows', category: 'AI & Tools', level: 94, tag: 'Prompting' },

  // DevOps & Tools
  { name: 'Git & GitHub / GitLab', category: 'DevOps', level: 90, tag: 'VCS', featured: true },
  { name: 'Postman & API Testing', category: 'DevOps', level: 92, tag: 'APIs' },
  { name: 'Docker (Basics)', category: 'DevOps', level: 75, tag: 'Containers' },
  { name: 'CI/CD Fundamentals', category: 'DevOps', level: 80, tag: 'Deployment' }
];

export const PROJECTS: Project[] = [
  {
    id: 'ms-accounting',
    title: 'MS Accounting & Advisory',
    subtitle: 'Enterprise Financial Invoicing, Legal Case & ACL Portal',
    domain: 'tax.soft.dhakaapps.com',
    liveUrl: 'https://tax.soft.dhakaapps.com/',
    category: 'Financial Services',
    featured: true,
    role: 'Full Stack Laravel Developer',
    description: 'Comprehensive accounting and legal advisory platform featuring automated invoice generation, payment tracking, adviser commission strategy engine, legal case timeline management, document request vaults, and interactive appointment scheduling.',
    highlights: [
      'Engineered automated invoice itemization, payment processing, and financial reporting.',
      'Developed adviser performance metrics and commission payout calculation strategies.',
      'Architected legal case milestone activity timeline workflows, discussion boards, and client document request vaults.',
      'Implemented granular Module-to-Role and Module-to-User Access Control (ACL) separating Admin, Adviser, and Client portals.'
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'Invoicing & Payments', 'ACL Security', 'REST APIs', 'FullCalendar API', 'Bootstrap'],
    architectureNotes: 'Built with modular Laravel architecture featuring dynamic ACL permissions, event-driven invoice lifecycle management, and client document submission workflows.'
  },
  {
    id: 'gaconnect',
    title: 'GAConnect',
    subtitle: 'Study Abroad Application & Visa Management Platform',
    domain: 'gaconnt.com',
    liveUrl: 'https://gaconnt.com',
    category: 'Visa & Edu',
    featured: true,
    role: 'Lead Full Stack Developer',
    description: 'A multi-role enterprise portal supporting Admin, Counsellor, Agent, and Student accounts for end-to-end study-abroad application tracking, visa management, and university course selection.',
    highlights: [
      'Built multi-role architecture with dynamic Role-Based Access Control (RBAC).',
      'Developed application & visa status tracking workflows with automated notifications.',
      'Implemented secure document upload, management, and consultation booking engine.'
    ],
    technologies: ['Laravel', 'React.js', 'TypeScript', 'MySQL', 'REST APIs', 'RBAC', 'Tailwind CSS'],
    architectureNotes: 'Architected with Laravel REST API backend delivering JSON responses to a React/TypeScript frontend component layout.'
  },
  {
    id: 'ius-platform',
    title: 'IUS Education Platform',
    subtitle: 'Institutional Academic & Administration Portal',
    domain: 'ius.edu.bd',
    liveUrl: 'https://ius.edu.bd',
    category: 'Visa & Edu',
    featured: true,
    role: 'Full Stack Developer',
    description: 'Comprehensive educational platform featuring custom frontend interface and a robust role-wise admin management dashboard for university operations.',
    highlights: [
      'Engineered dynamic frontend and role-scoped administration module.',
      'Built multi-level RBAC for faculty, staff, and student portal access.',
      'Optimized backend queries and database schemas for fast page loads.'
    ],
    technologies: ['PHP', 'Laravel', 'React.js', 'JavaScript', 'MySQL', 'Bootstrap'],
    architectureNotes: 'Custom database design supporting student records, course cataloging, and administrative workflows.'
  },
  {
    id: 'binduvision',
    title: 'BinduVision',
    subtitle: 'Movie & Drama Streaming Platform',
    domain: 'binduvision.com',
    liveUrl: 'https://binduvision.com',
    category: 'Streaming',
    featured: true,
    role: 'Full Stack Developer',
    description: 'A rich video streaming application with an integrated custom video player, content categories (movies, dramas, series), and an end-to-end admin management panel.',
    highlights: [
      'Built responsive custom media player interface with multi-resolution playback.',
      'Designed admin management dashboard for video asset management and category organization.',
      'Integrated fast caching mechanisms for media catalog metadata.'
    ],
    technologies: ['Laravel', 'React', 'TypeScript', 'Redis', 'Video Player API', 'MySQL'],
    architectureNotes: 'Implemented Redis caching for media feed optimization and reduced latency on catalog browsing.'
  },
  {
    id: 'costechnologies',
    title: 'COS Technologies',
    subtitle: 'Full-Featured E-Commerce & Management Platform',
    domain: 'costechnologies.com',
    liveUrl: 'https://costechnologies.com',
    category: 'E-Commerce',
    featured: true,
    role: 'Full Stack Developer',
    description: 'Modern e-commerce platform equipped with real-time shopping cart, secure checkout, order status tracking, and a comprehensive management dashboard.',
    highlights: [
      'Implemented cart management, checkout logic, and live order status tracking.',
      'Integrated secure payment gateways with webhooks for automated order status updates.',
      'Created administrative dashboard for inventory, sales analytics, and customer support.'
    ],
    technologies: ['Laravel', 'React.js', 'Payment Gateway Integration', 'MySQL', 'RESTful API'],
    architectureNotes: 'Utilized asynchronous event queues for order notification emails and invoice generation.'
  },
  {
    id: 'ab-siddique-medical',
    title: 'AB Siddique Medical',
    subtitle: 'Healthcare Services, Doctor Scheduling & Academic Portal',
    domain: 'absiddiquemedical.com',
    liveUrl: 'https://absiddiquemedical.com/',
    category: 'Healthcare',
    featured: true,
    role: 'Full Stack Laravel Developer',
    description: 'Comprehensive medical, healthcare, and institutional portal supporting doctor schedule management, online patient appointments, academic research repositories, admission application forms, and event registrations.',
    highlights: [
      'Built doctor schedule management, appointment booking engine, and patient intake workflows.',
      'Developed online academic admission application forms and student applicant tracking system.',
      'Implemented medical research & publication repository along with multi-office directory mapping.',
      'Configured role-scoped administrative dashboard for medical board members and department staff.'
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'Appointment Engine', 'Blade / Bootstrap', 'REST APIs', 'ACL'],
    architectureNotes: 'Custom Laravel architecture featuring dynamic doctor availability scheduling, multi-department academic cataloging, and document storage.'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'dhaka-apps',
    role: 'Junior Software Engineer',
    company: 'Dhaka Apps Limited',
    location: 'Dhaka, Bangladesh',
    period: 'March 2024 – Present',
    isCurrent: true,
    responsibilities: [
      'Develop and maintain full-stack web applications using PHP Laravel backend and React frontend, delivering scalable, production-ready features.',
      'Design and build RESTful APIs and role-based admin dashboards used across multiple client platforms.',
      'Implement Role-Based Access Control (RBAC) and secure payment gateway integrations for e-commerce and service platforms.',
      'Collaborate with cross-functional teams (design, QA, product) to translate client requirements into clean, maintainable code.',
      'Leverage AI-assisted tools (GitHub Copilot, ChatGPT, Claude, Cursor AI) to dramatically speed up development, debugging, and code review.'
    ],
    techUsed: ['PHP', 'Laravel', 'React.js', 'TypeScript', 'MySQL', 'REST APIs', 'RBAC', 'AI Tools']
  }
];

export const EDUCATIONS: Education[] = [
  {
    id: 'bsc-cse',
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'Uttara University',
    period: 'Completed',
    details: 'Focused on Data Structures, Algorithms, Database Systems, Software Engineering, and Web Technologies.'
  },
  {
    id: 'diploma-cse',
    degree: 'Diploma in Engineering (4 years) - Computer Technology',
    institution: 'Bogura Polytechnic Institute',
    period: 'Completed',
    details: 'Foundation in Computer Hardware, Operating Systems, Networking, and Programming Fundamentals.'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'creative-it',
    title: 'Web Development (PHP with Laravel)',
    provider: 'Creative IT Institute',
    duration: '6 Months Professional Training'
  },
  {
    id: 'isdb-bisew',
    title: 'Professional Web Application Development (PHP, Laravel)',
    provider: 'IsDB-BISEW IT Scholarship Programme',
    duration: '6 Months Intensive Program'
  }
];
