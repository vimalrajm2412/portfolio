import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PortfolioHero } from "./components/PortfolioHero.jsx";
import { SectionPanel } from "./components/SectionPanel.jsx";
import { EntryCard } from "./components/EntryCard.jsx";
import { PillGroup } from "./components/PillGroup.jsx";
import { EducationLeadership } from "./components/EducationLeadership.jsx";
import { ResumePreview } from "./components/ResumePreview.jsx";
import { OnboardingModal } from "./components/OnboardingModal.jsx";
import { softwarePortfolio } from "./data/portfolioData.js";

const PROFILE_KEY = "vm-portfolio-name";
const THEME_KEY = "vm-portfolio-mode";

function getStoredName() {
  return window.localStorage.getItem(PROFILE_KEY) || "";
}

function getStoredMode() {
  return window.localStorage.getItem(THEME_KEY) || "light";
}

const sectionAnimation = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

function TopNav({ mode, onToggleMode }) {
  return (
    <nav className="site-nav">
      <a className="nav-brand" href="#top" aria-label="Vimalraj M home">
        <span>VM</span>
        <strong>Vimalraj M</strong>
      </a>
      <div className="nav-links">
        <a href={softwarePortfolio.identity.resume} download>
          Resume
        </a>
        <a href="#contact">Contact</a>
        <button
          type="button"
          className={`theme-toggle ${mode === "dark" ? "is-dark" : "is-light"}`}
          onClick={onToggleMode}
          aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
          aria-pressed={mode === "dark"}
        >
          <span className="theme-toggle-track" aria-hidden="true">
            <span className="theme-toggle-knob" />
          </span>
          <span className="theme-toggle-icon" aria-hidden="true">
            {mode === "dark" ? "🌙" : "☀️"}
          </span>
        </button>
      </div>
    </nav>
  );
}

function WhyHireModal({ isOpen, onClose }) {
  const skills = [
    ...softwarePortfolio.technicalSkills.slice(0, 8),
    "Product Engineering",
    "Leadership",
  ];

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="modal-shell"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="why-modal"
            initial={{ opacity: 0, y: 28, scale: 0.98, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 18, scale: 0.98, filter: "blur(10px)" }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-head">
              <div>
                <p className="eyebrow">Why Hire Vimalraj?</p>
                <h2>Software engineer with product instincts, execution depth, and strong fundamentals.</h2>
              </div>
              <button type="button" className="icon-button" onClick={onClose} aria-label="Close modal">
                ×
              </button>
            </div>

            <div className="modal-scroll-body">
              <div className="modal-grid">
                <div className="modal-card modal-card-strong">
                  <span className="metric-value">Amazon</span>
                  <p>SDE internship experience on seller-facing workflows using React, TypeScript, Java APIs, Cypress, and telemetry.</p>
                </div>
                <div className="modal-card">
                  <span className="metric-value">9.13</span>
                  <p>CGPA with consistent academic performance and engineering discipline.</p>
                </div>
                <div className="modal-card">
                  <span className="metric-value">10+</span>
                  <p>Intercollege technical event wins demonstrating strong problem-solving and execution ability.</p>
                </div>
              </div>

              <div className="modal-columns">
                <div>
                  <h3>Impact</h3>
                  <ul className="clean-list">
                    {softwarePortfolio.whyHire.topHighlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Technical Strengths</h3>
                  <div className="skill-cloud">
                    {skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-actions">
                <a className="primary-btn" href={softwarePortfolio.identity.resume} download>
                  Download Resume
                </a>
                <a className="secondary-btn" href={`mailto:${softwarePortfolio.identity.email}`}>
                  Contact
                </a>
                <a className="secondary-btn" href={softwarePortfolio.identity.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default function App() {
  const [visitorName, setVisitorName] = useState(() => getStoredName());
  const [showOnboarding, setShowOnboarding] = useState(() => !getStoredName());
  const [mode, setMode] = useState(() => getStoredMode());
  const [whyOpen, setWhyOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.mode = mode;
    window.localStorage.setItem(THEME_KEY, mode);
  }, [mode]);

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousOverscroll = document.documentElement.style.overscrollBehavior;

    if (whyOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.overscrollBehavior = "none";
    } else {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.documentElement.style.overscrollBehavior = previousOverscroll;
    }

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.documentElement.style.overscrollBehavior = previousOverscroll;
    };
  }, [whyOpen]);

  function handleOnboardingSubmit(name) {
    const normalized = name.trim() || "there";
    window.localStorage.setItem(PROFILE_KEY, normalized);
    setVisitorName(normalized);
    setShowOnboarding(false);
  }

  return (
    <div id="top" className="app-shell">
      <div className="premium-background" aria-hidden="true">
        <div className="mesh mesh-one" />
        <div className="mesh mesh-two" />
        <div className="mesh mesh-three" />
      </div>

      <TopNav
        mode={mode}
        onToggleMode={() => setMode((current) => (current === "dark" ? "light" : "dark"))}
      />

      <AnimatePresence>
        {showOnboarding ? <OnboardingModal onSubmit={handleOnboardingSubmit} /> : null}
      </AnimatePresence>

      <main className="page-shell">
        <PortfolioHero data={softwarePortfolio} visitorName={visitorName} />

        <motion.div
          className="content-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          transition={{ staggerChildren: 0.08 }}
        >
          <motion.div variants={sectionAnimation} className="wide-panel">
            <SectionPanel kicker="About" title="Thoughtful software, built with clarity.">
              <div className="about-grid">
                <p className="about-intro">{softwarePortfolio.sections.about.description}</p>
                <ul className="clean-list">
                  {softwarePortfolio.sections.about.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </SectionPanel>
          </motion.div>

          <motion.div variants={sectionAnimation}>
            <SectionPanel kicker="Experience" title="Professional Experience">
              <div className="stack-list">
                {softwarePortfolio.experiences.map((entry) => (
                  <EntryCard key={entry.title} entry={entry} variant="experience" />
                ))}
              </div>
            </SectionPanel>
          </motion.div>

          <motion.div variants={sectionAnimation}>
            <SectionPanel kicker="Projects" title="Featured Projects">
              <div className="stack-list">
                {softwarePortfolio.projects.map((entry) => (
                  <EntryCard key={entry.title} entry={entry} variant="project" />
                ))}
              </div>
            </SectionPanel>
          </motion.div>

          <motion.div variants={sectionAnimation}>
            <SectionPanel kicker="Skills" title="Technical Skills">
              <PillGroup title="Core Stack" items={softwarePortfolio.technicalSkills} />
              <PillGroup title="Foundations" items={softwarePortfolio.softSkills} />
              <PillGroup title="Focus Areas" items={softwarePortfolio.interests} />
            </SectionPanel>
          </motion.div>

          <motion.div variants={sectionAnimation}>
            <SectionPanel kicker="Education" title="Academic Background">
              <EducationLeadership
                education={softwarePortfolio.education}
                roles={[]}
                educationTitle="Education"
                rolesTitle=""
              />
            </SectionPanel>
          </motion.div>

          <motion.div variants={sectionAnimation}>
            <SectionPanel kicker="Leadership" title="Leadership & Positions of Responsibility">
              <div className="info-card leadership-card">
                <div className="card-head">
                  <h3>Leadership</h3>
                  <span className="card-pill">Leadership</span>
                </div>
                <div className="timeline-list">
                  {softwarePortfolio.leadership.map((item) => (
                    <div className="timeline-item" key={item.title}>
                      <span className="timeline-icon">{item.icon}</span>
                      <div className="timeline-content">
                        <div className="timeline-topline">
                          <strong>{item.title}</strong>
                          {item.year ? <span className="year-badge">{item.year}</span> : null}
                        </div>
                        {item.subtitle ? <p>{item.subtitle}</p> : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionPanel>
          </motion.div>

          <motion.div variants={sectionAnimation}>
            <SectionPanel kicker="Recognition" title="Recognition & Achievements">
              <div className="info-card recognition-card">
                <div className="card-head">
                  <h3>Recognition</h3>
                  <span className="card-pill">Recognition</span>
                </div>
                <div className="timeline-list">
                  {softwarePortfolio.recognitions.map((item) => (
                    <div className="timeline-item" key={item.title}>
                      <span className="timeline-icon">{item.icon}</span>
                      <div className="timeline-content">
                        <div className="timeline-topline">
                          <strong>{item.title}</strong>
                          {item.year ? <span className="year-badge">{item.year}</span> : null}
                        </div>
                        {item.subtitle ? <p>{item.subtitle}</p> : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionPanel>
          </motion.div>

          <motion.div variants={sectionAnimation} className="wide-panel">
            <SectionPanel kicker="Resume" title="Resume">
              <ResumePreview resume={softwarePortfolio.identity.resume} />
            </SectionPanel>
          </motion.div>

          <motion.div variants={sectionAnimation} className="wide-panel" id="contact">
            <SectionPanel kicker="Contact" title="Let’s build something clear and useful.">
              <div className="contact-panel">
                <p>
                  Always open to meaningful engineering conversations, technical collaborations and innovative product ideas.
                </p>
                <div className="contact-actions">
                  <a className="primary-btn" href={`mailto:${softwarePortfolio.identity.email}`}>
                    Email Me
                  </a>
                  <a className="secondary-btn" href={softwarePortfolio.identity.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a className="secondary-btn" href={softwarePortfolio.identity.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </div>
              </div>
            </SectionPanel>
          </motion.div>
        </motion.div>
      </main>

      <button type="button" className="floating-hire-button" onClick={() => setWhyOpen(true)}>
        Why Hire Vimalraj?
      </button>

      <WhyHireModal isOpen={whyOpen} onClose={() => setWhyOpen(false)} />
    </div>
  );
}
