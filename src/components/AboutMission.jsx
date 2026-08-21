import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "motion/react";

const stats = [
  { value: 1, suffix: ":1", label: "Every child is known", detail: "Personal attention starts with relationships." },
  { value: 3, suffix: "-way", label: "Learning partnership", detail: "Students, families, and teachers grow together." },
  { value: 4, label: "Learning pillars", detail: "Curiosity, character, confidence, and care." },
  { value: 100, suffix: "%", label: "Whole-child focus", detail: "Academic growth with wellbeing and belonging." },
];

function AnimatedStat({ value, prefix = "", suffix = "", reduceMotion }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });
  const [displayValue, setDisplayValue] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!isInView) return undefined;

    if (reduceMotion) {
      setDisplayValue(value);
      return undefined;
    }

    const controls = animate(0, value, {
      duration: 1.15,
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

function GrowthIllustration({ reduceMotion }) {
  return (
    <div className="mission-illustration" aria-label="Illustration representing supported growth and learning" role="img">
      <div className="mission-illustration-grid" aria-hidden="true" />
      <motion.div
        className="mission-sun"
        aria-hidden="true"
        animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
        transition={reduceMotion ? undefined : { duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mission-path" aria-hidden="true">
        <span className="mission-path-dot mission-path-dot--one" />
        <span className="mission-path-dot mission-path-dot--two" />
        <span className="mission-path-dot mission-path-dot--three" />
      </div>

      <motion.div
        className="mission-book-card"
        aria-hidden="true"
        animate={reduceMotion ? undefined : { y: [0, -6, 0], rotate: [-1.5, 0, -1.5] }}
        transition={reduceMotion ? undefined : { duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="mission-book">
          <span />
          <span />
        </div>
        <p>Learning takes root when children feel safe to ask, try, and discover.</p>
      </motion.div>

      <motion.div
        className="mission-note mission-note--top"
        aria-hidden="true"
        animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
        transition={reduceMotion ? undefined : { duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
      >
        <span>Belong</span>
        <strong>Be known</strong>
      </motion.div>

      <motion.div
        className="mission-note mission-note--bottom"
        aria-hidden="true"
        animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
        transition={reduceMotion ? undefined : { duration: 6.8, repeat: Infinity, ease: "easeInOut", delay: 0.65 }}
      >
        <span>Explore</span>
        <strong>Ask brave questions</strong>
      </motion.div>
    </div>
  );
}

export default function AboutMission() {
  const reduceMotion = useReducedMotion();

  const entrance = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: reduceMotion ? 0 : 0.56, delay: reduceMotion ? 0 : delay, ease: "easeOut" },
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
            At MKJ Children School, education is more than completing a lesson. We create a caring environment where children can build strong foundations, stay curious, learn from mistakes, and discover what they are capable of becoming.
          </motion.p>

          <motion.p className="mission-secondary" {...entrance(0.24)}>
            Teachers work closely with families so progress feels personal, expectations stay clear, and every learner has room to stretch without losing the joy of learning.
          </motion.p>

          <motion.div className="mission-stats" {...entrance(0.3)}>
            {stats.map((stat, index) => (
              <motion.article
                className="mission-stat"
                key={stat.label}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.55 }}
                transition={{ duration: reduceMotion ? 0 : 0.52, delay: reduceMotion ? 0 : index * 0.1, ease: "easeOut" }}
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
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.12, ease: "easeOut" }}
        >
          <div className="mission-visual-label">Growing with purpose</div>
          <GrowthIllustration reduceMotion={reduceMotion} />
          <div className="mission-visual-caption">
            <span>Our classroom promise</span>
            <strong>Challenge with care. Celebrate real progress.</strong>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
