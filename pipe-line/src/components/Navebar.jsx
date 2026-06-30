import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaSun, FaMoon } from 'react-icons/fa'
import { applyTheme, getInitialTheme } from '../utils/theme'
import './styling/navebar.css'

export default function Navebar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(() => getInitialTheme() === 'dark')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    applyTheme(darkMode ? 'dark' : 'light')
  }, [darkMode])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e) => {
      if (!localStorage.getItem('theme')) {
        setDarkMode(e.matches)
      }
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const toggleTheme = () => setDarkMode(d => !d)
  const closeMenu = () => setMenuOpen(false)
  const toggleMenu = () => setMenuOpen(o => !o)

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="logo">
          <div className="logo-icon">P</div>
          Pipeline<span>IQ</span>
        </Link>

        <ul className="nav-links">
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/integrations">Integrations</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="nav-cta">
          <button
            className="theme-btn"
            onClick={toggleTheme}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <Link to="/contact" className="btn btn-primary">
            Start Free Trial
          </Link>
        </div>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <Link to="/features" onClick={closeMenu}>Features</Link>
        <Link to="/pricing" onClick={closeMenu}>Pricing</Link>
        <Link to="/integrations" onClick={closeMenu}>Integrations</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/blog" onClick={closeMenu}>Blog</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>

        <button className="theme-btn mobile-theme-btn" onClick={toggleTheme}>
          {darkMode ? <FaSun /> : <FaMoon />}
          {darkMode ? ' Light Mode' : ' Dark Mode'}
        </button>

        <Link
          to="/contact"
          className="btn btn-primary"
          onClick={closeMenu}
        >
          Start Free Trial
        </Link>
      </div>
    </>
  )
}
