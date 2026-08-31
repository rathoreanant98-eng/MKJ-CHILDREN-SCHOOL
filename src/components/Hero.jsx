import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

const heroPhoto =
  "https://images.unsplash.com/photo-1719159381916-062fa9f435a6?auto=format&fit=crop&w=2200&q=88";

const supportingPhotos = [
  "https://images.unsplash.com/photo-1771765812031-22653b4c70a6?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1566938089211-5821c49b3548?auto=format&fit=crop&w=900&q=82",
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="m11 6 4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const mediaY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.11]);
  const copyY = useTransform(scrollYProgress, [0, 0.72], [0, -56]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.15]);
  const orbitRotate = useTransform(scrollYProgress, [0, 1], [0, 34]);

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.62,
      delay: reduceMotion ? 0 : delay,
      ease: [0.23, 1, 0.32, 1],
    },
  });

  return (
    <section ref={sectionRef} id="top" className="pg-hero" aria-labelledby="hero-title">
      <motion.div
        className="pg-hero-media"
        aria-hidden="true"
        style={reduceMotion ? undefined : { y: mediaY, scale: mediaScale }}
      >
        <img src={heroPhoto} alt="" fetchPriority="high" decoding="async" />
        <div className="pg-hero-media-wash" />
      </motion.div>

      <motion.div
        className="pg-hero-orbit"
        aria-hidden="true"
        style={reduceMotion ? undefined : { rotate: orbitRotate }}
      >
        <i />
        <i />
        <i />
      </motion.div>

      <div className="pg-hero-inner">
        <motion.div
          className="pg-hero-copy"
          style={reduceMotion ? undefined : { y: copyY, opacity: copyOpacity }}
        >
          <motion.p className="pg-hero-school" {...reveal(0.04)}>
            MKJ Children Upper Primary School · Jodhpur
          </motion.p>

          <h1 id="hero-title" className="pg-hero-title">
            <span className="pg-line-mask">
              <motion.span
                initial={reduceMotion ? false : { y: "112%" }}
                animate={{ y: "0%" }}
                transition={{ duration: reduceMotion ? 0 : 0.78, delay: reduceMotion ? 0 : 0.1, ease: [0.23, 1, 0.32, 1] }}
              >
                Curious today.
              </motion.span>
            </span>
            <span className="pg-line-mask pg-line-mask--accent">
              <motion.span
                initial={reduceMotion ? false : { y: "112%" }}
                animate={{ y: "0%" }}
                transition={{ duration: reduceMotion ? 0 : 0.82, delay: reduceMotion ? 0 : 0.2, ease: [0.23, 1, 0.32, 1] }}
              >
                Confident tomorrow.
              </motion.span>
            </span>
          </h1>

          <motion.p className="pg-hero-lead" {...reveal(0.32)}>
            A warm learning community where children are encouraged to think clearly,
            ask brave questions, create with confidence, and grow with care.
          </motion.p>

          <motion.div className="pg-hero-actions" {...reveal(0.42)}>
            <motion.a
              className="pg-button pg-button--light"
              href="#admissions"
              whileHover={reduceMotion ? undefined : { y: -3 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            >
              Plan a visit
              <ArrowIcon />
            </motion.a>
            <motion.a
              className="pg-button pg-button--glass"
              href="#academics"
              whileHover={reduceMotion ? undefined : { y: -3 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            >
              Explore learning
              <ArrowIcon />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div className="pg-hero-proof" {...reveal(0.54)}>
          <div className="pg-hero-proof-copy">
            <span>Upper Primary School</span>
            <strong>Jodhpur, Rajasthan</strong>
          </div>
          <div className="pg-hero-proof-line" aria-hidden="true" />
          <div className="pg-hero-proof-copy">
            <span>School experience</span>
            <strong>Learn · Grow · Belong</strong>
          </div>
        </motion.div>
      </div>

      <motion.figure
        className="pg-hero-crop pg-hero-crop--left"
        initial={reduceMotion ? false : { opacity: 0, x: -40, rotate: -8 }}
        animate={{ opacity: 1, x: 0, rotate: -4 }}
        transition={{ duration: reduceMotion ? 0 : 0.86, delay: reduceMotion ? 0 : 0.55, ease: [0.23, 1, 0.32, 1] }}
      >
        <img src={supportingPhotos[0]} alt="Temporary preview photograph of children creating artwork" loading="eager" decoding="async" />
      </motion.figure>

      <motion.figure
        className="pg-hero-crop pg-hero-crop--right"
        initial={reduceMotion ? false : { opacity: 0, x: 40, rotate: 8 }}
        animate={{ opacity: 1, x: 0, rotate: 4 }}
        transition={{ duration: reduceMotion ? 0 : 0.9, delay: reduceMotion ? 0 : 0.62, ease: [0.23, 1, 0.32, 1] }}
      >
        <img src={supportingPhotos[1]} alt="Temporary preview photograph of children outdoors at school" loading="eager" decoding="async" />
      </motion.figure>

      <div className="pg-preview-note">Preview imagery · replace with authentic MKJ photography before launch</div>
    </section>
  );
}
