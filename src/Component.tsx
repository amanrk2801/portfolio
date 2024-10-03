"use client"

import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, ExternalLink, Sun, Moon, BookOpen } from 'lucide-react'
import React from 'react'

export default function Component() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const projects = [
    {
        "title": "MovieMoods",
        "description": "Developed MovieMoods, an intuitive web app enabling users to explore movies based on mood and preferences, resulting in increased user engagement.",
        "tech": "React, Redux, Material UI",
        "date": "September 2023",
        "github": "https://github.com/amanrk2801/moviemoods",
        "live": "https://moviemoods.vercel.app/"
    },
    {
        "title": "Medium Clone",
        "description": "Created a Medium clone application utilizing TypeScript, React, and Vite, featuring a modular architecture and responsive design for enhanced user experience. Integrated the ShadCN library for improved UI components.",
        "tech": "TypeScript, React, Vite, Tailwind CSS, ShadCN",
        "date": "September 2023",
        "github": "https://github.com/amanrk2801/mediumclone_v1",
        "live": "https://mediumclone-v1.vercel.app/"
    },
    {
        "title": "NFT Marketplace",
        "description": "Developed an NFT marketplace facilitating creation, purchase, and sale of digital art on the blockchain, resulting in a substantial increase in monthly transactions.",
        "tech": "React, Tailwind CSS, Solidity, Metamask, Material UI, Polygon",
        "date": "October 2023",
        "github": "https://github.com/amanrk2801/nft-marketplace",
        "live": "https://nft---marketplace.vercel.app/"
    },
    {
        "title": "Research Paper: Intelligent AI Chatbot",
        "description": "Led a team effort resulting in the publication of a research paper on an Intelligent AI Chatbot in the esteemed International Research Journal of Modern Engineering and Technology Sciences (IRJMETS) website.",
        "tech": "Research, AI, Natural Language Processing",
        "date": "June 2023",
        "github": "https://github.com/amanrk2801/Doctor_AI",
        "live": "https://www.irjmets.com/uploadedfiles/paper/issue_6_june_2023/41275/final/fin_irjmets1685775338.pdf"
    }
  ]

  const skills = ['C++', 'Java', 'Python', 'HTML/CSS', 'JavaScript', 'SQL', 'React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Git']

  return (
    <div className={darkMode ? 'dark' : ''}>
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
                  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1709708522739-6EtFPzQh553HdP6Od8ZXoNmDnvDdhn.jpeg" alt="Aman Kumbhalwar" className="w-full h-full object-cover" />
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold">Aman Kumbhalwar</h1>
                <p className="text-lg sm:text-xl">Full-Stack Developer</p>
              </div>
              
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="bg-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm hover:bg-blue-600 transition-colors duration-300 cursor-default">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Education</h2>
                <p className="font-semibold">Bachelor of Engineering (Computer Science)</p>
                <p>Rashtrasant Tukadoji Maharaj Nagpur University</p>
                <p>June 2019 - June 2023</p>
                <p>CGPA: 7.10/10</p>
              </div>
              
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Contact</h2>
                <div className="flex gap-4">
                  <a href="https://github.com/amanrk2801" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-300 cursor-pointer">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/amanrk2801" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-300 cursor-pointer">
                    <Linkedin size={24} />
                  </a>
                  <a href="mailto:amanrk2801@gmail.com" className="hover:text-blue-300 transition-colors duration-300 cursor-pointer">
                    <Mail size={24} />
                  </a>
                  <a href="/blog" className="hover:text-blue-300 transition-colors duration-300 cursor-pointer">
                    <BookOpen size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Panel */}
            <div className="lg:w-2/3 p-6 sm:p-8 bg-white dark:bg-gray-900">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-blue-800 dark:text-blue-300">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {projects.map((project, index) => (
                  <div key={index} className="project-card bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">{project.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-4">{project.date}</p>
                      <p className="mb-2 sm:mb-4 text-sm sm:text-base text-gray-800 dark:text-gray-300">{project.description}</p>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-4">
                        <span className="font-semibold">Technologies:</span> {project.tech}
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
  )
}