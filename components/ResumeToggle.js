import React from "https://esm.sh/react@18";
import htm from "https://esm.sh/htm@3/react";

const html = htm.bind(React.createElement);

export function ResumeToggle({ selectedTrack, onTrackChange }) {
  const tracks = [
    { id: "software", label: "Software Profile" },
    { id: "hardware", label: "Hardware Profile" },
  ];

  return html`
    <div className="toggle-panel">
      <p className="toggle-label">Choose what to explore first</p>
      <div className="toggle-buttons" role="tablist" aria-label="Resume view selector">
        ${tracks.map(
          (track) => html`
            <button
              key=${track.id}
              className=${`toggle-button ${selectedTrack === track.id ? "active" : ""}`}
              data-track=${track.id}
              type="button"
              onClick=${() => onTrackChange(track.id)}
            >
              ${track.label}
            </button>
          `
        )}
      </div>
    </div>
  `;
}
