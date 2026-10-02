import {motion} from 'framer-motion'
import {ArrowUpRight} from 'lucide-react'
import './About.css'

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <motion.div
          className="about-heading"
          initial={{opacity: 0, y: 35}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.2}}
          transition={{duration: 0.5}}
        >
          <p className="section-label">About TIS</p>

          <h2>
            Education that goes
            <span>beyond the classroom.</span>
          </h2>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-image-wrapper"
            initial={{opacity: 0, x: -40}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.6}}
          >
            <img
                src="/images/tis-students.jpg"
                alt="Tulas International School students learning"
                className="about-image"
            />

            <div className="about-image-badge">
            <strong>Since</strong>
            <span>2012</span>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{opacity: 0, x: 40}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.6, delay: 0.1}}
          >
            <p className="about-intro">
              Tulas International School is committed to creating an
              environment where every student can discover their strengths,
              develop confidence and prepare for a changing world.
            </p>

            <p>
              Our approach brings together academic learning, character
              development, creativity, sports and opportunities beyond the
              classroom. Students are encouraged to think independently,
              collaborate with others and become responsible global citizens.
            </p>

            <a href="#academics" className="about-link">
              Discover our approach
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About