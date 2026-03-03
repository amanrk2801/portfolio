import { Github, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function ProjectCard({
    imageSrc,
    title,
    description,
    github,
    live
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden border border-slate-100 dark:border-slate-700 h-full"
        >
            <div className="w-full h-48 sm:h-[220px] bg-slate-100 dark:bg-slate-700 flex-shrink-0 relative group cursor-pointer">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-[22px] font-bold text-slate-900 dark:text-white mb-3 tracking-tight">{title}</h3>

                <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 flex-grow leading-relaxed">
                    {description}
                </p>

                <div className="flex gap-4 mt-auto">
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-slate-900 dark:bg-slate-700 text-white py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors shadow-sm cursor-pointer"
                    >
                        <Github size={16} /> Code
                    </a>
                    {live && (
                        <a
                            href={live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 bg-indigo-500 dark:bg-indigo-600 text-white py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors shadow-sm cursor-pointer"
                        >
                            <PlayCircle size={16} /> Live Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
