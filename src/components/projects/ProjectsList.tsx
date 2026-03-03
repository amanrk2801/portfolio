import { BookOpen } from 'lucide-react'
import { projects } from '../../data/projects'
import { ProjectCard } from './ProjectCard'

export function ProjectsList() {
  return (
    <section aria-labelledby="projects-heading">
      <h2
        id="projects-heading"
        className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-blue-800 dark:text-blue-300 flex items-center gap-2"
      >
        <BookOpen size={28} /> Proof of Work
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

