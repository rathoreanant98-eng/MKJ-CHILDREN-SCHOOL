import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";

const principles = [
  {
    title: "Known, not lost",
    text: "We want every child to feel noticed, listened to, and confident enough to participate, ask questions, and seek help when they need it.",
    note: "Belonging creates the confidence to participate.",
  },
  {
    title: "Challenge with care",
    text: "Learning should stretch children without making them feel small. Our aim is to pair clear expectations with encouragement and thoughtful guidance.",
    note: "High expectations work best when children feel supported.",
  },
  {
    title: "Families kept close",
    text: "A strong school experience works best when families and educators can communicate clearly, share concerns early, and celebrate progress together.",
    note: "Good communication keeps the learning journey connected.",
  },
];

function ArrowIcon({ direction = "right" }) {
  return (
    <svg className={direction === "left" ? "pg-arrow-left" : ""} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="m11 6 4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const active = principles[activeIndex];

  const goPrevious = () => {
    setActiveIndex((index) => (index - 1 + principles.length) % principles.length);
  };

  const goNext = () => {
    setActiveIndex((index) => (index + 1) % principles.length);
  };

  return (
    <section className="pg-trust" id="trust" aria-labelledby="trust-title">
      <div className="pg-section-shell pg-trust-shell">
        <motion.div
          className="pg-trust-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduceMotion ? 0 : 0.62, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="pg-kicker">What we aim for</p>
          <h2 id="trust-title">The school experience should feel human.</h2>
          <p>
            Until genuine family testimonials are approved for publication, this section states the principles MKJ wants families to experience rather than presenting invented endorsements.
          </p>
        </motion.div>

        <div className="pg-trust-stage">
          <div className="pg-trust-index" aria-hidden="true">
            <span>0{activeIndex + 1}</span>
            <i />
            <span>0{principles.length}</span>
          </div>

          <div className="pg-trust-content" aria-live="polite">
            <AnimatePresence initial={false} mode="wait">
              <motion.article
                key={active.title}
                initial={reduceMotion ? false : { opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -18, filter: "blur(6px)" }}
                transition={{ duration: reduceMotion ? 0 : 0.42, ease: [0.23, 1, 0.32, 1] }}
              >
                <p className="pg-trust-quote-mark" aria-hidden="true">“</p>
                <h3>{active.title}</h3>
                <p className="pg-trust-copy">{active.text}</p>
                <p className="pg-trust-note">{active.note}</p>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="pg-trust-controls">
            <button type="button" onClick={goPrevious} aria-label="Previous principle">
              <ArrowIcon direction="left" />
            </button>
            <button type="button" onClick={goNext} aria-label="Next principle">
              <ArrowIcon />
            </button>
          </div>
        </div>

        <div className="pg-trust-tabs" role="tablist" aria-label="School experience principles">
          {principles.map((principle, index) => {
            const selected = index === activeIndex;
            return (
              <button
                key={principle.title}
                type="button"
                role="tab"
                aria-selected={selected}
                className={selected ? "pg-trust-tab--active" : ""}
                onClick={() => setActiveIndex(index)}
              >
                <span>0{index + 1}</span>
                <strong>{principle.title}</strong>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
