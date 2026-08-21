import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import "../mission.css";

const missionPhoto =
  "https://images.unsplash.com/photo-1771765754567-e7b5bbf6a3b3?auto=format&fit=crop&w=1600&q=84";

const stats = [
  { value: 1, label: "Shared purpose", detail: "Help every child learn, belong, and grow." },
  { value: 3, label: "Learning partners", detail: "Child, family, and teacher moving together." },
  { value: 4, label: "Core values", detail: "Curiosity, character, confidence, and care." },
  { value: 5, label: "Days to discover", detail: "A school week with room to ask, make, and try." },
];

function AnimatedStat({ value, reduceMotion }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.65 });
  const [displayValue, setDisplayValue] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!isInView) return undefined;

    if (reduceMotion) {
      setDisplayValue(value);
      return undefined;
    }

    const controls = animate(0, value, {
      duration: 1.25,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, reduceMotion, value]);

  return (
    <strong ref={ref} className="mission-stat-value">
      {displayValue}
    </strong>
  );
}

function GrowthVisual({ reduceMotion, photoY, photoScale }) {
  return (
    <div className="mission-illustration mission-photo-shell">
      <motion.img
        className="mission-photo"
        src={missionPhoto}
        alt="Temporary stock photograph of a teacher guiding children during a classroom activity"
        loading="lazy"
        decoding="async"
        style={reduceMotion ? undefined : { y: photoY, scale: photoScale }}
      />

      <div className="mission-photo-wash" aria-hidden="true" />
      <div className="mission-photo-orbit" aria-hidden="true" />

      <motion.div
        className="mission-note mission-note--top"
        animate={reduceMotion ? undefined : { y: [0, 8, 0], rotate: [-1.5, 0, -1.5] }}
        transition={reduceMotion ? undefined : { duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>Belong</span>
        <strong>Be known</strong>
      </motion.div>

      <motion.div
        className="mission-note mission-note--bottom"
        animate={reduceMotion ? undefined : { y: [0, -8, 0], rotate: [1.5, 0, 1.5] }}
        transition={reduceMotion ? undefined : { duration: 6.4, repeat: Infinity, ease: "easeInOut", delay: 0.45 }}
      >
        <span>Explore</span>
        <strong>Ask brave questions</strong>
      </motion.div>

      <div className="mission-photo-credit">Temporary preview photography</div>
    </div>
  );
}

export default function AboutMission() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [-34, 34]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1.06, 1]);

  const entrance = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 34 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: {
      duration: reduceMotion ? 0 : 0.72,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section ref={sectionRef} id="about" className="mission-section mission-v2" aria-labelledby="mission-title">
      <div className="mission-v2-word" aria-hidden="true">PURPOSE</div>

      <div className="mission-container mission-v2-container">
        <div className="mission-copy mission-v2-copy">
          <motion.div className="section-kicker" {...entrance(0)}>
            Our mission
          </motion.div>

          <motion.h2 id="mission-title" {...entrance(0.08)}>
            Strong foundations. <em>Brave questions.</em> Room to become more.
          </motion.h2>

          <motion.p className="mission-lead" {...entrance(0.16)}>
            MKJ Children Upper Primary School is built around a simple idea: children do their best learning when they feel secure enough to be curious and challenged enough to keep growing.
          </motion.p>

          <motion.p className="mission-secondary" {...entrance(0.24)}>
            We want classrooms to feel focused, warm, and alive — places where knowledge matters, character matters, and every learner has a reason to take the next brave step.
          </motion.p>

          <motion.div className="mission-manifesto" {...entrance(0.3)}>
            <span>Learn deeply.</span>
            <span>Belong fully.</span>
            <span>Grow bravely.</span>
          </motion.div>
        </div>

        <motion.div
          className="mission-visual-wrap mission-v2-visual"
          initial={reduceMotion ? false : { opacity: 0, y: 46, scale: 0.94, rotate: 1.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mission-visual-label">Growing with purpose</div>
          <GrowthVisual reduceMotion={reduceMotion} photoY={photoY} photoScale={photoScale} />
          <div className="mission-visual-caption">
            <span>Our classroom promise</span>
            <strong>Challenge with care. Celebrate real progress.</strong>
          </div>
        </motion.div>

        <motion.div className="mission-stats mission-v2-stats" {...entrance(0.12)}>
          {stats.map((stat, index) => (
            <motion.article
              className="mission-stat mission-v2-stat"
              key={stat.label}
              initial={reduceMotion ? false : { opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
                delay: reduceMotion ? 0 : index * 0.09,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={reduceMotion ? undefined : { y: -6, rotate: index % 2 ? 0.6 : -0.6 }}
            >
              <AnimatedStat value={stat.value} reduceMotion={reduceMotion} />
              <div>
                <h3>{stat.label}</h3>
                <p>{stat.detail}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
