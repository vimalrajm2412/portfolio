import React from "https://esm.sh/react@18";
import htm from "https://esm.sh/htm@3/react";

const html = htm.bind(React.createElement);

export function SectionPanel({ kicker, title, className = "", children }) {
  return html`
    <section className=${`panel ${className}`.trim()}>
      <div className="section-heading">
        <p className="section-kicker">${kicker}</p>
        <h2>${title}</h2>
      </div>
      ${children}
    </section>
  `;
}
