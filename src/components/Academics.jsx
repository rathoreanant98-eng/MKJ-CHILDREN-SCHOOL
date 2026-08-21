import { motion, useReducedMotion } from "motion/react";
import "../academics.css";

const programs = [
  {
    title: "Foundational Learning",
    description:
      "Playful, purposeful learning that builds early literacy, numeracy, independence, and a genuine love of discovery.",
    icon: "spark",
  },
  {
    title: "Primary Learning",
    description:
      "Strong academic foundations paired with inquiry, collaboration, and the confidence to ask thoughtful questions.",
    icon: "book",
  },
  {
    title: "STEM & Discovery",
    description:
      "Hands-on exploration through science, technology, mathematics, making, and real-world problem solving.",
    icon: "atom",
  },
  {
    title: "Language & Literacy",
    description:
      "Rich reading, writing, speaking, and listening experiences that help every learner communicate with clarity.",
    icon: "speech",
  },
  {
    title: "Arts & Expression",
    description:
      "Music, visual arts, movement, and performance give students space to create, interpret, and share their voice.",
    icon: "palette",
  },
  {
    title: "Sports & Wellbeing",
    description:
      "Movement, teamwork, healthy habits, and social-emotional learning support resilient, balanced young people.",
    icon: "heart",
  },
];

function ProgramIcon({ type }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    fill: "none",
    "aria-hidden": true,
  };

  if (type === "book") {
    return (
      <svg {...common}>
        <path d="M5.5 6.5H11.5C13.1 6.5 14 7.4 14 9V22C14 20.4 13.1 19.5 11.5 19.5H5.5V6.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M22.5 6.5H16.5C14.9 6.5 14 7.4 14 9V22C14 20.4 14.9 19.5 16.5 19.5H22.5V6.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "atom") {
    return (
      <svg {...common}>
        <ellipse cx="14" cy="14" rx="11" ry="4.5" stroke="currentColor" strokeWidth="1.7" />
        <ellipse cx="14" cy="14" rx="11" ry="4.5" transform="rotate(60 14 14)" stroke="currentColor" strokeWidth="1.7" />
        <ellipse cx="14" cy="14" rx="11" ry="4.5" transform="rotate(120 14 14)" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="14" cy="14" r="2" fill="currentColor" />
      </svg>
    );
  }

  if (type === "speech") {
    return (
      <svg {...common}>
        <path d="M5 6.5H23V18.5H13L8 23V18.5H5V6.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 11H19M9 14.5H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "palette") {
    return (
      <svg {...common}>
        <path d="M14 4C8.2 4 3.5 8.1 3.5 13.4C3.5 18.4 7.5 22.2 12.2 22.2H13.6C14.9 22.2 15.8 21.1 15.4 19.9C15.1 18.9 15.9 17.8 17 17.8H20.1C22.7 17.8 24.5 15.8 24.5 13.3C24.5 8.1 19.8 4 14 4Z" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="9" cy="10" r="1.3" fill="currentColor" />
        <circle cx="14" cy="8" r="1.3" fill="currentColor" />
        <circle cx="19" cy="10.5" r="1.3" fill="currentColor" />
      </svg>
    );
  }

  if (type === "heart") {
    return (
      <svg {...common}>
        <path d="M14 22.5S5 17.4 5 10.8C5 7.8 7.2 5.7 10 5.7C11.7 5.7 13.2 6.6 14 8C14.8 6.6 16.3 5.7 18 5.7C20.8 5.7 23 7.8 23 10.8C23 17.4 14 22.5 14 22.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M8.6 14H11L12.6 10.8L15.1 16.4L16.8 13.3H19.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M14 3.5L15.8 10.2L22.5 8.5L17.4 13.2L22 18.5L15.7 16.2L14 23L12.3 16.2L6 18.5L10.6 13.2L5.5 8.5L12.2 10.2L14 3.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="14" cy="13.5" r="2.2" fill="currentColor" />
    </svg>
  );
}

export default function Academics() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="academics-section" id="academics" aria-labelledby="academics-title">
      <div className="academics-container">
        <motion.div
          className="academics-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: reduceMotion ? 0 : 0.55, ease: "easeOut" }}
        >
          <span className="section-kicker">Academics & programs</span>
          <h2 id="academics-title">Learning that gives children strong foundations and room to explore.</h2>
          <p>
            Our learning experiences are designed to build knowledge, curiosity, character, and confidence together — because children thrive when school feels both challenging and deeply supportive.
          </p>
        </motion.div>

        <div className="program-grid">
          {programs.map((program, index) => (
            <motion.article
              className="program-card"
              key={program.title}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: reduceMotion ? 0 : 0.55,
                delay: reduceMotion ? 0 : index * 0.1,
                ease: "easeOut",
              }}
              whileHover={reduceMotion ? undefined : { y: -6 }}
            >
              <motion.div
                className="program-icon"
                whileHover={reduceMotion ? undefined : { rotate: -4, scale: 1.05 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <ProgramIcon type={program.icon} />
              </motion.div>
              <div className="program-card-copy">
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </div>
              <div className="program-card-accent" aria-hidden="true" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
