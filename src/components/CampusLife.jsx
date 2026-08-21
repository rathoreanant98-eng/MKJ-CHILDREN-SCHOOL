import { motion, useReducedMotion } from "motion/react";
import "../campus.css";

const campusMoments = [
  {
    title: "Curious classrooms",
    caption: "Spaces for asking, making, reading, and discovering together.",
    image: "https://images.unsplash.com/photo-1719159381916-062fa9f435a6?auto=format&fit=crop&w=1800&q=82",
    alt: "Temporary stock photograph of students learning in a bright classroom",
    size: "wide",
  },
  {
    title: "Creative corners",
    caption: "Art, music, movement, and imagination woven into the school day.",
    image: "https://images.unsplash.com/photo-1771765812031-22653b4c70a6?auto=format&fit=crop&w=1400&q=82",
    alt: "Temporary stock photograph of children creating artwork in a classroom",
    size: "tall",
  },
  {
    title: "Learning outdoors",
    caption: "Fresh air, movement, observation, and play beyond four walls.",
    image: "https://images.unsplash.com/photo-1566938089211-5821c49b3548?auto=format&fit=crop&w=1500&q=82",
    alt: "Temporary stock photograph of children enjoying a school playground",
    size: "standard",
  },
  {
    title: "Growing together",
    caption: "Shared projects that turn classmates into a learning community.",
    image: "https://images.unsplash.com/photo-1759143101324-d375443f1955?auto=format&fit=crop&w=1400&q=82",
    alt: "Temporary stock photograph of school children together in a classroom",
    size: "standard",
  },
  {
    title: "Moments worth celebrating",
    caption: "Assemblies, showcases, and school traditions families remember.",
    image: "https://images.unsplash.com/photo-1764791485255-39c3d07bf243?auto=format&fit=crop&w=1800&q=82",
    alt: "Temporary stock photograph of children performing during a school celebration",
    size: "wide",
  },
];

export default function CampusLife() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="campus-section" id="campus-life" aria-labelledby="campus-title">
      <div className="campus-container">
        <motion.div
          className="campus-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: reduceMotion ? 0 : 0.68, ease: "easeOut" }}
        >
          <span className="section-kicker">Campus life</span>
          <h2 id="campus-title">School is more than lessons. It is where everyday moments become memories.</h2>
          <p>From focused classroom work to creative expression, outdoor discovery, and shared celebrations, we want every child to feel that they belong to something joyful and meaningful.</p>
        </motion.div>

        <div className="campus-grid">
          {campusMoments.map((moment, index) => (
            <motion.figure
              className={`campus-card campus-card--${moment.size}`}
              key={moment.title}
              initial={reduceMotion ? false : { opacity: 0, y: 44, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: reduceMotion ? 0 : 0.66, delay: reduceMotion ? 0 : index * 0.13, ease: "easeOut" }}
              whileHover={reduceMotion ? undefined : { y: -8, scale: 1.01 }}
            >
              <div className="campus-image-wrap">
                <motion.div
                  className="campus-image"
                  initial={reduceMotion ? false : { scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: reduceMotion ? 0 : 0.95, delay: reduceMotion ? 0 : index * 0.08, ease: "easeOut" }}
                >
                  <motion.img
                    className="campus-photo"
                    src={moment.image}
                    alt={moment.alt}
                    loading="lazy"
                    decoding="async"
                    whileHover={reduceMotion ? undefined : { scale: 1.08 }}
                    transition={{ duration: 0.42, ease: "easeOut" }}
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
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.p
          className="campus-note"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: reduceMotion ? 0 : 0.58, ease: "easeOut" }}
        >
          These are temporary stock photographs for the live preview. We can replace them one-for-one with authentic MKJ campus photos later without changing the layout.
        </motion.p>
      </div>
    </section>
  );
}
