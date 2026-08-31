import { motion, useReducedMotion } from "motion/react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Campus Life", href: "#campus-life" },
  { label: "Admissions", href: "#admissions" },
];

const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=35%2C%20Polo%201st%2C%20Ship%20House%2C%20Near%20Paota%2C%20Jodhpur%2C%20Rajasthan%20342006";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="m11 6 4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="pg-footer" id="contact">
      <div className="pg-section-shell pg-footer-shell">
        <motion.div
          className="pg-footer-hero"
          initial={reduceMotion ? false : { opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduceMotion ? 0 : 0.66, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="pg-kicker">Visit and connect</p>
          <h2>Meet MKJ in person.</h2>
          <p>
            A school day is easier to understand when you can see the spaces, meet the people,
            and ask your questions directly.
          </p>
          <div className="pg-footer-actions">
            <motion.a
              className="pg-button pg-button--dark"
              href="tel:+918104567540"
              whileHover={reduceMotion ? undefined : { y: -3 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            >
              Call to plan a visit
              <ArrowIcon />
            </motion.a>
            <motion.a
              className="pg-footer-direction"
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

        <div className="pg-footer-grid">
          <div className="pg-footer-brand-block">
            <a className="pg-footer-brand" href="#top" aria-label="MKJ Children Upper Primary School home">
              <span className="pg-footer-brand-mark" aria-hidden="true">MKJ</span>
              <span>
                <strong>MKJ Children</strong>
                <small>Upper Primary School</small>
              </span>
            </a>
            <p>
              A warm learning community in Jodhpur where children are encouraged to think,
              create, participate, and grow with confidence.
            </p>
          </div>

          <nav className="pg-footer-links" aria-label="Footer navigation">
            <span>Explore</span>
            {quickLinks.map((link) => (
              <motion.a key={link.href} href={link.href} whileHover={reduceMotion ? undefined : { x: 4 }}>
                {link.label}
              </motion.a>
            ))}
          </nav>

          <div className="pg-footer-contact">
            <span>School details</span>
            <address>
              35, Polo 1st, Ship House,<br />
              Near Paota, Jodhpur,<br />
              Rajasthan 342006
            </address>
            <a href="tel:+918104567540">+91 8104567540</a>
            <a href="tel:+917737724255">+91 7737724255</a>
            <a href="mailto:mkjchildrenschool@gmail.com">mkjchildrenschool@gmail.com</a>
          </div>
        </div>

        <div className="pg-footer-word" aria-hidden="true">MKJ</div>

        <div className="pg-footer-bottom">
          <p>© 2026 MKJ Children Upper Primary School. All rights reserved.</p>
          <div>
            <a href="/privacy.html">Privacy policy</a>
            <a href="#top">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
