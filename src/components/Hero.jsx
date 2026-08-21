import { motion, useReducedMotion } from "motion/react";

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M4 9H14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M10.5 5.5L14 9L10.5 12.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const trustItems = [
  { value: "Small", label: "class communities" },
  { value: "Caring", label: "teacher guidance" },
  { value: "Whole-child", label: "learning approach" },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const entrance = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.56,
      delay: reduceMotion ? 0 : delay,
      ease: "easeOut",
    },
  });

  return (
    <section id="top" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-ambient hero-ambient-one" aria-hidden="true" />
      <div className="hero-ambient hero-ambient-two" aria-hidden="true" />

      <motion.div
        className="hero-orbit hero-orbit-one"
        aria-hidden="true"
        animate={reduceMotion ? undefined : { y: [0, -14, 0], rotate: [0, 3, 0] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 9, repeat: Infinity, ease: "easeInOut" }
        }
      />
      <motion.div
        className="hero-orbit hero-orbit-two"
        aria-hidden="true"
        animate={reduceMotion ? undefined : { y: [0, 12, 0], x: [0, -8, 0] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.8 }
        }
      />

      <div className="hero-container">
        <div className="hero-copy">
          <motion.div className="hero-eyebrow" {...entrance(0.08)}>
            <span className="hero-eyebrow-dot" aria-hidden="true" />
            Learning with purpose. Growing with care.
          </motion.div>

          <motion.h1 id="hero-title" {...entrance(0.16)}>
            A school where curious minds grow with confidence.
          </motion.h1>

          <motion.p className="hero-supporting-copy" {...entrance(0.28)}>
            MKJ Children School brings thoughtful teaching, strong foundations, and a genuinely caring community together so every child can learn, belong, and thrive.
          </motion.p>

          <motion.div className="hero-actions" {...entrance(0.4)}>
            <motion.a
              className="hero-primary-cta"
              href="#admissions"
              whileHover={reduceMotion ? undefined : { scale: 1.04 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              transition={{ duration: 0.18 }}
            >
              Explore Admissions
              <ArrowIcon />
            </motion.a>
          </motion.div>

          <motion.div className="hero-trust" {...entrance(0.52)}>
            {trustItems.map((item) => (
              <div className="hero-trust-item" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          aria-hidden="true"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.72, delay: reduceMotion ? 0 : 0.28, ease: "easeOut" }}
        >
          <div className="hero-visual-halo" />
          <div className="hero-story-card hero-story-card--main">
            <div className="hero-story-icon">
              <span />
              <span />
              <span />
            </div>
            <p>Learning that feels personal</p>
            <strong>Known. Encouraged. Ready to grow.</strong>
          </div>

          <motion.div
            className="hero-story-card hero-story-card--small hero-story-card--top"
            animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={reduceMotion ? undefined : { duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="hero-card-kicker">Every day</span>
            <strong>Wonder → Confidence</strong>
          </motion.div>

          <motion.div
            className="hero-story-card hero-story-card--small hero-story-card--bottom"
            animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
            transition={
              reduceMotion
                ? undefined
                : { duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }
            }
          >
            <span className="hero-card-kicker">Our promise</span>
            <strong>Strong roots. Bright futures.</strong>
          </motion.div>
        </motion.div>
      </div>

      <div className="hero-bottom-wave" aria-hidden="true" />
    </section>
  );
}
