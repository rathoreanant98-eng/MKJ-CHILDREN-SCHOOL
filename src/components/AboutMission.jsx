import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "motion/react";
import "../mission.css";

const missionPhoto =
  "https://images.unsplash.com/photo-1771765754567-e7b5bbf6a3b3?auto=format&fit=crop&w=1400&q=82";

const stats = [
  { value: 1, suffix: ":1", label: "Every child is known", detail: "Personal attention starts with relationships." },
  { value: 3, suffix: "-way", label: "Learning partnership", detail: "Students, families, and teachers grow together." },
  { value: 4, label: "Learning pillars", detail: "Curiosity, character, confidence, and care." },
  { value: 100, suffix: "%", label: "Whole-child focus", detail: "Academic growth with wellbeing and belonging." },
];

function AnimatedStat({ value, prefix = "", suffix = "", reduceMotion }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [displayValue, setDisplayValue] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!isInView) return undefined;

    if (reduceMotion) {
      setDisplayValue(value);
      return undefined;
    }

    const controls = animate(0, value, {
      duration: 1.35,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, reduceMotion, value]);

  return (
    <strong ref={ref} className="mission-stat-value" aria-label={`${prefix}${value}${suffix}`}>
      {prefix}{displayValue}{suffix}
    </strong>
  );
}

function GrowthVisual({ reduceMotion }) {
  return (
    <div className="mission-illustration mission-photo-shell">
      <motion.img
        className="mission-photo"
        src={missionPhoto}
        alt="Temporary stock photograph of a teacher guiding children during a classroom activity"
        loading="lazy"
        decoding="async"
        initial={reduceMotion ? false : { scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: reduceMotion ? 0 : 1.05, ease: "easeOut" }}
        whileHover={reduceMotion ? undefined : { scale: 1.045 }}
      />

      <motion.div
        className="mission-note mission-note--top"
        animate={reduceMotion ? undefined : { y: [0, 7, 0] }}
        transition={reduceMotion ? undefined : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>Belong</span>
        <strong>Be known</strong>
      </motion.div>

      <motion.div
        className="mission-note mission-note--bottom"
        animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
        transition={reduceMotion ? undefined : { duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <span>Explore</span>
        <strong>Ask brave questions</strong>
      </motion.div>

      <div className="mission-photo-credit">Preview photography — authentic MKJ classroom images will replace this before final launch.</div>
    </div>
  );
}

export default function AboutMission() {
  const reduceMotion = useReducedMotion();

  const entrance = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: reduceMotion ? 0 : 0.68, delay: reduceMotion ? 0 : delay, ease: "easeOut" },
  });

  return (
    <section id="about" className="mission-section" aria-labelledby="mission-title">
      <div className="mission-container">
        <div className="mission-copy">
          <motion.div className="section-kicker" {...entrance(0)}>
            <span aria-hidden="true" />
            Our mission
          </motion.div>

          <motion.h2 id="mission-title" {...entrance(0.08)}>
            Helping children become thoughtful learners and confident people.
          </motion.h2>

          <motion.p className="mission-lead" {...entrance(0.16)}>
            At MKJ Children Upper Primary School, education is more than completing a lesson. We create a caring environment where children can build strong foundations, stay curious, learn from mistakes, and discover what they are capable of becoming.
          </motion.p>

          <motion.p className="mission-secondary" {...entrance(0.24)}>
            Teachers work closely with families so progress feels personal, expectations stay clear, and every learner has room to stretch without losing the joy of learning.
          </motion.p>

          <motion.div className="mission-stats" {...entrance(0.3)}>
            {stats.map((stat, index) => (
              <motion.article
                className="mission-stat"
                key={stat.label}
                initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: reduceMotion ? 0 : 0.58, delay: reduceMotion ? 0 : index * 0.12, ease: "easeOut" }}
                whileHover={reduceMotion ? undefined : { y: -5, scale: 1.015 }}
              >
                <AnimatedStat {...stat} reduceMotion={reduceMotion} />
                <h3>{stat.label}</h3>
                <p>{stat.detail}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mission-visual-wrap"
          initial={reduceMotion ? false : { opacity: 0, y: 42, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.82, delay: reduceMotion ? 0 : 0.1, ease: "easeOut" }}
        >
          <div className="mission-visual-label">Growing with purpose</div>
          <GrowthVisual reduceMotion={reduceMotion} />
          <div className="mission-visual-caption">
            <span>Our classroom promise</span>
            <strong>Challenge with care. Celebrate real progress.</strong>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
