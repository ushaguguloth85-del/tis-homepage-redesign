import {useEffect, useState} from 'react'
import {Menu, X} from 'lucide-react'
import {navigationItems} from '../../data/siteData'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState)
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <span className="navbar-logo-main">TIS</span>
          <span className="navbar-logo-sub">
            Tulas International School
          </span>
        </a>

        <nav className="desktop-navigation">
          {navigationItems.map(item => (
            <a key={item.label} href={item.href} className="navigation-link">
              {item.label}
            </a>
          ))}

          <a href="#admissions" className="navbar-cta">
            Apply Now
          </a>
        </nav>

        <button
          type="button"
          className="mobile-menu-button"
          onClick={handleMenuToggle}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="mobile-navigation">
          {navigationItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              className="mobile-navigation-link"
              onClick={handleLinkClick}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#admissions"
            className="mobile-navbar-cta"
            onClick={handleLinkClick}
          >
            Apply Now
          </a>
        </nav>
      )}
    </header>
  )
}

export default Navbar