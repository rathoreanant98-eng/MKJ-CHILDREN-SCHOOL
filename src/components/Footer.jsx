import { motion, useReducedMotion } from "motion/react";
import "../footer.css";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Admissions", href: "#admissions" },
  { label: "Campus Life", href: "#campus-life" },
  { label: "Contact", href: "#contact" },
];

const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=35%2C%20Polo%201st%2C%20Ship%20House%2C%20Near%20Paota%2C%20Jodhpur%2C%20Rajasthan%20342006";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 6l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="site-footer footer-v2" id="contact">
      <div className="footer-container footer-v2-container">
        <motion.div
          className="footer-v2-hero"
          initial={reduceMotion ? false : { opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduceMotion ? 0 : 0.78, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-kicker">Visit & connect</span>
          <h2>A school day is best understood <em>in person.</em></h2>
          <p>
            Come to MKJ, meet the people, see the learning spaces, and decide how the school feels for your family.
          </p>
          <div className="footer-v2-actions">
            <motion.a
              className="footer-v2-primary"
              href="tel:+918104567540"
              whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            >
              Call to plan a visit
              <ArrowIcon />
            </motion.a>
            <motion.a
              className="footer-v2-directions"
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={reduceMotion ? undefined : { x: 4 }}
            >
              Get directions
              <ArrowIcon />
            </motion.a>
          </div>
        </motion.div>

        <div className="footer-v2-grid">
          <div className="footer-brand-column">
            <a className="footer-brand" href="#top" aria-label="MKJ Children Upper Primary School home">
              <span className="footer-brand-mark" aria-hidden="true">MKJ</span>
              <span className="footer-brand-copy">
                <strong>MKJ Children Upper Primary School</strong>
                <span>Learn · Grow · Belong</span>
              </span>
            </a>
            <p className="footer-summary">
              A warm learning community in Jodhpur where children are encouraged to think, create, participate, and grow with confidence.
            </p>
          </div>

          <div className="footer-links-column">
            <p className="footer-heading">Explore</p>
            <nav className="footer-links" aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  whileHover={reduceMotion ? undefined : { x: 4 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          <div className="footer-contact-column">
            <p className="footer-heading">School details</p>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <span className="footer-contact-label">Address</span>
                <span>35, Polo 1st, Ship House, Near Paota, Jodhpur, Rajasthan 342006</span>
                <a className="footer-contact-directions" href={directionsUrl} target="_blank" rel="noreferrer">
                  Open in Google Maps ↗
                </a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-label">Phone</span>
                <span className="footer-contact-actions">
                  <a href="tel:+918104567540">+91 8104567540</a>
                  <a href="tel:+917737724255">+91 7737724255</a>
                </span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-label">Email</span>
                <a href="mailto:mkjchildrenschool@gmail.com">mkjchildrenschool@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>© 2026 MKJ Children Upper Primary School. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="/privacy.html">Privacy policy</a>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
