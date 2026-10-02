import {useEffect, useState} from 'react'
import {Moon, Sun} from 'lucide-react'
import './ThemeToggle.css'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('tis-theme') === 'dark'
  })

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDark)
    localStorage.setItem('tis-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const handleToggle = () => {
    setIsDark(prevState => !prevState)
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={handleToggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}

export default ThemeToggle