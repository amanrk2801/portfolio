import { ExternalLink, Github, Video } from 'lucide-react'
import type { Project } from '../../data/projects'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const hasVideo = project.video && project.video !== '#' && project.video.trim() !== ''

  return (
    <article
      className={`project-card rounded-2xl p-6 sm:p-7 bg-slate-900/80 shadow-[0_18px_45px_rgba(15,23,42,0.9)] transition-transform duration-300 flex flex-col justify-between relative overflow-hidden border ${
        project.featured
          ? 'border-indigo-500/80 ring-2 ring-indigo-500/20'
          : 'border-slate-800'
      }`}
    >
      {project.featured && (
        <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
          FEATURED
        </div>
      )}

      <div>
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg sm:text-xl font-semibold text-slate-50">
            {project.title}
          </h3>
        </div>

        <p className="text-xs font-mono text-slate-400 mb-4">
          {project.date}
        </p>

        <p className="mb-5 text-sm leading-relaxed text-slate-300">
          {project.description}
        </p>

        <div className="mb-4">
          <span className="text-xs font-semibold text-slate-400 block mb-2 tracking-[0.2em]">
            Tech Stack:
          </span>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 bg-slate-800 text-slate-100 text-[11px] rounded-full font-medium border border-slate-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mt-5 pt-4 border-t border-slate-800">
        {hasVideo && (
          <a
            href={project.video}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 transition-colors duration-300 text-xs font-semibold"
          >
            <Video size={16} />
            Watch Demo
          </a>
        )}

        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500 hover:bg-indigo-400 text-slate-950 transition-colors duration-300 text-xs font-semibold"
        >
          <ExternalLink size={16} />
          Live App
        </a>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-100 transition-colors duration-300 text-xs font-medium"
        >
          <Github size={16} />
          Code
        </a>
      </div>
    </article>
  )
}

