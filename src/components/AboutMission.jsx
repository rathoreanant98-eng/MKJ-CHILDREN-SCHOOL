import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

const missionPhoto =
  "https://images.unsplash.com/photo-1771765754567-e7b5bbf6a3b3?auto=format&fit=crop&w=1800&q=86";

const statement =
  "Every child should feel secure enough to be curious, challenged enough to grow, and known well enough to belong.";

const principles = [
  {
    title: "Strong foundations",
    text: "Knowledge, practice, and thoughtful guidance give children the confidence to keep moving forward.",
  },
  {
    title: "Brave questions",
    text: "Curiosity matters. We want learners to ask, test, discuss, and make sense of the world around them.",
  },
  {
    title: "Human connection",
    text: "School works best when children feel seen and families can stay close to the learning journey.",
  },
];

function ScrollWord({ word, index, total, progress, reduceMotion }) {
  const start = 0.08 + (index / total) * 0.68;
  const end = Math.min(start + 0.16, 0.94);
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  const y = useTransform(progress, [start, end], [8, 0]);

  return (
    <motion.span style={reduceMotion ? { opacity: 1 } : { opacity, y }}>
      {word}{" "}
    </motion.span>
  );
}

export default function AboutMission() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 72%", "end 28%"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [-28, 36]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  const words = statement.split(" ");

  const entrance = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 26 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.24 },
    transition: {
      duration: reduceMotion ? 0 : 0.62,
      delay: reduceMotion ? 0 : delay,
      ease: [0.23, 1, 0.32, 1],
    },
  });

  return (
    <section ref={sectionRef} id="about" className="pg-purpose" aria-labelledby="purpose-title">
      <div className="pg-section-shell pg-purpose-shell">
        <div className="pg-purpose-intro">
          <motion.p className="pg-kicker" {...entrance(0)}>Our purpose</motion.p>
          <motion.h2 id="purpose-title" {...entrance(0.06)}>
            A school should build more than answers.
          </motion.h2>
          <motion.p className="pg-purpose-copy" {...entrance(0.12)}>
            MKJ Children Upper Primary School is shaping a learning environment where
            academic focus and genuine care can exist together. Children need clear
            expectations, room to explore, and adults who notice the progress behind the result.
          </motion.p>
        </div>

        <div className="pg-purpose-story">
          <div className="pg-purpose-sticky">
            <p className="pg-purpose-statement" aria-label={statement}>
              {words.map((word, index) => (
                <ScrollWord
                  key={`${word}-${index}`}
                  word={word}
                  index={index}
                  total={words.length}
                  progress={scrollYProgress}
                  reduceMotion={reduceMotion}
                />
              ))}
            </p>

            <motion.div
              className="pg-purpose-rule"
              aria-hidden="true"
              style={reduceMotion ? undefined : { scaleX: scrollYProgress }}
            />
          </div>

          <motion.figure
            className="pg-purpose-media"
            initial={reduceMotion ? false : { opacity: 0, y: 36, clipPath: "inset(10% 8% 10% 8% round 28px)" }}
            whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0% round 28px)" }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: reduceMotion ? 0 : 0.82, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="pg-purpose-media-frame">
              <motion.img
                src={missionPhoto}
                alt="Temporary preview photograph of a teacher guiding children during a classroom activity"
                loading="lazy"
                decoding="async"
                style={reduceMotion ? undefined : { y: photoY, scale: photoScale }}
              />
              <div className="pg-purpose-media-wash" aria-hidden="true" />
            </div>
            <figcaption>
              <span>Preview imagery</span>
              <strong>Learning feels strongest when challenge and care move together.</strong>
            </figcaption>
          </motion.figure>
        </div>

        <div className="pg-purpose-principles">
          {principles.map((principle, index) => (
            <motion.article
              key={principle.title}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: reduceMotion ? 0 : 0.58,
                delay: reduceMotion ? 0 : index * 0.07,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              <span aria-hidden="true">0{index + 1}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
