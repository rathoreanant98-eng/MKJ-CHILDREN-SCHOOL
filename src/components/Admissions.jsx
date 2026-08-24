import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import "../admissions.css";

const steps = [
  {
    number: "01",
    eyebrow: "See the school",
    title: "Plan a visit",
    text: "Walk through the learning spaces, meet the school, and ask the questions that matter to your family.",
  },
  {
    number: "02",
    eyebrow: "Start the conversation",
    title: "Talk with MKJ",
    text: "Tell us about your child, what you are looking for, and what would help you feel confident about the next step.",
  },
  {
    number: "03",
    eyebrow: "Move forward",
    title: "Prepare to join",
    text: "When the admissions process is complete, we help your family get ready for a clear and confident start at school.",
  },
];

const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=35%2C%20Polo%201st%2C%20Ship%20House%2C%20Near%20Paota%2C%20Jodhpur%2C%20Rajasthan%20342006";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 6l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Admissions() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const journeyProgress = useTransform(scrollYProgress, [0.12, 0.72], [0, 1]);

  const handleEnquirySubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const parentName = String(form.get("parentName") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const classInterested = String(form.get("classInterested") || "").trim();
    const message = String(form.get("message") || "").trim();

    const subject = encodeURIComponent(
      `Admission enquiry${classInterested ? ` — ${classInterested}` : ""}`,
    );
    const body = encodeURIComponent(
      [
        `Parent / guardian: ${parentName}`,
        `Phone: ${phone}`,
        `Class / level of interest: ${classInterested || "Not specified"}`,
        "",
        "Message:",
        message || "I would like to know more about admissions and planning a school visit.",
      ].join("\n"),
    );

    window.location.href = `mailto:mkjchildrenschool@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section ref={sectionRef} id="admissions" className="admissions-section admissions-v2" aria-labelledby="admissions-title">
      <div className="admissions-v2-shape admissions-v2-shape--one" aria-hidden="true" />
      <div className="admissions-v2-shape admissions-v2-shape--two" aria-hidden="true" />

      <div className="admissions-container admissions-v2-container">
        <motion.div
          className="admissions-heading admissions-v2-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduceMotion ? 0 : 0.74, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-kicker admissions-kicker">Admissions</span>
          <h2 id="admissions-title">The next chapter can start with <em>one good conversation.</em></h2>
          <p>
            Choosing a school is personal. We want the process to feel clear, human, and unhurried enough for your family to make the right decision.
          </p>
        </motion.div>

        <div className="admissions-journey" aria-label="Admissions journey">
          <div className="admissions-progress admissions-progress--vertical" aria-hidden="true">
            <motion.span style={{ scaleY: journeyProgress }} />
          </div>
          <div className="admissions-progress admissions-progress--horizontal" aria-hidden="true">
            <motion.span style={{ scaleX: journeyProgress }} />
          </div>

          {steps.map((step, index) => (
            <motion.article
              className="admissions-step admissions-v2-step"
              key={step.number}
              initial={reduceMotion ? false : { opacity: 0, y: 34, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: reduceMotion ? 0 : 0.64,
                delay: reduceMotion ? 0 : index * 0.11,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={reduceMotion ? undefined : { y: -7 }}
            >
              <span className="admissions-v2-number">{step.number}</span>
              <span className="admissions-v2-eyebrow">{step.eyebrow}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="admissions-cta-card admissions-v2-cta"
          initial={reduceMotion ? false : { opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: reduceMotion ? 0 : 0.76, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="admissions-cta-copy">
            <span className="admissions-cta-label">Ready when you are</span>
            <h3>Come and experience MKJ for yourself.</h3>
            <p>
              Speak with the school directly to plan a visit, ask about admissions, or understand what the next step should be for your child.
            </p>

            <div className="admissions-v2-actions">
              <motion.a
                className="admissions-primary-cta"
                href="tel:+918104567540"
                whileHover={reduceMotion ? undefined : { y: -3, scale: 1.025 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              >
                <span>Call the school</span>
                <ArrowIcon />
              </motion.a>
              <motion.a
                className="admissions-secondary-cta"
                href="mailto:mkjchildrenschool@gmail.com"
                whileHover={reduceMotion ? undefined : { x: 4 }}
              >
                Email MKJ
                <ArrowIcon />
              </motion.a>
              <motion.a
                className="admissions-secondary-cta"
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                whileHover={reduceMotion ? undefined : { x: 4 }}
              >
                Get directions
                <ArrowIcon />
              </motion.a>
            </div>
          </div>

          <form className="admissions-enquiry-form" onSubmit={handleEnquirySubmit}>
            <div className="admissions-form-heading">
              <span>Quick enquiry</span>
              <strong>Prepare an email to MKJ</strong>
            </div>

            <div className="admissions-form-grid">
              <label>
                <span>Parent / guardian name</span>
                <input name="parentName" type="text" autoComplete="name" required />
              </label>
              <label>
                <span>Phone number</span>
                <input name="phone" type="tel" inputMode="tel" autoComplete="tel" required />
              </label>
              <label className="admissions-form-wide">
                <span>Class / level you are asking about</span>
                <input name="classInterested" type="text" autoComplete="off" />
              </label>
              <label className="admissions-form-wide">
                <span>Message</span>
                <textarea name="message" rows="4" />
              </label>
            </div>

            <button className="admissions-form-submit" type="submit">
              Prepare enquiry email
              <ArrowIcon />
            </button>
            <p className="admissions-form-note">
              This website does not store these details. Submitting opens your device's email app with the enquiry pre-filled for MKJ.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
