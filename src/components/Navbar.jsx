import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const navItems = ["About", "Academics", "Admissions", "Campus Life", "Contact"];

function MenuIcon({ open }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {open ? (
        <>
          <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </>
      ) : (
        <>
          <path d="M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3.5 8H12.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M9 4.5L12.5 8L9 11.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("top");
      const headerOffset = 96;

      if (hero) {
        setPastHero(hero.getBoundingClientRect().bottom <= headerOffset);
        return;
      }

      setPastHero(window.scrollY > Math.max(window.innerHeight * 0.72, 420));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      className={`site-header ${pastHero || menuOpen ? "site-header--solid" : ""}`}
      initial={reduceMotion ? false : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: reduceMotion ? 0 : 0.62,
        delay: reduceMotion ? 0 : 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="nav-container">
        <a
          className="brand"
          href="#top"
          aria-label="MKJ Children Upper Primary School home"
          onClick={closeMenu}
        >
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-mark-inner">MKJ</span>
          </span>
          <span className="brand-copy">
            <strong>MKJ Children</strong>
            <span>Upper Primary School</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <motion.a
              key={item}
              className="nav-link"
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              whileHover={reduceMotion ? undefined : { y: -2 }}
              transition={{ duration: 0.18 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <div className="nav-actions">
          <motion.a
            className="primary-nav-cta"
            href="#admissions"
            whileHover={reduceMotion ? undefined : { scale: 1.035, y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
          >
            <span>Visit MKJ</span>
            <ArrowIcon />
          </motion.a>

          <motion.button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((value) => !value)}
            whileTap={reduceMotion ? undefined : { scale: 0.94 }}
          >
            <MenuIcon open={menuOpen} />
          </motion.button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            className="mobile-menu-wrap"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12, scale: 0.985 }}
            transition={{
              duration: reduceMotion ? 0 : 0.32,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <nav className="mobile-nav" aria-label="Mobile navigation">
              <div className="mobile-nav-intro">
                <span>Explore MKJ</span>
                <strong>Learning with purpose. Growing with care.</strong>
              </div>

              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  className="mobile-nav-link"
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={closeMenu}
                  initial={reduceMotion ? false : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.35,
                    delay: reduceMotion ? 0 : 0.08 + index * 0.055,
                    ease: "easeOut",
                  }}
                >
                  <span>{item}</span>
                  <ArrowIcon />
                </motion.a>
              ))}

              <motion.a
                className="mobile-primary-cta"
                href="#admissions"
                onClick={closeMenu}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              >
                Plan a Visit
                <ArrowIcon />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
