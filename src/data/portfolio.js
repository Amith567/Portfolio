import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export const portfolioData = {
    personalInfo: {
        name: "Amith P",
        image: "/profile.jpg",
        title: "Software Engineer",
        email: "amithanil319@gmail.com",
        phone: "+91 859089xxxx",
        objective: "Detail-oriented Computer Science Engineering student seeking a Software Development role to apply strong programming, problem-solving, and web development skills in building scalable, high-quality applications.",
        socials: [
            {
                name: "LinkedIn",
                url: "https://linkedin.com/in/amithp567",
                icon: Linkedin
            },
            {
                name: "GitHub",
                url: "https://github.com/Amith567",
                icon: Github
            },
            {
                name: "Email",
                url: "mailto:amithanil319@gmail.com",
                icon: Mail
            },
            {
                name: "Phone",
                url: "tel:+91859089xxxx",
                icon: Phone
            }
        ]
    },
    skills: {
        "Programming Languages": ["Python", "JavaScript"],
        "Frontend": ["HTML5", "CSS3", "React.js", "Tailwind CSS"],
        "Backend": ["Django", "Django REST Framework", "JWT Authentication"],
        "Databases": ["MySQL", "SQLite"],
        "Tools": ["Git", "GitHub", "Postman", "VS Code", "Vercel", "PythonAnywhere"],
        "Core Concepts": ["Object-Oriented Programming (OOP)", "Data Structures", "SDLC", "Problem Solving"]
    },
    education: [
        {
            institution: "AWH Engineering College",
            degree: "Bachelor of Technology in Computer Science and Engineering",
            year: "Expected Graduation: June 2026",
            details: "CGPA: 7.99"
        },
        {
            institution: "Model Higher Secondary School",
            degree: "Higher Secondary (Computer Science)",
            year: "2022",
            details: "Percentage: 88%"
        }
    ],
    projects: [
        {
            title: "Votrix – Digital Voting System",
            type: "Major Academic Project",
            description: "Developed a secure digital voting system to ensure accurate and tamper-proof vote recording. Implemented authentication and validation mechanisms to support reliable and fair elections. Applied Zero-Knowledge Proof techniques to verify votes while preserving voter privacy.",
            techStack: ["Python", "Django REST Framework", "React.js", "Tailwind CSS", "SQLite"],
            link: "https://github.com/Shafah0717/zkp-voting-system-backend" // Placeholder or add if known
        },
        {
            title: "BlogsterZone – Blogging Platform",
            type: "Personal Project",
            description: "Developed a web platform for creating, managing, and sharing blogs with full CRUD functionality. Built responsive and user-friendly interfaces using React with reusable components. Implemented JWT-based authentication and integrated frontend with backend REST APIs.",
            techStack: ["Python", "Django REST Framework", "React.js", "Tailwind CSS", "MySQL", "JWT"],
            link: "https://github.com/Amith567/BlogsterZone"
        },
        {
            title: "StudyHive – Student Resource Management System",
            type: "Mini Project",
            description: "Developed a full-stack mini project for managing and sharing academic resources among students. StudyHive enables users to upload, organize, and access study materials through a structured and user-friendly interface, with secure backend APIs and efficient data storage.",
            techStack: ["React.js", "Spring Boot", "PostgreSQL"],
            link: "https://github.com/Amith567/StudyHive"
        },
        {
            title: "Cattle Vision – AI-Based Cattle Identification System",
            type: "Hackathon Project",
            description: "Developed an AI-powered solution during the SIH Internal Hackathon at AWH Engineering College, Kuttikattoor. The system identifies cattle and estimates body size using computer vision and machine learning to help farmers and industries monitor cattle growth and health efficiently. Qualified for the next round of SIH 2025 out of 21 competing teams.",
            techStack: ["Python", "OpenCV", "Flask", "Machine Learning"],
            link: "https://github.com/Amith567/CattleVision"
        },
        {
            title: "Trainify – Learning Management System",
            type: "Bootcamp Project",
            description: "Built a full-stack Learning Management System (LMS) during the Vibe Code Bootcamp conducted by CODESAP™. The platform enables creators to publish and monetize learning resources, track purchases, and analyze engagement, while learners can browse, purchase, and access premium educational content seamlessly.",
            techStack: ["Python", "Django", "Tailwind CSS", "SQLite"],
            link: "https://github.com/Amith567/Trainify"
        },
        {
            title: "SpendMate – Expense Tracking Application",
            type: "Bootcamp Project",
            description: "Developed a finance tracking web application during the Vibe Code Bootcamp conducted by CODESAP™. The application allows users to track and manage expenses by categorizing payments and monitoring spending patterns through a clean, responsive, and user-friendly interface.",
            techStack: ["React.js", "Tailwind CSS", "Web Storage"],
            link: "https://github.com/Amith567/Spendmate"
        }
    ],
    certificates: [
        "Software Engineer Certification – HackerRank",
        "Responsive Web Design – FreeCodeCamp"
    ]
};
