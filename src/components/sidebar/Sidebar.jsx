import { Download, Github, Linkedin, Mail, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';

const PHONE_NUMBER = '7821081179';
const WHATSAPP_LINK = `https://wa.me/${PHONE_NUMBER}`;

export function Sidebar({ isDark }) {
    return (
        <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`lg:w-[360px] px-8 py-10 flex flex-col items-center lg:min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-800' : 'bg-sidebar-bg'}`}
        >
            {/* Profile Section */}
            <div className="flex flex-col items-center mb-10 w-full relative">
                <div className="absolute top-0 w-36 h-36 bg-[#F6D0B4] rounded-full blur-2xl opacity-60 -z-10"></div>

                <div className="relative w-36 h-36 rounded-full overflow-hidden mb-5 ring-[6px] ring-white dark:ring-slate-700 shadow-lg bg-[#F6D0B4]">
                    <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1709708522739-6EtFPzQh553HdP6Od8ZXoNmDnvDdhn.jpeg"
                        alt="Aman Kumbhalwar"
                        className="w-full h-full object-cover grayscale brightness-110 contrast-125 hover:grayscale-0 transition-all duration-500"
                    />
                </div>
                <h1 className="text-[28px] font-extrabold text-slate-900 dark:text-white tracking-tight leading-none mb-2 text-center">
                    Aman Kumbhalwar
                </h1>
                <p className="text-sm font-semibold text-indigo-500 dark:text-indigo-400 text-center px-4 leading-relaxed font-mono">
                    Full Stack Developer & AI Enthusiast
                </p>
            </div>

            {/* Skills */}
            <div className="w-full mb-8">
                <div className="mb-4">
                    <h2 className="text-xl font-bold text-slate-800 dark:text-white">Skills</h2>
                    <div className="h-px w-full bg-slate-200 dark:bg-slate-700 mt-2" />
                </div>
                <div className="flex flex-wrap gap-2 w-full">
                    {skills.map((skill, index) => {
                        const colors = [
                            'bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800',
                            'bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800',
                            'bg-purple-50 text-purple-600 border-purple-100 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800',
                            'bg-amber-50 text-amber-600 border-amber-100 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800',
                            'bg-rose-50 text-rose-600 border-rose-100 dark:bg-rose-900/30 dark:text-rose-300 dark:border-rose-800'
                        ];
                        const colorClass = colors[index % colors.length];

                        return (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-bold tracking-wider shadow-sm cursor-pointer ${colorClass}`}
                            >
                                {skill.name}
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Education History */}
            <div className="w-full mb-8">
                <div className="mb-4">
                    <h2 className="text-xl font-bold text-slate-800 dark:text-white">Education</h2>
                    <div className="h-px w-full bg-slate-200 dark:bg-slate-700 mt-2" />
                </div>
                <div className="flex flex-col gap-6">
                    <div>
                        <p className="text-[14px] font-extrabold text-slate-800 dark:text-slate-100 leading-tight mb-1">PG Diploma in Advanced Computing (PG-DAC)</p>
                        <p className="text-[13px] text-slate-500 dark:text-slate-400">CDAC • August 2025</p>
                    </div>
                    <div>
                        <p className="text-[14px] font-extrabold text-slate-800 dark:text-slate-100 leading-tight mb-1">B.E. Computer Science</p>
                        <p className="text-[13px] text-slate-500 dark:text-slate-400">June 2023</p>
                    </div>
                </div>
            </div>

            {/* Footer Links */}
            <div className="w-full mt-auto">
                <div className="mb-4">
                    <h2 className="text-xl font-bold text-slate-800 dark:text-white">Connect</h2>
                    <div className="h-px w-full bg-slate-200 dark:bg-slate-700 mt-2" />
                </div>
                <div className="flex gap-4 mt-4">
                    <motion.a whileHover={{ y: -3 }} href="https://github.com/amanrk2801" target="_blank" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                        <Github size={22} />
                    </motion.a>
                    <motion.a whileHover={{ y: -3 }} href="https://www.linkedin.com/in/amanrk2801" target="_blank" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                        <Linkedin size={22} />
                    </motion.a>
                    <motion.a whileHover={{ y: -3 }} href="mailto:amanrk2801@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                        <Mail size={22} />
                    </motion.a>
                    <motion.a whileHover={{ y: -3 }} href="https://drive.google.com/file/d/1DO3oIImr4nhkiLo05Z1XvXZJi3Np5iyd/view?usp=sharing" target="_blank" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                        <Download size={22} />
                    </motion.a>
                    <motion.a whileHover={{ y: -3 }} href={WHATSAPP_LINK} target="_blank" className="text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                        <MessageSquare size={22} />
                    </motion.a>
                </div>
            </div>
        </motion.aside>
    );
}
