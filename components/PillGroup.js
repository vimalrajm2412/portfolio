import React from "https://esm.sh/react@18";
import htm from "https://esm.sh/htm@3/react";

const html = htm.bind(React.createElement);

export function PillGroup({ title, items }) {
  return html`
    <div className="pill-block">
      <h3>${title}</h3>
      <div className="pill-row">
        ${items.map((item) => html`<span className="pill" key=${item}>${item}</span>`)}
      </div>
    </div>
  `;
}
