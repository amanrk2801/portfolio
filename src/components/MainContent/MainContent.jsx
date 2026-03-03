import { Sun, Moon } from 'lucide-react';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { projects } from '../../data/projects';

// Map specific custom images to the user's projects based on their IDs for the mockups
const projectImages = {
    'doctor-ai': '/doctor-ai.png',
    'medium-clone': '/medium-clone.png',
    'carpool-app': '/carpool-app.png',
    'moviemoods': '/moviemoods.png'
};

export function MainContent({ isDark, toggleTheme }) {
    return (
        <div className="w-full h-full flex flex-col pt-4 lg:pt-0">
            {/* Header */}
            <header className="flex justify-between items-center mb-10 w-full relative">
                <div className="relative">
                    <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Featured Projects
                    </h2>
                    {/* Subtle gradient underline reminiscent of design */}
                    <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mt-2" />
                </div>
                <button onClick={toggleTheme} className="w-11 h-11 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center shadow-sm text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {isDark ? <Moon size={20} /> : <Sun size={20} />}
                </button>
            </header>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        github={project.github}
                        live={project.live}
                        imageSrc={projectImages[project.id] || '/doctor-ai.png'}
                    />
                ))}
            </div>
        </div>
    );
}
