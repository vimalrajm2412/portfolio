import React from "https://esm.sh/react@18";
import htm from "https://esm.sh/htm@3/react";

const html = htm.bind(React.createElement);

export function PortfolioHero({ track, data, runtimeNote, onBack }) {
  return html`
    <header className="hero">
      <nav className="topbar">
        <div className="topbar-left">
          <span className="brand">VM</span>
          <button type="button" className="back-link" onClick=${onBack}>
            Back to selection
          </button>
        </div>
        <div className="contact-row">
          <a href="tel:+916369563650">+91 63695 63650</a>
          <a href="mailto:vimalrajm2412@gmail.com">vimalrajm2412@gmail.com</a>
        </div>
      </nav>

      <div className="hero-grid">
        <section className="hero-copy">
          ${
            runtimeNote
              ? html`<div className="runtime-note">${runtimeNote}</div>`
              : null
          }
          <p className="eyebrow">Portfolio</p>
          <h1>Vimalraj M</h1>
          <p className="track-badge">
            ${track === "hardware" ? "ECE / Hardware Track" : "Software Track"}
          </p>
          <p className="hero-role">${data.role}</p>
          <p className="hero-summary">${data.summary}</p>

          <div className="hero-actions">
            <a className="primary-btn" href=${data.resume} download>
              Download Resume
            </a>
            <a className="secondary-btn" href=${data.profileLink} target="_blank" rel="noreferrer">
              ${data.profileLabel}
            </a>
          </div>
        </section>

        <aside className="hero-card">
          <p className="card-kicker">Now showing</p>
          <h2>${data.trackTitle}</h2>
          <ul className="highlight-list">
            ${data.highlights.map((item) => html`<li key=${item}>${item}</li>`)}
          </ul>
        </aside>
      </div>
    </header>
  `;
}
