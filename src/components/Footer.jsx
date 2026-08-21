import { motion, useReducedMotion } from "motion/react";
import "../footer.css";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Admissions", href: "#admissions" },
  { label: "Campus Life", href: "#campus-life" },
  { label: "Contact", href: "#contact" },
];

const socialItems = [
  { label: "Instagram", icon: "instagram" },
  { label: "Facebook", icon: "facebook" },
  { label: "YouTube", icon: "youtube" },
];

function SocialIcon({ type }) {
  if (type === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.4 8.1h2.3V4.4c-.4-.1-1.8-.2-3.4-.2-3.3 0-5.5 2-5.5 5.7v3.2H4.1v4.1h3.7V24h4.5v-6.8H16l.6-4.1h-4.3V10c0-1.2.3-1.9 2.1-1.9Z" />
      </svg>
    );
  }

  if (type === "youtube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23 7.1a3 3 0 0 0-2.1-2.2C19 4.4 12 4.4 12 4.4s-7 0-8.9.5A3 3 0 0 0 1 7.1 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.9a3 3 0 0 0 2.1 2.2c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.2 31 31 0 0 0 .5-4.9 31 31 0 0 0-.5-4.9ZM9.7 15.3V8.7l6 3.3-6 3.3Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm-.2 2A3 3 0 0 0 4 7v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm10.3 1.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7.1A4.9 4.9 0 1 1 12 17a4.9 4.9 0 0 1 0-9.9Zm0 2A2.9 2.9 0 1 0 12 15a2.9 2.9 0 0 0 0-5.9Z" />
    </svg>
  );
}

export default function Footer() {
  const reduceMotion = useReducedMotion();
  const entrance = reduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } };

  return (
    <footer className="site-footer" id="contact">
      <div className="footer-glow footer-glow--one" aria-hidden="true" />
      <div className="footer-glow footer-glow--two" aria-hidden="true" />

      <div className="footer-container">
        <motion.div
          className="footer-top"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={entrance}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="footer-brand-column">
            <a className="footer-brand" href="#top" aria-label="MKJ Children School home">
              <span className="footer-brand-mark" aria-hidden="true">MKJ</span>
              <span className="footer-brand-copy">
                <strong>MKJ Children School</strong>
                <span>Learn · Grow · Belong</span>
              </span>
            </a>

            <p className="footer-summary">
              A welcoming school community where children are encouraged to ask questions,
              build confidence, and grow with care.
            </p>

            <div className="footer-socials" aria-label="MKJ social channels">
              {socialItems.map((item, index) => (
                <motion.span
                  className="footer-social-placeholder"
                  key={item.label}
                  title={`${item.label} link to be added`}
                  role="img"
                  aria-label={`${item.label} link to be added`}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : index * 0.08 }}
                  whileHover={reduceMotion ? undefined : { scale: 1.06, y: -2 }}
                >
                  <SocialIcon type={item.icon} />
                </motion.span>
              ))}
            </div>
          </div>

          <div className="footer-links-column">
            <p className="footer-heading">Explore</p>
            <nav className="footer-links" aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  whileHover={reduceMotion ? undefined : { x: 3 }}
                  transition={{ duration: 0.18 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          <div className="footer-contact-column">
            <p className="footer-heading">Visit &amp; Contact</p>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <span className="footer-contact-label">Address</span>
                <span>School address — to be confirmed</span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-label">Phone</span>
                <span>Phone number — to be confirmed</span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-label">Email</span>
                <span>Email address — to be confirmed</span>
              </div>
            </div>
          </div>

          <motion.div
            className="footer-visit-card"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={entrance}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: reduceMotion ? 0 : 0.12 }}
          >
            <span className="footer-visit-kicker">Thinking about MKJ?</span>
            <h3>Come see how a school day feels.</h3>
            <p>
              Meet the people, explore the learning spaces, and ask the questions that matter to your family.
            </p>
            <motion.a
              className="footer-tour-link"
              href="#admissions"
              whileHover={reduceMotion ? undefined : { scale: 1.035 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            >
              Plan your visit
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>© 2026 MKJ Children School. All rights reserved.</p>
          <div className="footer-bottom-links" aria-label="Policy links">
            <span>Privacy policy — to be added</span>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
