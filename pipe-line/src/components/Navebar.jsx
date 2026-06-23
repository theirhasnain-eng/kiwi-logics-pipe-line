import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaSun, FaMoon } from 'react-icons/fa'
import './styling/navebar.css'

export default function Navebar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('light-mode', !darkMode)
  }, [darkMode])

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
            onClick={() => setDarkMode(!darkMode)}
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