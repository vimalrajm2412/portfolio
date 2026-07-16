export function EntryCard({ entry, variant }) {
  const subtitle = entry.org || entry.meta;

  return (
    <article className={`entry-card interactive-card ${variant === "project" ? "project-card" : ""}`.trim()}>
      <div className="entry-topline">
        {entry.label ? <span className="entry-label">{entry.label}</span> : null}
      </div>
      <div className="entry-header">
        <div>
          <h3>{entry.title}</h3>
          <p className="entry-subtitle">{subtitle}</p>
        </div>
        <div className="entry-meta">
          {entry.date || ""}
          {entry.location ? (
            <>
              <br />
              {entry.location}
            </>
          ) : null}
        </div>
      </div>

      {entry.description ? <p>{entry.description}</p> : null}

      {entry.points ? (
        <ul className="bullet-points">
          {entry.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
