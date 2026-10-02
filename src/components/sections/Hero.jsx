import {motion} from 'framer-motion'
import {ArrowDown, ArrowRight} from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <img
            src="/images/tis-campus.jpg"
            alt="Tulas International School campus"
            className="hero-background-image"
        />
        <div className="hero-overlay" />
        </div>

      <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
        >
          Tulas International School
        </motion.div>

        <motion.h1
          initial={{opacity: 0, y: 35}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.1}}
        >
          Where Young Minds
          <span>Discover Their Potential</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{opacity: 0, y: 25}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.2}}
        >
          A nurturing international school experience where academic
          excellence, character, creativity and curiosity come together.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{opacity: 0, y: 25}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.3}}
        >
          <a href="#admissions" className="hero-primary-button">
            Apply Now
            <ArrowRight size={18} />
          </a>

          <a href="#about" className="hero-secondary-button">
            Explore Campus
          </a>
        </motion.div>
      </div>

      <motion.button
        type="button"
        className="hero-scroll"
        onClick={scrollToAbout}
        aria-label="Scroll to learn more"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.8}}
      >
        <span>Scroll to explore</span>
        <ArrowDown size={18} />
      </motion.button>
    </section>
  )
}

export default Hero