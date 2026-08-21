import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import "../visual-enhancements.css";

const heroPhoto =
  "https://images.unsplash.com/photo-1719159381916-062fa9f435a6?auto=format&fit=crop&w=1800&q=86";

const heroDetails = ["Jodhpur", "Upper Primary", "Family partnership"];

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

export default function Hero() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 72]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.07]);
  const accentY = useTransform(scrollYProgress, [0, 1], [0, -38]);

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.72,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section
      ref={sectionRef}
      id="top"
      className="hero-section hero-v2"
      aria-labelledby="hero-title"
    >
      <motion.div
        className="hero-v2-shape hero-v2-shape--coral"
        aria-hidden="true"
        style={reduceMotion ? undefined : { y: accentY }}
      />
      <motion.div
        className="hero-v2-shape hero-v2-shape--mint"
        aria-hidden="true"
        animate={reduceMotion ? undefined : { y: [0, -12, 0], rotate: [4, 8, 4] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }
      />
      <motion.div
        className="hero-v2-shape hero-v2-shape--blue"
        aria-hidden="true"
        animate={reduceMotion ? undefined : { scale: [1, 1.06, 1] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 7, repeat: Infinity, ease: "easeInOut" }
        }
      />

      <div className="hero-container hero-v2-container">
        <div className="hero-copy hero-v2-copy">
          <motion.div className="hero-v2-eyebrow" {...reveal(0.05)}>
            <span aria-hidden="true" />
            MKJ Children Upper Primary School · Jodhpur
          </motion.div>

          <h1 id="hero-title" className="hero-v2-title">
            <span className="hero-v2-line-mask">
              <motion.span
                className="hero-v2-line"
                initial={reduceMotion ? false : { y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.78,
                  delay: reduceMotion ? 0 : 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                Curious today.
              </motion.span>
            </span>
            <span className="hero-v2-line-mask">
              <motion.span
                className="hero-v2-line"
                initial={reduceMotion ? false : { y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.82,
                  delay: reduceMotion ? 0 : 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                Confident <em>tomorrow.</em>
              </motion.span>
            </span>
          </h1>

          <motion.p className="hero-supporting-copy hero-v2-support" {...reveal(0.34)}>
            A warm learning community where strong foundations, thoughtful teaching,
            creativity, and care help every child grow into a capable learner and a
            confident young person.
          </motion.p>

          <motion.div className="hero-actions hero-v2-actions" {...reveal(0.44)}>
            <motion.a
              className="hero-v2-primary"
              href="#admissions"
              whileHover={reduceMotion ? undefined : { y: -4, scale: 1.025 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            >
              Plan a Visit
              <span aria-hidden="true">
                <ArrowIcon />
              </span>
            </motion.a>

            <motion.a
              className="hero-v2-secondary"
              href="#academics"
              whileHover={reduceMotion ? undefined : { x: 4 }}
            >
              Explore learning
              <ArrowIcon />
            </motion.a>
          </motion.div>

          <motion.div className="hero-v2-details" {...reveal(0.54)}>
            {heroDetails.map((detail, index) => (
              <motion.span
                key={detail}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  delay: reduceMotion ? 0 : 0.56 + index * 0.08,
                  ease: "easeOut",
                }}
              >
                {detail}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-v2-visual"
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  x: 70,
                  scale: 0.96,
                  clipPath: "inset(0 0 100% 0 round 46px)",
                }
          }
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
            clipPath: "inset(0 0 0% 0 round 46px)",
          }}
          transition={{
            duration: reduceMotion ? 0 : 1.05,
            delay: reduceMotion ? 0 : 0.18,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <figure className="hero-v2-photo-card">
            <motion.img
              src={heroPhoto}
              alt="Temporary preview photograph of children learning together in a classroom"
              className="hero-v2-photo"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              style={reduceMotion ? undefined : { y: imageY, scale: imageScale }}
            />
            <div className="hero-v2-photo-wash" aria-hidden="true" />
            <span className="hero-v2-photo-label">Temporary preview photo</span>
          </figure>

          <motion.div
            className="hero-v2-float hero-v2-float--top"
            initial={reduceMotion ? false : { opacity: 0, y: 24, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: reduceMotion ? 0 : 0.72,
              ease: "easeOut",
            }}
            whileHover={reduceMotion ? undefined : { y: -5, rotate: 0 }}
          >
            <span>School life</span>
            <strong>Learn · Grow · Belong</strong>
          </motion.div>

          <motion.div
            className="hero-v2-float hero-v2-float--bottom"
            initial={reduceMotion ? false : { opacity: 0, y: 24, rotate: 4 }}
            animate={
              reduceMotion
                ? { opacity: 1, y: 0, rotate: 2 }
                : { opacity: 1, y: [0, -7, 0], rotate: [2, 1, 2] }
            }
            transition={
              reduceMotion
                ? { duration: 0 }
                : {
                    opacity: { duration: 0.55, delay: 0.84 },
                    y: { duration: 6.4, repeat: Infinity, ease: "easeInOut", delay: 1.1 },
                    rotate: { duration: 6.4, repeat: Infinity, ease: "easeInOut", delay: 1.1 },
                  }
            }
          >
            <span>Our approach</span>
            <strong>Challenge with care.</strong>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        className="hero-v2-scroll"
        href="#about"
        aria-label="Scroll to our mission"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduceMotion ? 0 : 1.05, duration: 0.5 }}
      >
        <span>Discover MKJ</span>
        <motion.i
          aria-hidden="true"
          animate={reduceMotion ? undefined : { scaleY: [0.45, 1, 0.45] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 1.7, repeat: Infinity, ease: "easeInOut" }
          }
        />
      </motion.a>
    </section>
  );
}
