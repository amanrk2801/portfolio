export type Project = {
  id: string
  title: string
  description: string
  tech: string[]
  date: string
  github: string
  live: string
  video?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'doctor-ai',
    title: 'Doctor AI — Medical Assistant',
    description:
      'AI-Powered medical assistant built with React and Flask. Integrates Google Gemini LLM to analyze symptoms and provide medical guidance. Features a custom medical database and emergency service locator.',
    tech: ['React', 'Python (Flask)', 'Google Gemini API', 'Bootstrap'],
    date: 'November 2025',
    github: 'https://github.com/amanrk2801/Doctor_AI/',
    live: 'https://doctor-ai-phi-three.vercel.app/',
    video: '../public/videos/Medical-Symptom-Checker---AI-Powered.webm',
    featured: true,
  },
  {
    id: 'medium-clone',
    title: 'Full-Stack Medium Clone',
    description:
      'Built a complete MERN stack blogging platform with authentication, content management, and real-time features, delivering seamless reading and writing experiences.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'TypeScript', 'Tailwind CSS'],
    date: 'October 2025',
    github: 'https://github.com/amanrk2801/medium',
    live: 'https://medium-weld-two.vercel.app/',
    video: undefined,
  },
  {
    id: 'carpool-app',
    title: 'Carpool Application',
    description:
      'Developed a comprehensive carpool platform with Spring Boot backend and React frontend, featuring user authentication, ride management, booking system, and user ratings.',
    tech: ['Spring Boot', 'React', 'Java', 'REST APIs', 'MySQL'],
    date: 'August 2025',
    github: 'https://github.com/amanrk2801/carpool',
    live: 'http://carpoolconnect.me/',
    video: undefined,
  },
  {
    id: 'moviemoods',
    title: 'MovieMoods',
    description:
      'Built an intelligent movie discovery platform with mood-based recommendations, boosting user engagement through personalized content curation.',
    tech: ['React', 'Redux', 'Material UI'],
    date: 'October 2024',
    github: 'https://github.com/amanrk2801/moviemoods',
    live: 'https://moviemoods.vercel.app/',
  },
]

