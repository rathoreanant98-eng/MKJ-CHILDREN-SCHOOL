import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import "../testimonials.css";

const testimonials = [
  {
    quote:
      "What stands out is the way children are encouraged to ask questions, explain their thinking, and feel proud of the progress they make each day.",
    label: "MKJ Parent",
    role: "Sample family testimonial",
    initial: "P",
    tone: "coral",
  },
  {
    quote:
      "I like that learning does not feel like memorising everything. We get to make things, share ideas, work with friends, and learn from our mistakes.",
    label: "MKJ Student",
    role: "Sample student testimonial",
    initial: "S",
    tone: "mint",
  },
  {
    quote:
      "A good school should help a child become capable and kind. The strongest part of the MKJ approach is the attention given to both learning and character.",
    label: "MKJ Family",
    role: "Sample family testimonial",
    initial: "F",
    tone: "blue",
  },
];

function QuoteMark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M8.8 7.5c-3 2.6-4.8 6-4.8 10.2 0 4.1 2 6.8 5.4 6.8 2.7 0 4.8-2 4.8-4.7 0-2.5-1.8-4.4-4.2-4.4-.6 0-1.2.1-1.7.3.5-2.2 1.7-4.2 3.8-6.1L8.8 7.5Zm14 0c-3 2.6-4.8 6-4.8 10.2 0 4.1 2 6.8 5.4 6.8 2.7 0 4.8-2 4.8-4.7 0-2.5-1.8-4.4-4.2-4.4-.6 0-1.2.1-1.7.3.5-2.2 1.7-4.2 3.8-6.1l-3.3-2.1Z" />
    </svg>
  );
}

export default function Testimonials() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];

  useEffect(() => {
    if (reduceMotion) return undefined;
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % testimonials.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section className="testimonials-section testimonials-v2" aria-labelledby="testimonials-title">
      <div className="testimonials-v2-word" aria-hidden="true">VOICES</div>

      <div className="testimonials-container testimonials-v2-container">
        <motion.div
          className="testimonials-heading testimonials-v2-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduceMotion ? 0 : 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-kicker">Voices from our community</span>
          <h2 id="testimonials-title">School should feel good <em>from the inside.</em></h2>
          <p>
            Trust is built in everyday moments — how children are spoken to, how questions are welcomed, and how families are kept close to the learning journey.
          </p>
        </motion.div>

        <motion.div
          className="testimonial-stage"
          initial={reduceMotion ? false : { opacity: 0, y: 42, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: reduceMotion ? 0 : 0.82, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={`testimonial-stage-accent testimonial-stage-accent--${testimonial.tone}`} aria-hidden="true" />
          <div className="testimonial-stage-quote-mark"><QuoteMark /></div>

          <div className="testimonial-stage-copy" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={reduceMotion ? false : { opacity: 0, y: 28, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -20, filter: "blur(4px)" }}
                transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <blockquote>“{testimonial.quote}”</blockquote>
                <div className="testimonial-person">
                  <div className={`testimonial-avatar testimonial-avatar--${testimonial.tone}`} aria-hidden="true">
                    {testimonial.initial}
                  </div>
                  <div>
                    <strong>{testimonial.label}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="testimonial-controls" aria-label="Choose testimonial">
            {testimonials.map((item, index) => (
              <button
                key={item.label + index}
                type="button"
                className={index === active ? "is-active" : ""}
                onClick={() => setActive(index)}
                aria-label={`Show testimonial ${index + 1}`}
                aria-pressed={index === active}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <i />
              </button>
            ))}
          </div>
        </motion.div>

        <p className="testimonial-disclaimer">
          Sample copy for layout preview — replace with approved MKJ family and student testimonials before final public launch.
        </p>
      </div>
    </section>
  );
}
