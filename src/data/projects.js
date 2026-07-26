
import luminous from "../assets/luminous.png";
import reactShowcase from "../assets/react-showcase.png";
import instituteManagement from "../assets/institute-management.png";




const projects = [
  {
    id: 1,
    title:"Luminous Weddings",

    subtitle:"Wedding Management Platform",

    status:"In Development",

    image: luminous,

    description:
    "A full-stack wedding management platform designed with scalability and maintainability in mind. To simplify event planning through a scalable Laravel backend, responsive React frontend, and PostgreSQL database.",

    highlights:[
        "Authentication",
        "Role-Based Access Control",
        "REST API",
        "PostgreSQL",
        "Responsive Design",
        "Modern UI"
    ],

    technologies:[
        "Laravel",
        "React",
        "PostgreSQL"
    ],

    // github:"...",

    // demo:"..."
  },

  {
    id:2,

    title:"Interactive React UI Showcase",

    subtitle:"Interactive React Applications",

    status:"Completed",

    image: reactShowcase,

    description: "A collection of interactive React applications showcasing reusable components, SVG-based interfaces, responsive layouts, form validation, and conversational UI design through a custom login experience, quiz game, and chatbot.",

    highlights:[
        "SVG Login",
        "Chatbot",
        "Quiz Game",
        "React Hooks",
        "Reusable Components"
    ],

    technologies:[
        "React",
        "Tailwind CSS",
        "JavaScript"
    ],

    github:"https://github.com/Anza-binte-Hashim/Minor/blob/gh-pages/src.zip",

    // demo:"#"
  },

  {
    id: 3,

    title: "Institute Management System",

    subtitle: "Educational Management Platform",

    status: "Completed",

    image: instituteManagement,

    description:
    "A full-stack institute management platform built to streamline student and administrative operations through secure authentication, efficient record management, and a well-structured relational database.",

    highlights: [
        "Secure Authentication",
        "Student Management",
        "Faculty Management",
        "CRUD Operations",
        "Relational Database Design",
        "Responsive Interface"
    ],

    technologies: [
        "Laravel",
        "PHP",
        "MySQL",
        "Bootstrap"
    ],

    github: "https://github.com/GmShykh/AWAD-CLass/tree/main/CITT%20PHP",

    // demo: "..."
}
];

export default projects;