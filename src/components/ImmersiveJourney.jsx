import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

const scenes = [
  {
    title: "Questions become conversations.",
    copy: "A strong school day gives children room to ask, listen, explain, and make sense of what they are learning.",
    image: "https://images.unsplash.com/photo-1719159381916-062fa9f435a6?auto=format&fit=crop&w=1900&q=88",
    alt: "Temporary preview photograph of children learning together in a classroom",
  },
  {
    title: "Ideas become visible.",
    copy: "Creative work gives learners another way to think, express themselves, and turn an idea into something they can share.",
    image: "https://images.unsplash.com/photo-1771765812031-22653b4c70a6?auto=format&fit=crop&w=1900&q=88",
    alt: "Temporary preview photograph of children creating artwork in a classroom",
  },
  {
    title: "Energy gets somewhere to go.",
    copy: "Movement, play, and time outdoors are part of a balanced day that helps children return to learning with focus.",
    image: "https://images.unsplash.com/photo-1566938089211-5821c49b3548?auto=format&fit=crop&w=1900&q=88",
    alt: "Temporary preview photograph of children enjoying a school playground",
  },
  {
    title: "Confidence grows together.",
    copy: "Shared projects and everyday participation help children learn how to contribute, collaborate, and speak up with confidence.",
    image: "https://images.unsplash.com/photo-1759143101324-d375443f1955?auto=format&fit=crop&w=1900&q=88",
    alt: "Temporary preview photograph of school children working together",
  },
  {
    title: "Progress deserves to be noticed.",
    copy: "School is also made of the moments children remember: showing their work, taking part, and feeling proud of steady progress.",
    image: "https://images.unsplash.com/photo-1764791485255-39c3d07bf243?auto=format&fit=crop&w=1900&q=88",
    alt: "Temporary preview photograph of children taking part in a school celebration",
  },
];

function JourneyScene({ scene, index, total, progress, reduceMotion }) {
  const segment = 1 / total;
  const start = index * segment;
  const focusIn = start + segment * 0.18;
  const focusOut = start + segment * 0.78;
  const end = Math.min(1, start + segment);
  const first = index === 0;
  const last = index === total - 1;

  const opacity = useTransform(
    progress,
    [start, focusIn, focusOut, end],
    [first ? 1 : 0, 1, 1, last ? 1 : 0],
  );
  const scale = useTransform(
    progress,
    [start, focusIn, focusOut, end],
    [first ? 1 : 0.84, 1, 1, last ? 1 : 0.84],
  );
  const x = useTransform(
    progress,
    [start, focusIn, focusOut, end],
    [first ? "0%" : "18%", "0%", "0%", last ? "0%" : "-18%"],
  );
  const rotateY = useTransform(
    progress,
    [start, focusIn, focusOut, end],
    [first ? 0 : 42, 0, 0, last ? 0 : -42],
  );
  const rotateZ = useTransform(
    progress,
    [start, focusIn, focusOut, end],
    [first ? 0 : 2.5, 0, 0, last ? 0 : -2.5],
  );
  const imageScale = useTransform(
    progress,
    [start, focusIn, focusOut, end],
    [1.14, 1.04, 1.02, 1.12],
  );
  const imageX = useTransform(
    progress,
    [start, focusIn, focusOut, end],
    ["4%", "0%", "0%", "-4%"],
  );
  const captionY = useTransform(
    progress,
    [start, focusIn, focusOut, end],
    [first ? 0 : 22, 0, 0, last ? 0 : -18],
  );

  return (
    <motion.figure
      className="cinema-journey-scene"
      style={
        reduceMotion
          ? { opacity: 1 }
          : { opacity, scale, x, rotateY, rotateZ }
      }
    >
      <div className="cinema-journey-media">
        <motion.img
          src={scene.image}
          alt={scene.alt}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
          style={reduceMotion ? undefined : { scale: imageScale, x: imageX }}
        />
        <div className="cinema-journey-shade" aria-hidden="true" />
      </div>

      <motion.figcaption style={reduceMotion ? undefined : { y: captionY }}>
        <h3>{scene.title}</h3>
        <p>{scene.copy}</p>
      </motion.figcaption>
    </motion.figure>
  );
}

export default function ImmersiveJourney() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    mass: 0.24,
  });
  const orbitRotate = useTransform(smoothProgress, [0, 1], [0, 300]);
  const orbitScale = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1.04, 0.92]);
  const labelY = useTransform(smoothProgress, [0, 1], [0, -34]);

  return (
    <section
      ref={sectionRef}
      className="cinema-journey"
      aria-labelledby="cinema-journey-title"
    >
      <div className="cinema-journey-sticky">
        <div className="cinema-journey-intro">
          <motion.p
            className="cinema-journey-kicker"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            A school day in motion
          </motion.p>
          <motion.h2
            id="cinema-journey-title"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: reduceMotion ? 0 : 0.62, ease: [0.23, 1, 0.32, 1] }}
          >
            One day. Many angles.
          </motion.h2>
          <motion.p
            className="cinema-journey-lead"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: reduceMotion ? 0 : 0.56, delay: reduceMotion ? 0 : 0.05, ease: [0.23, 1, 0.32, 1] }}
          >
            Scroll through a visual story of the kind of balanced, human school experience MKJ is working to create.
          </motion.p>
        </div>

        <div className="cinema-journey-stage">
          <motion.div
            className="cinema-journey-orbit"
            aria-hidden="true"
            style={reduceMotion ? undefined : { rotate: orbitRotate, scale: orbitScale }}
          >
            <span />
            <span />
            <span />
          </motion.div>

          <motion.div
            className="cinema-journey-axis"
            aria-hidden="true"
            style={reduceMotion ? undefined : { y: labelY }}
          >
            <i />
            <i />
          </motion.div>

          <div className="cinema-journey-scenes">
            {scenes.map((scene, index) => (
              <JourneyScene
                key={scene.title}
                scene={scene}
                index={index}
                total={scenes.length}
                progress={smoothProgress}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>

          <div className="cinema-journey-progress" aria-hidden="true">
            <motion.span style={{ scaleX: reduceMotion ? 1 : smoothProgress }} />
          </div>
        </div>

        <p className="cinema-journey-note">
          Preview photography only. Authentic MKJ images should replace these frames before final launch.
        </p>
      </div>
    </section>
  );
}
