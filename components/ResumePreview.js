import React from "https://esm.sh/react@18";
import htm from "https://esm.sh/htm@3/react";

const html = htm.bind(React.createElement);

export function ResumePreview({ resume }) {
  return html`
    <div>
      <div className="resume-frame">
        <iframe title="Resume preview" src=${resume}></iframe>
      </div>
      <p className="resume-help">
        If the preview does not load in your browser, use the download button above after starting the local server with <code>npm start</code>.
      </p>
    </div>
  `;
}
