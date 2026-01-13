// Static portfolio data
export const projects = [
    {
        id: 1,
        title: "Anime Dashboard",
        description: "A modern dashboard application with anime-inspired design and smooth animations.",
        imageUrl: "/images/project1.jpg",
        techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        repoUrl: "https://github.com/yourusername/anime-dashboard",
        demoUrl: "https://anime-dashboard.vercel.app",
        featured: true
    },
    {
        id: 2,
        title: "Portfolio Website",
        description: "A responsive portfolio website showcasing my work and skills with anime aesthetics.",
        imageUrl: "/images/project2.jpg",
        techStack: ["React", "Vite", "Tailwind CSS", "React Query"],
        repoUrl: "https://github.com/yourusername/portfolio",
        demoUrl: "https://yourportfolio.com",
        featured: true
    },
    {
        id: 3,
        title: "Task Manager App",
        description: "A productivity app with kanban boards and real-time collaboration features.",
        imageUrl: "/images/project3.jpg",
        techStack: ["React", "Node.js", "MongoDB", "Socket.io"],
        repoUrl: "https://github.com/yourusername/task-manager",
        demoUrl: "https://task-manager.vercel.app",
        featured: false
    }
];

export const skills = [
    {
        id: 1,
        name: "React",
        category: "Frontend",
        proficiency: 90,
        icon: "⚛️"
    },
    {
        id: 2,
        name: "TypeScript",
        category: "Language",
        proficiency: 85,
        icon: "📘"
    },
    {
        id: 3,
        name: "Tailwind CSS",
        category: "Styling",
        proficiency: 88,
        icon: "🎨"
    },
    {
        id: 4,
        name: "Node.js",
        category: "Backend",
        proficiency: 75,
        icon: "🟢"
    },
    {
        id: 5,
        name: "Python",
        category: "Language",
        proficiency: 80,
        icon: "🐍"
    },
    {
        id: 6,
        name: "Git",
        category: "Tools",
        proficiency: 85,
        icon: "📚"
    }
];

export const experience = [
    {
        id: 1,
        role: "Frontend Developer",
        company: "Tech Startup",
        location: "Remote",
        period: "Jan 2023 - Present",
        current: true,
        description: "Developing modern web applications using React, TypeScript, and modern CSS frameworks. Leading frontend architecture decisions and mentoring junior developers.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
        id: 2,
        role: "Full Stack Developer",
        company: "Digital Agency",
        location: "New York, NY",
        period: "Jun 2022 - Dec 2022",
        current: false,
        description: "Built responsive websites and web applications for various clients. Worked with both frontend and backend technologies to deliver complete solutions.",
        technologies: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
        id: 3,
        role: "Junior Developer",
        company: "Software Company",
        location: "San Francisco, CA",
        period: "Aug 2021 - May 2022",
        current: false,
        description: "Started my professional journey as a junior developer, learning best practices and contributing to various projects under senior developer guidance.",
        technologies: ["JavaScript", "HTML", "CSS", "React"]
    }
];