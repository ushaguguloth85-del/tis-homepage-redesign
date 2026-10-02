import {motion} from 'framer-motion'
import {ArrowUpRight, Check} from 'lucide-react'
import {campusFeatures} from '../../data/siteData'
import './Campus.css'

const Campus = () => {
  return (
    <section className="campus-section" id="campus">
      <div className="campus-container">
        <motion.div
          className="campus-image-wrapper"
          initial={{opacity: 0, x: -40}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true, amount: 0.2}}
          transition={{duration: 0.6}}
        >
          <img
            src="/images/tis-sports.jpg"
            alt="Tulas International School students participating in sports"
            className="campus-image"
          />

          <div className="campus-image-caption">
            <span>Life beyond academics</span>
            <ArrowUpRight size={20} />
          </div>
        </motion.div>

        <motion.div
          className="campus-content"
          initial={{opacity: 0, x: 40}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true, amount: 0.2}}
          transition={{duration: 0.6, delay: 0.1}}
        >
          <p className="section-label">Campus Life</p>

          <h2>
            Discover your
            <span>place to grow.</span>
          </h2>

          <p className="campus-intro">
            School life is about more than lessons and examinations. At TIS,
            students have opportunities to explore interests, build
            friendships and develop confidence through experiences beyond the
            classroom.
          </p>

          <div className="campus-features">
            {campusFeatures.map(feature => (
              <div className="campus-feature" key={feature.title}>
                <div className="campus-check">
                  <Check size={15} />
                </div>

                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="#admissions" className="campus-link">
            Explore TIS
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Campus