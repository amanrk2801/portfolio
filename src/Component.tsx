"use client";

import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Sun,
  Moon,
  BookOpen,
  Download,
  MessageSquare,
  Phone,
} from "lucide-react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Component() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const projects = [
    {
      title: "Full-Stack Medium Clone",
      description:
        "Built a complete MERN stack blogging platform with authentication, content management, and real-time features, delivering seamless reading and writing experiences.",
      tech: "MongoDB, Express.js, React, Node.js, TypeScript, Tailwind CSS",
      date: "October 2025",
      github: "https://github.com/amanrk2801/medium",
      live: "https://medium-weld-two.vercel.app/",
    },
    {
      title: "Carpool Application",
      description:
        "Developed a comprehensive carpool platform with Spring Boot backend and React frontend, featuring user authentication, ride management, booking system, and user ratings.",
      tech: "Spring Boot, React, Java, REST APIs, MySQL",
      date: "August 2025",
      github: "https://github.com/amanrk2801/carpool",
      live: "http://carpoolconnect.me/",
    },
    {
      title: "MovieMoods",
      description:
        "Built an intelligent movie discovery platform with mood-based recommendations, boosting user engagement through personalized content curation.",
      tech: "React, Redux, Material UI",
      date: "October 2024",
      github: "https://github.com/amanrk2801/moviemoods",
      live: "https://moviemoods.vercel.app/",
    },
    {
      title: "NFT Marketplace",
      description:
        "Created a full-stack blockchain marketplace for digital art trading, achieving significant transaction volume growth through Web3 integration.",
      tech: "React, Tailwind CSS, Solidity, Metamask, Material UI, Polygon",
      date: "October 2023",
      github: "https://github.com/amanrk2801/nft-marketplace",
      live: "https://nft---marketplace.vercel.app/",
    },
  ];

  // const skills = [
  //   "C++",
  //   "Java",
  //   "Python",
  //   "HTML/CSS",
  //   "JavaScript",
  //   "React",
  //   "React",
  //   "Redux",
  //   "Node.js",
  //   "Express",
  //   "MongoDB",
  //   "Git",
  // ];

  const phoneNumber = "7821081179";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  const skills = [
    {
      name: "React",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      name: "Redux",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
    },
    {
      name: "Spring Boot",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/79/Spring_Boot.svg",
    },
    {
      name: "Node.js",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
    {
      name: "Express.js",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    },
    {
      name: "MongoDB",
      image: "https://www.svgrepo.com/show/331488/mongodb.svg",
    },
    {
      name: "MySQL",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg",
    },
    {
      name: "AWS",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    },
    {
      name: "Git",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
    },
  ];

  const SkillBadge = ({ skill }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Define animation variants for the tooltip
    const tooltipVariants = {
      hidden: {
        opacity: 0,
        y: 20,
        rotate: -5,
        scale: 0.95,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      },
      visible: {
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: 1,
        transition: {
          duration: 0.5,
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      },
      exit: {
        opacity: 0,
        y: 20,
        rotate: 5,
        scale: 0.95,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      },
    };

    // Define animation variants for the badge
    const badgeVariants = {
      hover: {
        scale: 1.1,
        backgroundColor: "#3B82F6", // Tailwind's blue-600
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 10,
        },
      },
      initial: {
        scale: 1,
        backgroundColor: "#1D4ED8", // Tailwind's blue-700
      },
    };

    return (
      <div
        className="relative inline-block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated Badge */}
        <motion.span
          key={skill.name}
          variants={badgeVariants}
          initial="initial"
          whileHover="hover"
          className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm cursor-pointer shadow-md"
        >
          {skill.name}
        </motion.span>

        {/* Animated Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute z-10 p-2 w-32 h-32 bg-white border border-gray-300 rounded shadow-lg 
                -top-36 left-1/2 transform -translate-x-1/2"
              variants={tooltipVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-full h-full object-contain rounded"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900 min-h-screen p-4 sm:p-6 md:p-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden transition-colors duration-300">
          <div className="relative">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>
          <div className="flex flex-col lg:flex-row">
            {/* Left Panel */}
            <div className="lg:w-1/3 bg-gradient-to-b from-blue-900 to-indigo-800 p-6 sm:p-8 text-white">
              <div className="flex flex-col items-center mb-6 sm:mb-8">
                <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-white mb-4 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1709708522739-6EtFPzQh553HdP6Od8ZXoNmDnvDdhn.jpeg"
                    alt="Aman Kumbhalwar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold">
                  Aman Kumbhalwar
                </h1>
                <p className="text-lg sm:text-xl">Full-Stack Developer</p>
              </div>

              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                  Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>

              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                  Education
                </h2>
                <div className="mb-4">
                  <p className="font-semibold">
                    Post Graduate Diploma in Advanced Computing (PG-DAC)
                  </p>
                  <p>August 2025</p>
                </div>
                <div>
                  <p className="font-semibold">
                    Bachelor of Engineering (Computer Science)
                  </p>
                  <p>June 2023</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                  Contact
                </h2>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/amanrk2801"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    className="hover:text-blue-300 transition-colors duration-300 cursor-pointer"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/amanrk2801"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    className="hover:text-blue-300 transition-colors duration-300 cursor-pointer"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="mailto:amanrk2801@gmail.com"
                    title="Email"
                    className="hover:text-blue-300 transition-colors duration-300 cursor-pointer"
                  >
                    <Mail size={24} />
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1DO3oIImr4nhkiLo05Z1XvXZJi3Np5iyd/view?usp=sharing"
                    download="Aman_Kumbhalwar.pdf"
                    target="_blank"
                    title="Download Resume"
                    className="hover:text-blue-300 transition-colors duration-300 cursor-pointer"
                  >
                    <Download size={24} />
                  </a>
                  <a
                    href={`tel:${phoneNumber}`}
                    title="Phone"
                    className="hover:text-blue-300 transition-colors duration-300 cursor-pointer"
                  >
                    <Phone size={24} />
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="WhatsApp"
                    className="hover:text-green-300 transition-colors duration-300 cursor-pointer"
                  >
                    <MessageSquare size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div className="lg:w-2/3 p-6 sm:p-8 bg-white dark:bg-gray-900">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-blue-800 dark:text-blue-300">
                Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="project-card bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
                  >
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-4">
                        {project.date}
                      </p>
                      <p className="mb-2 sm:mb-4 text-sm sm:text-base text-gray-800 dark:text-gray-300">
                        {project.description}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-4">
                        <span className="font-semibold">Technologies:</span>{" "}
                        {project.tech}
                      </p>
                    </div>
                    <div className="flex justify-between mt-2 sm:mt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-300 cursor-pointer text-sm"
                      >
                        <Github size={16} className="mr-1" />
                        GitHub
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200 transition-colors duration-300 cursor-pointer text-sm"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
