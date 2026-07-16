import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

function formatVisitorName(name) {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export function PortfolioHero({ data, visitorName }) {
  const cards = data.hero?.cards ?? [];
  const greeting = visitorName
    ? `Hi ${formatVisitorName(visitorName)}, I'm Vimalraj 👋`
    : "Hi, I'm Vimalraj 👋";

  return (
    <motion.header
      className="hero"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <motion.section className="hero-copy" variants={item}>
        <p className="hero-greeting">{greeting}</p>
        <p className="hero-eyebrow">{data.hero.label}</p>
        <h1>{data.identity.name}</h1>
        <p className="hero-tagline">{data.hero.tagline}</p>
        <p className="hero-headline">{data.hero.headline}</p>
        <p className="hero-description">{data.hero.description}</p>

        <div className="hero-actions">
          <a className="primary-btn" href={data.identity.resume} download>
            Download Resume
          </a>
          <a className="secondary-btn" href={data.identity.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            GitHub
          </a>
          <a className="secondary-btn" href={data.identity.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            LinkedIn
          </a>
          <a className="secondary-btn" href={`mailto:${data.identity.email}`} aria-label="Email">
            Email
          </a>
        </div>
      </motion.section>

      <motion.aside className="hero-visual" variants={item}>
        <div className="portrait-card">
          <img src={data.identity.portrait} alt="Vimalraj M portrait" />
        </div>
      </motion.aside>

      <div className="hero-stats" role="list">
        {cards.map((card) => (
          <div className="hero-stat-card" role="listitem" key={card.title}>
            <span className="hero-stat-title">{card.title}</span>
            <span className="hero-stat-body">{card.body}</span>
          </div>
        ))}
      </div>
    </motion.header>
  );
}
