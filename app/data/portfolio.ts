export interface Project {
  number: string;
  type: string;
  title: string;
  description: string;
  skills: string[];
  artwork: "artwork-lime" | "artwork-coral" | "artwork-blue";
  note: string;
  challenge: string;
  approach: string;
  result: string;
  projectLink: {
    label: string;
    href: string;
  };
}

export interface TimelineEntry {
  period: string;
  title: string;
  company: string;
  detail: string;
}

export interface EducationEntry {
  type: string;
  name: string;
  place: string;
  detail: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      "Angular Js",
      "React Js",
      "React Native",
      "Redux",
      "Next Js",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
    ],
  },
  {
    category: "Backend",
    skills: ["Node Js", "Express Js", "Python", "MySQL", "MongoDB"],
  },
  {
    category: "Other tools",
    skills: [
      "Git",
      "GitHub",
      "nginx",
      "Jenkins",
      "VS Code",
      "Postman",
      "Power BI",
      "Figma",
    ],
  },
];

export const projects: Project[] = [
  {
    number: "01",
    type: "FEATURED TRACK",
    title: "Site Health Monitor",
    description:
      "A monitoring and auto-alerting project. Open the live app to explore the finished experience.",
    skills: ["React Js", "Node Js", "MySQL", "Git"],
    artwork: "artwork-lime",
    note: "Live project",
    challenge: "Build a project for monitoring site health and surfacing alerts.",
    approach: "Explore the live project to see the implemented monitoring experience.",
    result: "The live application is available to explore.",
    projectLink: {
      label: "View live app",
      href: "https://site-health-monitor-autoalerting.vercel.app/",
    },
  },
  {
    number: "02",
    type: "IN THE ROTATION",
    title: "DSA-FIGHTER",
    description:
      "An online project focused on DSA practice. Visit the repository to see its code and implementation.",
    skills: ["ReactJS", "Tailwind css",  "Nodejs", "OllamaAI "],
    artwork: "artwork-coral",
    note: "Code repository",
    challenge: "What was the challenge or opportunity?",
    approach: "What did you personally design, build, or improve?",
    result: "The source code is available in the project repository.",
    projectLink: {
      label: "View source code",
      href: "https://github.com/omganeshganesh91/GAME-DSA",
    },
  },
  {
    number: "03",
    type: "DEEP CUT",
    title: "Bill Payments Analysis",
    description:
      "A bill-payments analysis project. Visit the repository to explore the analysis and source.",
    skills: ["React Js", "Nodejs", "Mysql", "Express Js"],
    artwork: "artwork-blue",
    note: "Code repository",
    challenge: "What question or idea inspired this project?",
    approach: "How did you explore and develop the idea?",
    result: "The source code is available in the project repository.",
    projectLink: {
      label: "View source code",
      href: "https://github.com/omganeshganesh91/Bill-Payments-analysis",
    },
  },
];

export const experience: TimelineEntry[] = [
  {
    period: "July 2026 - Present",
    title: "Software Engineer",
    company: "Novac Technologies Solutions Pvt Ltd",
    detail: `🔹 Architected the CMS powering 39 SEO-optimized pages across the Shriram One super app platform
 
🔹 Built a RESTful API layer with role-based publishing workflows, enabling controlled content review and approval before pages go live
 
🔹 Eliminated static page maintenance entirely — 100% reduction in manual dev effort for routine content updates
 
🔹 Enabled non-technical content teams to independently publish and edit pages, removing developers as a bottleneck for every text or layout change
 
🔹 Designed the content data model in MongoDB to support flexible, SEO-friendly page structures without rigid schema constraints
 
🔹 Integrated the CMS with the Angular frontend for seamless dynamic rendering, keeping page load performance and SEO metadata intact`,
  },
  {period: "July 2025 - July 2026",
    title: "Software Engineer Trainee",
    company: "Novac Technologies Solutions Pvt Ltd",
    detail: `✨ Developed an internal Consent Management System for Shriram Finance, replacing a costly third-party solution, ensuring compliance with regulatory standards and implementing 
💠 Role-Based Access Control (RBAC) for secure permission workflows
💠Automated consent tracking and document reporting, reducing manual data entry efforts by 80%+ and significantly lowering external subscription costs
💠Built a scalable, multilingual platform using React.js, Laravel (PHP), MongoDB, and Nginx, with JavaScript SDK integration for seamless embedding across web and mobile applications
Engineered a scalable Integration DataStore Framework that automated third-party integration enablement, reducing manual effort by 100%
💠Designed and implemented dynamic handler generation modules, improving integration onboarding speed by 60%
💠Developed and integrated RESTful APIs for 9+ third-party services, ensuring seamless data flow and system interoperability
💠Led migration of 9+ integrations' customer data from MySQL to MongoDB, improving performance, scalability, and query efficiency
💠Implemented secure backend workflows focusing on data validation, API security, and reliable data handling
💠Actively contributed to internal learning initiatives (NLearn) and achieved Top 3 Rank, demonstrating strong commitment to continuous learning and skill development`,
  },
];

export const education: EducationEntry[] = [
  {
    type: "Adhiyamaan College of Engineering, Hosur",
    name: "Bachelor of Technology-BTech ",
    place: "Computer Science and Engineering",
    detail: "sep 2021 - June 2025.",
  },
  // {
  //   type: "Learning in progress",
  //   name: "What you are learning now",
  //   place: "Self-directed, course, or community",
  //   detail: "Connect this learning to a skill or project shown above.",
  // },
];
