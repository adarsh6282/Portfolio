import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Boxes,
  Rocket,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import {
  DiReact,
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiNodejs,
  DiMongodb,
  DiPostgresql,
  DiGit,
  DiGithubBadge,
  DiDocker,
  DiNginx,
} from "react-icons/di";
import { BiMessageRoundedDots } from "react-icons/bi";
import {
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiExpress,
  SiFigma,
  SiAwsamplify,
  SiMysql,
  SiFirebase,
  SiPostman,
} from "react-icons/si";
import { GiUnlocking } from "react-icons/gi";
import { FaServer } from "react-icons/fa";
import { MdVideoCall } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import profileImage from "./assets/profileImage.jpg";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React.js", icon: <DiReact />, color: "#61DAFB" },
        { name: "Redux Toolkit", icon: <Boxes />, color: "#764ABC" },
        { name: "JavaScript", icon: <DiJavascript1 />, color: "#F7DF1E" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "HTML", icon: <DiHtml5 />, color: "#E34F26" },
        { name: "CSS", icon: <DiCss3 />, color: "#1b1bd6" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "Bootstrap", icon: <DiBootstrap />, color: "#7952B3" },
        { name: "Material UI", icon: <SiMui />, color: "#007FFF" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: <DiNodejs />, color: "#339933" },
        { name: "Express.js", icon: <SiExpress />, color: "#000000" },
        { name: "REST API", icon: <FaServer />, color: "#009688" },
        { name: "Socket.IO", icon: <BiMessageRoundedDots />, color: "#17d92a" },
        { name: "WebRTC", icon: <MdVideoCall />, color: "#3926dc" },
        { name: "JWT Auth", icon: <GiUnlocking />, color: "#31c9dd" },
      ],
    },
    {
      category: "Database",
      skills: [
        { name: "MongoDB", icon: <DiMongodb />, color: "#47A248" },
        { name: "PostgreSQL", icon: <DiPostgresql />, color: "#4169E1" },
        { name: "SQL", icon: <SiMysql />, color: "#CC2927" },
      ],
    },
    {
      category: "Tools & DevOps",
      skills: [
        { name: "Git", icon: <DiGit />, color: "#F05032" },
        { name: "GitHub", icon: <DiGithubBadge />, color: "#ccc7c6" },
        { name: "AWS", icon: <SiAwsamplify />, color: "#FF9900" },
        { name: "Docker", icon: <DiDocker />, color: "#2496ED" },
        { name: "Nginx", icon: <DiNginx />, color: "#009639" },
        { name: "Firebase", icon: <SiFirebase />, color: "#eaa00d" },
        { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
        {
          name: "Vercel",
          icon: (
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                display: "block",
                margin: "0 auto",
              }}
            >
              <path d="M12 2L2 22h20L12 2z" />
            </svg>
          ),
        },
      ],
    },
  ];

  const projects = [
    {
      title: "Takrum",
      subtitle: "E-commerce Platform",
      description:
        "Full-featured e-commerce system with shopping cart, product management, offer system, Razorpay payment integration, and comprehensive admin dashboard.",
      tech: ["Node.js", "Express", "MongoDB", "MVC", "AWS", "Razorpay"],
      features: [
        "Optimized MongoDB queries for faster performance",
        "Advanced product filtering and pagination",
        "Secure payment processing with Razorpay",
        "Complete admin dashboard",
      ],
      liveLink: "https://takrum.onrender.com",
      githubLink: "https://github.com/adarsh6282/ecommerce",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "LearnAt",
      subtitle: "E-Learning Platform",
      description:
        "Comprehensive learning management system with course modules, quizzes, live classes, and automated certificate generation.",
      tech: ["MERN", "WebRTC", "Socket.IO", "Cloudinary", "JWT"],
      features: [
        "Real-time video classes using WebRTC",
        "Live chat with Socket.IO",
        "Automated certificate generation",
        "Google OAuth integration",
      ],
      liveLink: "https://learnat.vercel.app",
      githubLink: "https://github.com/adarsh6282/LearnAt---E-Learning-Platform",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Mini Projects Collection",
      subtitle: "Various Web Applications",
      description:
        "Collection of full-stack and frontend projects showcasing diverse technical capabilities.",
      tech: ["React", "Node.js", "MongoDB", "HTML/CSS", "JavaScript"],
      features: [
        "OLX Clone - Marketplace application",
        "Netflix Clone - Video streaming UI",
        "User Management System",
        "Responsive Portfolio Website",
      ],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="portfolio-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght:400;500;700;900&family=Space+Mono:wght@400;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Space Mono', monospace;
          background: #0a0a0a;
          color: #e0e0e0;
          overflow-x: hidden;
        }

        .portfolio-container {
          position: relative;
          min-height: 100vh;
        }

        /* Animated Background */
        .portfolio-container::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(138, 43, 226, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(255, 0, 128, 0.06) 0%, transparent 50%);
          animation: backgroundShift 20s ease infinite;
          z-index: 0;
          pointer-events: none;
        }

        @keyframes backgroundShift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(50px, -50px) scale(1.1); }
          66% { transform: translate(-50px, 50px) scale(0.95); }
        }

        /* Grid overlay */
        .portfolio-container::after {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          z-index: 0;
          pointer-events: none;
          opacity: 0.3;
        }

        /* Navigation */
        nav {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          backdrop-filter: blur(10px);
          background: rgba(10, 10, 10, 0.8);
          border-bottom: 1px solid rgba(0, 255, 255, 0.2);
        }

        .nav-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #00ffff 0%, #ff00ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .logo:hover {
          transform: scale(1.05);
          filter: brightness(1.2);
        }

        .nav-links {
          display: flex;
          gap: 1.5rem;
          list-style: none;
        }

        .nav-links a {
          color: #e0e0e0;
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 500;
          position: relative;
          transition: color 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #00ffff, #ff00ff);
          transition: width 0.3s ease;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: #00ffff;
        }

        .nav-links a:hover::after,
        .nav-links a.active::after {
          width: 100%;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: #00ffff;
          cursor: pointer;
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 2rem;
          z-index: 1;
        }

        .hero-content {
          max-width: 1200px;
          text-align: center;
          animation: fadeInUp 1s ease;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-greeting {
          font-size: 0.9rem;
          color: #00ffff;
          margin-bottom: 0.5rem;
          animation: fadeInUp 1s ease 0.2s backwards;
        }

        .hero-title {
          font-family: 'Orbitron', sans-serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #ffffff 0%, #00ffff 50%, #ff00ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fadeInUp 1s ease 0.4s backwards;
          line-height: 1.2;
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2vw, 1.3rem);
          color: #b0b0b0;
          margin-bottom: 1rem;
          font-weight: 500;
          animation: fadeInUp 1s ease 0.6s backwards;
        }

        .hero-description {
          font-size: 0.95rem;
          color: #888;
          max-width: 600px;
          margin: 0 auto 2rem;
          line-height: 1.6;
          animation: fadeInUp 1s ease 0.8s backwards;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          animation: fadeInUp 1s ease 1s backwards;
        }

        .btn {
          padding: 0.7rem 1.8rem;
          border: none;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: 'Space Mono', monospace;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .btn-primary {
          background: linear-gradient(135deg, #00ffff 0%, #ff00ff 100%);
          color: #000;
          box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 40px rgba(0, 255, 255, 0.5);
        }

        .btn-secondary {
          background: transparent;
          color: #00ffff;
          border: 2px solid #00ffff;
        }

        .btn-secondary:hover {
          background: rgba(0, 255, 255, 0.1);
          transform: translateY(-3px);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          animation: bounce 2s infinite;
          color: #00ffff;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-20px); }
          60% { transform: translateX(-50%) translateY(-10px); }
        }

        /* Section Styles */
        section {
          position: relative;
          z-index: 1;
          padding: 4rem 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-family: 'Orbitron', sans-serif;
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #00ffff 0%, #ff00ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          display: inline-block;
        }

        .section-subtitle {
          color: #888;
          font-size: 0.9rem;
          max-width: 600px;
          margin: 0 auto;
        }

        /* About Section */
        .about-content {
          display: flex;
          justify-content: center;   /* moves block to center */
          align-items: center;
        }

        .about-text {
          width: 100%;
          max-width: 600px;   /* same nice width as screenshot */
          text-align: left;
        }

        .about-text {
          animation: slideInLeft 0.8s ease;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .about-text p {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #b0b0b0;
          margin-bottom: 1rem;
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          animation: slideInRight 0.8s ease;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .stat-card {
          background: rgba(0, 255, 255, 0.05);
          border: 1px solid rgba(0, 255, 255, 0.2);
          border-radius: 12px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          background: rgba(0, 255, 255, 0.1);
          box-shadow: 0 8px 30px rgba(0, 255, 255, 0.15);
        }

        .stat-number {
          font-family: 'Orbitron', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #00ffff 0%, #ff00ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.3rem;
        }

        .stat-label {
          color: #888;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Skills Section */
        .skills-container {
          display: grid;
          gap: 3rem;
        }

        .skill-category {
          animation: fadeIn 0.8s ease;
        }

        .category-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.3rem;
          font-weight: 600;
          color: #00ffff;
          margin-bottom: 1.5rem;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          padding-bottom: 0.7rem;
        }

        .category-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #00ffff, transparent);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 1rem;
        }

        .skill-card {
          background: rgba(0, 255, 255, 0.05);
          border: 1px solid rgba(0, 255, 255, 0.2);
          border-radius: 12px;
          padding: 1.2rem;
          text-align: center;
          transition: all 0.4s ease;
          cursor: pointer;
          animation: fadeIn 0.5s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .skill-card:hover {
          transform: translateY(-5px) scale(1.02);
          background: rgba(0, 255, 255, 0.1);
          box-shadow: 0 10px 30px rgba(0, 255, 255, 0.2);
        }

        .skill-icon {
          font-size: 3rem;   /* Bigger icon */
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 0.7rem;
          transition: all 0.3s ease;
        }
        .skill-card:hover .skill-icon {
          transform: rotateY(360deg) scale(1.1);
        }

        .skill-name {
          font-weight: 600;
          color: #e0e0e0;
          font-size: 0.85rem;
        }

        /* Experience Section */
        .experience-timeline {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
        }

        .experience-timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, #00ffff 0%, #ff00ff 100%);
          transform: translateX(-50%);
        }

        .experience-item {
          position: relative;
          margin-bottom: 3rem;
          animation: fadeInUp 0.8s ease;
        }

        .experience-content {
          background: rgba(0, 255, 255, 0.05);
          border: 1px solid rgba(0, 255, 255, 0.2);
          border-radius: 12px;
          padding: 1.5rem;
          margin-left: 50%;
          margin-left: calc(50% + 30px);
          width: calc(50% - 30px);
          transition: all 0.3s ease;
        }

        .experience-content:hover {
          transform: translateX(5px);
          background: rgba(0, 255, 255, 0.1);
          box-shadow: 0 8px 30px rgba(0, 255, 255, 0.15);
        }

        .experience-date {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          background: #0a0a0a;
          color: #00ffff;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          border: 2px solid #00ffff;
          font-weight: 600;
          font-size: 0.75rem;
          white-space: nowrap;
        }

        .experience-company {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.2rem;
          font-weight: 600;
          color: #00ffff;
          margin-bottom: 0.3rem;
        }

        .experience-role {
          font-size: 1rem;
          color: #e0e0e0;
          margin-bottom: 0.8rem;
        }

        .experience-description {
          color: #b0b0b0;
          line-height: 1.6;
          font-size: 0.9rem;
        }

        .experience-description li {
          margin-bottom: 0.6rem;
          padding-left: 1.2rem;
          position: relative;
        }

        .experience-description li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: #00ffff;
          font-size: 1rem;
        }

        /* Projects Section */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: rgba(0, 255, 255, 0.05);
          border: 1px solid rgba(0, 255, 255, 0.2);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.4s ease;
          animation: fadeInUp 0.8s ease;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 255, 255, 0.2);
        }

        .project-header {
          height: 140px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .project-header::before {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0.1;
          pointer-events: none; /* ✅ FIX */
        }

        .project-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.3rem;
          position: relative;
          z-index: 1;
        }

        .project-subtitle {
          color: #00ffff;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          z-index: 1;
        }

        .project-body {
          padding: 1.5rem;
        }

        .project-description {
          color: #b0b0b0;
          line-height: 1.6;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1rem;
        }

        .tech-tag {
          background: rgba(0, 255, 255, 0.1);
          color: #00ffff;
          padding: 0.3rem 0.7rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 600;
          border: 1px solid rgba(0, 255, 255, 0.3);
        }

        .project-features {
          color: #888;
          font-size: 0.85rem;
          line-height: 1.5;
        }

        .project-features li {
          margin-bottom: 0.4rem;
          padding-left: 1.2rem;
          position: relative;
        }

        .project-features li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: #00ffff;
          font-size: 0.9rem;
        }

        /* Contact Section */
        .contact-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .contact-text {
          font-size: 0.95rem;
          color: #b0b0b0;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .contact-methods {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .contact-card {
          background: rgba(0, 255, 255, 0.05);
          border: 1px solid rgba(0, 255, 255, 0.2);
          border-radius: 12px;
          padding: 1.5rem;
          transition: all 0.3s ease;
          cursor: pointer;
          text-decoration: none !important;
          color: inherit !important;
        }

        .contact-card:hover {
          transform: translateY(-5px);
          background: rgba(0, 255, 255, 0.1);
          box-shadow: 0 8px 30px rgba(0, 255, 255, 0.15);
        }

        .contact-icon {
          width: 35px;
          height: 35px;
          margin: 0 auto 0.8rem;
          color: #00ffff;
        }

        .contact-label {
          color: #888;
          font-size: 0.75rem;
          margin-bottom: 0.3rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .contact-value {
          color: #e0e0e0;
          font-size: 0.9rem;
          word-break: break-word;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }

        .social-link {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(0, 255, 255, 0.05);
          border: 2px solid rgba(0, 255, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00ffff;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-link:hover {
          background: rgba(0, 255, 255, 0.2);
          transform: translateY(-3px) rotate(360deg);
          box-shadow: 0 8px 25px rgba(0, 255, 255, 0.25);
        }

        /* Footer */
        footer {
          position: relative;
          z-index: 1;
          padding: 2rem;
          text-align: center;
          border-top: 1px solid rgba(0, 255, 255, 0.2);
          background: rgba(10, 10, 10, 0.8);
        }

        .footer-text {
          color: #888;
          font-size: 0.8rem;
        }

        .footer-heart {
          color: #ff00ff;
          animation: heartbeat 1.5s ease infinite;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        /* Responsive */
        @media (max-width: 968px) {
          section {
            padding: 3rem 1.5rem;
          }

          .nav-links {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .mobile-menu {
            position: fixed;
            top: 0;
            right: 0;
            width: 100%;
            height: 100vh;
            background: rgba(10, 10, 10, 0.98);
            backdrop-filter: blur(20px);
            transform: translateX(100%);
            transition: transform 0.3s ease;
            z-index: 999;
          }

          .mobile-menu.open {
            transform: translateX(0);
          }

          .mobile-menu-content {
            padding: 5rem 2rem;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .mobile-menu a {
            color: #e0e0e0;
            text-decoration: none;
            font-size: 1.2rem;
            font-weight: 600;
            text-align: center;
            padding: 0.8rem;
            border-bottom: 1px solid rgba(0, 255, 255, 0.2);
            transition: all 0.3s ease;
          }

          .mobile-menu a:hover {
            color: #00ffff;
            transform: translateX(10px);
          }

          .close-menu {
            position: absolute;
            top: 2rem;
            right: 2rem;
            background: none;
            border: none;
            color: #00ffff;
            cursor: pointer;
          }

          .about-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .experience-timeline::before {
            left: 0;
          }

          .experience-content {
            margin-left: 30px;
            width: calc(100% - 30px);
          }

          .experience-date {
            left: 0;
            transform: translateX(0);
            top: -2.5rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .contact-methods {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          section {
            padding: 3rem 1rem;
          }

          .hero {
            padding: 1rem;
          }

          .hero-buttons {
            flex-direction: column;
            width: 100%;
          }

          .btn {
            width: 100%;
            justify-content: center;
          }

          .skills-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
          }

          .category-title {
            font-size: 1.5rem;
          }

          .about-stats {
            grid-template-columns: 1fr;
          }
        }

        .project-title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-header-links {
  display: flex;
  gap: 0.6rem;
}

.project-link-icon {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: rgba(0, 255, 255, 0.15);
  border: 1px solid rgba(0, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.project-link-icon:hover {
  transform: scale(1.15);
  background: rgba(0, 255, 255, 0.3);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.4);
}


        .hero-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .hero-left {
          flex: 1;
          min-width: 320px;
          text-align: left;
        }

        .hero-right {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        /* Photo Wrapper */
        .hero-image-wrapper {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          padding: 8px;
          background: linear-gradient(135deg, #00ffff, #ff00ff);
          box-shadow: 0 0 50px rgba(0, 255, 255, 0.4);
          animation: float 4s ease-in-out infinite;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid rgba(0, 0, 0, 0.6);
        }

        /* Floating Effect */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }


        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .category-title {
            font-size: 1.2rem;
          }

          .hero-title {
            font-size: 2rem;
          }

          .section-title {
            font-size: 1.5rem;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav>
        <div className="nav-content">
          <div className="logo" onClick={() => scrollToSection("home")}>
            ADARSH.DEV
          </div>
          <ul className="nav-links">
            {[
              "home",
              "about",
              "skills",
              "experience",
              "projects",
              "contact",
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={activeSection === item ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <button className="close-menu" onClick={() => setIsMenuOpen(false)}>
          <X size={28} />
        </button>
        <div className="mobile-menu-content">
          {["home", "about", "skills", "experience", "projects", "contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
              >
                {item.toUpperCase()}
              </a>
            ),
          )}
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content hero-flex">
          <div className="hero-left">
            <div className="hero-greeting">Hello, I'm</div>
            <h1 className="hero-title">ADARSH K P</h1>
            <p className="hero-subtitle">MERN Stack Developer</p>

            <p className="hero-description">
              Self-taught full-stack developer passionate about creating
              scalable web applications with clean architecture. Specialized in
              React, Node.js, Express, and MongoDB.
            </p>

            <div className="hero-buttons">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection("projects")}
              >
                <Rocket size={16} />
                View Projects
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => scrollToSection("contact")}
              >
                <Mail size={16} />
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right Side Photo */}
          <div className="hero-right">
            <div className="hero-image-wrapper">
              <img src={profileImage} alt="Adarsh" className="hero-image" />
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Who I am and what I do</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate MERN Stack Developer from Kerala, India, with a
              strong foundation in building full-stack web applications. My
              journey into web development started with self-learning, and I've
              since completed intensive training at Brototype, Kozhikode.
            </p>
            <p>
              I specialize in creating scalable backend systems with Node.js and
              Express, crafting responsive user interfaces with React and Redux,
              and implementing real-time features using Socket.IO and WebRTC. My
              focus is always on writing clean, maintainable code following
              industry best practices.
            </p>
            <p>
              With a BSc in Computer Science and hands-on experience in
              developing production-ready applications, I'm constantly learning
              and adapting to new technologies to create innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="section-header">
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>
        <div className="skills-container">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.category}
              className="skill-category"
              style={{ animationDelay: `${catIndex * 0.2}s` }}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="skill-card"
                    style={{
                      animationDelay: `${catIndex * 0.2 + index * 0.05}s`,
                      "--skill-color": skill.color,
                    }}
                  >
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <div className="skill-name">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My professional journey</p>
        </div>
        <div className="experience-timeline">
          <div className="experience-item">
            <div className="experience-date">Aug 2024 - Present</div>
            <div className="experience-content">
              <h3 className="experience-company">Brototype</h3>
              <h4 className="experience-role">
                Full-Stack MERN Developer (Trainee)
              </h4>
              <ul className="experience-description">
                <li>
                  Completed intensive hands-on training focused on MERN Stack
                  and Data Structures & Algorithms
                </li>
                <li>
                  Architected, developed, and deployed 5+ production-ready web
                  applications
                </li>
                <li>
                  Built scalable backend systems using Node.js, Express.js, REST
                  APIs, JWT authentication, and MVC/Repository architecture
                </li>
                <li>
                  Developed responsive UIs with React.js, Redux Toolkit,
                  Tailwind CSS, and Material UI
                </li>
                <li>
                  Implemented real-time features using Socket.IO and WebRTC
                </li>
                <li>
                  Managed full SDLC from database design to AWS deployment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className="project-header"
                style={{
                  "--gradient-from": project.gradient
                    .split(" ")[0]
                    .replace("from-", ""),
                  "--gradient-to": project.gradient
                    .split(" ")[1]
                    .replace("to-", ""),
                }}
              >
                <div className="project-title-row">
                  <h3 className="project-title">{project.title}</h3>

                  <div className="project-header-links">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-icon"
                      >
                        <FiExternalLink style={{ color: "white" }} />
                      </a>
                    )}

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-icon"
                      >
                        <DiGithubBadge
                          style={{
                            width: "70px",
                            height: "70px",
                            color: "white",
                          }}
                        />
                      </a>
                    )}
                  </div>
                </div>

                <p className="project-subtitle">{project.subtitle}</p>
              </div>

              <div className="project-body">
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="project-features">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's build something amazing together
          </p>
        </div>
        <div className="contact-content">
          <p className="contact-text">
            I'm currently open to new opportunities and collaborations. Whether
            you have a project in mind, need help with your application, or just
            want to connect, feel free to reach out!
          </p>
          <div className="contact-methods">
            <a href="mailto:kpadarsh41@gmail.com" className="contact-card">
              <Mail className="contact-icon" />
              <div className="contact-label">Email</div>
              <div className="contact-value">kpadarsh41@gmail.com</div>
            </a>
            <a href="tel:+916282396321" className="contact-card">
              <Phone className="contact-icon" />
              <div className="contact-label">Phone</div>
              <div className="contact-value">+91 6282396321</div>
            </a>
            <div className="contact-card">
              <MapPin className="contact-icon" />
              <div className="contact-label">Location</div>
              <div className="contact-value">Kerala, India</div>
            </div>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/adarsh6282"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/in/adarshkpmoothedath"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p
          className="footer-text"
          style={{ marginTop: "0.5rem", fontSize: "0.8rem" }}
        >
          © 2026 All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
