import { motion, useReducedMotion } from "motion/react";
import "../testimonials.css";

const testimonials = [
  {
    quote:
      "What stands out is the way children are encouraged to ask questions, explain their thinking, and feel proud of the progress they make each day.",
    label: "MKJ Parent",
    role: "Sample family testimonial",
    initial: "P",
  },
  {
    quote:
      "I like that learning does not feel like memorising everything. We get to make things, share ideas, work with friends, and learn from our mistakes.",
    label: "MKJ Student",
    role: "Sample student testimonial",
    initial: "S",
  },
  {
    quote:
      "A good school should help a child become capable and kind. The strongest part of the MKJ approach is the attention given to both learning and character.",
    label: "MKJ Family",
    role: "Sample family testimonial",
    initial: "F",
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

  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="testimonials-orb testimonials-orb--one" aria-hidden="true" />
      <div className="testimonials-orb testimonials-orb--two" aria-hidden="true" />

      <div className="testimonials-container">
        <motion.div
          className="testimonials-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <span className="section-kicker">Voices from our community</span>
          <h2 id="testimonials-title">What families value in an MKJ education.</h2>
          <p>
            The strongest school communities are built on trust, communication, and children who feel confident being themselves while they learn.
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.article
              className="testimonial-card"
              key={testimonial.label + index}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.55,
                delay: reduceMotion ? 0 : index * 0.12,
                ease: "easeOut",
              }}
              whileHover={reduceMotion ? undefined : { y: -5 }}
            >
              <div className="testimonial-quote-mark">
                <QuoteMark />
              </div>

              <blockquote>“{testimonial.quote}”</blockquote>

              <div className="testimonial-person">
                <div className="testimonial-avatar" aria-hidden="true">
                  {testimonial.initial}
                </div>
                <div>
                  <strong>{testimonial.label}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p
          className="testimonial-disclaimer"
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={reduceMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.2 }}
        >
          Sample copy for layout preview — replace with approved MKJ family and student testimonials before launch.
        </motion.p>
      </div>
    </section>
  );
}
