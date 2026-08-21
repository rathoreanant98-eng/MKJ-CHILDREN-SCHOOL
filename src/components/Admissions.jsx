import { motion, useReducedMotion } from "motion/react";
import "../admissions.css";

const steps = [
  {
    number: "01",
    title: "Schedule a visit",
    text: "Meet the school, see learning in action, and ask the questions that matter to your family.",
  },
  {
    number: "02",
    title: "Share your application",
    text: "Tell us about your child and provide the information our admissions team needs to guide the next step.",
  },
  {
    number: "03",
    title: "Prepare to join MKJ",
    text: "Once the admissions process is complete, we help your family get ready for a confident start at school.",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 6l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Admissions() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="admissions" className="admissions-section" aria-labelledby="admissions-title">
      <div className="admissions-glow admissions-glow--one" aria-hidden="true" />
      <div className="admissions-glow admissions-glow--two" aria-hidden="true" />

      <div className="admissions-container">
        <motion.div
          className="admissions-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <span className="section-kicker admissions-kicker">Admissions</span>
          <h2 id="admissions-title">Your family’s next chapter can start with one conversation.</h2>
          <p>
            Choosing a school is a personal decision. Our admissions journey is designed to help families understand MKJ, ask thoughtful questions, and move forward with clarity.
          </p>
        </motion.div>

        <div className="admissions-steps" aria-label="Admissions journey">
          {steps.map((step, index) => (
            <motion.article
              className="admissions-step"
              key={step.number}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{
                duration: 0.55,
                delay: reduceMotion ? 0 : index * 0.13,
                ease: "easeOut",
              }}
            >
              <div className="admissions-step-topline" aria-hidden="true">
                <span>{step.number}</span>
                {index < steps.length - 1 && <span className="admissions-step-line" />}
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="admissions-cta-card"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.58, delay: reduceMotion ? 0 : 0.18, ease: "easeOut" }}
        >
          <div className="admissions-cta-copy">
            <span className="admissions-cta-label">Ready when you are</span>
            <h3>Take the first step toward MKJ.</h3>
            <p>
              Start with an application, or use your school visit to decide whether MKJ feels like the right fit for your child.
            </p>
          </div>

          <motion.a
            className="admissions-primary-cta"
            href="#contact"
            whileHover={reduceMotion ? undefined : { scale: 1.04 }}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
          >
            <span>Start Your Application</span>
            <ArrowIcon />
          </motion.a>
        </motion.div>

        <p className="admissions-note">
          The application destination is a launch placeholder until MKJ’s official admissions form or enquiry workflow is connected.
        </p>
      </div>
    </section>
  );
}
