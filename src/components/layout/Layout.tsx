import type { ReactNode } from 'react'
import { DarkModeToggle } from '../common/DarkModeToggle'
import { useDarkMode } from '../../hooks/useDarkMode'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const { isDarkMode, toggleDarkMode } = useDarkMode(true)

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="bg-slate-950 min-h-screen p-4 sm:p-8 md:p-10 transition-colors duration-300 text-slate-50">
        <div className="max-w-6xl mx-auto rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 shadow-[0_0_60px_rgba(15,23,42,0.9)] overflow-hidden relative">
          <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
          {children}
        </div>
      </div>
    </div>
  )
}

