import React, { useState, useEffect, useRef } from "react";
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

const Cursor = () => {
  const [dot, setDot] = useState({ x: -100, y: -100 });
  const [ring, setRing] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);
  const ringRef = useRef({ x: -100, y: -100 });
  const targetRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef();

  useEffect(() => {
    const onMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      setDot({ x: e.clientX, y: e.clientY });
      const el = document.elementFromPoint(e.clientX, e.clientY);
      setHover(!!el?.closest("a,button,.skill-card,.project-card,.contact-card,.social-link,.stat-card"));
    };
    const onDown = () => setClick(true);
    const onUp = () => setClick(false);
    const animate = () => {
      ringRef.current.x += (targetRef.current.x - ringRef.current.x) * 0.09;
      ringRef.current.y += (targetRef.current.y - ringRef.current.y) * 0.09;
      setRing({ x: ringRef.current.x, y: ringRef.current.y });
      rafRef.current = requestAnimationFrame(animate);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const dotSize = click ? 5 : hover ? 14 : 7;
  const ringScale = hover ? 1.55 : click ? 0.8 : 1;

  return (
    <>
      <div
        style={{
          position: "fixed",
          left: dot.x,
          top: dot.y,
          width: dotSize,
          height: dotSize,
          background: hover ? "#111" : "#C8291E",
          borderRadius: "50%",
          transform: "translate(-50%,-50%)",
          pointerEvents: "none",
          zIndex: 10001,
          transition: "width .15s,height .15s,background .2s",
        }}
      />

      <div
        style={{
          position: "fixed",
          left: ring.x,
          top: ring.y,
          width: 54,
          height: 54,
          transform: `translate(-50%,-50%) scale(${ringScale})`,
          pointerEvents: "none",
          zIndex: 10000,
          transition: "transform .3s ease",
        }}
      >
        <svg width="54" height="54" viewBox="0 0 54 54" overflow="visible">

          <circle
            cx="27"
            cy="27"
            r="22"
            fill="none"
            stroke={hover ? "#C8291E" : "#111"}
            strokeWidth="1.2"
            strokeDasharray="4.5 3.5"
            style={{
              transformOrigin: "27px 27px",
              animation: "cursorSpin 7s linear infinite",
            }}
          />

          <circle
            cx="27"
            cy="27"
            r="16"
            fill="none"
            stroke={hover ? "#C8291E" : "#111"}
            strokeWidth="0.5"
            opacity="0.3"
          />

          <line x1="27" y1="3"  x2="27" y2="11" stroke="#C8291E" strokeWidth="2" strokeLinecap="round" />
          <line x1="27" y1="43" x2="27" y2="51" stroke="#C8291E" strokeWidth="2" strokeLinecap="round" />
          <line x1="3"  y1="27" x2="11" y2="27" stroke="#C8291E" strokeWidth="2" strokeLinecap="round" />
          <line x1="43" y1="27" x2="51" y2="27" stroke="#C8291E" strokeWidth="2" strokeLinecap="round" />

          <line x1="10" y1="10" x2="14.5" y2="14.5" stroke="#111" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
          <line x1="44" y1="10" x2="39.5" y2="14.5" stroke="#111" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
          <line x1="10" y1="44" x2="14.5" y2="39.5" stroke="#111" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
          <line x1="44" y1="44" x2="39.5" y2="39.5" stroke="#111" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
        </svg>
      </div>
    </>
  );
};

const RotatingBadge = () => (
  <div
    style={{
      position: "absolute",
      right: "6%",
      top: "18%",
      animation: "badgeSpin 18s linear infinite",
      zIndex: 2,
    }}
  >
    <svg viewBox="0 0 120 120" width="130" height="130">
      <path
        id="badge-ring"
        fill="none"
        d="M 60,60 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"
      />
      <text
        fontSize="9.8"
        fontFamily="'JetBrains Mono',monospace"
        fontWeight="700"
        fill="#C8291E"
        letterSpacing="4.5"
      >
        <textPath href="#badge-ring">
         ★MERN★ MERN STACK DEVELOPER {" "}
        </textPath>
      </text>
      <circle cx="60" cy="60" r="34" fill="none" stroke="#C8291E" strokeWidth="0.8" />
      <circle cx="60" cy="60" r="26" fill="none" stroke="#C8291E" strokeWidth="0.3" opacity="0.5" />
      <circle cx="60" cy="60" r="4" fill="#C8291E" />

      <line x1="60" y1="52" x2="60" y2="57" stroke="#C8291E" strokeWidth="1" />
      <line x1="60" y1="63" x2="60" y2="68" stroke="#C8291E" strokeWidth="1" />
      <line x1="52" y1="60" x2="57" y2="60" stroke="#C8291E" strokeWidth="1" />
      <line x1="63" y1="60" x2="68" y2="60" stroke="#C8291E" strokeWidth="1" />
    </svg>
  </div>
);

const RegMark = ({ pos }) => {
  const s = {
    tl: { top: 24, left: 24 },
    tr: { top: 24, right: 24 },
    bl: { bottom: 24, left: 24 },
    br: { bottom: 24, right: 24 },
  }[pos];
  return (
    <div style={{ position: "absolute", ...s, pointerEvents: "none", zIndex: 1, opacity: 0.18 }}>
      <svg width="20" height="20" viewBox="0 0 20 20">
        <line x1="10" y1="0"  x2="10" y2="7"  stroke="#C8291E" strokeWidth="1.2" />
        <line x1="10" y1="13" x2="10" y2="20" stroke="#C8291E" strokeWidth="1.2" />
        <line x1="0"  y1="10" x2="7"  y2="10" stroke="#C8291E" strokeWidth="1.2" />
        <line x1="13" y1="10" x2="20" y2="10" stroke="#C8291E" strokeWidth="1.2" />
        <circle cx="10" cy="10" r="4" fill="none" stroke="#C8291E" strokeWidth="1" />
      </svg>
    </div>
  );
};

const SectionHeader = ({ num, label, title, light = false }) => (
  <div style={{ marginBottom: "3rem" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.6rem" }}>
      <div style={{ width: 28, height: 2, background: "#C8291E" }} />
      <span style={{
        fontFamily: "'JetBrains Mono',monospace",
        fontSize: "0.68rem",
        fontWeight: 700,
        color: "#C8291E",
        letterSpacing: "2.5px",
        textTransform: "uppercase",
      }}>
        {num} — {label}
      </span>
    </div>
    <h2 style={{
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: "clamp(2.8rem,5vw,4.2rem)",
      letterSpacing: "3px",
      color: light ? "#F4EEE0" : "#111",
      lineHeight: 1,
      marginBottom: "0.7rem",
    }}>
      {title}
    </h2>
    <div style={{ width: 70, height: 3, background: "#C8291E" }} />
  </div>
);


const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home","about","skills","experience","projects","contact"];
      const current = sections.find((s) => {
        const el = document.getElementById(s);
        if (el) {
          const r = el.getBoundingClientRect();
          return r.top <= 100 && r.bottom >= 100;
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
        { name: "React.js",     icon: <DiReact />,              color: "#61DAFB" },
        { name: "Redux Toolkit",icon: <Boxes />,                color: "#764ABC" },
        { name: "JavaScript",   icon: <DiJavascript1 />,        color: "#F7DF1E" },
        { name: "TypeScript",   icon: <SiTypescript />,         color: "#3178C6" },
        { name: "HTML",         icon: <DiHtml5 />,              color: "#E34F26" },
        { name: "CSS",          icon: <DiCss3 />,               color: "#1b1bd6" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />,        color: "#06B6D4" },
        { name: "Bootstrap",    icon: <DiBootstrap />,          color: "#7952B3" },
        { name: "Material UI",  icon: <SiMui />,                color: "#007FFF" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js",      icon: <DiNodejs />,             color: "#339933" },
        { name: "Express.js",   icon: <SiExpress />,            color: "#888" },
        { name: "REST API",     icon: <FaServer />,             color: "#009688" },
        { name: "Socket.IO",    icon: <BiMessageRoundedDots />, color: "#17d92a" },
        { name: "WebRTC",       icon: <MdVideoCall />,          color: "#3926dc" },
        { name: "JWT Auth",     icon: <GiUnlocking />,          color: "#31c9dd" },
      ],
    },
    {
      category: "Database",
      skills: [
        { name: "MongoDB",      icon: <DiMongodb />,            color: "#47A248" },
        { name: "PostgreSQL",   icon: <DiPostgresql />,         color: "#4169E1" },
        { name: "SQL",          icon: <SiMysql />,              color: "#CC2927" },
      ],
    },
    {
      category: "Tools & DevOps",
      skills: [
        { name: "Git",          icon: <DiGit />,                color: "#F05032" },
        { name: "GitHub",       icon: <DiGithubBadge />,        color: "#555" },
        { name: "AWS",          icon: <SiAwsamplify />,         color: "#FF9900" },
        { name: "Docker",       icon: <DiDocker />,             color: "#2496ED" },
        { name: "Nginx",        icon: <DiNginx />,              color: "#009639" },
        { name: "Firebase",     icon: <SiFirebase />,           color: "#eaa00d" },
        { name: "Figma",        icon: <SiFigma />,              color: "#F24E1E" },
        { name: "Postman",      icon: <SiPostman />,            color: "#FF6C37" },
        {
          name: "Vercel",
          icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 22h20L12 2z" />
            </svg>
          ),
          color: "#111",
        },
        {
          name: "SaaS",
          icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 19h12a4 4 0 0 0 0-8 6 6 0 0 0-11.31-2.69A4.5 4.5 0 0 0 6 19z" />
            </svg>
          ),
          color: "#2563EB",
        }
      ],
    },
  ];

  const projects = [
    {
      num: "01",
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
    },
    {
      num: "02",
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
    },
    {
      num: "03",
      title: "Mini Projects",
      subtitle: "Various Web Applications",
      description:
        "Collection of full-stack and frontend projects showcasing diverse technical capabilities.",
      tech: ["React", "Node.js", "MongoDB", "HTML/CSS", "JavaScript"],
      features: [
        "OLX Clone – Marketplace application",
        "Netflix Clone – Video streaming UI",
        "User Management System",
        "Responsive Portfolio Website",
      ],
    },
  ];


  return (
    <div className="pf">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lora:ital,wght@0,400;0,600;1,400;1,600&family=JetBrains+Mono:wght@400;500;700&display=swap');

        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }

        :root {
          --cream : #F4EEE0;
          --cream2: #EDE7D5;
          --ink   : #111111;
          --red   : #C8291E;
          --mid   : #7A7060;
          --border: #CABFA8;
          --paper : #FBF7EE;
        }

        html { cursor: none; }

        body {
          font-family: 'Lora', Georgia, serif;
          background: var(--cream);
          color: var(--ink);
          overflow-x: hidden;
        }

        /* cursor spin */
        @keyframes cursorSpin { to { transform: rotate(360deg); } }
        /* rotating badge */
        @keyframes badgeSpin  { to { transform: rotate(360deg); } }
        /* scroll bounce */
        @keyframes scrollBounce {
          0%,100% { opacity:.5; transform:translateY(0); }
          50%      { opacity:1;  transform:translateY(-6px); }
        }
        /* float image */
        @keyframes floatImg {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }
        /* fade in up */
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        /* heartbeat */
        @keyframes hb {
          0%,100% { transform:scale(1); }
          50%      { transform:scale(1.3); }
        }

        /* ── NAV ───────────────────────────────────────── */
        nav {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          background: var(--ink);
          border-bottom: 3px solid var(--red);
        }
        .nav-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.55rem;
          letter-spacing: 3px;
          color: var(--cream);
          cursor: none;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: color .2s;
        }
        .logo:hover { color: var(--red); }
        .logo-dot {
          width: 7px; height: 7px;
          background: var(--red);
          border-radius: 50%;
          display: inline-block;
        }
        .nav-links { display:flex; gap:2rem; list-style:none; }
        .nav-links a {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #706858;
          text-decoration: none;
          position: relative;
          padding-bottom: 3px;
          transition: color .2s;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0;
          width: 0; height: 2px;
          background: var(--red);
          transition: width .3s;
        }
        .nav-links a:hover,
        .nav-links a.active { color: var(--cream); }
        .nav-links a:hover::after,
        .nav-links a.active::after { width: 100%; }
        .mob-btn {
          display: none;
          background: none; border: none;
          color: var(--cream); cursor: none;
        }

        /* ── MOBILE OVERLAY ──────────────────────────── */
        .mob-overlay {
          position: fixed; inset: 0;
          background: var(--ink); z-index: 999;
          transform: translateX(100%);
          transition: transform .35s ease;
          display: flex; flex-direction: column;
          justify-content: center; align-items: center; gap: 2rem;
        }
        .mob-overlay.open { transform: translateX(0); }
        .mob-overlay a {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 3rem; letter-spacing: 4px;
          color: var(--cream); text-decoration: none;
          transition: color .2s;
        }
        .mob-overlay a:hover { color: var(--red); }
        .mob-close {
          position: absolute; top: 1.8rem; right: 2rem;
          background: none; border: none; color: var(--cream); cursor: none;
        }

        /* ── HERO ───────────────────────────────────── */
        .hero-section {
          min-height: 100vh;
          display: flex; align-items: center;
          padding: 9rem 2rem 5rem;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
          width: 100%;
          animation: fadeUp .9s ease both;
        }
        .hero-eyebrow {
          display: flex; align-items: center; gap: .8rem;
          margin-bottom: 1.4rem;
        }
        .eyebrow-line { width: 36px; height: 2px; background: var(--red); }
        .eyebrow-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem; font-weight: 700;
          letter-spacing: 2.5px; text-transform: uppercase;
          color: var(--red);
        }
        .hero-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(5.5rem, 10vw, 9.5rem);
          line-height: 0.88; letter-spacing: 3px;
          color: var(--ink); margin-bottom: 0.6rem;
        }
        .hero-name span { color: var(--red); }
        .hero-role {
          font-family: 'Lora', serif; font-style: italic;
          font-size: clamp(1rem, 1.8vw, 1.3rem);
          color: var(--mid); margin: 1.3rem 0;
          padding-left: 1rem; border-left: 3px solid var(--border);
          line-height: 1.5;
        }
        .hero-desc {
          font-size: 0.93rem; line-height: 1.85;
          color: #5A5245; margin-bottom: 2.2rem;
          max-width: 490px;
        }
        .hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.74rem; font-weight: 700;
          letter-spacing: 1.2px; text-transform: uppercase;
          padding: 0.85rem 2rem;
          display: inline-flex; align-items: center; gap: .5rem;
          text-decoration: none; cursor: none; border: none;
          transition: background .2s, color .2s, transform .15s;
        }
        .btn-primary { background: var(--ink); color: var(--cream); }
        .btn-primary:hover { background: var(--red); transform: translateY(-2px); }
        .btn-outline {
          background: transparent; color: var(--ink);
          outline: 2px solid var(--ink);
        }
        .btn-outline:hover { background: var(--ink); color: var(--cream); transform: translateY(-2px); }

        /* Image frame */
        .hero-img-wrap {
          display: flex; justify-content: center; align-items: center;
          position: relative;
        }
        .hero-img-frame {
          position: relative;
          width: 310px; height: 370px;
          animation: floatImg 5s ease-in-out infinite;
        }
        /* red offset shadow */
        .img-shadow {
          position: absolute; inset: 0;
          border: 2px solid var(--red);
          transform: translate(12px, 12px);
          z-index: 0;
        }
        .img-box {
          position: relative; z-index: 1;
          width: 100%; height: 100%;
          border: 3px solid var(--ink);
          overflow: hidden;
        }
        .img-box img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          filter: contrast(1.05) saturate(0.92);
        }
        /* caption strip */
        .img-caption {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: var(--ink);
          padding: .7rem 1rem;
          display: flex; justify-content: space-between; align-items: center;
          z-index: 2;
        }
        .cap-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: 2.5px; color: var(--cream);
        }
        .cap-loc {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem; letter-spacing: 1px; color: #6A6050;
        }
        /* corner registration marks on image */
        .cmark {
          position: absolute; width: 14px; height: 14px; z-index: 3;
        }
        .cmark-tl { top:-2px; left:-2px;  border-top:2px solid var(--red); border-left:2px solid var(--red); }
        .cmark-tr { top:-2px; right:-2px; border-top:2px solid var(--red); border-right:2px solid var(--red); }
        .cmark-bl { bottom:46px; left:-2px;  border-bottom:2px solid var(--red); border-left:2px solid var(--red); }
        .cmark-br { bottom:46px; right:-2px; border-bottom:2px solid var(--red); border-right:2px solid var(--red); }

        .scroll-hint {
          position: absolute; bottom: 2rem; left: 50%;
          transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap:.4rem;
          animation: scrollBounce 2.4s ease-in-out infinite;
        }
        .scroll-hint-txt {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.62rem; letter-spacing: 2px; text-transform: uppercase;
          color: var(--mid);
        }

        /* ── SECTION WRAPPERS ──────────────────────── */
        .sec {
          max-width: 1400px; margin: 0 auto;
          padding: 6rem 2rem; position: relative;
        }
        .sec-dark {
          background: var(--ink);
          padding: 6rem 2rem;
        }
        .sec-dark-inner {
          max-width: 1400px; margin: 0 auto;
          position: relative;
        }

        /* light horizontal divider between sections */
        .sec-divider {
          max-width: 1400px; margin: 0 auto 0;
          height: 1px; background: var(--border); opacity: 0.5;
        }

        /* ghost big number */
        .ghost-n {
          position: absolute; right: 0; top: 50%;
          transform: translateY(-50%);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18rem; color: var(--ink); opacity:.028;
          line-height: 1; user-select: none; pointer-events: none;
          letter-spacing: -5px;
        }

        /* ── ABOUT ─────────────────────────────────── */
        .about-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 5rem; align-items: start;
        }
        .about-text p {
          font-size: 0.94rem; line-height: 1.9; color: #4A4438;
          margin-bottom: 1.2rem;
        }
        .about-stats {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;
        }
        .stat-card {
          border: 2px solid var(--ink);
          padding: 1.5rem; position: relative;
          transition: background .25s;
        }
        .stat-card::after {
          content: ''; position: absolute; inset: 4px;
          border: 1px solid var(--border); pointer-events: none;
        }
        .stat-card:hover { background: var(--ink); }
        .stat-card:hover .snum { color: var(--cream); }
        .stat-card:hover .slbl { color: #6A6050; }
        .snum {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 3.2rem; color: var(--red);
          line-height: 1; margin-bottom: .3rem;
          transition: color .25s;
        }
        .slbl {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.68rem; letter-spacing: 1px; text-transform: uppercase;
          color: var(--mid); transition: color .25s;
        }

        /* ── SKILLS ────────────────────────────────── */
        .skill-cats { display: flex; flex-direction: column; gap: 3rem; }
        .cat-head {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.75rem; letter-spacing: 3px; color: var(--ink);
          padding-bottom: .55rem;
          border-bottom: 2px solid var(--ink);
          margin-bottom: 1.2rem; position: relative;
        }
        .cat-head::after {
          content: ''; position: absolute;
          bottom: -2px; left: 0; width: 44px; height: 2px;
          background: var(--red);
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(108px, 1fr));
          gap: .6rem;
        }
        .skill-card {
          border: 1.5px solid var(--border);
          padding: 1rem .5rem; text-align: center;
          background: var(--paper);
          transition: border-color .25s, background .25s, transform .25s;
          position: relative; overflow: hidden;
        }
        .skill-card::after {
          content: ''; position: absolute;
          bottom: 0; left: 0; width: 0; height: 2px;
          background: var(--red); transition: width .3s;
        }
        .skill-card:hover {
          border-color: var(--ink); background: var(--ink);
          transform: translateY(-4px);
        }
        .skill-card:hover::after { width: 100%; }
        .skill-card:hover .skill-name { color: var(--cream); }
        .skill-icon {
          font-size: 2.3rem;
          display: flex; justify-content: center; align-items: center;
          margin-bottom: .45rem; height: 38px;
          transition: transform .3s;
        }
        .skill-card:hover .skill-icon { transform: scale(1.15) rotateY(720deg); }
        .skill-name {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.67rem; font-weight: 500; letter-spacing: .4px;
          color: var(--ink); transition: color .25s;
        }

        /* ── EXPERIENCE ────────────────────────────── */
        .exp-timeline {
          position: relative; padding-left: 2.8rem;
          border-left: 3px solid var(--ink);
          max-width: 860px;
        }
        .exp-item { position: relative; margin-bottom: 3.5rem; }
        .exp-diamond {
          position: absolute; left: -3.25rem; top: 4px;
          width: 14px; height: 14px;
          background: var(--red); border: 3px solid var(--ink);
          transform: rotate(45deg);
        }
        .exp-date {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.68rem; font-weight: 700;
          letter-spacing: 1px; text-transform: uppercase;
          color: var(--red); margin-bottom: .5rem;
        }
        .exp-company {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.2rem; letter-spacing: 2px; color: var(--ink);
          margin-bottom: .15rem;
        }
        .exp-role {
          font-family: 'Lora', serif; font-style: italic;
          font-size: .95rem; color: var(--mid); margin-bottom: 1rem;
        }
        .exp-box {
          border: 1.5px solid var(--border);
          padding: 1.5rem; background: var(--paper);
        }
        .exp-list { list-style: none; display: flex; flex-direction: column; gap: .55rem; }
        .exp-list li {
          font-size: .88rem; line-height: 1.65; color: #4A4438;
          padding-left: 1.3rem; position: relative;
        }
        .exp-list li::before {
          content: '→'; position: absolute; left: 0;
          color: var(--red); font-size: .8rem;
        }

        /* ── PROJECTS ──────────────────────────────── */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
          gap: 1.5rem;
        }
        .project-card {
          border: 2px solid var(--ink);
          background: var(--cream);
          transition: transform .25s, box-shadow .25s;
        }
        .project-card:hover {
          transform: translate(-5px,-5px);
          box-shadow: 5px 5px 0 var(--ink);
        }
        .project-hd {
          background: var(--ink);
          padding: 1.4rem 1.4rem 1.1rem;
          position: relative;
        }
        .project-num-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .65rem; font-weight: 700;
          letter-spacing: 2px; color: #4A4040;
          margin-bottom: .4rem;
        }
        .project-title-row {
          display: flex; justify-content: space-between; align-items: flex-end;
        }
        .project-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem; letter-spacing: 2px; color: var(--cream);
        }
        .project-links { display: flex; gap: .45rem; }
        .proj-link {
          width: 30px; height: 30px;
          border: 1.5px solid rgba(255,255,255,.25);
          display: flex; align-items: center; justify-content: center;
          text-decoration: none; color: var(--cream);
          transition: background .2s, border-color .2s;
        }
        .proj-link:hover { background: var(--red); border-color: var(--red); }
        .project-subtitle {
          font-family: 'JetBrains Mono', monospace;
          font-size: .63rem; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: var(--red); margin-top: .55rem;
        }
        .project-body { padding: 1.4rem; }
        .project-desc {
          font-size: .87rem; line-height: 1.75; color: #4A4438;
          margin-bottom: 1rem;
        }
        .tech-tags { display: flex; flex-wrap: wrap; gap: .35rem; margin-bottom: 1rem; }
        .tech-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: .62rem; font-weight: 700; letter-spacing: .4px;
          padding: .28rem .6rem; border: 1.5px solid var(--ink);
          color: var(--ink); transition: background .2s, color .2s;
        }
        .tech-tag:hover { background: var(--ink); color: var(--cream); }
        .feat-list { list-style: none; display: flex; flex-direction: column; gap: .4rem; }
        .feat-list li {
          font-size: .83rem; line-height: 1.5; color: #5A5245;
          padding-left: 1.2rem; position: relative;
        }
        .feat-list li::before {
          content: '→'; position: absolute; left: 0;
          color: var(--red); font-size: .75rem;
        }

        /* ── CONTACT ───────────────────────────────── */
        .contact-text {
          font-size: .93rem; line-height: 1.85; color: #8A8070;
          max-width: 580px; margin-bottom: 2.5rem;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
          gap: 1rem; margin-bottom: 2.5rem;
        }
        .contact-card {
          border: 1.5px solid rgba(255,255,255,.12);
          padding: 1.4rem; text-decoration: none;
          display: block; transition: border-color .2s, background .2s;
          position: relative; overflow: hidden;
          color: inherit;
        }
        .contact-card::after {
          content: ''; position: absolute;
          bottom: 0; left: 0; width: 0; height: 2px;
          background: var(--red); transition: width .3s;
        }
        .contact-card:hover { border-color: rgba(255,255,255,.3); background: rgba(255,255,255,.04); }
        .contact-card:hover::after { width: 100%; }
        .contact-icon { color: var(--red); margin-bottom: .7rem; }
        .contact-lbl {
          font-family: 'JetBrains Mono', monospace;
          font-size: .63rem; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; color: #4A4438; margin-bottom: .3rem;
        }
        .contact-val { font-size: .88rem; color: var(--cream); word-break: break-word; }
        .social-row { display: flex; gap: .9rem; }
        .social-link {
          width: 44px; height: 44px;
          border: 1.5px solid rgba(255,255,255,.18);
          display: flex; align-items: center; justify-content: center;
          color: var(--cream); text-decoration: none;
          transition: background .2s, border-color .2s, transform .2s;
        }
        .social-link:hover { background: var(--red); border-color: var(--red); transform: translateY(-3px); }

        /* ── FOOTER ────────────────────────────────── */
        footer {
          background: #0A0A0A;
          border-top: 3px solid var(--red);
          padding: 1.4rem 2rem;
          display: flex; justify-content: center;
        }
        .footer-txt {
          font-family: 'JetBrains Mono', monospace;
          font-size: .68rem; letter-spacing: 1.5px; text-transform: uppercase;
          color: #3A3530;
        }
        .hb { color: var(--red); animation: hb 1.5s ease infinite; display: inline-block; }

        /* ── RESPONSIVE ────────────────────────────── */
        @media (max-width: 1024px) {
          .ghost-n { font-size: 12rem; }
        }
        @media (max-width: 968px) {
          .nav-links  { display: none; }
          .mob-btn    { display: block; }
          .hero-grid  { grid-template-columns: 1fr; text-align: center; gap: 3rem; }
          .hero-eyebrow { justify-content: center; }
          .hero-desc  { margin: 0 auto 2rem; }
          .hero-btns  { justify-content: center; }
          .hero-img-wrap { order: -1; }
          .hero-img-frame { width: 260px; height: 315px; }
          .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .projects-grid { grid-template-columns: 1fr; }
          .contact-grid  { grid-template-columns: 1fr; }
          .exp-timeline  { padding-left: 2rem; }
          .ghost-n { display: none; }
        }
        @media (max-width: 640px) {
          .skills-grid { grid-template-columns: repeat(3,1fr); }
          .about-stats { grid-template-columns: 1fr 1fr; }
          .hero-img-frame { width: 220px; height: 268px; }
          .sec { padding: 4rem 1.2rem; }
          .sec-dark { padding: 4rem 1.2rem; }
        }
        @media (max-width: 420px) {
          .skills-grid { grid-template-columns: repeat(2,1fr); }
          .hero-name   { font-size: 5rem; }
        }
      `}</style>

      {/* CURSOR */}
      <Cursor />

      <nav>
        <div className="nav-inner">
          <div className="logo" onClick={() => scrollToSection("home")}>
            ADARSH<span className="logo-dot" />DEV
          </div>
          <ul className="nav-links">
            {["home","about","skills","experience","projects","contact"].map((s) => (
              <li key={s}>
                <a
                  href={`#${s}`}
                  className={activeSection === s ? "active" : ""}
                  onClick={(e) => { e.preventDefault(); scrollToSection(s); }}
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
          <button className="mob-btn" onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* MOBILE ORIENTATION */}
      <div className={`mob-overlay ${isMenuOpen ? "open" : ""}`}>
        <button className="mob-close" onClick={() => setIsMenuOpen(false)}>
          <X size={28} />
        </button>
        {["home","about","skills","experience","projects","contact"].map((s) => (
          <a
            key={s}
            href={`#${s}`}
            onClick={(e) => { e.preventDefault(); scrollToSection(s); }}
          >
            {s.toUpperCase()}
          </a>
        ))}
      </div>

      {/* HERO */}
      <section id="home">
        <div className="hero-section">
          <RegMark pos="tl" />
          <RegMark pos="tr" />
          <RegMark pos="bl" />
          <RegMark pos="br" />

          <RotatingBadge />

          <div className="hero-grid"> 
            <div>
              <div className="hero-eyebrow">
                <div className="eyebrow-line" />
                <span className="eyebrow-text">Hello, I'm</span>
              </div>
              <h1 className="hero-name">
                ADARSH <span>K P</span>
              </h1>
              <p className="hero-role">MERN Stack Developer</p>
              <p className="hero-desc">
                Self-taught full-stack developer passionate about creating
                scalable web applications with clean architecture. Specialized
                in React, Node.js, Express, and MongoDB.
              </p>
              <div className="hero-btns">
                <button className="btn btn-primary" onClick={() => scrollToSection("projects")}>
                  <Rocket size={14} /> View Projects
                </button>
                <button className="btn btn-outline" onClick={() => scrollToSection("contact")}>
                  <Mail size={14} /> Get In Touch
                </button>
              </div>
            </div>

            {/* PHOTO */}
            <div className="hero-img-wrap">
              <div className="hero-img-frame">
                <div className="img-shadow" />
                <div className="img-box">
                  <img src={profileImage} alt="Adarsh KP" />
                  <div className="img-caption">
                    <span className="cap-name">Adarsh KP</span>
                    <span className="cap-loc">KERALA, INDIA</span>
                  </div>
                </div>

                <div className="cmark cmark-tl" />
                <div className="cmark cmark-tr" />
                <div className="cmark cmark-bl" />
                <div className="cmark cmark-br" />
              </div>
            </div>
          </div>

          <div className="scroll-hint">
            <span className="scroll-hint-txt">Scroll</span>
            <ChevronDown size={18} color="var(--mid)" />
          </div>
        </div>
      </section>

      <div className="sec-divider" />

      {/* ABOUT */}
      <section id="about">
        <div className="sec">
          <span className="ghost-n">01</span>
          <SectionHeader num="01" label="About Me" title="WHO I AM" />
          <div className="about-grid">
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
            <div className="about-stats">
              {[
                { num: "5+",   label: "Projects Built" },
                { num: "1+",   label: "Year Training" },
                { num: "25+",  label: "Technologies" },
                { num: "100%", label: "Self-Motivated" },
              ].map((s) => (
                <div key={s.label} className="stat-card">
                  <div className="snum">{s.num}</div>
                  <div className="slbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="sec-divider" />

      {/* SKILLS */}
      <section id="skills">
        <div className="sec">
          <span className="ghost-n">02</span>
          <SectionHeader num="02" label="Tech Stack" title="SKILLS" />
          <div className="skill-cats">
            {skillCategories.map((cat, ci) => (
              <div key={cat.category}>
                <h3 className="cat-head">{cat.category}</h3>
                <div className="skills-grid">
                  {cat.skills.map((sk, si) => (
                    <div
                      key={sk.name}
                      className="skill-card"
                      style={{ animationDelay: `${ci * 0.15 + si * 0.04}s` }}
                    >
                      <div className="skill-icon" style={{ color: sk.color }}>
                        {sk.icon}
                      </div>
                      <div className="skill-name">{sk.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="sec-divider" />

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="sec">
          <span className="ghost-n">03</span>
          <SectionHeader num="03" label="Experience" title="JOURNEY" />
          <div className="exp-timeline">
            <div className="exp-item">
              <div className="exp-diamond" />
              <div className="exp-date">Aug 2024 — Present</div>
              <div className="exp-company">Brototype</div>
              <div className="exp-role">Full-Stack MERN Developer (Trainee)</div>
              <div className="exp-box">
                <ul className="exp-list">
                  <li>Completed intensive hands-on training focused on MERN Stack and Data Structures & Algorithms</li>
                  <li>Architected, developed, and deployed 5+ production-ready web applications</li>
                  <li>Built scalable backend systems using Node.js, Express.js, REST APIs, JWT authentication, and MVC/Repository architecture</li>
                  <li>Developed responsive UIs with React.js, Redux Toolkit, Tailwind CSS, and Material UI</li>
                  <li>Implemented real-time features using Socket.IO and WebRTC</li>
                  <li>Managed full SDLC from database design to AWS deployment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="sec-divider" />

      {/* PROJECTS */}
      <section id="projects">
        <div className="sec">
          <span className="ghost-n">04</span>
          <SectionHeader num="04" label="Projects" title="FEATURED WORK" />
          <div className="projects-grid">
            {projects.map((p) => (
              <div key={p.title} className="project-card">
                <div className="project-hd">
                  <div className="project-num-label">PROJECT {p.num}</div>
                  <div className="project-title-row">
                    <h3 className="project-title">{p.title}</h3>
                    <div className="project-links">
                      {p.liveLink && (
                        <a href={p.liveLink} target="_blank" rel="noopener noreferrer" className="proj-link">
                          <FiExternalLink size={14} />
                        </a>
                      )}
                      {p.githubLink && (
                        <a href={p.githubLink} target="_blank" rel="noopener noreferrer" className="proj-link">
                          <DiGithubBadge style={{ width: 18, height: 18 }} />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="project-subtitle">{p.subtitle}</div>
                </div>
                <div className="project-body">
                  <p className="project-desc">{p.description}</p>
                  <div className="tech-tags">
                    {p.tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}
                  </div>
                  <ul className="feat-list">
                    {p.features.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="sec-dark">
        <div className="sec-dark-inner">
          <SectionHeader num="05" label="Contact" title="GET IN TOUCH" light />
          <p className="contact-text">
            I'm currently open to new opportunities and collaborations. Whether
            you have a project in mind, need help with your application, or just
            want to connect, feel free to reach out!
          </p>
          <div className="contact-grid">
            <a href="mailto:kpadarsh41@gmail.com" className="contact-card">
              <Mail className="contact-icon" size={22} />
              <div className="contact-lbl">Email</div>
              <div className="contact-val">kpadarsh41@gmail.com</div>
            </a>
            <a href="tel:+916282396321" className="contact-card">
              <Phone className="contact-icon" size={22} />
              <div className="contact-lbl">Phone</div>
              <div className="contact-val">+91 6282396321</div>
            </a>
            <div className="contact-card">
              <MapPin className="contact-icon" size={22} />
              <div className="contact-lbl">Location</div>
              <div className="contact-val">Kerala, India</div>
            </div>
          </div>
          <div className="social-row">
            <a href="https://github.com/adarsh6282" className="social-link" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/adarshkpmoothedath" className="social-link" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </section>

      {/*FOOTER*/}
      <footer>
        <p className="footer-txt">
          © 2026 Adarsh KP — Built with <span className="hb">♥</span> — All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;