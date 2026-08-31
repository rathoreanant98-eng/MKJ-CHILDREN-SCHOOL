import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

const steps = [
  {
    title: "See the school",
    text: "Walk through the learning spaces, meet the school, and ask the questions that matter to your family.",
  },
  {
    title: "Start the conversation",
    text: "Tell us about your child, what you are looking for, and what would help you feel confident about the next step.",
  },
  {
    title: "Move forward",
    text: "When the admissions process is complete, the school can help your family prepare for a clear start.",
  },
];

const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=35%2C%20Polo%201st%2C%20Ship%20House%2C%20Near%20Paota%2C%20Jodhpur%2C%20Rajasthan%20342006";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="m11 6 4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Admissions() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 24%"],
  });
  const lineScale = useTransform(scrollYProgress, [0.08, 0.58], [0, 1]);

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
    <section ref={sectionRef} id="admissions" className="pg-admissions" aria-labelledby="admissions-title">
      <div className="pg-section-shell pg-admissions-shell">
        <motion.div
          className="pg-admissions-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduceMotion ? 0 : 0.62, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="pg-kicker">Admissions</p>
          <h2 id="admissions-title">The next chapter can start with one good conversation.</h2>
          <p>
            Choosing a school is personal. We want the first step to feel clear and human,
            with enough space for your family to ask what matters.
          </p>
        </motion.div>

        <div className="pg-admissions-journey">
          <div className="pg-admissions-line" aria-hidden="true">
            <motion.i style={reduceMotion ? { scaleX: 1 } : { scaleX: lineScale }} />
          </div>

          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={reduceMotion ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{
                duration: reduceMotion ? 0 : 0.58,
                delay: reduceMotion ? 0 : index * 0.07,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              <span>0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </motion.article>
          ))}
        </div>

        <div className="pg-admissions-contact-row">
          <motion.a
            href="tel:+918104567540"
            whileHover={reduceMotion ? undefined : { y: -4 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          >
            <span>Call the school</span>
            <strong>+91 8104567540</strong>
            <ArrowIcon />
          </motion.a>
          <motion.a
            href="mailto:mkjchildrenschool@gmail.com"
            whileHover={reduceMotion ? undefined : { y: -4 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          >
            <span>Email MKJ</span>
            <strong>mkjchildrenschool@gmail.com</strong>
            <ArrowIcon />
          </motion.a>
          <motion.a
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={reduceMotion ? undefined : { y: -4 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          >
            <span>Visit in Jodhpur</span>
            <strong>Get directions</strong>
            <ArrowIcon />
          </motion.a>
        </div>

        <motion.div
          className="pg-enquiry"
          initial={reduceMotion ? false : { opacity: 0, y: 36, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.72, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="pg-enquiry-intro">
            <p className="pg-kicker">Quick enquiry</p>
            <h3>Prepare an email to MKJ.</h3>
            <p>
              Share the basics and your device will open an email addressed to the school.
              The website does not store the information entered here.
            </p>
            <div className="pg-enquiry-address">
              <span>MKJ Children Upper Primary School</span>
              <p>35, Polo 1st, Ship House, Near Paota, Jodhpur, Rajasthan 342006</p>
            </div>
          </div>

          <form className="pg-enquiry-form" onSubmit={handleEnquirySubmit}>
            <label>
              <span>Parent / guardian name</span>
              <input name="parentName" type="text" autoComplete="name" required />
            </label>
            <label>
              <span>Phone number</span>
              <input name="phone" type="tel" inputMode="tel" autoComplete="tel" required />
            </label>
            <label>
              <span>Class / level you are asking about</span>
              <input name="classInterested" type="text" autoComplete="off" />
            </label>
            <label>
              <span>Message</span>
              <textarea name="message" rows="5" />
            </label>
            <motion.button
              type="submit"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            >
              Prepare enquiry email
              <ArrowIcon />
            </motion.button>
            <p className="pg-enquiry-note">
              Submitting opens your device's email app with the enquiry pre-filled for MKJ.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
