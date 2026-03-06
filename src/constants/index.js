import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  freesun,
  kuncheng,
  dashboard,
  agent,
  traffic,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Software Engineer Intern",
    company_name: "Dezhou Kun Cheng Electronic Technology",
    icon: kuncheng,
    iconBg: "#383E56",
    date: "Jul 2023 - Nov 2023",
    points: [
      "Built an electronic detonator storage monitoring system with real-time temperature and humidity alerts, ensuring safety compliance across multiple warehouses.",
      "Deployed services to AWS EC2, configured S3 automated backups, and set up CloudWatch alarms to monitor resource health and reduce unplanned downtime.",
      "Built the front end with React.js and Tailwind CSS, using ECharts for real-time dashboards and anomaly visualization.",
      "Refactored Spring Boot modules and MyBatis SQL mappers to remove duplicated query logic; added JUnit tests on refactored paths to improve maintainability and deployment stability.",
    ],
  },
  {
    title: "Full Stack Software Engineer Intern",
    company_name: "Jiangxi Free-Sun Technology",
    icon: freesun,
    iconBg: "#383E56",
    date: "Mar 2021 - Jun 2022",
    points: [
      "Built the employee workflow module for a 300+ person corporate platform, covering multi-level approval routing, status tracking, and notifications; reduced average approval turnaround by 1 hour.",
      "Built the React/Redux frontend with reusable components and designed RESTful APIs with Express.js to support approval flow operations end-to-end.",
      "Designed the approval flow as a configurable state machine; transition rules stored in MySQL and enforced server-side, making the flow extensible without code changes.",
      "Used Redis to cache in-flight approval states and intermediate results, reducing redundant DB reads during frontend polling; invalidated cache on each state transition to maintain consistency.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI Agent Platform",
    description:
      "AI-powered assistant that can browse websites and complete tasks automatically, helping users save time on repetitive online work such as data collection, form filling, and workflow automation.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "llm",
        color: "green-text-gradient",
      },
      {
        name: "playwright",
        color: "pink-text-gradient",
      },
      {
        name: "sqlite",
        color: "blue-text-gradient",
      },
    ],
    image: agent,
    source_code_link: "https://github.com/xiananou/BrowserAgent",
  },
  {
    name: "Jobs Dashboard",
    description:
      "Web-based dashboard that helps developers manage and monitor automated jobs in one place, making it easier to track task status, logs, and performance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "fastAPI",
        color: "green-text-gradient",
      },
      {
        name: "graphQL",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/xiananou/JobDashBoard",
  },
  {
    name: "FlowMap",
    description:
      "Android navigation app that visualizes real-time traffic information and provides intelligent route planning across different transportation modes.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "android",
        color: "green-text-gradient",
      },
      {
        name: "googlemaps",
        color: "pink-text-gradient",
      },
      {
        name: "retrofit",
        color: "blue-text-gradient",
      },
      {
        name: "coroutines",
        color: "green-text-gradient",
      },
    ],
    image: traffic,
    source_code_link: "https://github.com/xiananou/TrafficNow_V1",
  },
];

export { services, technologies, experiences, testimonials, projects };
