import { motion, useReducedMotion } from "motion/react";
import "../campus.css";

const campusMoments = [
  {
    title: "Curious classrooms",
    caption: "Spaces for asking, making, reading, and discovering together.",
    image: "https://images.unsplash.com/photo-1719159381916-062fa9f435a6?auto=format&fit=crop&w=1800&q=84",
    alt: "Temporary stock photograph of students learning in a bright classroom",
    size: "wide",
  },
  {
    title: "Creative corners",
    caption: "Art, music, movement, and imagination woven into the school day.",
    image: "https://images.unsplash.com/photo-1771765812031-22653b4c70a6?auto=format&fit=crop&w=1400&q=84",
    alt: "Temporary stock photograph of children creating artwork in a classroom",
    size: "tall",
  },
  {
    title: "Learning outdoors",
    caption: "Fresh air, movement, observation, and play beyond four walls.",
    image: "https://images.unsplash.com/photo-1566938089211-5821c49b3548?auto=format&fit=crop&w=1500&q=84",
    alt: "Temporary stock photograph of children enjoying a school playground",
    size: "standard",
  },
  {
    title: "Growing together",
    caption: "Shared projects that turn classmates into a learning community.",
    image: "https://images.unsplash.com/photo-1759143101324-d375443f1955?auto=format&fit=crop&w=1400&q=84",
    alt: "Temporary stock photograph of school children together in a classroom",
    size: "standard",
  },
  {
    title: "Moments worth celebrating",
    caption: "Assemblies, showcases, and school traditions families remember.",
    image: "https://images.unsplash.com/photo-1764791485255-39c3d07bf243?auto=format&fit=crop&w=1800&q=84",
    alt: "Temporary stock photograph of children performing during a school celebration",
    size: "wide",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 6l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CampusLife() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="campus-section campus-v2" id="campus-life" aria-labelledby="campus-title">
      <div className="campus-v2-word" aria-hidden="true">LIFE @ MKJ</div>

      <div className="campus-container">
        <motion.div
          className="campus-heading campus-v2-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: reduceMotion ? 0 : 0.74, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-kicker">Campus life</span>
          <h2 id="campus-title">A school day should have <em>texture.</em></h2>
          <p>
            Focused learning, creative energy, movement, friendship, and moments worth remembering — school life is richer when children experience more than one kind of success.
          </p>
        </motion.div>

        <div className="campus-grid campus-v2-grid">
          {campusMoments.map((moment, index) => (
            <motion.figure
              className={`campus-card campus-card--${moment.size}`}
              key={moment.title}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 42,
                      clipPath: "inset(12% 12% 12% 12% round 34px)",
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
                clipPath: "inset(0% 0% 0% 0% round 30px)",
              }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: reduceMotion ? 0 : 0.82,
                delay: reduceMotion ? 0 : index * 0.09,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={reduceMotion ? undefined : { y: -8 }}
            >
              <div className="campus-image-wrap">
                <motion.div
                  className="campus-image"
                  initial={reduceMotion ? false : { scale: 1.12 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: reduceMotion ? 0 : 1.1,
                    delay: reduceMotion ? 0 : index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <motion.img
                    className="campus-photo"
                    src={moment.image}
                    alt={moment.alt}
                    loading="lazy"
                    decoding="async"
                    whileHover={reduceMotion ? undefined : { scale: 1.065 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  />
                </motion.div>
                <div className="campus-image-shade" aria-hidden="true" />
                <span className="campus-photo-label">Preview photo</span>
              </div>

              <figcaption>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{moment.title}</h3>
                  <p>{moment.caption}</p>
                </div>
                <motion.i
                  className="campus-card-arrow"
                  aria-hidden="true"
                  whileHover={reduceMotion ? undefined : { x: 4, rotate: -4 }}
                >
                  <ArrowIcon />
                </motion.i>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.p
          className="campus-note"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: reduceMotion ? 0 : 0.58, ease: "easeOut" }}
        >
          Temporary preview photography — ready to replace one-for-one with authentic MKJ campus images.
        </motion.p>
      </div>
    </section>
  );
}
