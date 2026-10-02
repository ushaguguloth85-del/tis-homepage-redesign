import {motion} from 'framer-motion'
import {schoolStats} from '../../data/siteData'
import './Stats.css'

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <motion.div
          className="stats-heading"
          initial={{opacity: 0, y: 25}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.3}}
          transition={{duration: 0.5}}
        >
          <p className="section-label stats-label">Life at TIS</p>
          <h2>More than a school.</h2>
        </motion.div>

        <div className="stats-grid">
          {schoolStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.2}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="stat-number">
                {stat.value}
                <span>{stat.suffix}</span>
              </div>

              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats