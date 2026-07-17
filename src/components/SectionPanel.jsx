export function SectionPanel({ kicker, title, className = "", children }) {
  return (
    <section className={`panel ${className}`.trim()}>
      <div className="section-heading">
        {kicker && <p className="eyebrow">{kicker}</p>}
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}