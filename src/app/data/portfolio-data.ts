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
  { name: 'TypeScript', icon: 'fab fa-js-square', category: 'frontend' },
  { name: 'HTML5', icon: 'fab fa-html5', category: 'frontend' },
  { name: 'CSS3', icon: 'fab fa-css3-alt', category: 'frontend' },
  { name: 'Angular Material', icon: 'fas fa-layer-group', category: 'frontend' },

  { name: 'ASP.NET Core Web API', icon: 'fab fa-microsoft', category: 'backend' },
  { name: 'C#', icon: 'fas fa-code', category: 'backend' },
  { name: 'Entity Framework Core', icon: 'fas fa-project-diagram', category: 'backend' },
  { name: 'ADO.NET', icon: 'fas fa-plug', category: 'backend' },
  { name: 'Dependency Injection', icon: 'fas fa-sitemap', category: 'backend' },
  { name: 'Repository Pattern', icon: 'fas fa-boxes', category: 'backend' },

  { name: 'SQL Server', icon: 'fas fa-database', category: 'database' },
  { name: 'Stored Procedures', icon: 'fas fa-cogs', category: 'database' },
  { name: 'LINQ', icon: 'fas fa-filter', category: 'database' },

  { name: 'Highcharts', icon: 'fas fa-chart-line', category: 'frontend' },
  { name: 'Chart.js', icon: 'fas fa-chart-pie', category: 'frontend' },
  { name: 'Apache ECharts', icon: 'fas fa-chart-area', category: 'frontend' },
  { name: 'ngx-charts', icon: 'fas fa-chart-bar', category: 'frontend' },

  { name: 'RDLC Reports', icon: 'fas fa-file-alt', category: 'reporting' },

  { name: 'Git & GitHub', icon: 'fab fa-github', category: 'tools' },
  { name: 'Postman', icon: 'fas fa-paper-plane', category: 'tools' },
  { name: 'VS / VS Code', icon: 'fas fa-code', category: 'tools' },
  { name: 'Chrome DevTools', icon: 'fab fa-chrome', category: 'tools' },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    title: 'Junior Full Stack Developer (.NET Core & Angular)',
    company: 'Software Technologies, Multan',
    period: 'Oct 2025 – Present',
    description: 'Designed and developed POS, petrol pump management, and invoice/tax workflows. Implemented ZATCA-compliant invoicing logic. Built RESTful APIs with ASP.NET Core Web API and created dynamic Angular dashboards with role-based access. Developed RDLC reports for invoices, sales summaries, inventory, and financial reporting. Optimized SQL queries and stored procedures for performance and reliability.',
    technologies: ['Angular', 'TypeScript', 'Angular Material', 'ASP.NET Core Web API', 'C#', 'Entity Framework Core', 'ADO.NET', 'SQL Server', 'Stored Procedures', 'RDLC Reports', 'Highcharts', 'Chart.js', 'Apache ECharts', 'Git']
  },
  {
    title: 'Junior Software Engineer',
    company: 'Bin Yousaf Solution Provider, Lahore',
    period: 'Feb 2025 – Aug 2025',
    description: 'Developed responsive Angular single-page applications with component-based architecture. Integrated Angular apps with ASP.NET Core Web API services. Designed database schemas and implemented repositories using Entity Framework Core. Built analytical dashboards using Chart.js, Highcharts, and Apache ECharts. Implemented routing, lazy loading, and reusable components for performance and maintainability.',
    technologies: ['Angular', 'TypeScript', 'Angular Material', 'ASP.NET Core Web API', 'C#', 'Entity Framework Core', 'SQL Server', 'Highcharts', 'Chart.js', 'Apache ECharts', 'Git']
  }
];

export const PORTFOLIO_CONFIG = {
  personal: {
    name: 'Shah Zaib',
    title: 'Junior Full Stack Developer',
    tagline: 'ASP.NET Core Web API + Angular • SQL Server • RDLC Reports',
    bio: `Junior Full Stack Developer with 11+ months of hands-on experience building production-grade web applications using ASP.NET Core Web API and Angular. Practical expertise in ADO.NET, Entity Framework Core, and SQL Server (complex queries, stored procedures, and performance-focused data access). Experienced in POS, petrol pump management, invoice and tax-compliant solutions, RDLC-based reporting, interactive dashboards, and role-based access. Focused on clean code, maintainability, and solving real-world business problems.`,
  },
  contact: {
    message: "I'm always interested in new opportunities and exciting projects. Feel free to reach out!"
  }
};



export const SERVICES: Service[] = [
  {
    title: 'Frontend Development',
    description: 'Building responsive Angular applications with Angular Material and modern UI patterns',
    icon: 'fas fa-code',
    features: ['Angular Development', 'Angular Material', 'Reactive Forms', 'Responsive UI', 'Interactive Dashboards']
  },
  {
    title: 'Backend Development',
    description: 'Creating robust REST APIs with ASP.NET Core Web API and clean architecture practices',
    icon: 'fas fa-server',
    features: ['ASP.NET Core Web API', 'C# Development', 'Entity Framework Core', 'ADO.NET', 'RESTful Services']
  },
  {
    title: 'Reporting & Dashboards',
    description: 'Data-driven reporting and analytics for real business workflows',
    icon: 'fas fa-chart-line',
    features: ['RDLC Reports', 'SQL Server Stored Procedures', 'Highcharts / Chart.js / ECharts', 'Performance Optimization']
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
