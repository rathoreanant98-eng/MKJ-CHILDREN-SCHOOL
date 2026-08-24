import { motion, useReducedMotion } from "motion/react";
import "../testimonials.css";

const principles = [
  {
    number: "01",
    title: "Known, not lost",
    text: "We want every child to feel noticed, listened to, and confident enough to participate, ask questions, and seek help when they need it.",
    tone: "coral",
  },
  {
    number: "02",
    title: "Challenge with care",
    text: "Learning should stretch children without making them feel small. Our aim is to pair clear expectations with encouragement and thoughtful guidance.",
    tone: "mint",
  },
  {
    number: "03",
    title: "Families kept close",
    text: "A strong school experience works best when families and educators can communicate clearly, share concerns early, and celebrate progress together.",
    tone: "blue",
  },
];

export default function Testimonials() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="testimonials-section testimonials-v2 trust-section" aria-labelledby="trust-title">
      <div className="testimonials-v2-word trust-section-word" aria-hidden="true">TRUST</div>

      <div className="testimonials-container testimonials-v2-container trust-container">
        <motion.div
          className="testimonials-heading testimonials-v2-heading trust-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduceMotion ? 0 : 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-kicker">What we aim for</span>
          <h2 id="trust-title">The school experience should feel <em>human.</em></h2>
          <p>
            Before we publish real family testimonials, we would rather be clear about the principles we want to guide everyday school life than present invented endorsements.
          </p>
        </motion.div>

        <div className="trust-principles" aria-label="MKJ school experience principles">
          {principles.map((principle, index) => (
            <motion.article
              key={principle.title}
              className={`trust-principle trust-principle--${principle.tone}`}
              initial={reduceMotion ? false : { opacity: 0, y: 34, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: reduceMotion ? 0 : 0.64,
                delay: reduceMotion ? 0 : index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={reduceMotion ? undefined : { y: -7 }}
            >
              <div className="trust-principle-top">
                <span className="trust-principle-number">{principle.number}</span>
                <i aria-hidden="true" />
              </div>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </motion.article>
          ))}
        </div>

        <motion.p
          className="trust-note"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reduceMotion ? 0 : 0.56, ease: "easeOut" }}
        >
          Genuine parent and student voices can be added here later once MKJ approves the exact wording and attribution.
        </motion.p>
      </div>
    </section>
  );
}
