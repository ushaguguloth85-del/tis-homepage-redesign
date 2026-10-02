import {motion} from 'framer-motion'
import {ArrowRight, Phone} from 'lucide-react'
import './Admissions.css'

const Admissions = () => {
  return (
    <section className="admissions-section" id="admissions">
      <div className="admissions-container">
        <motion.div
          className="admissions-content"
          initial={{opacity: 0, y: 35}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.2}}
          transition={{duration: 0.6}}
        >
          <p className="section-label admissions-label">Admissions</p>

          <h2>
            Begin your
            <span>TIS journey.</span>
          </h2>

          <p className="admissions-description">
            Discover an environment where students are encouraged to learn,
            explore and grow with confidence. Take the first step towards
            becoming part of the Tulas International School community.
          </p>

          <div className="admissions-actions">
            <a href="#contact" className="admissions-primary-button">
              Start an Enquiry
              <ArrowRight size={18} />
            </a>

            <a href="#contact" className="admissions-secondary-button">
              <Phone size={17} />
              Contact Us
            </a>
          </div>
        </motion.div>

        <motion.div
          className="admissions-decoration"
          initial={{opacity: 0, scale: 0.8}}
          whileInView={{opacity: 1, scale: 1}}
          viewport={{once: true, amount: 0.2}}
          transition={{duration: 0.7, delay: 0.15}}
        >
          <div className="admissions-circle admissions-circle-one" />
          <div className="admissions-circle admissions-circle-two" />

          <div className="admissions-card">
            <span>01</span>
            <strong>Explore</strong>
            <p>Discover what makes TIS different.</p>
          </div>

          <div className="admissions-card admissions-card-bottom">
            <span>02</span>
            <strong>Connect</strong>
            <p>Talk to our admissions team.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Admissions