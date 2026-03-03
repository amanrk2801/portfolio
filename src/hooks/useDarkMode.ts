import { useEffect, useState } from 'react'

export function useDarkMode(initialValue = true) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(initialValue)

  useEffect(() => {
    const storedPreference = window.localStorage.getItem('theme')
    if (storedPreference === 'dark') {
      setIsDarkMode(true)
    } else if (storedPreference === 'light') {
      setIsDarkMode(false)
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (isDarkMode) {
      root.classList.add('dark')
      window.localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      window.localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev)

  return { isDarkMode, toggleDarkMode }
}

