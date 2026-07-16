export function PillGroup({ title, items }) {
  return (
    <div className="pill-block">
      <h3>{title}</h3>
      <div className="pill-row">
        {items.map((item) => (
          <span className="pill" key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
