import React from "https://esm.sh/react@18";
import htm from "https://esm.sh/htm@3/react";

const html = htm.bind(React.createElement);

const choices = [
  {
    id: "hardware",
    eyebrow: "Track 01",
    title: "Vimalraj as an ECE Enthusiast",
    subtitle: "VLSI, RTL design, digital systems, communication protocols, and hardware-focused engineering.",
    points: [
      "Explore Verilog, VHDL, LTSpice, timing-aware work, and NoC security projects.",
      "See the hardware resume, chip-design interests, and VLSI-oriented academic profile.",
    ],
  },
  {
    id: "software",
    eyebrow: "Track 02",
    title: "Vimalraj in Software",
    subtitle: "Full-stack delivery, backend systems, frontend engineering, testing, and product execution.",
    points: [
      "Explore Amazon SDE work, Spring Boot development, React integration, and ML projects.",
      "See the software resume, engineering strengths, and product-minded project experience.",
    ],
  },
];

export function LandingChoice({ onSelect }) {
  return html`
    <section className="landing-shell">
      <div className="landing-backdrop landing-backdrop-left"></div>
      <div className="landing-backdrop landing-backdrop-right"></div>

      <div className="landing-header">
        <span className="brand landing-brand">VM</span>
        <p className="landing-kicker">Choose the side of Vimalraj you want to explore</p>
        <h1 className="landing-title">Two paths. One builder.</h1>
        <p className="landing-summary">
          Start with the identity you want to see first. The portfolio opens into a focused experience built around that track.
        </p>
      </div>

      <div className="choice-grid">
        ${choices.map(
          (choice) => html`
            <button
              key=${choice.id}
              type="button"
              className=${`choice-card ${choice.id === "hardware" ? "choice-hardware" : "choice-software"}`}
              onClick=${() => onSelect(choice.id)}
            >
              <span className="choice-eyebrow">${choice.eyebrow}</span>
              <h2>${choice.title}</h2>
              <p className="choice-subtitle">${choice.subtitle}</p>
              <ul className="choice-points">
                ${choice.points.map((point) => html`<li key=${point}>${point}</li>`)}
              </ul>
              <span className="choice-cta">Enter this portfolio</span>
            </button>
          `
        )}
      </div>
    </section>
  `;
}
