import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

const heroPhoto =
  "https://images.unsplash.com/photo-1719159381916-062fa9f435a6?auto=format&fit=crop&w=2400&q=90";

const supportingPhotos = [
  "https://images.unsplash.com/photo-1771765812031-22653b4c70a6?auto=format&fit=crop&w=1000&q=84",
  "https://images.unsplash.com/photo-1566938089211-5821c49b3548?auto=format&fit=crop&w=1000&q=84",
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path
        d="m11 6 4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.7"
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
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  const mediaY = useTransform(smoothProgress, [0, 1], [0, 118]);
  const mediaScale = useTransform(smoothProgress, [0, 1], [1.035, 1.13]);
  const mediaRotateX = useTransform(smoothProgress, [0, 1], [0, 2.4]);
  const mediaRotateZ = useTransform(smoothProgress, [0, 1], [0, -1.1]);
  const mediaClip = useTransform(
    smoothProgress,
    [0, 0.72, 1],
    [
      "inset(0% 0% 0% 0% round 0px)",
      "inset(0% 0% 0% 0% round 0px)",
      "inset(7% 6% 12% 6% round 32px)",
    ],
  );
  const copyY = useTransform(smoothProgress, [0, 0.68, 1], [0, -34, -118]);
  const copyOpacity = useTransform(smoothProgress, [0, 0.62, 0.9], [1, 1, 0]);
  const copyScale = useTransform(smoothProgress, [0, 0.8], [1, 0.94]);
  const ghostX = useTransform(smoothProgress, [0, 1], [0, -110]);
  const ghostOpacity = useTransform(smoothProgress, [0, 0.72, 1], [0.14, 0.08, 0]);
  const leftCropX = useTransform(smoothProgress, [0, 1], [0, -150]);
  const leftCropRotate = useTransform(smoothProgress, [0, 1], [-5, -18]);
  const rightCropX = useTransform(smoothProgress, [0, 1], [0, 160]);
  const rightCropRotate = useTransform(smoothProgress, [0, 1], [5, 19]);

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.58,
      delay: reduceMotion ? 0 : delay,
      ease: [0.23, 1, 0.32, 1],
    },
  });

  return (
    <section ref={sectionRef} id="top" className="pg-hero cinema-hero" aria-labelledby="hero-title">
      <motion.div
        className="pg-hero-media cinema-hero-media"
        aria-hidden="true"
        style={
          reduceMotion
            ? undefined
            : {
                y: mediaY,
                scale: mediaScale,
                rotateX: mediaRotateX,
                rotateZ: mediaRotateZ,
                clipPath: mediaClip,
              }
        }
      >
        <img src={heroPhoto} alt="" fetchPriority="high" decoding="async" />
        <div className="pg-hero-media-wash cinema-hero-media-wash" />
      </motion.div>

      <div className="cinema-hero-grid" aria-hidden="true" />
      <div className="cinema-hero-focus-ring" aria-hidden="true">
        <span />
        <span />
      </div>

      <motion.div
        className="cinema-hero-ghost"
        aria-hidden="true"
        style={reduceMotion ? undefined : { x: ghostX, opacity: ghostOpacity }}
      >
        BECOME
      </motion.div>

      <div className="pg-hero-inner cinema-hero-inner">
        <motion.div
          className="pg-hero-copy cinema-hero-copy"
          style={reduceMotion ? undefined : { y: copyY, opacity: copyOpacity, scale: copyScale }}
        >
          <motion.p className="pg-hero-school cinema-hero-school" {...reveal(0.04)}>
            MKJ Children Upper Primary School · Jodhpur
          </motion.p>

          <h1 id="hero-title" className="pg-hero-title cinema-hero-title">
            <span className="pg-line-mask">
              <motion.span
                initial={reduceMotion ? false : { y: "112%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: reduceMotion ? 0 : 0.78,
                  delay: reduceMotion ? 0 : 0.1,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                Curious today.
              </motion.span>
            </span>
            <span className="pg-line-mask pg-line-mask--accent">
              <motion.span
                initial={reduceMotion ? false : { y: "112%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: reduceMotion ? 0 : 0.82,
                  delay: reduceMotion ? 0 : 0.2,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                Confident tomorrow.
              </motion.span>
            </span>
          </h1>

          <motion.p className="pg-hero-lead cinema-hero-lead" {...reveal(0.32)}>
            A warm learning community where children are encouraged to think clearly,
            ask brave questions, create with confidence, and grow with care.
          </motion.p>

          <motion.div className="pg-hero-actions cinema-hero-actions" {...reveal(0.42)}>
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

        <motion.div className="pg-hero-proof cinema-hero-proof" {...reveal(0.54)}>
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
        className="pg-hero-crop pg-hero-crop--left cinema-hero-crop cinema-hero-crop--left"
        initial={reduceMotion ? false : { opacity: 0, x: -40, rotate: -8 }}
        animate={{ opacity: 1, x: 0, rotate: -5 }}
        transition={{
          duration: reduceMotion ? 0 : 0.82,
          delay: reduceMotion ? 0 : 0.52,
          ease: [0.23, 1, 0.32, 1],
        }}
        style={reduceMotion ? undefined : { x: leftCropX, rotate: leftCropRotate }}
      >
        <img
          src={supportingPhotos[0]}
          alt="Temporary preview photograph of children creating artwork"
          loading="eager"
          decoding="async"
        />
      </motion.figure>

      <motion.figure
        className="pg-hero-crop pg-hero-crop--right cinema-hero-crop cinema-hero-crop--right"
        initial={reduceMotion ? false : { opacity: 0, x: 40, rotate: 8 }}
        animate={{ opacity: 1, x: 0, rotate: 5 }}
        transition={{
          duration: reduceMotion ? 0 : 0.86,
          delay: reduceMotion ? 0 : 0.6,
          ease: [0.23, 1, 0.32, 1],
        }}
        style={reduceMotion ? undefined : { x: rightCropX, rotate: rightCropRotate }}
      >
        <img
          src={supportingPhotos[1]}
          alt="Temporary preview photograph of children outdoors at school"
          loading="eager"
          decoding="async"
        />
      </motion.figure>

      <motion.div
        className="cinema-hero-scroll-meter"
        aria-hidden="true"
        style={{ scaleX: reduceMotion ? 1 : smoothProgress }}
      />

      <div className="cinema-hero-scroll-copy">
        <span>Scroll to move through MKJ</span>
      </div>

      <div className="pg-preview-note cinema-preview-note">
        Preview imagery · replace with authentic MKJ photography before launch
      </div>
    </section>
  );
}
