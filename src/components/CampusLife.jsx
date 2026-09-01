import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

const campusMoments = [
  {
    title: "Curious classrooms",
    caption: "Spaces for asking, making, reading, and discovering together.",
    image: "https://images.unsplash.com/photo-1719159381916-062fa9f435a6?auto=format&fit=crop&w=1900&q=88",
    alt: "Temporary preview photograph of students learning in a bright classroom",
    objectPosition: "50% 46%",
  },
  {
    title: "Creative corners",
    caption: "Art, music, movement, and imagination woven into the school day.",
    image: "https://images.unsplash.com/photo-1771765812031-22653b4c70a6?auto=format&fit=crop&w=1700&q=88",
    alt: "Temporary preview photograph of children creating artwork in a classroom",
    objectPosition: "68% 48%",
  },
  {
    title: "Learning outdoors",
    caption: "Fresh air, movement, observation, and play beyond four walls.",
    image: "https://images.unsplash.com/photo-1566938089211-5821c49b3548?auto=format&fit=crop&w=1700&q=88",
    alt: "Temporary preview photograph of children enjoying a school playground",
    objectPosition: "50% 54%",
  },
  {
    title: "Growing together",
    caption: "Shared projects that turn classmates into a learning community.",
    image: "https://images.unsplash.com/photo-1759143101324-d375443f1955?auto=format&fit=crop&w=1700&q=88",
    alt: "Temporary preview photograph of school children working together",
    objectPosition: "52% 44%",
  },
  {
    title: "Moments worth celebrating",
    caption: "Assemblies, showcases, and school traditions families remember.",
    image: "https://images.unsplash.com/photo-1764791485255-39c3d07bf243?auto=format&fit=crop&w=1900&q=88",
    alt: "Temporary preview photograph of children performing during a school celebration",
    objectPosition: "50% 48%",
  },
];

function CampusFrame({ moment, index, reduceMotion }) {
  return (
    <figure className={`cinema-campus-frame cinema-campus-frame--${index + 1}`}>
      <div className="cinema-campus-media">
        <motion.img
          src={moment.image}
          alt={moment.alt}
          loading="lazy"
          decoding="async"
          style={{ objectPosition: moment.objectPosition }}
          whileHover={reduceMotion ? undefined : { scale: 1.018 }}
          transition={{
            duration: reduceMotion ? 0 : 0.22,
            ease: [0.23, 1, 0.32, 1],
          }}
        />
        <div className="cinema-campus-shade" aria-hidden="true" />
      </div>
      <figcaption>
        <h3>{moment.title}</h3>
        <p>{moment.caption}</p>
      </figcaption>
    </figure>
  );
}

export default function CampusLife() {
  const motionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: motionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 105,
    damping: 28,
    mass: 0.24,
  });

  const trackX = useTransform(
    smoothProgress,
    [0.04, 0.14, 0.25, 0.31, 0.43, 0.49, 0.61, 0.67, 0.79, 0.94],
    ["0vw", "0vw", "-84vw", "-84vw", "-168vw", "-168vw", "-252vw", "-252vw", "-336vw", "-336vw"],
  );

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    let nextIndex = 0;
    if (latest >= 0.74) nextIndex = 4;
    else if (latest >= 0.55) nextIndex = 3;
    else if (latest >= 0.37) nextIndex = 2;
    else if (latest >= 0.2) nextIndex = 1;

    setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
  });

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <section
      className="pg-campus cinema-campus"
      id="campus-life"
      aria-labelledby="campus-title"
    >
      <div className="pg-section-shell cinema-campus-intro">
        <motion.div
          className="cinema-campus-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.32 }}
          transition={{
            duration: reduceMotion ? 0 : 0.62,
            ease: [0.23, 1, 0.32, 1],
          }}
        >
          <div>
            <p className="pg-kicker">Campus life</p>
            <h2 id="campus-title">A school day should have texture.</h2>
          </div>
          <p>
            Focused learning, creative energy, movement, friendship, and moments worth remembering.
            School life is richer when children experience more than one kind of success.
          </p>
        </motion.div>
      </div>

      <div ref={motionRef} className="cinema-campus-motion">
        <div className="cinema-campus-sticky">
          <div className="pg-section-shell cinema-campus-stage-shell">
            <div className="cinema-campus-stage-head">
              <p>Scroll to move through the school day.</p>
              <span aria-hidden="true">
                {String(activeIndex + 1).padStart(2, "0")} / 05
              </span>
            </div>

            <div className="cinema-campus-viewport">
              <motion.div
                className="cinema-campus-track"
                style={!reduceMotion && isDesktop ? { x: trackX } : undefined}
              >
                {campusMoments.map((moment, index) => (
                  <CampusFrame
                    key={moment.title}
                    moment={moment}
                    index={index}
                    reduceMotion={reduceMotion}
                  />
                ))}
              </motion.div>
            </div>

            <div className="cinema-campus-footerline">
              <p>
                All images shown here are temporary previews and should be replaced with authentic MKJ campus photography before launch.
              </p>
              <div className="cinema-campus-progress" aria-hidden="true">
                <motion.span style={{ scaleX: reduceMotion ? 1 : smoothProgress }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
