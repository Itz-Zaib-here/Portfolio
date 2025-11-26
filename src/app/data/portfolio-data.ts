export interface Skill {
  name: string;
  icon: string;
  category: string;
}

export interface WorkExperience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Project {
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  language?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  gpa?: string;
  relevantCourses?: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: string;
  url?: string;
}

export const SKILLS: Skill[] = [
  { name: 'Angular', icon: 'fab fa-angular', category: 'frontend' },
  { name: '.NET', icon: 'fab fa-microsoft', category: 'backend' },
  { name: 'TypeScript', icon: 'fab fa-js-square', category: 'frontend' },
  { name: 'C#', icon: 'fas fa-code', category: 'backend' },
  { name: 'SQL', icon: 'fas fa-database', category: 'database' },
  { name: 'GitHub', icon: 'fab fa-github', category: 'tools' },
  { name: 'HTML5', icon: 'fab fa-html5', category: 'frontend' },
  { name: 'CSS3', icon: 'fab fa-css3-alt', category: 'frontend' },
  { name: 'Bootstrap', icon: 'fab fa-bootstrap', category: 'frontend' },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    title: 'Junior Full Stack Developer',
    company: 'Software Technologies IT Solutions Provider Multan',
    period: 'Working',
    description: 'Developed web apps using Angular and .NET; performed code reviews, debugging, and testing. Worked with RESTful APIs, Git, and agile processes.',
    technologies: ['Angular', '.NET', 'C#', 'TypeScript', 'Git', 'REST APIs', 'SQL Server', 'HTML5', 'CSS3', 'Bootstrap','Reporting']
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Bin Yousaf Solution Provider, Lahore',
    period: '6 months',
    description: 'Built responsive Angular UIs and integrated .NET APIs. Implemented CRUD, form validation, authentication flows, dashboards, and supported testing and deployments.',
    technologies: ['Angular', 'TypeScript', 'RxJS', 'Bootstrap', 'ASP.NET Web API', 'C#', 'REST APIs', 'SQL Server', 'Chart.js', 'Git']
  }
];

export const PORTFOLIO_CONFIG = {
  personal: {
    name: 'ShahZaib',
    title: 'Full Stack Developer',
    tagline: 'Building scalable web apps with clean architecture.',
    bio: `I'm a passionate Full Stack Developer with expertise in modern web technologies. 
    I specialize in building robust, scalable applications using Angular, .NET, and TypeScript. 
    My approach focuses on clean architecture, performance optimization, and user experience.`,
  },
  contact: {
    message: "I'm always interested in new opportunities and exciting projects. Feel free to reach out!"
  }
};



export const SERVICES: Service[] = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, modern web applications with Angular and TypeScript',
    icon: 'fas fa-code',
    features: ['Angular Development', 'TypeScript', 'Responsive Design', 'UI/UX Implementation']
  },
  {
    title: 'Backend Development',
    description: 'Creating robust APIs and server-side applications with .NET',
    icon: 'fas fa-server',
    features: ['.NET Web APIs', 'C# Development', 'Database Design', 'RESTful Services']
  },
  {
    title: 'Full Stack Solutions',
    description: 'End-to-end web application development from concept to deployment',
    icon: 'fas fa-laptop-code',
    features: ['Complete Web Apps', 'Database Integration', 'API Development', 'Deployment & Maintenance']
  }
];




// src/app/data/portfolio-data.ts

export interface Project {
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  language?: string;
}

export const PROJECTS: Project[] = [
  {
    name: "ECharts",
    description: '',
    html_url: "https://github.com/Itz-Zaib-here/ECharts",
    homepage: '',
    stargazers_count: 0,
    forks_count: 0,
    topics: [],
    language: "TypeScript"
  },
  {
    name: "userAppApi",
    description: '',
    html_url: "https://github.com/Itz-Zaib-here/userAppApi",
    homepage: '',
    stargazers_count: 0,
    forks_count: 0,
    topics: [],
    language: "TypeScript"
  },
  {
    name: "role-auth-test",
    description: '',
    html_url: "https://github.com/Itz-Zaib-here/role-auth-test",
    homepage: '',
    stargazers_count: 0,
    forks_count: 0,
    topics: [],
    language: "TypeScript"
  },
  {
    name: "MultiUserAuth",
    description: '',
    html_url: "https://github.com/Itz-Zaib-here/MultiUserAuth",
    homepage: '',
    stargazers_count: 0,
    forks_count: 0,
    topics: [],
    language: "TypeScript"
  },
  {
    name: "API-CRUD-For-Products-and-Categories",
    description: "API CRUD For Products and Categories",
    html_url: "https://github.com/Itz-Zaib-here/API-CRUD-For-Products-and-Categories",
    homepage: '',
    stargazers_count: 0,
    forks_count: 0,
    topics: [],
    language: "C#"
  },
  {
    name: "NewRepo",
    description: "API CRUD for Products and Categories",
    html_url: "https://github.com/Itz-Zaib-here/NewRepo",
    homepage: '',
    stargazers_count: 0,
    forks_count: 0,
    topics: [],
    language: ''
  },
  {
    name: "ChatBot",
    description: '',
    html_url: "https://github.com/Itz-Zaib-here/ChatBot",
    homepage: '',
    stargazers_count: 0,
    forks_count: 0,
    topics: [],
    language: "TypeScript"
  },
  {
    name: "JWT-Imp",
    description: '',
    html_url: "https://github.com/Itz-Zaib-here/JWT-Imp",
    homepage: '',
    stargazers_count: 0,
    forks_count: 0,
    topics: [],
    language: "CSS"
  },
  {
    name: "eCommerce",
    description: '',
    html_url: "https://github.com/Itz-Zaib-here/eCommerce",
    homepage: '',
    stargazers_count: 0,
    forks_count: 0,
    topics: [],
    language: "CSS"
  },
  {
    name: "Surprise",
    description: '',
    html_url: "https://github.com/Itz-Zaib-here/Surprise",
    homepage: '',
    stargazers_count: 0,
    forks_count: 0,
    topics: [],
    language: "HTML"
  },
  {
    name: "Bus-Ticket_Booking",
    description: '',
    html_url: "https://github.com/Itz-Zaib-here/Bus-Ticket_Booking",
    homepage: '',
    stargazers_count: 0,
    forks_count: 0,
    topics: [],
    language: "CSS"
  },
  {
    name: "Weather-Details",
    description: '',
    html_url: "https://github.com/Itz-Zaib-here/Weather-Details",
    homepage: '',
    stargazers_count: 0,
    forks_count: 0,
    topics: [],
    language: "HTML"
  },
];
