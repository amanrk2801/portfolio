import { Download, Github, Linkedin, Mail, MessageSquare } from 'lucide-react'
import { skills } from '../../data/skills'
import { SkillBadge } from '../skills/SkillBadge'

const PHONE_NUMBER = '7821081179'
const WHATSAPP_LINK = `https://wa.me/${PHONE_NUMBER}`

export function ProfileSidebar() {
  return (
    <aside className="lg:w-80 xl:w-96 bg-slate-950/80 border-r border-slate-800 px-6 py-8 flex flex-col justify-between">
      <div>
        <div className="flex flex-col items-center mb-6 sm:mb-8">
          <div className="relative mb-5">
            <div className="absolute inset-0 rounded-full bg-indigo-500/30 blur-xl" />
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-slate-900 overflow-hidden ring-4 ring-indigo-500/70 shadow-[0_0_40px_rgba(79,70,229,0.7)]">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1709708522739-6EtFPzQh553HdP6Od8ZXoNmDnvDdhn.jpeg"
            alt="Aman Kumbhalwar"
              className="w-full h-full object-cover grayscale"
          />
            </div>
          </div>
          <h1 className="text-xl sm:text-2xl font-semibold text-slate-50 text-center tracking-tight">
            Aman Kumbhalwar
          </h1>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 text-center">
            Full Stack Engineer
          </p>
          <p className="mt-2 text-xs text-slate-400 text-center">
            Spring Boot • MERN • AI-Augmented Development
          </p>
        </div>

        <div className="mb-6 sm:mb-8">
          <h2 className="text-xs font-semibold tracking-[0.25em] text-slate-400 mb-3">
            TECH STACK
          </h2>
          <div className="grid grid-cols-3 gap-2">
          {skills.map((skill) => (
            <SkillBadge key={skill.name} skill={skill} />
          ))}
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          <h2 className="text-xs font-semibold tracking-[0.25em] text-slate-400 mb-3">
            EDUCATION
          </h2>
        <div className="mb-4">
            <p className="text-sm font-medium text-slate-100">
            PG Diploma in Advanced Computing (PG-DAC)
          </p>
            <p className="text-xs text-slate-400">CDAC • August 2025</p>
        </div>
        <div>
            <p className="text-sm font-medium text-slate-100">B.E. Computer Science</p>
            <p className="text-xs text-slate-400">June 2023</p>
        </div>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-[0.25em] text-slate-400 mb-3">
            CONNECT
          </h2>
          <div className="flex gap-3 justify-center sm:justify-start">
          <a
            href="https://github.com/amanrk2801"
            target="_blank"
            rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-slate-300 hover:text-indigo-300 hover:bg-slate-800 transition-all duration-300"
            aria-label="GitHub profile"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/amanrk2801"
            target="_blank"
            rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-slate-300 hover:text-indigo-300 hover:bg-slate-800 transition-all duration-300"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:amanrk2801@gmail.com"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-slate-300 hover:text-indigo-300 hover:bg-slate-800 transition-all duration-300"
            aria-label="Send email"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://drive.google.com/file/d/1DO3oIImr4nhkiLo05Z1XvXZJi3Np5iyd/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-slate-300 hover:text-indigo-300 hover:bg-slate-800 transition-all duration-300"
            aria-label="View resume"
          >
            <Download size={24} />
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-emerald-300 hover:text-emerald-200 hover:bg-slate-800 transition-all duration-300"
            aria-label="Chat on WhatsApp"
          >
              <MessageSquare size={20} />
          </a>
          </div>
        </div>
      </div>
    </aside>
  )
}

