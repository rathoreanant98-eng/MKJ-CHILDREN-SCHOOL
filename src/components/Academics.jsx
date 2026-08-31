import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";

const programs = [
  {
    eyebrow: "Foundations",
    title: "Foundational Learning",
    description:
      "Purposeful learning that strengthens literacy, numeracy, independence, and the confidence to keep trying.",
    tone: "blue",
  },
  {
    eyebrow: "Everyday inquiry",
    title: "Primary Learning",
    description:
      "Strong academic foundations paired with discussion, collaboration, and questions that make children think beyond the page.",
    tone: "coral",
  },
  {
    eyebrow: "Make and test",
    title: "STEM & Discovery",
    description:
      "Hands-on exploration through science, technology, mathematics, making, and real-world problem solving.",
    tone: "mint",
  },
  {
    eyebrow: "Find your voice",
    title: "Language & Literacy",
    description:
      "Reading, writing, speaking, and listening experiences that help learners communicate with clarity and imagination.",
    tone: "lavender",
  },
  {
    eyebrow: "Create boldly",
    title: "Arts & Expression",
    description:
      "Visual art, music, movement, and performance give children space to interpret, create, and share what matters to them.",
    tone: "saffron",
  },
  {
    eyebrow: "Move together",
    title: "Sports & Wellbeing",
    description:
      "Movement, teamwork, healthy habits, and social-emotional growth support capable, resilient young people.",
    tone: "sky",
  },
];

const inlinePhoto =
  "https://images.unsplash.com/photo-1771765812031-22653b4c70a6?auto=format&fit=crop&w=700&q=82";

function PlusIcon({ open }) {
  return (
    <span className={`pg-accordion-icon ${open ? "pg-accordion-icon--open" : ""}`} aria-hidden="true">
      <i />
      <i />
    </span>
  );
}

export default function Academics() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <section className="pg-academics" id="academics" aria-labelledby="academics-title">
      <div className="pg-section-shell">
        <motion.div
          className="pg-academics-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: reduceMotion ? 0 : 0.64, ease: [0.23, 1, 0.32, 1] }}
        >
          <div>
            <p className="pg-kicker">Learning journey</p>
            <h2 id="academics-title">
              Learning moves through
              <span className="pg-inline-photo" aria-hidden="true" style={{ backgroundImage: `url(${inlinePhoto})` }} />
              many directions.
            </h2>
          </div>
          <p>
            These are illustrative learning themes rather than a published curriculum list.
            They show the balanced experience we are shaping around knowledge, inquiry,
            communication, creativity, movement, and wellbeing.
          </p>
        </motion.div>

        <div className="pg-learning-accordion" role="list" aria-label="Learning themes">
          {programs.map((program, index) => {
            const active = activeIndex === index;
            return (
              <motion.article
                key={program.title}
                className={`pg-learning-panel pg-learning-panel--${program.tone} ${active ? "pg-learning-panel--active" : ""}`}
                layout={!reduceMotion}
                role="listitem"
                onMouseEnter={() => setActiveIndex(index)}
                transition={{ layout: { duration: reduceMotion ? 0 : 0.42, ease: [0.32, 0.72, 0, 1] } }}
              >
                <button
                  type="button"
                  className="pg-learning-trigger"
                  aria-expanded={active}
                  aria-controls={`learning-panel-${index}`}
                  onClick={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                >
                  <span className="pg-learning-number">0{index + 1}</span>
                  <span className="pg-learning-vertical-title">{program.title}</span>
                  <PlusIcon open={active} />
                </button>

                <AnimatePresence initial={false} mode="wait">
                  {active && (
                    <motion.div
                      id={`learning-panel-${index}`}
                      className="pg-learning-content"
                      key={program.title}
                      initial={reduceMotion ? false : { opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <span>{program.eyebrow}</span>
                      <h3>{program.title}</h3>
                      <p>{program.description}</p>
                      <div className="pg-learning-line" aria-hidden="true" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>

        <motion.p
          className="pg-academics-note"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.23, 1, 0.32, 1] }}
        >
          Exact classes, board, medium of instruction, subjects, and activity offerings should be added only after MKJ confirms them.
        </motion.p>
      </div>
    </section>
  );
}
