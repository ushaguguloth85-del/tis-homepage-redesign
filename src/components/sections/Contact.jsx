import {motion} from 'framer-motion'
import {ArrowUpRight, Mail, MapPin, Phone} from 'lucide-react'
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-heading"
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.2}}
          transition={{duration: 0.5}}
        >
          <p className="section-label">Get in touch</p>

          <h2>
            Let's start a
            <span>conversation.</span>
          </h2>

          <p>
            Have questions about admissions, academics or life at TIS?
            Connect with our team and take the next step.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.a
            href="tel:+919837983791"
            className="contact-card"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.5}}
          >
            <div className="contact-icon">
              <Phone size={21} />
            </div>

            <div>
              <span>Admission Helpline</span>
              <strong>+91-9837983791</strong>
            </div>

            <ArrowUpRight size={18} />
          </motion.a>

          <motion.a
            href="mailto:info@tis.edu.in"
            className="contact-card"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.5, delay: 0.1}}
          >
            <div className="contact-icon">
              <Mail size={21} />
            </div>

            <div>
              <span>Email us</span>
              <strong>info@tis.edu.in</strong>
            </div>

            <ArrowUpRight size={18} />
          </motion.a>

          <motion.div
            className="contact-card"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.5, delay: 0.2}}
          >
            <div className="contact-icon">
              <MapPin size={21} />
            </div>

            <div>
              <span>Visit us</span>
              <strong>Dehradun, Uttarakhand</strong>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact