import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

const programs = [
  {
    eyebrow: "Foundations",
    title: "Foundational Learning",
    description:
      "Purposeful learning that strengthens literacy, numeracy, independence, and the confidence to keep trying.",
    tone: "blue",
    visualWord: "FOUNDATION",
    image:
      "https://images.unsplash.com/photo-1719159381916-062fa9f435a6?auto=format&fit=crop&w=1400&q=84",
    alt: "Temporary preview photograph of children learning together in a classroom",
  },
  {
    eyebrow: "Everyday inquiry",
    title: "Primary Learning",
    description:
      "Strong academic foundations paired with discussion, collaboration, and questions that make children think beyond the page.",
    tone: "coral",
    visualWord: "QUESTION",
  },
  {
    eyebrow: "Make and test",
    title: "STEM & Discovery",
    description:
      "Hands-on exploration through science, technology, mathematics, making, and real-world problem solving.",
    tone: "mint",
    visualWord: "DISCOVER",
    image:
      "https://images.unsplash.com/photo-1759143101324-d375443f1955?auto=format&fit=crop&w=1400&q=84",
    alt: "Temporary preview photograph of school children working together",
  },
  {
    eyebrow: "Find your voice",
    title: "Language & Literacy",
    description:
      "Reading, writing, speaking, and listening experiences that help learners communicate with clarity and imagination.",
    tone: "lavender",
    visualWord: "VOICE",
  },
  {
    eyebrow: "Create boldly",
    title: "Arts & Expression",
    description:
      "Visual art, music, movement, and performance give children space to interpret, create, and share what matters to them.",
    tone: "saffron",
    visualWord: "CREATE",
    image:
      "https://images.unsplash.com/photo-1771765812031-22653b4c70a6?auto=format&fit=crop&w=1400&q=84",
    alt: "Temporary preview photograph of children creating artwork in a classroom",
  },
  {
    eyebrow: "Move together",
    title: "Sports & Wellbeing",
    description:
      "Movement, teamwork, healthy habits, and social-emotional growth support capable, resilient young people.",
    tone: "sky",
    visualWord: "MOVE",
    image:
      "https://images.unsplash.com/photo-1566938089211-5821c49b3548?auto=format&fit=crop&w=1400&q=84",
    alt: "Temporary preview photograph of children enjoying a school playground",
  },
];

const inlinePhoto =
  "https://images.unsplash.com/photo-1771765812031-22653b4c70a6?auto=format&fit=crop&w=700&q=82";

function LearningCard({ program, index, reduceMotion }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 84%", "end 16%"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.22,
  });
  const scale = useTransform(smoothProgress, [0, 0.42, 1], [0.985, 1, 0.955]);
  const rotate = useTransform(
    smoothProgress,
    [0, 0.48, 1],
    [index % 2 === 0 ? 1.2 : -1.2, 0, index % 2 === 0 ? -1.2 : 1.2],
  );
  const copyY = useTransform(smoothProgress, [0, 0.48, 1], [18, 0, -18]);
  const mediaY = useTransform(smoothProgress, [0, 1], [-24, 24]);
  const mediaScale = useTransform(smoothProgress, [0, 0.5, 1], [1.12, 1.04, 1.1]);

  return (
    <motion.article
      ref={cardRef}
      className={`cinema-learning-card cinema-learning-card--${program.tone}`}
      style={{
        "--cinema-stack-index": index,
        ...(reduceMotion ? {} : { scale, rotate }),
      }}
    >
      <motion.div
        className="cinema-learning-copy"
        style={reduceMotion ? undefined : { y: copyY }}
      >
        <p>{program.eyebrow}</p>
        <h3>{program.title}</h3>
        <span className="cinema-learning-rule" aria-hidden="true" />
        <p className="cinema-learning-description">{program.description}</p>
      </motion.div>

      <div className="cinema-learning-visual" aria-hidden={!program.image ? "true" : undefined}>
        <div className="cinema-learning-word" aria-hidden="true">
          {program.visualWord}
        </div>
        {program.image ? (
          <div className="cinema-learning-photo-frame">
            <motion.img
              src={program.image}
              alt={program.alt}
              loading="lazy"
              decoding="async"
              style={reduceMotion ? undefined : { y: mediaY, scale: mediaScale }}
            />
            <div className="cinema-learning-photo-wash" aria-hidden="true" />
          </div>
        ) : (
          <div className="cinema-learning-abstract" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default function Academics() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="pg-academics cinema-academics" id="academics" aria-labelledby="academics-title">
      <div className="pg-section-shell cinema-academics-shell">
        <motion.div
          className="pg-academics-heading cinema-academics-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: reduceMotion ? 0 : 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <div>
            <p className="pg-kicker">Learning journey</p>
            <h2 id="academics-title">
              Learning moves through
              <span
                className="pg-inline-photo cinema-inline-photo"
                aria-hidden="true"
                style={{ backgroundImage: `url(${inlinePhoto})` }}
              />
              many directions.
            </h2>
          </div>
          <p>
            These are illustrative learning themes rather than a published curriculum list.
            They show the balanced experience we are shaping around knowledge, inquiry,
            communication, creativity, movement, and wellbeing.
          </p>
        </motion.div>

        <div className="cinema-learning-stack" aria-label="Learning themes">
          {programs.map((program, index) => (
            <LearningCard
              key={program.title}
              program={program}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        <motion.p
          className="pg-academics-note cinema-academics-note"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: reduceMotion ? 0 : 0.48, ease: [0.23, 1, 0.32, 1] }}
        >
          Exact classes, board, medium of instruction, subjects, and activity offerings should be added only after MKJ confirms them.
        </motion.p>
      </div>
    </section>
  );
}
