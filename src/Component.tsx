import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, ExternalLink, Sun, Moon } from 'lucide-react'

export default function Component() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const projects = [
    {
      title: "NFT Marketplace",
      description: "Developed an NFT marketplace facilitating creation, purchase, and sale of digital art on the blockchain, resulting in a substantial increase in monthly transactions.",
      tech: "React, Tailwind CSS, Solidity, Metamask, Material UI, Polygon",
      date: "October 2023",
      github: "https://github.com/amank2801/nft-marketplace",
      live: "https://nft-marketplace-demo.vercel.app"
    },
    {
      title: "MovieMoods",
      description: "Developed MovieMoods, an intuitive web app enabling users to explore movies based on mood and preferences, resulting in increased user engagement.",
      tech: "React, Redux, Material UI",
      date: "September 2023",
      github: "https://github.com/amank2801/movie-moods",
      live: "https://movie-moods-demo.vercel.app"
    },
    {
      title: "Intelligent AI Chatbot",
      description: "Led the development of an intelligent AI chatbot capable of diagnosing diseases and offering personalized recommendations.",
      tech: "Python, Flask, Dialogflow",
      date: "April 2023",
      github: "https://github.com/amank2801/ai-chatbot",
      live: "https://ai-chatbot-demo.vercel.app"
    },
    {
      title: "Research Paper: Intelligent AI Chatbot",
      description: "Led a team effort resulting in the publication of a research paper on an Intelligent AI Chatbot in the esteemed International Research Journal of Modern Engineering and Technology Sciences (IRJMETS) website.",
      tech: "Research, AI, Natural Language Processing",
      date: "June 2023",
      github: "https://github.com/amank2801/ai-chatbot-research",
      live: "https://www.irjmets.com/ai-chatbot-research-paper.pdf"
    }
  ]

  const skills = ['C++', 'Java', 'Python', 'HTML/CSS', 'JavaScript', 'SQL', 'React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Git']

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 min-h-screen p-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden transition-colors duration-300">
          <div className="relative">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>
          <div className="flex flex-col md:flex-row">
            {/* Left Panel */}
            <div className="md:w-1/3 bg-gradient-to-b from-blue-600 to-indigo-800 p-8 text-white">
              <div className="flex flex-col items-center mb-8">
                <div className="w-48 h-48 rounded-full bg-white mb-4 overflow-hidden shadow-lg">
                  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1709708522739-6EtFPzQh553HdP6Od8ZXoNmDnvDdhn.jpeg" alt="Aman Kumbhalwar" className="w-full h-full object-cover" />
                </div>
                <h1 className="text-3xl font-bold">Aman Kumar</h1>
                <p className="text-xl">Full-Stack Developer</p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="bg-blue-700 px-3 py-1 rounded-full text-sm">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Education</h2>
                <p className="font-semibold">Bachelor of Engineering (Computer Science)</p>
                <p>Rashtrasant Tukadoji Maharaj Nagpur University</p>
                <p>June 2019 - June 2023</p>
                <p>CGPA: 7.10/10</p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                <div className="flex gap-4">
                  <a href="https://github.com/amank2801" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/amank2801" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="mailto:amank2801@gmail.com" className="hover:text-blue-300 transition-colors">
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Panel */}
            <div className="md:w-2/3 p-8">
              <h2 className="text-3xl font-bold mb-6 text-blue-800 dark:text-blue-300">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.date}</p>
                      <p className="mb-4 dark:text-gray-100">{project.description}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                        <span className="font-semibold">Technologies:</span> {project.tech}
                      </p>
                    </div>
                    <div className="flex justify-between mt-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
                      >
                        <Github size={20} className="mr-1" />
                        GitHub
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200 transition-colors"
                      >
                        <ExternalLink size={20} className="mr-1" />
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
