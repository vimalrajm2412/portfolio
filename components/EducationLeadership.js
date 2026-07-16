import React from "https://esm.sh/react@18";
import htm from "https://esm.sh/htm@3/react";

const html = htm.bind(React.createElement);

export function EducationLeadership({ education, roles }) {
  return html`
    <div>
      <div className="info-card">
        <h3>Education</h3>
        <div className="education-title">${education.school}</div>
        <div className="education-subtitle">${education.degree}</div>
        <div className="education-meta">${education.meta}</div>
      </div>

      <div className="info-card">
        <h3>Positions of responsibility</h3>
        <ul className="simple-list">
          ${roles.map((role) => html`<li key=${role}>${role}</li>`)}
        </ul>
      </div>
    </div>
  `;
}
