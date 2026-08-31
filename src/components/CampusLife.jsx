import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

const campusMoments = [
  {
    title: "Curious classrooms",
    caption: "Spaces for asking, making, reading, and discovering together.",
    image: "https://images.unsplash.com/photo-1719159381916-062fa9f435a6?auto=format&fit=crop&w=1800&q=86",
    alt: "Temporary preview photograph of students learning in a bright classroom",
  },
  {
    title: "Creative corners",
    caption: "Art, music, movement, and imagination woven into the school day.",
    image: "https://images.unsplash.com/photo-1771765812031-22653b4c70a6?auto=format&fit=crop&w=1600&q=86",
    alt: "Temporary preview photograph of children creating artwork in a classroom",
  },
  {
    title: "Learning outdoors",
    caption: "Fresh air, movement, observation, and play beyond four walls.",
    image: "https://images.unsplash.com/photo-1566938089211-5821c49b3548?auto=format&fit=crop&w=1600&q=86",
    alt: "Temporary preview photograph of children enjoying a school playground",
  },
  {
    title: "Growing together",
    caption: "Shared projects that turn classmates into a learning community.",
    image: "https://images.unsplash.com/photo-1759143101324-d375443f1955?auto=format&fit=crop&w=1600&q=86",
    alt: "Temporary preview photograph of school children working together",
  },
  {
    title: "Moments worth celebrating",
    caption: "Assemblies, showcases, and school traditions families remember.",
    image: "https://images.unsplash.com/photo-1764791485255-39c3d07bf243?auto=format&fit=crop&w=1800&q=86",
    alt: "Temporary preview photograph of children performing during a school celebration",
  },
];

function CampusCard({ moment, index, reduceMotion }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 88%", "end 12%"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.45, 1], [0.94, 1, 0.965]);
  const opacity = useTransform(scrollYProgress, [0, 0.32, 0.84, 1], [0.35, 1, 1, 0.48]);
  const imageY = useTransform(scrollYProgress, [0, 1], [-28, 34]);

  return (
    <motion.figure
      ref={cardRef}
      className={`pg-campus-card pg-campus-card--${index + 1}`}
      style={reduceMotion ? undefined : { scale, opacity }}
    >
      <div className="pg-campus-media">
        <motion.img
          src={moment.image}
          alt={moment.alt}
          loading="lazy"
          decoding="async"
          style={reduceMotion ? undefined : { y: imageY, scale: 1.08 }}
        />
        <div className="pg-campus-shade" aria-hidden="true" />
        <div className="pg-campus-index" aria-hidden="true">0{index + 1}</div>
      </div>
      <figcaption>
        <h3>{moment.title}</h3>
        <p>{moment.caption}</p>
      </figcaption>
    </motion.figure>
  );
}

export default function CampusLife() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="pg-campus" id="campus-life" aria-labelledby="campus-title">
      <div className="pg-section-shell pg-campus-shell">
        <div className="pg-campus-heading-wrap">
          <motion.div
            className="pg-campus-heading"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: reduceMotion ? 0 : 0.62, ease: [0.23, 1, 0.32, 1] }}
          >
            <p className="pg-kicker">Campus life</p>
            <h2 id="campus-title">A school day should have texture.</h2>
            <p>
              Focused learning, creative energy, movement, friendship, and moments worth remembering.
              School life is richer when children experience more than one kind of success.
            </p>
            <div className="pg-campus-side-note">
              <span>Photography note</span>
              <p>All images shown here are temporary previews and should be replaced with authentic MKJ campus photography before launch.</p>
            </div>
          </motion.div>
        </div>

        <div className="pg-campus-gallery">
          {campusMoments.map((moment, index) => (
            <CampusCard
              key={moment.title}
              moment={moment}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
