import { motion, useReducedMotion } from "motion/react";
import "../campus.css";

const campusMoments = [
  {
    title: "Curious classrooms",
    caption: "Spaces for asking, making, reading, and discovering together.",
    scene: "classroom",
    size: "wide",
  },
  {
    title: "Creative corners",
    caption: "Art, music, movement, and imagination woven into the school day.",
    scene: "arts",
    size: "tall",
  },
  {
    title: "Learning outdoors",
    caption: "Fresh air, movement, observation, and play beyond four walls.",
    scene: "outdoor",
    size: "standard",
  },
  {
    title: "Growing together",
    caption: "Shared projects that turn classmates into a learning community.",
    scene: "collaboration",
    size: "standard",
  },
  {
    title: "Moments worth celebrating",
    caption: "Assemblies, showcases, and school traditions families remember.",
    scene: "celebration",
    size: "wide",
  },
];

function SceneVisual({ type }) {
  if (type === "arts") {
    return (
      <svg viewBox="0 0 640 720" role="img" aria-label="Illustration of a bright creative arts corner">
        <defs><linearGradient id="arts-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fff6df" /><stop offset="1" stopColor="#e7f1fb" /></linearGradient></defs>
        <rect width="640" height="720" fill="url(#arts-bg)" /><circle cx="515" cy="120" r="74" fill="#f0bd58" opacity=".35" /><rect x="88" y="118" width="464" height="334" rx="34" fill="#ffffff" opacity=".88" />
        <path d="M160 455L250 255L337 455" fill="#dceaf6" stroke="#174f85" strokeWidth="12" strokeLinejoin="round" /><rect x="225" y="211" width="118" height="108" rx="12" fill="#f8d985" transform="rotate(-4 225 211)" /><path d="M246 286C282 244 315 257 332 294" stroke="#d46858" strokeWidth="16" strokeLinecap="round" fill="none" /><circle cx="274" cy="263" r="20" fill="#174f85" opacity=".82" />
        <rect x="125" y="498" width="390" height="34" rx="17" fill="#0b2447" opacity=".84" /><circle cx="200" cy="568" r="34" fill="#e8b44f" /><circle cx="320" cy="590" r="34" fill="#6f9ecb" /><circle cx="438" cy="558" r="34" fill="#d46c5f" /><path d="M179 643C207 604 240 604 267 643M296 661C320 621 351 621 374 661M411 641C438 602 470 603 498 641" stroke="#ffffff" strokeWidth="14" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "outdoor") {
    return (
      <svg viewBox="0 0 760 520" role="img" aria-label="Illustration of children learning outdoors on a green campus">
        <defs><linearGradient id="outdoor-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#dceefe" /><stop offset="1" stopColor="#f7fbff" /></linearGradient></defs>
        <rect width="760" height="520" fill="url(#outdoor-sky)" /><circle cx="625" cy="94" r="52" fill="#f1c86d" /><path d="M0 342C130 298 216 350 340 321C469 291 559 309 760 272V520H0Z" fill="#bcd79c" /><path d="M0 395C148 360 259 407 401 370C533 336 643 356 760 332V520H0Z" fill="#82ad76" />
        <rect x="98" y="222" width="16" height="106" rx="8" fill="#70543b" /><circle cx="106" cy="205" r="72" fill="#6d9d68" /><circle cx="152" cy="224" r="50" fill="#7dad74" /><rect x="492" y="264" width="150" height="18" rx="9" fill="#0b2447" opacity=".82" /><rect x="520" y="282" width="14" height="68" rx="7" fill="#0b2447" opacity=".7" /><rect x="602" y="282" width="14" height="68" rx="7" fill="#0b2447" opacity=".7" />
        <circle cx="315" cy="330" r="26" fill="#e8b44f" /><path d="M278 412C282 354 347 354 352 412" fill="#164a7c" /><circle cx="408" cy="338" r="24" fill="#d57a67" /><path d="M371 414C376 362 438 362 444 414" fill="#f3f7fb" /><path d="M315 382L386 366" stroke="#0b2447" strokeWidth="9" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "collaboration") {
    return (
      <svg viewBox="0 0 760 520" role="img" aria-label="Illustration of students collaborating around a project table">
        <rect width="760" height="520" fill="#eef5fb" /><rect x="70" y="66" width="620" height="296" rx="36" fill="#ffffff" /><rect x="145" y="254" width="470" height="32" rx="16" fill="#d7b173" /><rect x="190" y="286" width="18" height="108" rx="9" fill="#81633e" /><rect x="554" y="286" width="18" height="108" rx="9" fill="#81633e" />
        <circle cx="217" cy="205" r="34" fill="#e9b84f" /><path d="M167 280C173 224 255 224 263 280" fill="#0b2447" /><circle cx="378" cy="176" r="32" fill="#d77a66" /><path d="M331 258C336 207 419 207 426 258" fill="#7aa6ce" /><circle cx="536" cy="208" r="34" fill="#cca378" /><path d="M488 280C494 226 577 226 585 280" fill="#f1d48b" />
        <rect x="315" y="225" width="124" height="18" rx="9" fill="#e8b44f" transform="rotate(5 315 225)" /><circle cx="348" cy="226" r="12" fill="#17518a" /><circle cx="410" cy="232" r="12" fill="#d66d60" /><path d="M293 356H468" stroke="#d7e3ee" strokeWidth="12" strokeLinecap="round" /><path d="M324 389H438" stroke="#d7e3ee" strokeWidth="12" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "celebration") {
    return (
      <svg viewBox="0 0 980 520" role="img" aria-label="Illustration of a warm school assembly and student showcase">
        <defs><linearGradient id="stage-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#0b2447" /><stop offset="1" stopColor="#174f85" /></linearGradient></defs>
        <rect width="980" height="520" fill="url(#stage-bg)" /><circle cx="130" cy="92" r="58" fill="#e8b44f" opacity=".2" /><circle cx="866" cy="118" r="80" fill="#8fb5d7" opacity=".16" /><path d="M130 86L154 124L197 111L177 150L213 177L168 180L161 224L136 187L96 207L110 165L69 146L113 139Z" fill="#e8b44f" opacity=".9" />
        <rect x="214" y="118" width="552" height="250" rx="30" fill="#f8fbff" /><path d="M214 118H766V168H214Z" fill="#f0c96f" /><circle cx="400" cy="239" r="32" fill="#d37865" /><path d="M346 330C355 264 449 264 459 330" fill="#174f85" /><circle cx="584" cy="239" r="32" fill="#e8b44f" /><path d="M530 330C539 264 633 264 643 330" fill="#dfeaf4" /><path d="M440 228C471 205 511 205 543 228" stroke="#d69d31" strokeWidth="12" strokeLinecap="round" />
        <circle cx="248" cy="430" r="32" fill="#f1d88f" /><circle cx="345" cy="438" r="30" fill="#759fc5" /><circle cx="450" cy="431" r="34" fill="#d67b6c" /><circle cx="556" cy="441" r="28" fill="#efcf81" /><circle cx="653" cy="429" r="33" fill="#8eb2d2" /><circle cx="748" cy="440" r="29" fill="#df8c78" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 980 520" role="img" aria-label="Illustration of a welcoming, light-filled classroom">
      <defs><linearGradient id="class-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#e6f2fb" /><stop offset="1" stopColor="#fff7e6" /></linearGradient></defs>
      <rect width="980" height="520" fill="url(#class-bg)" /><rect x="70" y="72" width="840" height="344" rx="34" fill="#ffffff" opacity=".92" /><rect x="120" y="118" width="318" height="155" rx="22" fill="#d7ebf8" /><path d="M126 244L220 161L291 217L355 158L432 244" fill="#9dc18e" opacity=".9" /><circle cx="363" cy="156" r="28" fill="#f0c96f" />
      <rect x="505" y="126" width="323" height="26" rx="13" fill="#123765" opacity=".82" /><rect x="505" y="176" width="248" height="18" rx="9" fill="#cfdae5" /><rect x="505" y="214" width="286" height="18" rx="9" fill="#cfdae5" /><rect x="191" y="333" width="598" height="24" rx="12" fill="#d5b06f" /><rect x="248" y="357" width="16" height="80" rx="8" fill="#7d613f" /><rect x="718" y="357" width="16" height="80" rx="8" fill="#7d613f" />
      <circle cx="319" cy="308" r="28" fill="#e8b44f" /><path d="M277 376C281 329 357 329 362 376" fill="#164b7c" /><circle cx="493" cy="304" r="28" fill="#d47967" /><path d="M451 376C456 327 532 327 537 376" fill="#eaf1f7" /><circle cx="664" cy="306" r="28" fill="#c89c73" /><path d="M622 376C627 329 703 329 708 376" fill="#f0cd7a" /><path d="M354 336L455 326M532 326L623 338" stroke="#0b2447" strokeWidth="8" strokeLinecap="round" opacity=".7" />
    </svg>
  );
}

export default function CampusLife() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="campus-section" id="campus-life" aria-labelledby="campus-title">
      <div className="campus-container">
        <motion.div
          className="campus-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: reduceMotion ? 0 : 0.55, ease: "easeOut" }}
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
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : index * 0.1, ease: "easeOut" }}
            >
              <div className="campus-image-wrap">
                <motion.div className="campus-image" whileHover={reduceMotion ? undefined : { scale: 1.035 }} transition={{ duration: 0.35, ease: "easeOut" }}>
                  <SceneVisual type={moment.scene} />
                </motion.div>
                <div className="campus-image-shade" aria-hidden="true" />
              </div>
              <figcaption>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{moment.title}</h3><p>{moment.caption}</p></div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.p className="campus-note" initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.7 }} transition={{ duration: reduceMotion ? 0 : 0.5, ease: "easeOut" }}>
          Illustrated placeholders for now — ready to swap with authentic MKJ campus photography without changing the layout.
        </motion.p>
      </div>
    </section>
  );
}
