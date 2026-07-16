import React from "https://esm.sh/react@18";
import htm from "https://esm.sh/htm@3/react";

const html = htm.bind(React.createElement);

export function EntryCard({ entry, variant }) {
  return html`
    <article className="entry-card">
      <div className="entry-header">
        <div>
          <h3>${entry.title}</h3>
          <p className="entry-subtitle">${entry.org || entry.meta}</p>
        </div>
        <div className="entry-meta">
          ${entry.date || ""}
          ${entry.location ? html`<br />${entry.location}` : null}
        </div>
      </div>

      ${
        variant === "experience"
          ? html`
              <ul className="bullet-points">
                ${entry.points.map((point) => html`<li key=${point}>${point}</li>`)}
              </ul>
            `
          : html`<p>${entry.description}</p>`
      }
    </article>
  `;
}
