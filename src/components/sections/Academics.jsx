import {motion} from 'framer-motion'
import {BookOpen, Globe2, Sparkles, ArrowUpRight} from 'lucide-react'
import {academicPrograms} from '../../data/siteData'
import './Academics.css'

const iconMap = {
  book: BookOpen,
  globe: Globe2,
  sparkles: Sparkles,
}

const Academics = () => {
  return (
    <section className="academics-section" id="academics">
      <div className="academics-container">
        <motion.div
          className="academics-heading"
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.2}}
          transition={{duration: 0.5}}
        >
          <div>
            <p className="section-label">Our Approach</p>

            <h2>
              Learning designed
              <span>for the future.</span>
            </h2>
          </div>

          <p className="academics-heading-text">
            We believe education should develop not only what students know,
            but also how they think, create, collaborate and contribute.
          </p>
        </motion.div>

        <div className="academics-grid">
          {academicPrograms.map((program, index) => {
            const Icon = iconMap[program.icon]

            return (
              <motion.article
                key={program.number}
                className="academic-card"
                initial={{opacity: 0, y: 35}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.2}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
              >
                <div className="academic-card-top">
                  <span>{program.number}</span>

                  <div className="academic-icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                </div>

                <h3>{program.title}</h3>

                <p>{program.description}</p>

                <a href="#admissions" className="academic-link">
                  Learn more
                  <ArrowUpRight size={17} />
                </a>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Academics