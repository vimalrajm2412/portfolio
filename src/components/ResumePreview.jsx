export function ResumePreview({ resume }) {
  return (
    <div className="resume-layout">
      <div className="resume-actions">
        <a className="primary-btn" href={resume} download>
          Download Resume
        </a>
        <a className="secondary-btn" href={resume} target="_blank" rel="noreferrer">
          Open Resume
        </a>
      </div>
      <div className="resume-frame">
        <iframe title="Resume preview" src={resume} loading="lazy"></iframe>
      </div>
    </div>
  );
}
