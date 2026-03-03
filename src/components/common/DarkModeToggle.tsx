import { Sun, Moon } from 'lucide-react'

type DarkModeToggleProps = {
  isDarkMode: boolean
  onToggle: () => void
}

export function DarkModeToggle({ isDarkMode, onToggle }: DarkModeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="absolute top-4 right-4 z-20 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  )
}

