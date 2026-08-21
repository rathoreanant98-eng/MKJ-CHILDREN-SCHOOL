import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import "../academics.css";

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
    eyebrow: "Make & test",
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

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 6l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Academics() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const railX = useTransform(scrollYProgress, [0.08, 0.92], ["0%", "-54%"]);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <section ref={sectionRef} className="academics-section academics-v2" id="academics" aria-labelledby="academics-title">
      <div className="academics-v2-sticky">
        <div className="academics-container academics-v2-container">
          <motion.div
            className="academics-heading academics-v2-heading"
            initial={reduceMotion ? false : { opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: reduceMotion ? 0 : 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <span className="section-kicker">Learning journey</span>
              <h2 id="academics-title">Learning has <em>many directions.</em></h2>
            </div>
            <p>
              Children need strong foundations, but they also need space to explore. Our learning areas are designed to move between knowledge, inquiry, creativity, communication, and wellbeing.
            </p>
          </motion.div>

          <div className="academics-v2-progress" aria-hidden="true">
            <motion.span style={{ scaleX: scrollYProgress }} />
          </div>

          <div className="program-viewport">
            <motion.div
              className="program-grid program-rail"
              style={!reduceMotion && isDesktop ? { x: railX } : undefined}
            >
              {programs.map((program, index) => (
                <motion.article
                  className={`program-card program-card--${program.tone}`}
                  key={program.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 34, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.62,
                    delay: reduceMotion ? 0 : index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={reduceMotion ? undefined : { y: -8, rotate: index % 2 ? 0.4 : -0.4 }}
                >
                  <div className="program-card-top">
                    <span className="program-number">{String(index + 1).padStart(2, "0")}</span>
                    <span className="program-dot" aria-hidden="true" />
                  </div>

                  <div className="program-card-copy">
                    <span className="program-eyebrow">{program.eyebrow}</span>
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                  </div>

                  <motion.div
                    className="program-arrow"
                    aria-hidden="true"
                    whileHover={reduceMotion ? undefined : { x: 5 }}
                  >
                    <ArrowIcon />
                  </motion.div>
                </motion.article>
              ))}
            </motion.div>
          </div>

          <div className="academics-v2-hint" aria-hidden="true">
            <span>{isDesktop ? "Scroll to explore" : "Explore each learning area"}</span>
            <i />
          </div>
        </div>
      </div>
    </section>
  );
}
