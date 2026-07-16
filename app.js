import React, { useMemo, useState } from "https://esm.sh/react@18";
import { createRoot } from "https://esm.sh/react-dom@18/client";
import htm from "https://esm.sh/htm@3/react";
import { portfolioData } from "./data/portfolioData.js";
import { PortfolioHero } from "./components/PortfolioHero.js";
import { SectionPanel } from "./components/SectionPanel.js";
import { EntryCard } from "./components/EntryCard.js";
import { PillGroup } from "./components/PillGroup.js";
import { EducationLeadership } from "./components/EducationLeadership.js";
import { ResumePreview } from "./components/ResumePreview.js";
import { LandingChoice } from "./components/LandingChoice.js";

const html = htm.bind(React.createElement);

function App() {
  const [track, setTrack] = useState(null);
  const data = useMemo(() => portfolioData[track], [track]);
  const runtimeNote =
    window.location.protocol === "file:"
      ? "This page is opened directly from your file system. Some browsers block PDF previews or related asset loading in this mode. Run npm start in this folder and open http://localhost:3000 for the best result."
      : "";

  React.useEffect(() => {
    document.body.classList.toggle("hardware-theme", track === "hardware");
  }, [track]);

  if (!track) {
    return html`
      <div className="page-shell landing-page-shell">
        <${LandingChoice} onSelect=${setTrack} />
      </div>
    `;
  }

  return html`
    <div className="page-shell">
      <${PortfolioHero}
        track=${track}
        data=${data}
        runtimeNote=${runtimeNote}
        onBack=${() => setTrack(null)}
      />

      <main className="content-grid">
        <${SectionPanel} kicker="Experience" title="Internships">
          <div className="stack-list">
            ${data.experiences.map(
              (entry) => html`<${EntryCard} key=${entry.title} entry=${entry} variant="experience" />`
            )}
          </div>
        </${SectionPanel}>

        <${SectionPanel} kicker="Projects" title="Selected work">
          <div className="stack-list">
            ${data.projects.map(
              (entry) => html`<${EntryCard} key=${entry.title} entry=${entry} variant="project" />`
            )}
          </div>
        </${SectionPanel}>

        <${SectionPanel} kicker="Strengths" title="Skills and interests" className="compact-panel">
          <${PillGroup} title="Technical" items=${data.technicalSkills} />
          <${PillGroup} title="Soft skills" items=${data.softSkills} />
          <${PillGroup} title="Interests" items=${data.interests} />
        </${SectionPanel}>

        <${SectionPanel} kicker="Profile" title="Education and leadership" className="compact-panel">
          <${EducationLeadership} education=${data.education} roles=${data.roles} />
        </${SectionPanel}>

        <${SectionPanel} kicker="Recognition" title="Achievements" className="wide-panel">
          <ul className="achievement-list">
            ${data.achievements.map((item) => html`<li key=${item}>${item}</li>`)}
          </ul>
        </${SectionPanel}>

        <${SectionPanel} kicker="Resume" title="Quick preview" className="wide-panel">
          <${ResumePreview} resume=${data.resume} />
        </${SectionPanel}>
      </main>
    </div>
  `;
}

createRoot(document.getElementById("root")).render(html`<${App} />`);
