import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
} from "motion/react";

const navItems = [
  { label: "About", href: "#purpose-title", sectionId: "about" },
  { label: "Academics", href: "#academics-title", sectionId: "academics" },
  { label: "Campus Life", href: "#campus-title", sectionId: "campus-life" },
  { label: "Admissions", href: "#admissions-title", sectionId: "admissions" },
  { label: "Contact", href: "#contact-title", sectionId: "contact" },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="m11 6 4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIcon({ open }) {
  return (
    <span className={`pg-menu-icon ${open ? "pg-menu-icon--open" : ""}`} aria-hidden="true">
      <i />
      <i />
    </span>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { rootMargin: "-92px 0px 0px 0px", threshold: 0.04 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = ["top", ...navItems.map((item) => item.sectionId)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      {
        rootMargin: "-24% 0px -60% 0px",
        threshold: [0.08, 0.2, 0.45],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const menu = menuRef.current;
    const focusableSelector =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusable = menu ? Array.from(menu.querySelectorAll(focusableSelector)) : [];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
        window.requestAnimationFrame(() => toggleRef.current?.focus());
        return;
      }

      if (event.key !== "Tab" || focusable.length === 0) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      className={`pg-header ${pastHero || menuOpen ? "pg-header--solid" : ""}`}
      initial={reduceMotion ? false : { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="pg-nav-shell">
        <a className="pg-brand" href="#top" aria-label="MKJ Children Upper Primary School home" onClick={closeMenu}>
          <span className="pg-brand-mark" aria-hidden="true">MKJ</span>
          <span className="pg-brand-copy">
            <strong>MKJ Children</strong>
            <span>Upper Primary School</span>
          </span>
        </a>

        <nav className="pg-desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.sectionId;
            return (
              <a
                key={item.sectionId}
                className={`pg-nav-link ${isActive ? "pg-nav-link--active" : ""}`}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
              >
                <span>{item.label}</span>
                <motion.i
                  aria-hidden="true"
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.22, ease: [0.23, 1, 0.32, 1] }}
                />
              </a>
            );
          })}
        </nav>

        <div className="pg-nav-actions">
          <motion.a
            className="pg-nav-cta"
            href="#admissions-title"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
          >
            Plan a visit
            <ArrowIcon />
          </motion.a>

          <motion.button
            ref={toggleRef}
            className="pg-menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="pg-mobile-navigation"
            onClick={() => setMenuOpen((value) => !value)}
            whileTap={reduceMotion ? undefined : { scale: 0.95 }}
          >
            <MenuIcon open={menuOpen} />
          </motion.button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            id="pg-mobile-navigation"
            className="pg-mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, clipPath: "inset(0 0 100% 0 round 0 0 28px 28px)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0 round 0 0 28px 28px)" }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, clipPath: "inset(0 0 100% 0 round 0 0 28px 28px)" }}
            transition={{ duration: reduceMotion ? 0 : 0.38, ease: [0.32, 0.72, 0, 1] }}
          >
            <nav className="pg-mobile-nav" aria-label="Mobile navigation">
              <div className="pg-mobile-nav-heading">
                <span>MKJ Children Upper Primary School</span>
                <strong>Learn deeply. Belong fully. Grow bravely.</strong>
              </div>

              <div className="pg-mobile-nav-links">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.sectionId}
                    href={item.href}
                    onClick={closeMenu}
                    initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.34,
                      delay: reduceMotion ? 0 : 0.08 + index * 0.055,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                  >
                    <span>{item.label}</span>
                    <ArrowIcon />
                  </motion.a>
                ))}
              </div>

              <div className="pg-mobile-nav-contact">
                <a href="tel:+918104567540">+91 8104567540</a>
                <a href="mailto:mkjchildrenschool@gmail.com">mkjchildrenschool@gmail.com</a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div className="pg-page-progress" aria-hidden="true" style={{ scaleX: scrollYProgress }} />
    </motion.header>
  );
}
