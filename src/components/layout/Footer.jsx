import {ArrowUpRight} from 'lucide-react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span>TIS</span>
              <small>Tulas International School</small>
            </a>

            <p>
              Inspiring young minds through learning, curiosity, creativity
              and experiences that go beyond the classroom.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3>Explore</h3>

              <a href="#about">About</a>
              <a href="#academics">Academics</a>
              <a href="#campus">Campus Life</a>
              <a href="#admissions">Admissions</a>
            </div>

            <div className="footer-column">
              <h3>Connect</h3>

              <a href="#contact">Contact</a>
              <a href="#admissions">Apply Now</a>
              <a href="#home">Back to top</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Tulas International School. All rights reserved.</p>

          <div className="footer-socials">
            <a href="#contact" aria-label="Instagram">
              IG
            </a>

            <a href="#contact" aria-label="LinkedIn">
              IN
            </a>

            <a href="#contact" aria-label="YouTube">
              YT
            </a>

            <a
              href="#home"
              className="footer-top-button"
              aria-label="Back to top"
            >
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer